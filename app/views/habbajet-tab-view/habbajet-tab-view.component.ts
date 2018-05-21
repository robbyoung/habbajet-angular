import { Component, OnInit } from "@angular/core";
import * as _ from 'lodash';
import * as frame from 'ui/frame';
import { HabbajetService } from "../../services/habbajet.service";
import { TabService, TabType } from "../../services/tab.service";

@Component({
    selector: "habbajet-tab-view",
    templateUrl: "views/habbajet-tab-view/habbajet-tab-view.html",
})

export class HabbajetTabViewComponent {

    public tabList: TabType[];

    constructor(private tabService: TabService) {}

    ngOnInit() {
        this.tabList = this.tabService.tabList;
        console.dir(this.tabList);

        setTimeout(() => {
            const page = frame.topmost().currentPage;
            page.getViewById('tabView').android.removeViewAt(0);
            page.actionBarHidden = true;
        }, 1000);
    }

}