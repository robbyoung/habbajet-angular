import { Component } from "@angular/core";
import * as _ from 'lodash';
import { BudgetService } from "../../../../services/budget.service";
import * as dialogs from 'ui/dialogs';
import { DialogService } from "../../../../services/dialog.service";

@Component({
    selector: "new-purchase",
    templateUrl: "views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.html",
    styleUrls: ["views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.css"]
})

export class NewPurchaseComponent {

    constructor(private budgetService: BudgetService, private dialogService: DialogService) {}

    ngOnInit() {}

    public onNewPurchaseTap() {
        // dialogs.prompt("What did you purchase?")
        // .then((name) => {
        //     if(name.result) {
        //         dialogs.prompt("How much did it cost?")
        //         .then((cost) => {
        //             if(cost.result) {
        //                 this.budgetService.makePurchase(name.text, _.toNumber(cost.text));
        //             }
        //         });
        //     }
        // });

        this.dialogService.newPurchaseDialog();
        
    }
}