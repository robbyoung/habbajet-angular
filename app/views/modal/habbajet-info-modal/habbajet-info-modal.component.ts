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
    public colorClass: string;
    public message: string;

    constructor(private dialogService: DialogService, private habbajetService: HabbajetService) {
        const habbajetId = this.dialogService.activeHabbajetId;
        this.info = this.habbajetService.getHabbajetInfo(habbajetId);
        this.colorClass = this.habbajetService.getHabbajetColor(habbajetId);
        this.message = this.getInspirationalMessage();
    }

    public onEditTap() {
        this.dialogService.fadeOut();
    }

    public onDeleteTap() {
        this.dialogService.deleteHabbajetDialog();
    }

    private getInspirationalMessage(): string {
        return 'Don\'t give up!';
    }
}
