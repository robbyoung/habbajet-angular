import { Injectable } from "@angular/core";
import * as saveObject from 'application-settings';
import { HabbajetService, HabbajetInfo } from "./habbajet.service";
import * as _ from 'lodash';
import { HabbajetCheckbox, Checkmark } from "./checkbox.service";

@Injectable()
export class BudgetService {
    private totalAmount: number;
    private totalAmountString: {
        text: string;
    };

    constructor() {
        this.totalAmount = 0;
        this.totalAmountString = {
            text: '',
        }
        this.updateTotalAmountString();
    }

    public getTotalAmountString(){
        return this.totalAmountString;
    }

    public addToBudgetWithHabbajet(info: HabbajetInfo, checkboxes: HabbajetCheckbox[]) {
        let amountToAdd = info.value;
        let slackDaysLeft = info.slack;
        let penalty = info.factor;
        _.each(checkboxes, (checkbox) => {
            if(checkbox.checkmark !== Checkmark.Positive) {
                if(slackDaysLeft > 0) {
                    slackDaysLeft--;
                } else {
                    amountToAdd = amountToAdd / penalty;
                }
            }
        });
        this.totalAmount = this.totalAmount + amountToAdd;
        this.updateTotalAmountString();
    }

    public makePurchase(name: string, amount: number) {
        _.noop();
    }

    private updateTotalAmountString() {
        if (this.totalAmount >= 0) {
            this.totalAmountString.text = '$' + this.totalAmount.toFixed(2);
        } else {
            this.totalAmountString.text = '-$' + (-1 * this.totalAmount).toFixed(2);
        }
    }

}
