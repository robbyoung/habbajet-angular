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
var PURCHASE_ELEMENT_HEIGHT = 50;
var BudgetTabComponent = /** @class */ (function () {
    function BudgetTabComponent(budgetService) {
        this.budgetService = budgetService;
    }
    BudgetTabComponent.prototype.ngOnInit = function () {
        this.purchases = this.budgetService.getPurchases();
        this.purchaseListHeight = budget_service_1.MAX_PURCHASE_LIST_LENGTH * PURCHASE_ELEMENT_HEIGHT;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyxtRUFBeUc7QUFFekcsSUFBTSx1QkFBdUIsR0FBRyxFQUFFLENBQUM7QUFRbkM7SUFJSSw0QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRTdDLHFDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHlDQUF3QixHQUFHLHVCQUF1QixDQUFDO0lBQ2pGLENBQUM7SUFUUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxvREFBb0Q7WUFDakUsU0FBUyxFQUFFLENBQUMsbURBQW1ELENBQUM7U0FDbkUsQ0FBQzt5Q0FNcUMsOEJBQWE7T0FKdkMsa0JBQWtCLENBVTlCO0lBQUQseUJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlLCBCdWRnZXRUYWJSb3csIE1BWF9QVVJDSEFTRV9MSVNUX0xFTkdUSCB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2J1ZGdldC5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IFBVUkNIQVNFX0VMRU1FTlRfSEVJR0hUID0gNTA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYnVkZ2V0LXRhYicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvYnVkZ2V0LXRhYi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL2J1ZGdldC10YWIuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQnVkZ2V0VGFiQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBwdXJjaGFzZXM6IEJ1ZGdldFRhYlJvd1tdO1xyXG4gICAgcHVibGljIHB1cmNoYXNlTGlzdEhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYnVkZ2V0U2VydmljZTogQnVkZ2V0U2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wdXJjaGFzZXMgPSB0aGlzLmJ1ZGdldFNlcnZpY2UuZ2V0UHVyY2hhc2VzKCk7XHJcbiAgICAgICAgdGhpcy5wdXJjaGFzZUxpc3RIZWlnaHQgPSBNQVhfUFVSQ0hBU0VfTElTVF9MRU5HVEggKiBQVVJDSEFTRV9FTEVNRU5UX0hFSUdIVDtcclxuICAgIH1cclxufVxyXG4iXX0=