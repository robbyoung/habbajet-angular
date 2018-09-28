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
var dialog_service_1 = require("../../../services/dialog.service");
var budget_service_1 = require("../../../services/budget.service");
var DeletePurchaseModalComponent = /** @class */ (function () {
    function DeletePurchaseModalComponent(dialogService, budgetService) {
        var _this = this;
        this.dialogService = dialogService;
        this.budgetService = budgetService;
        this.dialogService.onDeletePurchasePopup = function (purchase) { _this.onPopup(purchase); };
    }
    DeletePurchaseModalComponent.prototype.onPopup = function (purchase) {
        this.purchase = purchase;
    };
    DeletePurchaseModalComponent.prototype.onConfirmTap = function () {
        this.purchase.cost = '$0.00';
        this.budgetService.correctPurchase(this.purchase.date, '', '0');
        this.dialogService.fadeOut();
    };
    DeletePurchaseModalComponent.prototype.onCancelTap = function () {
        this.dialogService.fadeOut();
    };
    DeletePurchaseModalComponent = __decorate([
        core_1.Component({
            selector: "delete-purchase-modal",
            templateUrl: "views/modal/delete-purchase-modal/delete-purchase-modal.html",
            styleUrls: ["views/modal/delete-purchase-modal/delete-purchase-modal.css"]
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService, budget_service_1.BudgetService])
    ], DeletePurchaseModalComponent);
    return DeletePurchaseModalComponent;
}());
exports.DeletePurchaseModalComponent = DeletePurchaseModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbGV0ZS1wdXJjaGFzZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsbUVBQWlFO0FBQ2pFLG1FQUE4RTtBQVE5RTtJQUdJLHNDQUFxQixhQUE0QixFQUFVLGFBQTRCO1FBQXZGLGlCQUVDO1FBRm9CLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDbkYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLFFBQXFCLElBQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRU0sOENBQU8sR0FBZCxVQUFlLFFBQXFCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTSxtREFBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sa0RBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFuQlEsNEJBQTRCO1FBTnhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFdBQVcsRUFBRSw4REFBOEQ7WUFDM0UsU0FBUyxFQUFFLENBQUMsNkRBQTZELENBQUM7U0FDN0UsQ0FBQzt5Q0FLc0MsOEJBQWEsRUFBeUIsOEJBQWE7T0FIOUUsNEJBQTRCLENBb0J4QztJQUFELG1DQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlLCBQdXJjaGFzZVJvdyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9idWRnZXQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJkZWxldGUtcHVyY2hhc2UtbW9kYWxcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL21vZGFsL2RlbGV0ZS1wdXJjaGFzZS1tb2RhbC9kZWxldGUtcHVyY2hhc2UtbW9kYWwuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9tb2RhbC9kZWxldGUtcHVyY2hhc2UtbW9kYWwvZGVsZXRlLXB1cmNoYXNlLW1vZGFsLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVB1cmNoYXNlTW9kYWxDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBwdXJjaGFzZTogUHVyY2hhc2VSb3c7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBidWRnZXRTZXJ2aWNlOiBCdWRnZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9uRGVsZXRlUHVyY2hhc2VQb3B1cCA9IChwdXJjaGFzZTogUHVyY2hhc2VSb3cpID0+IHsgdGhpcy5vblBvcHVwKHB1cmNoYXNlKTsgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Qb3B1cChwdXJjaGFzZTogUHVyY2hhc2VSb3cpIHtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlID0gcHVyY2hhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ29uZmlybVRhcCgpIHtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlLmNvc3QgPSAnJDAuMDAnO1xyXG4gICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5jb3JyZWN0UHVyY2hhc2UodGhpcy5wdXJjaGFzZS5kYXRlLCAnJywgJzAnKTtcclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuZmFkZU91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNhbmNlbFRhcCgpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuZmFkZU91dCgpO1xyXG4gICAgfVxyXG59Il19