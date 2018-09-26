import { Injectable } from "@angular/core";
import * as frame from 'ui/frame';
import { StackLayout } from "ui/layouts/stack-layout";
import { PurchaseRow } from "./budget.service";

export enum ModalTypes {
    NewPurchase = 'newPurchase',
    AboutPurchase = 'aboutPurchase',
}

@Injectable()
export class DialogService {
    private modalBackground: StackLayout;
    private modalForeground: StackLayout;
    public modalStateObject: { type: ModalTypes };

    public onNewPurchasePopup: () => void;
    public onAboutPurchasePopup: (purchase: PurchaseRow) => void;

    constructor() {
        const modalFindingInterval = setInterval(() => {
            if (frame.topmost().currentPage && frame.topmost().currentPage.getViewById('modalForeground')) {
                this.modalForeground = frame.topmost().currentPage.getViewById('modalForeground');
                this.modalBackground = frame.topmost().currentPage.getViewById('modalBackground');
                this.modalBackground.backgroundColor = '#757575';
                this.modalBackground.width = 1000;
                this.modalBackground.height = 1000;
                this.modalBackground.on('tap', () => { this.fadeOut(); });
                clearInterval(modalFindingInterval);
            }
        }, 0);
        this.modalStateObject = { type: ModalTypes.AboutPurchase };
    }

    public newPurchaseDialog() {
        this.modalStateObject.type = ModalTypes.NewPurchase;
        this.onNewPurchasePopup();
        this.fadeIn();   
    }

    public aboutPurchaseDialog(purchase: PurchaseRow) {
        this.modalStateObject.type = ModalTypes.AboutPurchase;
        this.onAboutPurchasePopup(purchase);
        this.fadeIn();   
    }

    private fadeIn() {
        this.modalBackground.opacity = 0;
        this.modalForeground.opacity = 0;
        this.modalBackground.visibility = "visible";
        this.modalForeground.visibility = "visible";
        const fadeInterval = setInterval(() => {
            this.modalForeground.opacity += 0.04;
            this.modalBackground.opacity += 0.02;
            if(this.modalForeground.opacity >= 1) {
                clearInterval(fadeInterval);
            }
        }, 5);
    }

    public fadeOut() {
        this.modalBackground.opacity = 0.5;
        this.modalForeground.opacity = 1;
        const fadeInterval = setInterval(() => {
            this.modalForeground.opacity -= 0.04;
            this.modalBackground.opacity -= 0.02;
            if(this.modalForeground.opacity <= 0) {
                this.modalBackground.visibility = "collapse";
                this.modalForeground.visibility = "collapse";
                clearInterval(fadeInterval);
            }
        }, 5);
    }
}
