import { Injectable } from "@angular/core";
import { HabbajetInfo } from "./habbajet.service";
import * as _ from 'lodash';
import { HabbajetCheckbox, Checkmark } from "./checkbox.service";
import { SavingService } from "./saving.service";
import * as Moment from "moment";

const NEGATIVE_BUDGET_MODIFIER = 0.9;
const MAX_PURCHASE_LIST_LENGTH = 20;
export const ABSOLUTE_DATE_FORMAT = 'Do MMMM YYYY, h:mm a';

// TODO: Make a 'show more' row;
export type BudgetTabRow = PurchaseRow;

export enum BudgetTabRowType {
    Purchase = 'purchase',
}

export interface PurchaseRow {
    rowType: BudgetTabRowType.Purchase;
    name: string;
    cost: string;
    date: number;
    relativeDateString: string;
    absoluteDateString: string;
}

@Injectable()
export class BudgetService {
    private totalAmount: number;
    private totalAmountString: {
        text: string;
    };
    private budgetTabRows: BudgetTabRow[];
    public onPurchaseCallback: () => void;

    constructor(private savingService: SavingService) {
        this.totalAmount = this.savingService.loadBudget();
        this.totalAmountString = {
            text: '',
        }
        this.budgetTabRows = this.savingService.loadPurchases();
        this.updateTotalAmountString();
        this.onPurchaseCallback = _.noop;
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
        if (this.totalAmount < 0) {
            amountToAdd *= NEGATIVE_BUDGET_MODIFIER;
        }
        this.totalAmount = this.totalAmount + amountToAdd;
        this.updateTotalAmountString();
        this.onPurchaseCallback();
    }

    public setExpectedPayout(info: HabbajetInfo, checkboxes: HabbajetCheckbox[]) {
        let expectedPayout = info.value;
        let oldPayout = info.expectedPayout;
        let slackDaysLeft = info.slack;
        let penalty = info.factor;
        _.each(checkboxes, (checkbox) => {
            if(checkbox.checkmark === Checkmark.Negative) {
                if(slackDaysLeft > 0) {
                    slackDaysLeft--;
                } else {
                    expectedPayout = expectedPayout / penalty;
                }
            }
        });
        if (this.totalAmount < 0) {
            expectedPayout *= NEGATIVE_BUDGET_MODIFIER;
        }
        info.expectedPayout = this.formatMoney(expectedPayout);
        if (info.expectedPayout !== oldPayout && info.expectedPayoutUpdateCallback) {
            info.expectedPayoutUpdateCallback();
        }
    }

    public makePurchase(name: string, cost: number) {
        const date = Moment().unix();

        const newPurchase: PurchaseRow = {
            rowType: BudgetTabRowType.Purchase,
            name,
            cost: this.formatMoney(cost),
            date,
            relativeDateString: Moment.unix(date).calendar(),
            absoluteDateString: Moment.unix(date).format("DD/MM/YY"),
        };

        this.budgetTabRows.unshift(newPurchase);
        if(this.budgetTabRows.length > MAX_PURCHASE_LIST_LENGTH) {
            this.budgetTabRows.pop();
        }
        
        this.totalAmount = this.totalAmount - cost;
        this.updateTotalAmountString();

        this.onPurchaseCallback();
        this.savePurchases();
    }

    public getPurchases(): BudgetTabRow[] {
        return this.budgetTabRows;
    }

    public correctPurchase(date: number, newName: string, newCost: string) {
        const purchase: PurchaseRow = _.find(this.budgetTabRows, (row) => {
            return row.date === date;
        });
        const newCostNumber = _.toNumber(newCost);
        const oldCostNumber = _.toNumber(purchase.cost.substring(1));

        this.totalAmount += oldCostNumber - newCostNumber;
        this.updateTotalAmountString();

        purchase.name = newName;
        purchase.cost = this.formatMoney(newCostNumber);

        if (purchase.cost === '$0.00') {
            this.budgetTabRows = _.filter(this.budgetTabRows, (row) => {
                return row.date !== date;
            });
        }
        this.onPurchaseCallback();
        this.savePurchases();
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

    private isPurchaseRow(row: BudgetTabRow): row is PurchaseRow {
        return row.rowType === BudgetTabRowType.Purchase;
    }

    private savePurchases() {
        this.savingService.savePurchases(_.filter(this.budgetTabRows, (row: BudgetTabRow) => {
            return this.isPurchaseRow(row);
        }) as PurchaseRow[]);
    }
}
