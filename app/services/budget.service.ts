import { Injectable } from "@angular/core";
import * as saveObject from 'application-settings';
import { HabbajetService, HabbajetInfo } from "./habbajet.service";
import * as _ from 'lodash';
import { HabbajetCheckbox, Checkmark } from "./checkbox.service";
import { SavingService } from "./saving.service";

export interface PurchaseRecord {
    name: string;
    cost: string;
}

@Injectable()
export class BudgetService {
    private totalAmount: number;
    private totalAmountString: {
        text: string;
    };
    private purchases: PurchaseRecord[];

    constructor(private savingService: SavingService) {
        this.totalAmount = this.savingService.loadBudget();
        this.totalAmountString = {
            text: '',
        }
        this.purchases = this.savingService.loadPurchases();
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

    public makePurchase(name: string, cost: number) {
        if(!this.validateCost(cost)) {
            return;
        }
        this.purchases.push({
            name,
            cost: this.formatMoney(cost),
        });
        this.totalAmount = this.totalAmount - cost;
        this.updateTotalAmountString();
        this.savingService.savePurchases(this.purchases);
    }

    private validateCost(cost: number): boolean {
        return isFinite(cost) && cost > 0;
    }

    public getPurchases(): PurchaseRecord[] {
        return this.purchases;
    }

    private formatMoney(moneyNumber: number): string {
        if (moneyNumber >= 0) {
            return '$' + moneyNumber.toFixed(2);
        } else {
            return '-$' + (-1 * moneyNumber).toFixed(2);
        }
    }

    private updateTotalAmountString() {
        this.totalAmountString.text = this.formatMoney(this.totalAmount);
        this.savingService.saveBudget(this.totalAmount);
    }

}
