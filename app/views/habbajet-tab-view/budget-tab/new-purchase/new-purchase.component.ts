import { Component } from "@angular/core";
import * as _ from 'lodash';
import * as dialogs from 'tns-core-modules/ui/dialogs/dialogs';
import { ValidationService } from "../../../../services/validation.service";

@Component({
    selector: "new-purchase",
    templateUrl: "views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.html",
    styleUrls: ["views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.css"]
})

export class NewPurchaseComponent {

    constructor(private validationService: ValidationService) {}

    ngOnInit() {}

    public onNewPurchaseTap() {
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
        const promptResponse = await dialogs.prompt("What did you purchase?");

        if(!promptResponse.result) {
            return undefined;
        }
                
        const errorMessage = this.validationService.validatePurchaseName(promptResponse.text);
        if (errorMessage) {
            this.showErrorMessage(errorMessage);
            return undefined;
        }
        
        return promptResponse.text;
    }

    private async readPurchaseCost() {
        const promptResponse = await dialogs.prompt("How much did it cost?");

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