import { Component } from '@angular/core';
import * as _ from 'lodash';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';
import * as frame from 'ui/frame';
import { BudgetService, PurchaseRow } from '../../../services/budget.service';
import { DialogService } from '../../../services/dialog.service';
import { ValidationService } from '../../../services/validation.service';

@Component({
    selector: 'edit-purchase-modal',
    templateUrl: 'views/modal/edit-purchase-modal/edit-purchase-modal.html',
    styleUrls: ['views/modal/edit-purchase-modal/edit-purchase-modal.css'],
})

export class EditPurchaseModalComponent {
    public nameField: TextField;
    public costField: TextField;
    public purchase: PurchaseRow;
    public errorMessage: string;

    constructor(private validationService: ValidationService, private dialogService: DialogService,
                private budgetService: BudgetService) {
        this.purchase = this.dialogService.activePurchase;
        this.errorMessage = '';
        const fieldFindingInterval = setInterval(() => {
            if (frame.topmost().currentPage && frame.topmost().currentPage.getViewById('purchaseCostField')) {
                this.nameField  = frame.topmost().currentPage.getViewById('purchaseNameField');
                this.costField  = frame.topmost().currentPage.getViewById('purchaseCostField');
                this.nameField.text = this.purchase.name;
                this.nameField.android.setSelection(this.nameField.text.length);
                this.costField.text = this.purchase.cost.substring(1);
                this.errorMessage = '';
                this.nameField.focus();
                clearInterval(fieldFindingInterval);
            }
        }, 0);
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
            this.budgetService.correctPurchase(this.purchase.date, nameSubmission, costSubmission);
            this.dialogService.fadeOut();
        }
    }
}
