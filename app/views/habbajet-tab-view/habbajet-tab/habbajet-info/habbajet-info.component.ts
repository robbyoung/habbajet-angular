import { Component, Input } from "@angular/core";
import * as frame from 'ui/frame';
import { HabbajetInfo, HabbajetService } from "../../../../services/habbajet.service";
import { View } from "ui/frame";
import * as dialogs from 'ui/dialogs';

@Component({
    selector: "habbajet-info",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.css"]
})

export class HabbajetInfoComponent {
    @Input() habbajetIndex: number;
    public info: HabbajetInfo;

    constructor(private habbajetService: HabbajetService) {};

    ngOnInit() {
        this.info = this.habbajetService.getHabbajetInfo(this.habbajetIndex);
        this.info.expectedPayoutUpdateCallback = this.onExpectedPayoutUpdate;
    }

    onInfoTap() {
        dialogs.confirm({
                title: 'More Info',
                message: `
                Value: ${this.info.value}\n
                Factor: ${this.info.factor}\n
                Slack: ${this.info.slack}\n
                Streak: ${this.info.streak}\n
                `,
                okButtonText: 'OK',
                cancelButtonText: 'Delete',
            }).then((result) => {
                if (result === false) {
                    this.onDeleteTap();
                }
            });
    }

    onDeleteTap() {
        dialogs.alert('Not implemented yet');
    }

    onExpectedPayoutUpdate() {
        const page = frame.topmost().currentPage;
        const expectedPayoutLabel = page.getViewById('expectedPayout') as View;
        if (expectedPayoutLabel) {
            const NUM_ITERATIONS = 20;
            const colorToReturnTo = expectedPayoutLabel.color;
            expectedPayoutLabel.color = new frame.Color('#db4848');
            const deltaR = (expectedPayoutLabel.color.r - colorToReturnTo.r) / NUM_ITERATIONS;
            const deltaG = (expectedPayoutLabel.color.g - colorToReturnTo.g) / NUM_ITERATIONS;
            const deltaB = (expectedPayoutLabel.color.b - colorToReturnTo.b) / NUM_ITERATIONS;

            let iterations = 0;
            const interval = setInterval(() => {
                if (iterations === NUM_ITERATIONS) {
                    expectedPayoutLabel.color = colorToReturnTo;
                    clearInterval(interval);
                } else {
                    expectedPayoutLabel.color = new frame.Color(
                        expectedPayoutLabel.color.a,
                        expectedPayoutLabel.color.r - deltaR,
                        expectedPayoutLabel.color.g - deltaG,
                        expectedPayoutLabel.color.b - deltaB,
                    );
                }
                iterations++;
            }, 50);
        }
    }
}