import { Component } from '@angular/core';
import { DialogService } from '../../../../services/dialog.service';

@Component({
    selector: 'new-purchase',
    templateUrl: 'views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.html',
    styleUrls: ['views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.css'],
})

export class NewPurchaseComponent {

    constructor(private dialogService: DialogService) {}

    public onNewPurchaseTap() {
        this.dialogService.newPurchaseDialog();
    }
}
