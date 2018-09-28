import { Component } from "@angular/core";
import { DialogService } from "../../../services/dialog.service";
import { BudgetService, PurchaseRow } from "../../../services/budget.service";

@Component({
    selector: "delete-purchase-modal",
    templateUrl: "views/modal/delete-purchase-modal/delete-purchase-modal.html",
    styleUrls: ["views/modal/delete-purchase-modal/delete-purchase-modal.css"]
})

export class DeletePurchaseModalComponent {
    private purchase: PurchaseRow;

    constructor (private dialogService: DialogService, private budgetService: BudgetService) {
        this.dialogService.onDeletePurchasePopup = (purchase: PurchaseRow) => { this.onPopup(purchase); };
    }

    public onPopup(purchase: PurchaseRow) {
        this.purchase = purchase;
    }

    public onConfirmTap() {
        this.purchase.cost = '$0.00';
        this.budgetService.correctPurchase(this.purchase.date, '', '0');
        this.dialogService.fadeOut();
    }

    public onCancelTap() {
        this.dialogService.fadeOut();
    }
}