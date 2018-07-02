import { Injectable } from "@angular/core";
import * as frame from 'ui/frame';
import { NewPurchaseModalComponent } from "../views/modals/new-purchase-modal/new-purchase-modal.component";
import { StackLayout } from "ui/layouts/stack-layout";
import { TextBase } from "tns-core-modules/ui/text-base/text-base";

@Injectable()
export class DialogService {
    private rootView: StackLayout;

    constructor() {
        setTimeout(() => {
            this.rootView = frame.topmost().currentPage.getViewById('RootView');
            console.log(this.rootView);
        }, 1000);
    }

    public newPurchaseDialog() {
        const purchaseDialog = new StackLayout();
        purchaseDialog.width = 100;
        purchaseDialog.height = 100;
        purchaseDialog.backgroundColor = '#999999';
        purchaseDialog.className = 'modal';
        // purchaseDialog.
        this.rootView.addChild(purchaseDialog);
        this.rootView.eachChild((c) => {
            console.log(c);
            return true;
        });
    }
}
