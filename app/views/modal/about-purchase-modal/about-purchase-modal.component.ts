import { Component } from "@angular/core";
import { DialogService } from "../../../services/dialog.service";
import { PurchaseRow } from "../../../services/budget.service";

@Component({
    selector: "about-purchase-modal",
    templateUrl: "views/modal/about-purchase-modal/about-purchase-modal.html",
    styleUrls: ["views/modal/about-purchase-modal/about-purchase-modal.css"]
})

export class AboutPurchaseModalComponent {
    public purchaseName: string;
    public purchaseCost: string;
    public purchaseDate: string;

    constructor (private dialogService: DialogService) {
        this.dialogService.onAboutPurchasePopup = (purchase: PurchaseRow) => { this.onPopup(purchase); };
    }

    public onPopup(purchase: PurchaseRow) {
        this.purchaseName = purchase.name;
        this.purchaseCost = purchase.cost;
        this.purchaseDate = purchase.absoluteDateString;
    }

    public onEditTap() {
        
    }

    public onDeleteTap() {

    }
}