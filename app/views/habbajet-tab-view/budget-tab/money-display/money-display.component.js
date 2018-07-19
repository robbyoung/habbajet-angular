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
var budget_service_1 = require("../../../../services/budget.service");
var MoneyDisplayComponent = /** @class */ (function () {
    function MoneyDisplayComponent(budgetService) {
        this.budgetService = budgetService;
    }
    MoneyDisplayComponent.prototype.ngOnInit = function () {
        this.totalAmountString = this.budgetService.getTotalAmountString();
    };
    MoneyDisplayComponent = __decorate([
        core_1.Component({
            selector: "money-display",
            templateUrl: "views/habbajet-tab-view/budget-tab/money-display/money-display.html",
            styleUrls: ["views/habbajet-tab-view/budget-tab/money-display/money-display.css"]
        }),
        __metadata("design:paramtypes", [budget_service_1.BudgetService])
    ], MoneyDisplayComponent);
    return MoneyDisplayComponent;
}());
exports.MoneyDisplayComponent = MoneyDisplayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZXktZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb25leS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyxzRUFBb0U7QUFRcEU7SUFLSSwrQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRXBELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7SUFUUSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxxRUFBcUU7WUFDbEYsU0FBUyxFQUFFLENBQUMsb0VBQW9FLENBQUM7U0FDcEYsQ0FBQzt5Q0FPcUMsOEJBQWE7T0FMdkMscUJBQXFCLENBVWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibW9uZXktZGlzcGxheVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9tb25leS1kaXNwbGF5L21vbmV5LWRpc3BsYXkuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL21vbmV5LWRpc3BsYXkvbW9uZXktZGlzcGxheS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNb25leURpc3BsYXlDb21wb25lbnQge1xyXG4gICAgcHVibGljIHRvdGFsQW1vdW50U3RyaW5nOiB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJ1ZGdldFNlcnZpY2U6IEJ1ZGdldFNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudFN0cmluZyA9IHRoaXMuYnVkZ2V0U2VydmljZS5nZXRUb3RhbEFtb3VudFN0cmluZygpO1xyXG4gICAgfVxyXG59Il19