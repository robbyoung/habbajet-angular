import { Component, Input } from "@angular/core";
import * as frame from 'ui/frame';
import { HabbajetInfo, HabbajetService } from "../../../../services/habbajet.service";
import { View } from "ui/frame";
import * as dialogs from 'ui/dialogs';

@Component({
    selector: "habbajet-info",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.css",
                "app.css"]
})

export class HabbajetInfoComponent {
    @Input() habbajetIndex: number;
    public info: HabbajetInfo;
    public colorClass: string;
    public expectedPayoutLabelID: string;

    constructor(private habbajetService: HabbajetService) {};

    ngOnInit() {
        this.info = this.habbajetService.getHabbajetInfo(this.habbajetIndex);
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetIndex);
        this.expectedPayoutLabelID = 'expectedPayout' + this.habbajetIndex;
        this.info.expectedPayoutUpdateCallback = () => this.onExpectedPayoutUpdate(this.expectedPayoutLabelID);
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
                okButtonText: 'Delete',
                cancelButtonText: 'OK',
            }).then((result) => {
                if (result) {
                    this.onDeleteTap();
                }
            });
    }

    onDeleteTap() {
        dialogs.alert('Not implemented yet');
    }

    onExpectedPayoutUpdate(id: string) {
        const page = frame.topmost().currentPage;
        const expectedPayoutLabel = page.getViewById(id) as View;
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