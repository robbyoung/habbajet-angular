import { Component } from "@angular/core";
import * as _ from 'lodash';
import { BudgetService } from "../../../../services/budget.service";

@Component({
    selector: "money-display",
    templateUrl: "views/habbajet-tab-view/budget-tab/money-display/money-display.html",
    styleUrls: ["views/habbajet-tab-view/budget-tab/money-display/money-display.css"]
})

export class MoneyDisplayComponent {
    public totalAmountString: {
        text: string;
    };

    constructor(private budgetService: BudgetService) {}

    ngOnInit() {
        this.totalAmountString = this.budgetService.getTotalAmountString();
    }
}