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
        this.initialiseTabs();
    }

    public initialiseTabs() {
        this.tabList = [];
        this.tabList.push(TabType.Budget)
        this.tabList.push(TabType.Add);
    }

    public addHabbajetTab() {
        const newHabbajetIndex = this.tabList.length - 1;

        this.tabList[newHabbajetIndex] = TabType.Habbajet;
        this.tabList.push(TabType.Add);

        console.dir(this.tabList);
    }
}