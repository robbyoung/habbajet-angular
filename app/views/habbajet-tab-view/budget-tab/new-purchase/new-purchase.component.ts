import { Component } from "@angular/core";
import * as _ from 'lodash';
<<<<<<< HEAD
import { BudgetService } from "../../../../services/budget.service";
import * as dialogs from 'ui/dialogs';
import { DialogService } from "../../../../services/dialog.service";
=======
import * as dialogs from 'tns-core-modules/ui/dialogs/dialogs';
import { ValidationService } from "../../../../services/validation.service";
>>>>>>> master

@Component({
    selector: "new-purchase",
    templateUrl: "views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.html",
    styleUrls: ["views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.css"]
})

export class NewPurchaseComponent {

<<<<<<< HEAD
    constructor(private budgetService: BudgetService, private dialogService: DialogService) {}
=======
    constructor(private validationService: ValidationService) {}
>>>>>>> master

    ngOnInit() {}

    public onNewPurchaseTap() {
<<<<<<< HEAD
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
=======
        this.readPurchaseName()
        .then((purchaseName) => {
            if (purchaseName) {
                this.readPurchaseCost()
                .then((purchaseCost) => {
                    if (purchaseCost) {
                        this.validationService.submitPurchase(purchaseName, purchaseCost);
                    }
                });
            }
        });
    }

    private async readPurchaseName() {
        const promptResponse = await dialogs.prompt({
            title: 'Purchase Name',
            message: 'What did you purchase?',
            okButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
        });

        if(!promptResponse.result) {
            return undefined;
        }
                
        const errorMessage = this.validationService.validatePurchaseName(promptResponse.text);
        if (errorMessage) {
            this.showErrorMessage(errorMessage);
            return undefined;
        }
>>>>>>> master
        
        return promptResponse.text;
    }

    private async readPurchaseCost() {
        const promptResponse = await dialogs.prompt({
            title: 'Purchase Cost',
            message: 'How much did it cost?',
            okButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
        });

        if(!promptResponse.result) {
            return undefined;
        }
                
        const errorMessage = this.validationService.validatePurchaseCost(promptResponse.text, false);
        if (errorMessage) {
            this.showErrorMessage(errorMessage);
            return undefined;
        }
        
        return promptResponse.text;
    }

    private showErrorMessage(errorMessage: string) {
        dialogs.alert({
            title: 'Invalid Input',
            message: errorMessage,
            okButtonText: 'OK',
        })
    }
}