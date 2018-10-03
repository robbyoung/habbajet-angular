import { Component, Input } from '@angular/core';
import { Checkmark } from '../../../../services/checkbox.service';
import { ButtonImages, HabbajetButtons, HabbajetService } from '../../../../services/habbajet.service';

@Component({
    selector: 'habbajet-buttons',
    templateUrl: 'views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.html',
    styleUrls: ['views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.css',
                'app.css'],
})

export class HabbajetButtonsComponent {
    @Input() public habbajetId: string;
    public habbajetButtons: HabbajetButtons;
    public colorClass: string;

    constructor(private habbajetService: HabbajetService) {}

    public ngOnInit() {
        this.habbajetButtons = this.habbajetService.getHabbajetButtons(this.habbajetId);
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetId);
    }

    public onPositiveLongPress() {
        if (!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetId, Checkmark.Positive)) {
            this.habbajetService.evolve(this.habbajetId);
            this.habbajetService.updateButtonImages(this.habbajetId);
        }
    }

    public onNegativeLongPress() {
        if (!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetId, Checkmark.Negative)) {
            this.habbajetService.updateButtonImages(this.habbajetId);
        }
    }

}
