import { Injectable } from '@angular/core';
import * as application from 'application';
import * as frame from 'ui/frame';
import { StackLayout } from 'ui/layouts/stack-layout';
import { PurchaseRow } from './budget.service';

export enum ModalTypes {
    None = 'none',
    NewPurchase = 'newPurchase',
    AboutPurchase = 'aboutPurchase',
    EditPurchase = 'editPurchase',
    Alert = 'alert',
    HabbajetInfo = 'habbajetInfo',
    Deletion = 'deletion',
}

export enum DeletionTypes {
    Habbajet = 'habbajet',
    Purchase = 'purchase',
}

@Injectable()
export class DialogService {
    public modalStateObject: { type: ModalTypes };
    public activePurchase: PurchaseRow;
    public activeHabbajetId: string;
    public alertContents: {
        title: string;
        text: string;
        okButtonText: string;
    };
    public typeOfDeletion: DeletionTypes;

    private modalBackground: StackLayout;
    private modalForeground: StackLayout;
    private fadeLock: boolean;

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
        this.fadeLock = false;
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
        this.typeOfDeletion = DeletionTypes.Purchase;
        this.modalStateObject.type = ModalTypes.Deletion;
    }

    public deleteHabbajetDialog() {
        this.typeOfDeletion = DeletionTypes.Habbajet;
        this.modalStateObject.type = ModalTypes.Deletion;
    }

    public editPurchaseDialog() {
        this.modalStateObject.type = ModalTypes.EditPurchase;
    }

    public alertDialog(title: string, text: string, okButtonText: string) {
        this.alertContents = {
            title,
            text,
            okButtonText,
        };
        this.modalStateObject.type = ModalTypes.Alert;
        this.fadeIn();
    }

    public habbajetInfoDialog(habbajetId: string) {
        this.activeHabbajetId = habbajetId;
        this.modalStateObject.type = ModalTypes.HabbajetInfo;
        this.fadeIn();
    }

    public fadeIn() {
        if (this.fadeLock) {
            return;
        }
        this.fadeLock = true;

        this.setBackButtonCallback();
        this.modalBackground.opacity = 0;
        this.modalForeground.opacity = 0;
        this.modalBackground.visibility = 'visible';
        this.modalForeground.visibility = 'visible';
        const fadeInterval = setInterval(() => {
            this.modalForeground.opacity += 0.04;
            this.modalBackground.opacity += 0.02;
            if (this.modalForeground.opacity >= 1) {
                this.fadeLock = false;
                clearInterval(fadeInterval);
            }
        }, 1);
    }

    public fadeOut() {
        if (this.fadeLock) {
            return;
        }
        this.fadeLock = true;

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
                this.fadeLock = false;
                clearInterval(fadeInterval);
            }
        }, 1);
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

    private prayToAngular() {
        setInterval(() => {
            this.modalStateObject.type = this.modalStateObject.type;
        }, 10);
    }
}
