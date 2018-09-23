import { Component } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { DialogService } from "../../../services/dialog.service";
import * as frame from 'ui/frame';
import {TextField} from 'ui/text-field';
import { BudgetService } from "../../../services/budget.service";
import * as _ from 'lodash';

@Component({
    selector: "new-purchase-modal",
    templateUrl: "views/modal/new-purchase-modal/new-purchase-modal.html",
    styleUrls: ["views/modal/new-purchase-modal/new-purchase-modal.css"]
})

export class NewPurchaseModalComponent {
    private nameField: TextField;
    private costField: TextField;
    public errorMessage: string;

    constructor (private validationService: ValidationService, private dialogService: DialogService, private budgetService: BudgetService) {

        const fieldFindingInterval = setInterval(() => {
            this.errorMessage = '';
            this.dialogService.onNewPurchasePopup = () => { this.onPopup(); };
            if (frame.topmost().currentPage && frame.topmost().currentPage.getViewById('newPurchaseCostField')) {
                this.nameField  = frame.topmost().currentPage.getViewById('newPurchaseNameField');
                this.costField  = frame.topmost().currentPage.getViewById('newPurchaseCostField');
                this.nameField.text = '';
                this.costField.text = '';
                clearInterval(fieldFindingInterval);
            }
        }, 0);
    }

    public onPopup() {
        this.nameField.text = '';
        this.costField.text = '';
        this.errorMessage = '';
        this.nameField.focus();
    }

    public onSubmitTap() {
        const nameSubmission = this.nameField.text;
        const costSubmission = this.costField.text;
        if (this.validationService.validatePurchaseName(nameSubmission)) {
            this.errorMessage = 'Invalid Name';
        } else if (this.validationService.validatePurchaseCost(costSubmission, false)) {
            this.errorMessage = 'Invalid Cost';
        } else {
            this.errorMessage = '';
            this.budgetService.makePurchase(nameSubmission, _.toNumber(costSubmission));
            this.dialogService.fadeOut();
        }
        
    }
}