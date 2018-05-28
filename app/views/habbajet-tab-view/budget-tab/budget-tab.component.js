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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyxtRUFBaUU7QUFRakU7SUFFSSw0QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRXBELHFDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsb0RBQW9EO1lBQ2pFLFNBQVMsRUFBRSxDQUFDLG1EQUFtRCxDQUFDO1NBQ25FLENBQUM7eUNBSXFDLDhCQUFhO09BRnZDLGtCQUFrQixDQU05QjtJQUFELHlCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2J1ZGdldC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImJ1ZGdldC10YWJcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvYnVkZ2V0LXRhYi5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvYnVkZ2V0LXRhYi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCdWRnZXRUYWJDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYnVkZ2V0U2VydmljZTogQnVkZ2V0U2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxufSJdfQ==