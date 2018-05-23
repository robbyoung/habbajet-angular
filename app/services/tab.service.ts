import { Injectable } from "@angular/core";
import * as _ from 'lodash';

export enum TabType {
    Habbajet,
    Budget,
    Add,
}

export interface TabBinding {
    title: string;
    type: TabType;
    habbajetIndex: number;
}

@Injectable()
export class TabService {

    public tabList: TabBinding[];

    constructor() {
        this.initialiseTabs();
    }

    public initialiseTabs() {
        this.tabList = [];
        this.budgetTabAtIndex(0);
        this.addTabAtIndex(1);
    }

    public addHabbajetTab() {
        const newHabbajetIndex = this.tabList.length;

        this.habbajetTabAtIndex(newHabbajetIndex);
        this.addTabAtIndex(newHabbajetIndex + 1);

        console.dir(this.tabList);
    }

    public budgetTabAtIndex(index: number) {
        if(this.tabList.length <= index) {
            this.tabList.push({
                title: 'Budget',
                type: TabType.Budget,
                habbajetIndex: undefined,
            });
        } else {
            this.tabList[index].title = 'Budget';
            this.tabList[index].type = TabType.Budget;
            this.tabList[index].habbajetIndex = undefined;
        }
    }

    public habbajetTabAtIndex(index: number) {
        if(this.tabList.length <= index) {
            this.tabList.push({
                title: 'Habbajet ' + index,
                type: TabType.Habbajet,
                habbajetIndex: index - 2,
            });
        } else {
            this.tabList[index].title = 'Habbajet ' + index;
            this.tabList[index].type = TabType.Habbajet;
            this.tabList[index].habbajetIndex = index - 2;
        }
    }

    public addTabAtIndex(index: number) {
        if(this.tabList.length <= index) {
            this.tabList.push({
                title: 'New Habbajet',
                type: TabType.Add,
                habbajetIndex: undefined,
            });
        } else {
            this.tabList[index].title = 'New Habbajet';
            this.tabList[index].type = TabType.Add;
            this.tabList[index].habbajetIndex = undefined;
        }
    }
}