import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { HabbajetService } from "../../../../services/habbajet.service";
import { HabbajetCheckbox, Day } from "../../../../services/checkbox.service";

@Component({
    selector: "habbajet-checkbox",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.css"]
})

export class HabbajetCheckboxComponent {
    @Input() habbajetIndex: number;
    public checkboxes: HabbajetCheckbox[];
    public currentDay: string;
    
    constructor(private habbajetService: HabbajetService) {}

    ngOnInit(){
        this.checkboxes = this.habbajetService.getHabbajetCheckboxes(this.habbajetIndex);
        this.setCurrentDay();
    }

    onCheckboxTap(day: number) {
        console.log(day);
    }

    setCurrentDay() {
        this.currentDay = "Current Day";
    }
}