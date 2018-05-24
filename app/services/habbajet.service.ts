import { Injectable } from "@angular/core";
import { ImageState, ImageService } from "./images.service";
import { HabbajetCheckbox, CheckboxService, Day, Checkmark } from "./checkbox.service";
import * as _ from 'lodash';
import { TabService } from "./tab.service";

export interface HabbajetInfo  {
    streak: number;
    value: number;
    factor: number;
    slack: number;
}

export interface HabbajetButtons {
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
            locked: false,
        }
    }
}

@Injectable()
export class HabbajetService {
    public habbajetList: Habbajet[];

    constructor(private imageService: ImageService, private checkboxService: CheckboxService, private tabService: TabService) {
        this.habbajetList = [];
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
            habbajet.buttons.locked = habbajet.checkboxes[day].checkmark !== Checkmark.None;
        }
    }

    public setCheckmark(habbajetIndex: number, checkmark: Checkmark): boolean {
        if(this.habbajetExists(habbajetIndex)) {
            const habbajet = this.habbajetList[habbajetIndex];
            if(habbajet.image.action !== 't') {
                const activeCheckbox = _.find(habbajet.checkboxes, (c: HabbajetCheckbox) => c.active);
                if(activeCheckbox !== undefined) {
                    activeCheckbox.checkmark = checkmark;
                    // this.resetCheckboxesIfNecessary(habbajet);
                    return true;
                }
            }
        }
        return false;
    }

    private resetCheckboxesIfNecessary(habbajet: Habbajet) {
        const checkboxes = habbajet.checkboxes;
        if(_.every(checkboxes, (c: HabbajetCheckbox) => c.checkmark !== Checkmark.None)) {
            this.checkboxService.getNextWeek(checkboxes);
            habbajet.buttons.locked = false;
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
}
