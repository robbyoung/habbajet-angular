import { Component } from "@angular/core";
import { DialogService, ModalTypes } from "../../services/dialog.service";

@Component({
    selector: "modal",
    templateUrl: "views/modal/modal.html",
    styleUrls: ["views/modal/modal.css"]
})

export class ModalComponent {
    public modalTypeObject: { type: ModalTypes };
    
    constructor (dialogService: DialogService) {
        this.modalTypeObject = dialogService.modalStateObject;
    }
}