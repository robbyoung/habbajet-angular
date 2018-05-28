import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { BudgetService } from "../../../../services/budget.service";

@Component({
    selector: "old-purchase",
    templateUrl: "views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.html",
    styleUrls: ["views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.css"]
})

export class OldPurchaseComponent {

    @Input() name: string;
    @Input() cost: string;

    ngOnInit() {}
}