import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
import { Day, HabbajetCheckbox } from '../../../../services/checkbox.service';
import { HabbajetService } from '../../../../services/habbajet.service';
import { checkboxImagePrefix } from '../../../../services/images.service';

@Component({
    selector: 'habbajet-checkbox',
    templateUrl: 'views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.html',
    styleUrls: ['views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.css',
                'app.css'],
})

export class HabbajetCheckboxComponent {
    @Input() public habbajetId: string;
    public checkboxes: HabbajetCheckbox[];
    public currentDay: string;
    public checkboxImagePrefix: string;
    public colorClass: string;

    constructor(private habbajetService: HabbajetService) {
        this.checkboxImagePrefix = checkboxImagePrefix;
    }

    public ngOnInit() {
        this.checkboxes = this.habbajetService.getHabbajetCheckboxes(this.habbajetId);
        this.setCurrentDayString();
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetId);
    }

    public onCheckboxTap(day: Day) {
        _.each(this.checkboxes, (c) => {
            c.active = day === c.day;
        });
        this.setCurrentDayString();
        this.habbajetService.selectCheckbox(this.habbajetId);
    }

    public setCurrentDayString() {
        const activeCheckbox = _.find(this.checkboxes, (c: HabbajetCheckbox) => c.active);
        if (activeCheckbox !== undefined) {
            this.currentDay = activeCheckbox.dateName;
        }
    }
}
