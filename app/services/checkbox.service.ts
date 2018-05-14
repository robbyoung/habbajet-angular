import * as Moment from "moment";
import { Injectable } from "@angular/core";
import _ = require("lodash");

export enum Day {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}

export enum Checkmark {
    None = 0,
    Positive = 1,
    Negative = 2,
}

export interface HabbajetCheckbox {
    locked: boolean;
    time: string;
    active: boolean;
    dateName: string;
    day: Day;
    checkmark: Checkmark,
}

@Injectable()
export class CheckboxService {

    constructor() {}

    getCurrentWeek(): HabbajetCheckbox[] {
        const startOfThisWeek: string = Moment().startOf('week').fromNow();
        const today: string = Moment().startOf('day').fromNow();
        const weekOfCheckboxes: HabbajetCheckbox[] = [];
        for(let day = Day.Sunday; day <= Day.Saturday; day++) {
            weekOfCheckboxes.push({
                locked: false,
                time: today,
                active: false,
                dateName: 'Someday',
                day,
                checkmark: Checkmark.None,
            });
        }
        weekOfCheckboxes[0].active = true;
        return weekOfCheckboxes;
    }

    getNextWeek(checkboxes: HabbajetCheckbox[]): HabbajetCheckbox[] {
        return _.each(checkboxes, (c: HabbajetCheckbox) => {
            c.checkmark = Checkmark.None;
        });
    }

    getPreviousWeek(checkboxes: HabbajetCheckbox[]): HabbajetCheckbox[] {
        return undefined;
    }
}