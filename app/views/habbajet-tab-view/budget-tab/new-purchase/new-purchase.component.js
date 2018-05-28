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
var _ = require("lodash");
var budget_service_1 = require("../../../../services/budget.service");
var dialogs = require("ui/dialogs");
var NewPurchaseComponent = /** @class */ (function () {
    function NewPurchaseComponent(budgetService) {
        this.budgetService = budgetService;
    }
    NewPurchaseComponent.prototype.ngOnInit = function () { };
    NewPurchaseComponent.prototype.onNewPurchaseTap = function () {
        var _this = this;
        dialogs.prompt("What did you purchase?")
            .then(function (name) {
            if (name.result) {
                dialogs.prompt("How much did it cost?")
                    .then(function (cost) {
                    if (cost.result) {
                        _this.budgetService.makePurchase(name.text, _.toNumber(cost.text));
                    }
                });
            }
        });
    };
    NewPurchaseComponent = __decorate([
        core_1.Component({
            selector: "new-purchase",
            templateUrl: "views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.html",
            styleUrls: ["views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.css"]
        }),
        __metadata("design:paramtypes", [budget_service_1.BudgetService])
    ], NewPurchaseComponent);
    return NewPurchaseComponent;
}());
exports.NewPurchaseComponent = NewPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsMEJBQTRCO0FBQzVCLHNFQUFvRTtBQUNwRSxvQ0FBc0M7QUFRdEM7SUFFSSw4QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRXBELHVDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRU4sK0NBQWdCLEdBQXZCO1FBQUEsaUJBYUM7UUFaRyxPQUFPLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDO2FBQ3ZDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDO3FCQUN0QyxJQUFJLENBQUMsVUFBQyxJQUFJO29CQUNQLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNiLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEUsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFuQlEsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsbUVBQW1FO1lBQ2hGLFNBQVMsRUFBRSxDQUFDLGtFQUFrRSxDQUFDO1NBQ2xGLENBQUM7eUNBSXFDLDhCQUFhO09BRnZDLG9CQUFvQixDQW9CaEM7SUFBRCwyQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQnVkZ2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9idWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJuZXctcHVyY2hhc2VcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvbmV3LXB1cmNoYXNlL25ldy1wdXJjaGFzZS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvbmV3LXB1cmNoYXNlL25ldy1wdXJjaGFzZS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdQdXJjaGFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBidWRnZXRTZXJ2aWNlOiBCdWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge31cclxuXHJcbiAgICBwdWJsaWMgb25OZXdQdXJjaGFzZVRhcCgpIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdChcIldoYXQgZGlkIHlvdSBwdXJjaGFzZT9cIilcclxuICAgICAgICAudGhlbigobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZihuYW1lLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoXCJIb3cgbXVjaCBkaWQgaXQgY29zdD9cIilcclxuICAgICAgICAgICAgICAgIC50aGVuKChjb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29zdC5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLm1ha2VQdXJjaGFzZShuYW1lLnRleHQsIF8udG9OdW1iZXIoY29zdC50ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxufSJdfQ==