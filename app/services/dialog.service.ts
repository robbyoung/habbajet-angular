import { Injectable } from "@angular/core";
import * as frame from 'ui/frame';
import { StackLayout } from "ui/layouts/stack-layout";

@Injectable()
export class DialogService {
    private modal: StackLayout;

    constructor() {
        const modalFindingInterval = setInterval(() => {
            if (frame.topmost().currentPage && frame.topmost().currentPage.getViewById('modalView')) {
                this.modal = frame.topmost().currentPage.getViewById('modalView');
                this.modal.visibility = 'collapse';
                clearInterval(modalFindingInterval);
            }
        }, 0);
    }

    public newPurchaseDialog() {
        this.fadeIn();
        setTimeout(() => {
            this.fadeOut();
        }, 2000);
    }

    private fadeIn() {
        this.modal.opacity = 0;
        this.modal.visibility = "visible";
        const fadeInterval = setInterval(() => {
            this.modal.opacity += 0.05;
            if(this.modal.opacity >= 1) {
                clearInterval(fadeInterval);
            }
        }, 5);
    }

    private fadeOut() {
        this.modal.opacity = 1;
        const fadeInterval = setInterval(() => {
            this.modal.opacity -= 0.05;
            if(this.modal.opacity <= 0) {
                this.modal.visibility = "collapse";
                clearInterval(fadeInterval);
            }
        }, 5);
    }
}
