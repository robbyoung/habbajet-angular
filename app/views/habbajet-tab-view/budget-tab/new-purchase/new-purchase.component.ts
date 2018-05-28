import { Component } from "@angular/core";
import * as _ from 'lodash';
import { BudgetService } from "../../../../services/budget.service";

@Component({
    selector: "new-purchase",
    templateUrl: "views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.html",
    styleUrls: ["views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.css"]
})

export class NewPurchaseComponent {

    constructor(private budgetService: BudgetService) {}

    ngOnInit() {
    }
}