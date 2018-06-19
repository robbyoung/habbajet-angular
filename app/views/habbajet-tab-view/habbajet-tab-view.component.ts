import { Component } from "@angular/core";
import * as frame from 'ui/frame';
import { TabService, TabBinding } from "../../services/tab.service";
import { HabbajetService } from "../../services/habbajet.service";

@Component({
    selector: "habbajet-tab-view",
    templateUrl: "views/habbajet-tab-view/habbajet-tab-view.html",
})

export class HabbajetTabViewComponent {

    public tabList: TabBinding[];

    constructor(private tabService: TabService, private habbajetService: HabbajetService) {}

    ngOnInit() {
        this.tabList = this.tabService.tabList;

        setTimeout(() => {
            const page = frame.topmost().currentPage;
            page.getViewById('tabView').android.removeViewAt(0);
            page.actionBarHidden = true;
        }, 1000);
    }

}