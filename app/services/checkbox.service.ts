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
    moment: Moment.Moment;
    active: boolean;
    dateName: string;
    day: Day;
    checkmark: Checkmark,
}

@Injectable()
export class CheckboxService {

    constructor() {}

    public getCurrentWeek(): HabbajetCheckbox[] {
        const weekOfCheckboxes: HabbajetCheckbox[] = [];
        let currentDay: Moment.Moment = Moment().startOf('week');
        let today: Moment.Moment = Moment().startOf('day');
        for(let day = Day.Sunday; day <= Day.Saturday; day++) {
            weekOfCheckboxes.push({
                locked: false,
                moment: currentDay.clone(),
                active: currentDay.valueOf() === today.valueOf(),
                dateName: currentDay.format('dddd Do MMM'),
                day,
                checkmark: Checkmark.None,
            });
            currentDay.add(1, 'days');
        }
        return weekOfCheckboxes;
    }

    public isCurrentWeek(startOfWeekInQuestion: string): boolean {
        let startOfCurrentWeek = Moment().startOf('week');
        if(startOfCurrentWeek.format('dddd Do MMM') !== startOfWeekInQuestion) {
            return false;
        } else {
            return true;
        }
    }
}