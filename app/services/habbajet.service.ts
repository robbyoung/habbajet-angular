import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BudgetService } from './budget.service';
import { CheckboxService, Checkmark, Day, HabbajetCheckbox } from './checkbox.service';
import { ImageService, ImageState } from './images.service';
import { SavingService } from './saving.service';
import { TabService } from './tab.service';

export enum ButtonImages {
    Positive = '~/images/checkboxes/1false.png',
    Negative = '~/images/checkboxes/2false.png',
    PositiveSelected = '~/images/checkboxes/1false.png',
    NegativeSelected = '~/images/checkboxes/2false.png',
    PositiveIgnored = '~/images/checkboxes/0false.png',
    NegativeIgnored = '~/images/checkboxes/0false.png',
}

export interface HabbajetInfo  {
    expectedPayout: string;
    streak: number;
    value: number;
    factor: number;
    slack: number;
    best: number;
    expectedPayoutUpdateCallback?: () => void;
}

export interface HabbajetButtons {
    positiveSrc: string;
    negativeSrc: string;
    locked: boolean;
}

export class Habbajet {
    public id: string;
    public image: ImageState;
    public buttons: HabbajetButtons;

    constructor(public name: string, public state: number, public color: string,
                public info: HabbajetInfo, public checkboxes: HabbajetCheckbox[]) {
        this.image = new ImageState(state, color);
        this.id = Math.random() * 1000000 + '';
        this.buttons = {
            positiveSrc: ButtonImages.Positive,
            negativeSrc: ButtonImages.Negative,
            locked: false,
        };
    }
}

@Injectable()
export class HabbajetService {
    public habbajetList: Habbajet[];
    private numDeleted: number;

    constructor(private imageService: ImageService, private checkboxService: CheckboxService,
                private tabService: TabService, private budgetService: BudgetService,
                private savingService: SavingService) {
        this.habbajetList = [];
        this.savingService.loadHabbajetList(this);
        this.tabService.initialiseTabs(_.map(this.habbajetList, (habbajet: Habbajet) => habbajet.id));
        this.savingService.saveHabbajetList(this.habbajetList);
        this.numDeleted = 0;
        this.budgetService.onPurchaseCallback = () => {
            _.each(this.habbajetList, (habbajet) => {
                this.budgetService.setExpectedPayout(habbajet.info, habbajet.checkboxes);
            });
        };
    }

    public habbajetExists(id: string): boolean {
        const match = _.find(this.habbajetList, (habbajet: Habbajet) => {
            return habbajet.id === id;
        });
        return match !== undefined;
    }

    public getHabbajetCount(): number {
        return this.habbajetList.length;
    }

