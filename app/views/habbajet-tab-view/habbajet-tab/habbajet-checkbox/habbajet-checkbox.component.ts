import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { HabbajetService } from "../../../../services/habbajet.service";
import { HabbajetCheckbox, Day } from "../../../../services/checkbox.service";
import { checkboxImagePrefix } from "../../../../services/images.service";

@Component({
    selector: "habbajet-checkbox",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.css",
                "app.css"]
})

export class HabbajetCheckboxComponent {
    @Input() habbajetIndex: number;
    public checkboxes: HabbajetCheckbox[];
    public currentDay: string;
    public checkboxImagePrefix: string;
    
    constructor(private habbajetService: HabbajetService) {
        this.checkboxImagePrefix = checkboxImagePrefix;
    }

    ngOnInit(){
        this.checkboxes = this.habbajetService.getHabbajetCheckboxes(this.habbajetIndex);
        this.setCurrentDayString();
    }

    onCheckboxTap(day: Day) {
        _.each(this.checkboxes, (c) => {
            c.active = day === c.day;
        });
        this.setCurrentDayString();
        this.habbajetService.selectCheckbox(this.habbajetIndex, day);
    }

    setCurrentDayString() {
        const activeCheckbox = _.find(this.checkboxes, (c: HabbajetCheckbox) => c.active);
        if(activeCheckbox !== undefined) {
            this.currentDay = activeCheckbox.dateName;
        }
    }
}