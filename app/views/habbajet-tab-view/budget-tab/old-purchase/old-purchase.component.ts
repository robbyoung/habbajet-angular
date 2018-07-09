import { Component, Input } from "@angular/core";
import { BudgetTabRow } from "../../../../services/budget.service";

@Component({
    selector: "old-purchase",
    templateUrl: "views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.html",
    styleUrls: ["views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.css"]
})

export class OldPurchaseComponent {

    @Input() row: BudgetTabRow;

    ngOnInit() {}
}