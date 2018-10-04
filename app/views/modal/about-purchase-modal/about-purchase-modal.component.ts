import { Component } from '@angular/core';
import * as _ from 'lodash';
import { PurchaseRow } from '../../../services/budget.service';
import { DialogService } from '../../../services/dialog.service';

@Component({
    selector: 'about-purchase-modal',
    templateUrl: 'views/modal/about-purchase-modal/about-purchase-modal.html',
    styleUrls: ['views/modal/about-purchase-modal/about-purchase-modal.css'],
})

export class AboutPurchaseModalComponent {
    public purchase: PurchaseRow;
    public purchaseName: string;
    public purchaseCost: string;
    public purchaseDate: string;

    constructor(private dialogService: DialogService) {
        this.purchase = this.dialogService.activePurchase;
        this.purchaseName = this.purchase.name;
        this.purchaseCost = this.purchase.cost;
        this.purchaseDate = this.purchase.absoluteDateString;
    }

    public onEditTap() {
        this.dialogService.editPurchaseDialog();
    }

    public onDeleteTap() {
        this.dialogService.deletePurchaseDialog();
    }
}
