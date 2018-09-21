import { Injectable } from "@angular/core";

const MAX_HABBAJETS = 5;

export enum TabType {
    Habbajet,
    Budget,
    Add,
    Empty
}

export interface TabBinding {
    title: string;
    type: TabType;
    habbajetId: string;
}

@Injectable()
export class TabService {

    public tabList: TabBinding[];

    constructor() {}

    public initialiseTabs(habbajetIds: string[]) {
        this.tabList = [];
        this.budgetTabAtIndex(0);
        const numHabbajets = habbajetIds.length;
        for(let i = 0; i < numHabbajets; i++) {
            this.habbajetTabAtIndex(habbajetIds[i], i + 1);
        }
        if (numHabbajets < MAX_HABBAJETS) {
            this.addTabAtIndex(numHabbajets + 1);
        }
    }

    public addHabbajetTab(id: string) {
        const newHabbajetIndex = this.tabList.length - 1;

        this.habbajetTabAtIndex(id, newHabbajetIndex);
    }

    public budgetTabAtIndex(index: number) {
        if(this.tabList.length <= index) {
            this.tabList.push({
                title: 'Budget',
                type: TabType.Budget,
                habbajetId: undefined,
            });
        } else {
            this.tabList[index].title = 'Budget';
            this.tabList[index].type = TabType.Budget;
            this.tabList[index].habbajetId = undefined;
        }
    }

    public habbajetTabAtIndex(id: string, index: number) {
        if(this.tabList.length <= index) {
            this.tabList.push({
                title: 'Habbajet ' + index,
                type: TabType.Habbajet,
                habbajetId: id,
            });
        } else {
            this.tabList[index].title = 'Habbajet ' + index;
            this.tabList[index].type = TabType.Habbajet;
            this.tabList[index].habbajetId = id;
        }
    }

    public addTabAtIndex(index: number) {
        if(this.tabList.length <= index) {
            this.tabList.push({
                title: 'New Habbajet',
                type: TabType.Add,
                habbajetId: undefined,
            });
        } else {
            this.tabList[index].title = 'New Habbajet';
            this.tabList[index].type = TabType.Add;
            this.tabList[index].habbajetId = undefined;
        }
    }

    public removeHabbajetTab(habbajetIndex: number) {
        let tabIndex = -1;
        while (habbajetIndex > 0) {
            tabIndex++;
            if (this.tabList[tabIndex].type === TabType.Habbajet) {
                habbajetIndex--;
            }
        }
        const htab = this.tabList[tabIndex];
        htab.type = TabType.Empty;
    }
}