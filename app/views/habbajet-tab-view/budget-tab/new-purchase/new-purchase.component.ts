import { Component } from "@angular/core";
import * as _ from 'lodash';
import { DialogService } from "../../../../services/dialog.service";
import { ValidationService } from "../../../../services/validation.service";

@Component({
    selector: "new-purchase",
    templateUrl: "views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.html",
    styleUrls: ["views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.css"]
})

export class NewPurchaseComponent {

    constructor(private validationService: ValidationService, private dialogService: DialogService) {}

    ngOnInit() {}

    public onNewPurchaseTap() {
        this.dialogService.newPurchaseDialog();
    }
}