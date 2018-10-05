import { Component } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';

@Component({
    selector: 'alert-modal',
    templateUrl: 'views/modal/alert-modal/alert-modal.html',
    styleUrls: ['views/modal/alert-modal/alert-modal.css'],
})

export class AlertModalComponent {
    public title: string;
    public text: string;
    public okButtonText: string;

    constructor(private dialogService: DialogService) {
        const contents = dialogService.alertContents;
        this.title = contents.title;
        this.text = contents.text;
        this.okButtonText = contents.okButtonText;
    }

    public onSubmitTap() {
       this.dialogService.fadeOut();
    }
}
