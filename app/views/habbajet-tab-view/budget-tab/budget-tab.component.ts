import { Component } from "@angular/core";
import * as _ from 'lodash';
import { BudgetService, BudgetTabRow } from "../../../services/budget.service";

@Component({
    selector: "budget-tab",
    templateUrl: "views/habbajet-tab-view/budget-tab/budget-tab.html",
    styleUrls: ["views/habbajet-tab-view/budget-tab/budget-tab.css"]
})

export class BudgetTabComponent {
    public purchases: BudgetTabRow[];
    public purchaseLengthObject: any;

    constructor(private budgetService: BudgetService) {}

    ngOnInit() {
        this.purchases = this.budgetService.getPurchases();
        this.purchaseLengthObject = this.budgetService.purchaseLengthObject;
    }
}