    public getHabbajetName(id: string): string {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).name;
        } else {
            return 'To Remove';
        }
    }

    public getHabbajetImage(id: string): ImageState {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).image;
        } else {
            return undefined;
        }
    }

    public getHabbajetInfo(id: string): HabbajetInfo {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).info;
        } else {
            return undefined;
        }
    }

    public getHabbajetColor(id: string): string {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).color;
        } else {
            return undefined;
        }
    }

    public getHabbajetCheckboxes(id: string): HabbajetCheckbox[] {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).checkboxes;
        } else {
            return undefined;
        }
    }

    public getHabbajetButtons(id: string): HabbajetButtons {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).buttons;
        } else {
            return undefined;
        }
    }

    public evolve(id: string) {
        if (this.habbajetExists(id)) {
            this.imageService.evolve(this.getHabbajet(id).image);
            this.savingService.saveHabbajetList(this.habbajetList);
        }
    }

    public action(id: string) {
        if (this.habbajetExists(id)) {
            this.imageService.action(this.getHabbajet(id).image);
        }
    }

    public selectCheckbox(id: string) {
        if (this.habbajetExists(id)) {
            const habbajet = this.getHabbajet(id);
            this.setButtonImages(habbajet);
        }
    }

    public setCheckmark(id: string, checkmark: Checkmark): boolean {
        if (this.habbajetExists(id)) {
            const habbajet = this.getHabbajet(id);
            if (habbajet.image.action !== 't') {
                const activeCheckbox = _.find(habbajet.checkboxes, (c: HabbajetCheckbox) => c.active);
                if (activeCheckbox !== undefined) {
                    activeCheckbox.checkmark = checkmark;
                    this.budgetService.setExpectedPayout(habbajet.info, habbajet.checkboxes);
                    this.updateBudgetIfNecessary(habbajet);
                    this.updateStreak(habbajet.info, habbajet.checkboxes, false);
                    this.savingService.saveHabbajetList(this.habbajetList);
                    return true;
                }
            }
        }
        return false;
    }

    public newHabbajet(name: string, value: number, factor: number, slack: number, color: string) {

        const checkboxes = this.checkboxService.getCurrentWeek();

        const info: HabbajetInfo = {
            expectedPayout: '',
            streak: 0,
            best: 0,
            value,
            factor,
            slack,
        };

        this.budgetService.setExpectedPayout(info, checkboxes);
        const habbajet = new Habbajet(name, 0, color, info, checkboxes);
        this.setButtonImages(habbajet);
        this.habbajetList.push(habbajet);
        this.tabService.addHabbajetTab(habbajet.id);
        this.savingService.saveHabbajetList(this.habbajetList);
    }

    public newHabbajetFromSave(name: string, state: number, value: number, factor: number, slack: number, color: string,
                               streak: number, checkboxes: HabbajetCheckbox[], startOfWeek: string, best: number) {

        const info: HabbajetInfo = {
            streak,
            best,
            value,
            factor,
            slack,
            expectedPayout: '',
        };

        let stateToUse = state;
        let checkboxesToUse: HabbajetCheckbox[];
        if (this.checkboxService.isCurrentWeek(startOfWeek)) {
            checkboxesToUse = checkboxes;
        } else {
            const numUnmarked = _.filter(checkboxes, (checkbox: HabbajetCheckbox) => {
                return checkbox.checkmark === Checkmark.None;
            }).length;
            if (numUnmarked > 0) {
                this.budgetService.addToBudgetWithHabbajet(info, checkboxes);
            }
            this.updateStreak(info, checkboxes, true);
            checkboxesToUse = this.checkboxService.getCurrentWeek();
            stateToUse = 0;
        }

        this.budgetService.setExpectedPayout(info, checkboxesToUse);
        const habbajet = new Habbajet(name, stateToUse, color, info, checkboxesToUse);
        this.habbajetList.push(habbajet);
        this.setButtonImages(habbajet);
    }

    public updateButtonImages(id: string) {
        this.setButtonImages(this.getHabbajet(id));
    }

    public deleteHabbajet(id: string) {
        if (this.habbajetExists(id)) {
            const habbajetIndex = _.findIndex(this.habbajetList, (habbajet) => {
                return habbajet.id === id;
            });
            this.habbajetList.splice(habbajetIndex, 1);
            this.savingService.saveHabbajetList(this.habbajetList);
            this.tabService.removeHabbajetTab(habbajetIndex + 1);
        }
    }

    public updateStreak(info: HabbajetInfo, checkboxes: HabbajetCheckbox[], includeUnmarked: boolean) {
        let slackLeft = info.slack;
        let incrementStreak: boolean;
        let streakReset: boolean = false;
        _.each (checkboxes, (checkbox: HabbajetCheckbox) => {
            if (checkbox.checkmark === Checkmark.Positive) {
                if (streakReset) {
                    info.streak++;
                } else {
                    incrementStreak = true;
                }
            } else if (checkbox.checkmark === Checkmark.Negative || includeUnmarked) {
                slackLeft--;
                if (slackLeft < 0) {
                    incrementStreak = false;
                    info.streak = 0;
                    streakReset = true;
                } else {
                    if (streakReset) {
                        info.streak++;
                    } else {
                        incrementStreak = true;
                    }
                }
            }
        });

        if (incrementStreak) {
            info.streak++;

            if (info.best < info.streak) {
                info.best = info.streak;
            }
        }
    }

    private getHabbajet(id: string) {
        return _.find(this.habbajetList, (habbajet: Habbajet) => {
            return habbajet.id === id;
        });
    }

    private resetImageState(habbajet: Habbajet) {
        if (habbajet && habbajet.image) {
            this.imageService.reset(habbajet.image);
        }
    }

    private updateBudgetIfNecessary(habbajet: Habbajet) {
        const checkboxes = habbajet.checkboxes;
        if (_.every(checkboxes, (c: HabbajetCheckbox) => c.checkmark !== Checkmark.None)) {
            this.resetImageState(habbajet);
            this.budgetService.addToBudgetWithHabbajet(habbajet.info, checkboxes);
        }
    }

    private setButtonImages(habbajet: Habbajet) {
        const buttons = habbajet.buttons;
        let activeIndex: number;
        const selectedCheckbox = _.find(habbajet.checkboxes, (c: HabbajetCheckbox, index) => {
            if (c.active) {
                activeIndex = index;
            }
            return c.active;
        });

        if (activeIndex > 0 && habbajet.checkboxes[activeIndex - 1].checkmark === Checkmark.None) {
            buttons.locked = true;
            buttons.positiveSrc = ButtonImages.PositiveIgnored;
            buttons.negativeSrc = ButtonImages.NegativeIgnored;
        } else {
            buttons.locked = selectedCheckbox.checkmark !== Checkmark.None;

            switch (selectedCheckbox.checkmark) {
                case Checkmark.Positive:
                    buttons.positiveSrc = ButtonImages.PositiveSelected;
                    buttons.negativeSrc = ButtonImages.NegativeIgnored;
                    break;
                case Checkmark.Negative:
                    buttons.positiveSrc = ButtonImages.PositiveIgnored;
                    buttons.negativeSrc = ButtonImages.NegativeSelected;
                    break;
                default:
                    buttons.positiveSrc = ButtonImages.Positive;
                    buttons.negativeSrc = ButtonImages.Negative;
            }
        }
    }
}
