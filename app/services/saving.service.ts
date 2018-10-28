import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as Moment from 'moment';
import * as saveObject from 'tns-core-modules/application-settings/application-settings';
import { ABSOLUTE_DATE_FORMAT, BudgetTabRowType, PurchaseRow } from './budget.service';
import { CheckboxService, HabbajetCheckbox } from './checkbox.service';
import { Habbajet, HabbajetInfo, HabbajetService } from './habbajet.service';
import { ImageState } from './images.service';

@Injectable()
export class SavingService {
    constructor(private checkboxService: CheckboxService) {}

    public saveHabbajetList(habbajetList: Habbajet[]) {
        this.clearHabbajetData();
        _.each(habbajetList, (habbajet, index) => {
            if (habbajet !== undefined) {
                this.saveHabbajet(habbajet.name, habbajet.info, habbajet.image, habbajet.checkboxes, index);
            }
        });
    }

    public saveHabbajet(name: string, info: HabbajetInfo, image: ImageState,
                        checkboxes: HabbajetCheckbox[], index: number) {
        saveObject.setString(`hName${index}`, name);
        saveObject.setNumber(`hState${index}`, image.state);
        saveObject.setString(`hColor${index}`, image.color);
        this.saveHabbajetInfo(info, index);
        this.saveHabbajetCheckboxes(checkboxes, index);
    }

    public loadHabbajetList(habbajetService: HabbajetService) {
        let index = 0;
        while (saveObject.hasKey(`hName${index}`)) {
            const name = saveObject.getString(`hName${index}`);
            const state = saveObject.getNumber(`hState${index}`);
            const color = saveObject.getString(`hColor${index}`);
            const streak = saveObject.getNumber(`hStreak${index}`);
            const value = saveObject.getNumber(`hValue${index}`);
            const factor = saveObject.getNumber(`hFactor${index}`);
            const slack = saveObject.getNumber(`hSlack${index}`);
            const best = saveObject.getNumber(`hBest${index}`, 0);
            const successes = saveObject.getNumber(`hSucc${index}`, 0);
            const failures = saveObject.getNumber(`hFail${index}`, 0);

            const checkboxes = this.checkboxService.getCurrentWeek();
            _.each(checkboxes, (c, i) => {
                c.checkmark = saveObject.getNumber(`hCheckbox${i}${index}`);
            });
            const startOfWeek = saveObject.getString(`hWeekStart${index}`);

            habbajetService.newHabbajetFromSave(name, state, value, factor, slack, color, streak,
                                                checkboxes, startOfWeek, best, successes, failures);

            index++;
        }
    }

    public clearHabbajetData() {
        let index = 0;
        while (saveObject.hasKey(`hName${index}`)) {
            saveObject.remove(`hName${index}`);
            saveObject.remove(`hState${index}`);
            saveObject.remove(`hColor${index}`);
            saveObject.remove(`hStreak${index}`);
            saveObject.remove(`hValue${index}`);
            saveObject.remove(`hFactor${index}`);
            saveObject.remove(`hSlack${index}`);
            saveObject.remove(`hBest${index}`);
            saveObject.remove(`hSucc${index}`);
            saveObject.remove(`hFail${index}`);

            const checkboxes = this.checkboxService.getCurrentWeek();
            _.each(checkboxes, (c, i) => {
                saveObject.remove(`hCheckbox${i}${index}`);
            });
            saveObject.remove(`hWeekStart${index}`);

            index++;
        }
    }

    public clearPurchaseData() {
        let index = 0;
        while (saveObject.hasKey(`pName${index}`)) {
            saveObject.remove(`pName${index}`);
            saveObject.remove(`pCost${index}`);
            saveObject.remove(`pDate${index}`);
            index++;
        }
    }

    public saveBudget(budget: number) {
        saveObject.setNumber('budget', budget);
    }

    public loadBudget(): number {
        if (saveObject.hasKey('budget')) {
            return saveObject.getNumber('budget');
        } else {
            return 0;
        }
    }

    public savePurchases(purchases: PurchaseRow[]) {
        this.clearPurchaseData();
        _.each(purchases, (purchase, index) => {
            saveObject.setString(`pName${index}`, purchase.name);
            saveObject.setString(`pCost${index}`, purchase.cost);
            saveObject.setNumber(`pDate${index}`, purchase.date);
        });
    }

    public loadPurchases(): PurchaseRow[] {
        let index = 0;
        const purchases: PurchaseRow[] = [];
        while (saveObject.hasKey(`pName${index}`)) {
            const date = saveObject.hasKey(`pDate${index}`) ? saveObject.getNumber(`pDate${index}`) : 0;
            purchases.push({
                rowType: BudgetTabRowType.Purchase,
                name: saveObject.getString(`pName${index}`),
                cost: saveObject.getString(`pCost${index}`),
                date,
                relativeDateString: date !== 0 ? Moment.unix(date).calendar() : '',
                absoluteDateString: date !== 0 ? Moment.unix(date).format(ABSOLUTE_DATE_FORMAT) : '',
            });
            index++;
        }
        return purchases;
    }

    private saveHabbajetInfo(info: HabbajetInfo, index: number) {
        saveObject.setNumber(`hStreak${index}`, info.streak);
        saveObject.setNumber(`hValue${index}`, info.value);
        saveObject.setNumber(`hFactor${index}`, info.factor);
        saveObject.setNumber(`hSlack${index}`, info.slack);
        saveObject.setNumber(`hStreak${index}`, info.streak);
        saveObject.setNumber(`hBest${index}`, info.best);
        saveObject.setNumber(`hSucc${index}`, info.numSuccesses);
        saveObject.setNumber(`hFail${index}`, info.numFailures);
    }

    private saveHabbajetCheckboxes(checkboxes: HabbajetCheckbox[], index: number) {
        _.each(checkboxes, (c, i) => {
            saveObject.setNumber(`hCheckbox${i}${index}`, c.checkmark);
        });
        saveObject.setString(`hWeekStart${index}`, checkboxes[0].moment.format('dddd Do MMM'));
    }

}
