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
        this.purchaseLengthObject = this.budgetService.purchaseLengthObject;
    };
    BudgetTabComponent = __decorate([
        core_1.Component({
            selector: "budget-tab",
            templateUrl: "views/habbajet-tab-view/budget-tab/budget-tab.html",
            styleUrls: ["views/habbajet-tab-view/budget-tab/budget-tab.css"]
        }),
        __metadata("design:paramtypes", [budget_service_1.BudgetService])
    ], BudgetTabComponent);
    return BudgetTabComponent;
}());
exports.BudgetTabComponent = BudgetTabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyxtRUFBK0U7QUFRL0U7SUFJSSw0QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRXBELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7SUFDeEUsQ0FBQztJQVRRLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLG9EQUFvRDtZQUNqRSxTQUFTLEVBQUUsQ0FBQyxtREFBbUQsQ0FBQztTQUNuRSxDQUFDO3lDQU1xQyw4QkFBYTtPQUp2QyxrQkFBa0IsQ0FVOUI7SUFBRCx5QkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQnVkZ2V0U2VydmljZSwgQnVkZ2V0VGFiUm93IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2J1ZGdldC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImJ1ZGdldC10YWJcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvYnVkZ2V0LXRhYi5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvYnVkZ2V0LXRhYi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCdWRnZXRUYWJDb21wb25lbnQge1xyXG4gICAgcHVibGljIHB1cmNoYXNlczogQnVkZ2V0VGFiUm93W107XHJcbiAgICBwdWJsaWMgcHVyY2hhc2VMZW5ndGhPYmplY3Q6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJ1ZGdldFNlcnZpY2U6IEJ1ZGdldFNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wdXJjaGFzZXMgPSB0aGlzLmJ1ZGdldFNlcnZpY2UuZ2V0UHVyY2hhc2VzKCk7XHJcbiAgICAgICAgdGhpcy5wdXJjaGFzZUxlbmd0aE9iamVjdCA9IHRoaXMuYnVkZ2V0U2VydmljZS5wdXJjaGFzZUxlbmd0aE9iamVjdDtcclxuICAgIH1cclxufSJdfQ==