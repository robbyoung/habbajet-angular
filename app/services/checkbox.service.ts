import { Injectable } from '@angular/core';
import * as Moment from 'moment';

export enum Day {
    Monday = 0,
    Tuesday = 1,
    Wednesday = 2,
    Thursday = 3,
    Friday = 4,
    Saturday = 5,
    Sunday = 6,
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
    checkmark: Checkmark;
}

@Injectable()
export class CheckboxService {

    public getCurrentWeek(): HabbajetCheckbox[] {
        const weekOfCheckboxes: HabbajetCheckbox[] = [];
        const currentDay: Moment.Moment = Moment().startOf('isoWeek');
        const today: Moment.Moment = Moment().startOf('day');
        for (let day = Day.Monday; day <= Day.Sunday; day++) {
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
        const startOfCurrentWeek = Moment().startOf('isoWeek');
        if (startOfCurrentWeek.format('dddd Do MMM') !== startOfWeekInQuestion) {
            return false;
        } else {
            return true;
        }
    }
}
