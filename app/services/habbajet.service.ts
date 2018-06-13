import { Injectable } from "@angular/core";
import { ImageState, ImageService } from "./images.service";
import { HabbajetCheckbox, CheckboxService, Day, Checkmark } from "./checkbox.service";
import * as _ from 'lodash';
import { TabService } from "./tab.service";
import { BudgetService } from "./budget.service";
import { SavingService } from "./saving.service";

export enum ButtonImages {
    Positive = "~/images/checkboxes/checkboxButton1.png",
    Negative = "~/images/checkboxes/checkboxButton2.png",
    PositiveSelected = "~/images/checkboxes/checkbox1.png",
    NegativeSelected = "~/images/checkboxes/checkbox2.png",
}

export interface HabbajetInfo  {
    streak: number;
    value: number;
    factor: number;
    slack: number;
}

export interface HabbajetButtons {
    positiveSrc: string;
    negativeSrc: string;
    locked: boolean;
}

class Habbajet {
    public image: ImageState;
    public info: HabbajetInfo;
    public checkboxes: HabbajetCheckbox[];
    public buttons: HabbajetButtons;

    constructor(public name: string, public state: number, public color: string) {
        this.image = new ImageState(state, color);
        this.buttons = {
            positiveSrc: ButtonImages.Positive,
            negativeSrc: ButtonImages.Negative,
            locked: false,
        }
    }
}

@Injectable()
export class HabbajetService {
    public habbajetList: Habbajet[];

    constructor(private imageService: ImageService, private checkboxService: CheckboxService,
            private tabService: TabService, private budgetService: BudgetService, private savingService: SavingService) {
        this.habbajetList = [];
        this.savingService.loadHabbajetList(this);
    }

    public habbajetExists(index: number): boolean {
        return this.habbajetList.length > index && this.habbajetList[index] !== undefined;
    }

    public getHabbajetCount(): number {
        return this.habbajetList.length;
    }

    public getHabbajetName(index: number): string {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].name;
        } else {
            return 'To Remove';
        }
    }

    public getHabbajetImage(index: number): ImageState {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].image;
        } else {
            return undefined;
        }
    }

    public getHabbajetInfo(index: number): HabbajetInfo {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].info;
        } else {
            return undefined;
        }
    }

    public getHabbajetCheckboxes(index: number): HabbajetCheckbox[] {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].checkboxes;
        } else {
            return undefined;
        }
    }

    public getHabbajetButtons(index: number): HabbajetButtons {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].buttons;
        } else {
            return undefined;
        }
    }

    public evolve(habbajetIndex: number) {
        if(this.habbajetExists(habbajetIndex)) {
            this.imageService.evolve(this.habbajetList[habbajetIndex].image);
            this.savingService.saveHabbajetList(this.habbajetList);
        }
        
    }

    public action(habbajetIndex: number) {
        if(this.habbajetExists(habbajetIndex)) {
            this.imageService.action(this.habbajetList[habbajetIndex].image);
        }
    }

    public selectCheckbox(habbajetIndex: number, day: Day) {
        if(this.habbajetExists(habbajetIndex)) {
            const habbajet = this.habbajetList[habbajetIndex];
            this.setButtonImages(habbajet);
        }
    }

    public setCheckmark(habbajetIndex: number, checkmark: Checkmark): boolean {
        if(this.habbajetExists(habbajetIndex)) {
            const habbajet = this.habbajetList[habbajetIndex];
            if(habbajet.image.action !== 't') {
                const activeCheckbox = _.find(habbajet.checkboxes, (c: HabbajetCheckbox) => c.active);
                if(activeCheckbox !== undefined) {
                    activeCheckbox.checkmark = checkmark;
                    this.updateBudgetIfNecessary(habbajet);
                    return true;
                }
                this.savingService.saveHabbajetList(this.habbajetList);
            }
        }
        return false;
    }

    private updateBudgetIfNecessary(habbajet: Habbajet) {
        const checkboxes = habbajet.checkboxes;
        if(_.every(checkboxes, (c: HabbajetCheckbox) => c.checkmark !== Checkmark.None)) {
            this.budgetService.addToBudgetWithHabbajet(habbajet.info, checkboxes);
        }
    }

    public newHabbajet(name: string, value: number, factor: number, slack: number, color: string) {
        const habbajet = new Habbajet(name, 0, color);

        habbajet.checkboxes = this.checkboxService.getCurrentWeek();

        habbajet.info = {
            streak: 0,
            value,
            factor,
            slack,
        }

        this.habbajetList.push(habbajet);
        this.tabService.addHabbajetTab();
    }

    public newHabbajetFromSave(name: string, state: number, value: number, factor: number, slack: number, color: string,
            streak: number, checkboxes: HabbajetCheckbox[], startOfWeek: string) {
        const habbajet = new Habbajet(name, 0, color);

        habbajet.info = {
            streak,
            value,
            factor,
            slack,
        }

        if(this.checkboxService.isCurrentWeek(startOfWeek)) {
            habbajet.checkboxes = checkboxes;
            this.setButtonImages(habbajet);
        } else {
            if(_.some(checkboxes, (checkbox: HabbajetCheckbox) => {
                checkbox.checkmark === Checkmark.None;
            })) {
                this.budgetService.addToBudgetWithHabbajet(habbajet.info, checkboxes);
            };
            habbajet.checkboxes = this.checkboxService.getCurrentWeek();
        }
        
        this.habbajetList.push(habbajet);
        this.tabService.addHabbajetTab();
        this.savingService.saveHabbajetList(this.habbajetList);
    }

    public setButtonImages(habbajet: Habbajet) {
        const buttons = habbajet.buttons;
        const selectedCheckbox = _.find(habbajet.checkboxes, (c: HabbajetCheckbox) => {
            return c.active;
        });

        buttons.locked = selectedCheckbox.checkmark !== Checkmark.None;

        switch (selectedCheckbox.checkmark) {
            case Checkmark.Positive: 
                buttons.positiveSrc = ButtonImages.PositiveSelected;
                buttons.negativeSrc = ButtonImages.Negative;
                break;
            case Checkmark.Negative: 
                buttons.positiveSrc = ButtonImages.Positive;
                buttons.negativeSrc = ButtonImages.NegativeSelected;
                break;
            default: 
                buttons.positiveSrc = ButtonImages.Positive;
                buttons.negativeSrc = ButtonImages.Negative;
        }
    }
}
