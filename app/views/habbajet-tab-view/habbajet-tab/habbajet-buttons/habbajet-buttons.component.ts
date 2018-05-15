import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { HabbajetService, HabbajetButtons } from "../../../../services/habbajet.service";
import { Checkmark } from "../../../../services/checkbox.service";


@Component({
    selector: "habbajet-buttons",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.css"]
})

export class HabbajetButtonsComponent {
    @Input() habbajetIndex: number;
    public habbajetButtons: HabbajetButtons;

    constructor(private habbajetService: HabbajetService) {}

    ngOnInit() {
        this.habbajetButtons = this.habbajetService.getHabbajetButtons(this.habbajetIndex);
    }

    onPositiveTap() {
        if(!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetIndex, Checkmark.Positive)) {
            this.habbajetService.evolve(this.habbajetIndex);
            this.habbajetButtons.locked = true;
        }
    }

    onNegativeTap() {
        if(!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetIndex, Checkmark.Negative)) {
            this.habbajetButtons.locked = true;
        }
    }
}