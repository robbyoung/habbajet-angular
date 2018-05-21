import { Injectable } from "@angular/core";
import * as _ from 'lodash';

export enum TabType {
    Habbajet,
    Budget,
    Add,
}

@Injectable()
export class TabService {

    public tabList: TabType[];

    constructor() {
        this.updateTabs(0);
    }

    public updateTabs(habbajetCount: number) {
        this.tabList = [];
        this.tabList.push(TabType.Budget)
        for(let h = 0; h < habbajetCount; h++) {
            this.tabList.push(TabType.Habbajet);
        }
        this.tabList.push(TabType.Add);
    }
}