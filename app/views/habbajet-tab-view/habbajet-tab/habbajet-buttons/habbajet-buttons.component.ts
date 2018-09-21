import { Component, Input } from "@angular/core";
import { HabbajetService, HabbajetButtons, ButtonImages } from "../../../../services/habbajet.service";
import { Checkmark } from "../../../../services/checkbox.service";


@Component({
    selector: "habbajet-buttons",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.css",
                "app.css"]
})

export class HabbajetButtonsComponent {
    @Input() habbajetId: string;
    public habbajetButtons: HabbajetButtons;
    public colorClass: string;

    constructor(private habbajetService: HabbajetService) {}

    ngOnInit() {
        this.habbajetButtons = this.habbajetService.getHabbajetButtons(this.habbajetId);
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetId);
    }

    onPositiveLongPress() {
        if(!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetId, Checkmark.Positive)) {
            this.habbajetService.evolve(this.habbajetId);
            this.habbajetService.updateButtonImages(this.habbajetId);
        }
    }

    onNegativeLongPress() {
        if(!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetId, Checkmark.Negative)) {
            this.habbajetService.updateButtonImages(this.habbajetId);
        }
    }

}