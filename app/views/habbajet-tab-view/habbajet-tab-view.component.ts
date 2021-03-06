import { Component } from '@angular/core';
import * as frame from 'tns-core-modules/ui/frame/frame';
import { HabbajetService } from '../../services/habbajet.service';
import { TabBinding, TabService } from '../../services/tab.service';

@Component({
    selector: 'habbajet-tab-view',
    templateUrl: 'views/habbajet-tab-view/habbajet-tab-view.html',
})

export class HabbajetTabViewComponent {

    public tabList: TabBinding[];

    constructor(private tabService: TabService, private habbajetService: HabbajetService) {
        const interval = setInterval(() => {
            const page = frame.topmost().currentPage;
            if (page) {
                page.getViewById('tabView').android.removeViewAt(1);
                page.actionBarHidden = true;
                clearInterval(interval);
            }
        }, 10);
    }

    public ngOnInit() {
        this.tabList = this.tabService.tabList;
    }
}
