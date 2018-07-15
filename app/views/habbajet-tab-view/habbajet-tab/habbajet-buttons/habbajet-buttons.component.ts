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
    @Input() habbajetIndex: number;
    public habbajetButtons: HabbajetButtons;
    public colorClass: string;

    constructor(private habbajetService: HabbajetService) {}

    ngOnInit() {
        this.habbajetButtons = this.habbajetService.getHabbajetButtons(this.habbajetIndex);
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetIndex);
    }

    onPositiveLongPress() {
        if(!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetIndex, Checkmark.Positive)) {
            this.habbajetService.evolve(this.habbajetIndex);
            this.habbajetButtons.locked = true;
            this.habbajetButtons.positiveSrc = ButtonImages.PositiveSelected;
        }
    }

    onNegativeLongPress() {
        if(!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetIndex, Checkmark.Negative)) {
            this.habbajetButtons.locked = true;
            this.habbajetButtons.negativeSrc = ButtonImages.NegativeSelected;
        }
    }

}