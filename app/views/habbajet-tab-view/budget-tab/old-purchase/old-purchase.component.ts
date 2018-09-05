import { Component, Input } from "@angular/core";
import { BudgetTabRow, BudgetService } from "../../../../services/budget.service";
import * as dialogs from 'tns-core-modules/ui/dialogs/dialogs';
import { ValidationService } from "../../../../services/validation.service";

@Component({
    selector: "old-purchase",
    templateUrl: "views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.html",
    styleUrls: ["views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.css"]
})

export class OldPurchaseComponent {

    @Input() row: BudgetTabRow;

    constructor(private validationService: ValidationService, private budgetService: BudgetService) {}

    ngOnInit() {}

    public async onPurchaseTap() {
        const correctionNeeded = await dialogs.confirm({
            title: 'Review Purchase',
            message: `${this.row.name}\n${this.row.cost}\n${this.row.absoluteDateString}`,
            okButtonText: 'Edit',
            cancelButtonText: 'OK',
        });
        if (correctionNeeded) {
            this.onCorrectPurchaseTap();
        }
    }

    private async onCorrectPurchaseTap() {
        const newName = await this.readPurchaseName()
        if (newName) {
            const newCost = await this.readPurchaseCost()
            if (newCost) {
                this.budgetService.correctPurchase(this.row.date, newName, newCost);
            }
        }
    }

    private async readPurchaseName() {
        const promptResponse = await dialogs.prompt({
            title: 'Purchase Name',
            message: 'What did you purchase?',
            defaultText: this.row.name,
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
        
        return promptResponse.text;
    }

    private async readPurchaseCost() {
        const promptResponse = await dialogs.prompt({
            title: 'Purchase Cost',
            message: 'How much did it cost?\n(Set to 0 to delete)',
            defaultText: this.row.cost.substring(1),
            okButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
        });
        if(!promptResponse.result) {
            return undefined;
        }
                
        const errorMessage = this.validationService.validatePurchaseCost(promptResponse.text, true);
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