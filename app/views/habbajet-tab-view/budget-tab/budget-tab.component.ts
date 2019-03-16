import { Component } from '@angular/core';
import * as _ from 'lodash';
import { BudgetService, BudgetTabRow, MAX_PURCHASE_LIST_LENGTH } from '../../../services/budget.service';

const PURCHASE_ELEMENT_HEIGHT = 50;

@Component({
    selector: 'budget-tab',
    templateUrl: 'views/habbajet-tab-view/budget-tab/budget-tab.html',
    styleUrls: ['views/habbajet-tab-view/budget-tab/budget-tab.css'],
})

export class BudgetTabComponent {
    public purchases: BudgetTabRow[];
    public purchaseListHeight: number;

    constructor(private budgetService: BudgetService) {}

    public ngOnInit() {
        this.purchases = this.budgetService.getPurchases();
        this.purchaseListHeight = MAX_PURCHASE_LIST_LENGTH * PURCHASE_ELEMENT_HEIGHT;
    }
}
