import { Injectable } from '@angular/core';
import * as application from 'application';
import * as frame from 'ui/frame';
import { StackLayout } from 'ui/layouts/stack-layout';
import { PurchaseRow } from './budget.service';

export enum ModalTypes {
    None = 'none',
    NewPurchase = 'newPurchase',
    AboutPurchase = 'aboutPurchase',
    DeletePurchase = 'deletePurchase',
}

@Injectable()
export class DialogService {
    public modalStateObject: { type: ModalTypes };
    public activePurchase: PurchaseRow;

    private modalBackground: StackLayout;
    private modalForeground: StackLayout;

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
        this.modalStateObject = { type: ModalTypes.None };
        this.prayToAngular();
    }

    public newPurchaseDialog() {
        this.modalStateObject.type = ModalTypes.NewPurchase;
        this.fadeIn();
    }

    public aboutPurchaseDialog(purchase: PurchaseRow) {
        this.activePurchase = purchase;
        this.modalStateObject.type = ModalTypes.AboutPurchase;
        this.fadeIn();
    }

    public deletePurchaseDialog() {
        this.modalStateObject.type = ModalTypes.DeletePurchase;
    }

    public fadeIn() {
        this.setBackButtonCallback();
        this.modalBackground.opacity = 0;
        this.modalForeground.opacity = 0;
        this.modalBackground.visibility = 'visible';
        this.modalForeground.visibility = 'visible';
        const fadeInterval = setInterval(() => {
            this.modalForeground.opacity += 0.04;
            this.modalBackground.opacity += 0.02;
            if (this.modalForeground.opacity >= 1) {
                clearInterval(fadeInterval);
            }
        }, 2);
    }

    public fadeOut() {
        this.removeBackButtonCallback();
        this.modalBackground.opacity = 0.5;
        this.modalForeground.opacity = 1;
        const fadeInterval = setInterval(() => {
            this.modalForeground.opacity -= 0.04;
            this.modalBackground.opacity -= 0.02;
            if (this.modalForeground.opacity <= 0) {
                this.modalStateObject.type = ModalTypes.None;
                this.modalBackground.visibility = 'collapse';
                this.modalForeground.visibility = 'collapse';
                clearInterval(fadeInterval);
            }
        }, 2);
    }

    public setBackButtonCallback() {
        application.android.on(application.AndroidApplication.activityBackPressedEvent,
            (args: application.AndroidActivityBackPressedEventData) => {
            args.cancel = true;
            this.fadeOut();
        });
    }

    public removeBackButtonCallback() {
        application.android.removeEventListener(application.AndroidApplication.activityBackPressedEvent);
    }

    public prayToAngular() {
        setInterval(() => {
            this.modalStateObject.type = this.modalStateObject.type;
        }, 10);
    }
}
