import { Injectable } from "@angular/core";
import { ImageState, ImageService } from "./images.service";
import { HabbajetCheckbox, CheckboxService, Day, Checkmark } from "./checkbox.service";
import * as _ from 'lodash';

export interface HabbajetInfo  {
    streak: number;
}

export interface HabbajetButtons {
    locked: boolean;
}

export class Habbajet {
    public image: ImageState;
    public info: HabbajetInfo;
    public checkboxes: HabbajetCheckbox[];
    public buttons: HabbajetButtons;

    constructor(public name: string, public state: number, public color: string) {
        this.image = new ImageState(state, color);
        this.info = {
            streak: 0,
        }
        this.buttons = {
            locked: false,
        }
    }
}

@Injectable()
export class HabbajetService {
    public habbajetList: Habbajet[];

    constructor(private imageService: ImageService, private checkboxService: CheckboxService) {
        this.habbajetList = [];
        this.habbajetList.push(new Habbajet('one', 0, 'red'));
        this.habbajetList.push(new Habbajet('two', 0, 'blue'));
        this.habbajetList.push(new Habbajet('three', 0, 'green'));
        this.habbajetList.push(new Habbajet('four', 0, 'red'));
        this.habbajetList.push(new Habbajet('five', 0, 'red'));
        this.habbajetList.push(new Habbajet('six', 0, 'red'));
        //TODO: add to constructor
        _.each(this.habbajetList, (habbajet) => {
            habbajet.checkboxes = checkboxService.getCurrentWeek();
        })
    }

    public habbajetExists(index: number): boolean {
        return this.habbajetList.length > index && this.habbajetList[index] !== undefined;
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

    public setCheckmark(habbajetIndex: number, checkmark: Checkmark) {
        if(this.habbajetExists(habbajetIndex)) {
            const habbajet = this.habbajetList[habbajetIndex];
            const activeCheckbox = _.find(habbajet.checkboxes, (c: HabbajetCheckbox) => c.active);
            if(activeCheckbox !== undefined) {
                activeCheckbox.checkmark = checkmark;
            }
            this.resetCheckboxesIfNecessary(habbajet);
        }
    }

    private resetCheckboxesIfNecessary(habbajet: Habbajet) {
        const checkboxes = habbajet.checkboxes;
        if(_.every(checkboxes, (c: HabbajetCheckbox) => c.checkmark !== Checkmark.None)) {
            this.checkboxService.getNextWeek(checkboxes);
            habbajet.buttons.locked = false;
        }
    }
}
