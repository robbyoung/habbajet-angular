import { Component } from '@angular/core';
import { BudgetService, PurchaseRow } from '../../../services/budget.service';
import { DeletionTypes, DialogService } from '../../../services/dialog.service';
import { HabbajetService } from '../../../services/habbajet.service';

@Component({
    selector: 'deletion-modal',
    templateUrl: 'views/modal/deletion-modal/deletion-modal.html',
    styleUrls: ['views/modal/deletion-modal/deletion-modal.css',
                'app.css'],
})

export class DeletionModalComponent {
    public deletionText: string;
    public buttonClass: string;
    private purchase: PurchaseRow;
    private habbajetId: string;
    private deleteType: DeletionTypes;

    constructor(private dialogService: DialogService, private budgetService: BudgetService,
                private habbajetService: HabbajetService) {
        this.deleteType = this.dialogService.typeOfDeletion;
        if (this.deleteType === DeletionTypes.Purchase) {
            this.deletionText = 'This will permanently delete the purchase.';
            this.buttonClass = 'button red';
        } else {
            this.habbajetId = this.dialogService.activeHabbajetId;
            this.deletionText = 'This will permanently delete the habbajet.';
            this.buttonClass = 'button ' + this.habbajetService.getHabbajetColor(this.habbajetId);
        }
        this.purchase = dialogService.activePurchase;
    }

    public onConfirmTap() {
        if (this.deleteType === DeletionTypes.Purchase) {
            this.purchase.cost = '$0.00';
            this.budgetService.correctPurchase(this.purchase.date, '', '0');
        } else {
            this.habbajetService.deleteHabbajet(this.habbajetId);
        }
        this.dialogService.fadeOut();
    }

    public onCancelTap() {
        this.dialogService.fadeOut();
    }
}
