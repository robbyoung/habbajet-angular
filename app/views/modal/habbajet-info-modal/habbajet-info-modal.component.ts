import { Component } from '@angular/core';
import * as _ from 'lodash';
import { DialogService } from '../../../services/dialog.service';
import { HabbajetInfo, HabbajetService } from '../../../services/habbajet.service';

@Component({
    selector: 'habbajet-info-modal',
    templateUrl: 'views/modal/habbajet-info-modal/habbajet-info-modal.html',
    styleUrls: ['views/modal/habbajet-info-modal/habbajet-info-modal.css',
                'app.css'],
})

export class HabbajetInfoModalComponent {
    public info: HabbajetInfo;
    public buttonClass: string;

    constructor(private dialogService: DialogService, private habbajetService: HabbajetService) {
        const habbajetId = this.dialogService.activeHabbajetId;
        this.info = this.habbajetService.getHabbajetInfo(habbajetId);
        this.buttonClass = 'button ' + this.habbajetService.getHabbajetColor(habbajetId);
    }

    public onEditTap() {
        this.dialogService.fadeOut();
    }

    public onDeleteTap() {
        this.dialogService.deleteHabbajetDialog();
    }
}
