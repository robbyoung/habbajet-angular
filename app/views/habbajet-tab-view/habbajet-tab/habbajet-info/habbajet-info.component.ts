import { Component, Input } from '@angular/core';
import * as dialogs from 'tns-core-modules/ui/dialogs/dialogs';
import * as frame from 'tns-core-modules/ui/frame/frame';
import { View } from 'tns-core-modules/ui/frame/frame';
import { HabbajetInfo, HabbajetService } from '../../../../services/habbajet.service';

@Component({
    selector: 'habbajet-info',
    templateUrl: 'views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.html',
    styleUrls: ['views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.css',
                'app.css'],
})

export class HabbajetInfoComponent {
    @Input() public habbajetId: string;
    public info: HabbajetInfo;
    public colorClass: string;
    public expectedPayoutLabelID: string;

    constructor(private habbajetService: HabbajetService) {}

    public ngOnInit() {
        this.info = this.habbajetService.getHabbajetInfo(this.habbajetId);
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetId);
        this.expectedPayoutLabelID = 'expectedPayout' + this.habbajetId;
        this.info.expectedPayoutUpdateCallback = () => this.onExpectedPayoutUpdate(this.expectedPayoutLabelID);
    }

    public onInfoTap() {
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

    public onDeleteTap() {
        dialogs.confirm({
            title: 'Delete Habbajet',
            message: 'This habbajet will be deleted forever.',
            okButtonText: 'OK',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result) {
                this.habbajetService.deleteHabbajet(this.habbajetId);
            }
        });
    }

    public onExpectedPayoutUpdate(id: string) {
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
