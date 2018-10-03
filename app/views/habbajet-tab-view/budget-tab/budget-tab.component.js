"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var budget_service_1 = require("../../../services/budget.service");
var BudgetTabComponent = /** @class */ (function () {
    function BudgetTabComponent(budgetService) {
        this.budgetService = budgetService;
    }
    BudgetTabComponent.prototype.ngOnInit = function () {
        this.purchases = this.budgetService.getPurchases();
    };
    BudgetTabComponent = __decorate([
        core_1.Component({
            selector: 'budget-tab',
            templateUrl: 'views/habbajet-tab-view/budget-tab/budget-tab.html',
            styleUrls: ['views/habbajet-tab-view/budget-tab/budget-tab.css'],
        }),
        __metadata("design:paramtypes", [budget_service_1.BudgetService])
    ], BudgetTabComponent);
    return BudgetTabComponent;
}());
exports.BudgetTabComponent = BudgetTabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyxtRUFBK0U7QUFRL0U7SUFHSSw0QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRTdDLHFDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQVBRLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLG9EQUFvRDtZQUNqRSxTQUFTLEVBQUUsQ0FBQyxtREFBbUQsQ0FBQztTQUNuRSxDQUFDO3lDQUtxQyw4QkFBYTtPQUh2QyxrQkFBa0IsQ0FROUI7SUFBRCx5QkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UsIEJ1ZGdldFRhYlJvdyB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2J1ZGdldC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdidWRnZXQtdGFiJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9idWRnZXQtdGFiLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvYnVkZ2V0LXRhYi5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCdWRnZXRUYWJDb21wb25lbnQge1xyXG4gICAgcHVibGljIHB1cmNoYXNlczogQnVkZ2V0VGFiUm93W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBidWRnZXRTZXJ2aWNlOiBCdWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlcyA9IHRoaXMuYnVkZ2V0U2VydmljZS5nZXRQdXJjaGFzZXMoKTtcclxuICAgIH1cclxufVxyXG4iXX0=