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
var dialog_service_1 = require("../../../services/dialog.service");
var DeletePurchaseModalComponent = /** @class */ (function () {
    function DeletePurchaseModalComponent(dialogService, budgetService) {
        this.dialogService = dialogService;
        this.budgetService = budgetService;
        this.purchase = dialogService.activePurchase;
    }
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
            selector: 'delete-purchase-modal',
            templateUrl: 'views/modal/delete-purchase-modal/delete-purchase-modal.html',
            styleUrls: ['views/modal/delete-purchase-modal/delete-purchase-modal.css'],
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService, budget_service_1.BudgetService])
    ], DeletePurchaseModalComponent);
    return DeletePurchaseModalComponent;
}());
exports.DeletePurchaseModalComponent = DeletePurchaseModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbGV0ZS1wdXJjaGFzZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsbUVBQThFO0FBQzlFLG1FQUFpRTtBQVFqRTtJQUdJLHNDQUFvQixhQUE0QixFQUFVLGFBQTRCO1FBQWxFLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDbEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ2pELENBQUM7SUFFTSxtREFBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sa0RBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFmUSw0QkFBNEI7UUFOeEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLDhEQUE4RDtZQUMzRSxTQUFTLEVBQUUsQ0FBQyw2REFBNkQsQ0FBQztTQUM3RSxDQUFDO3lDQUtxQyw4QkFBYSxFQUF5Qiw4QkFBYTtPQUg3RSw0QkFBNEIsQ0FnQnhDO0lBQUQsbUNBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxvRUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnVkZ2V0U2VydmljZSwgUHVyY2hhc2VSb3cgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9idWRnZXQuc2VydmljZSc7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVsZXRlLXB1cmNoYXNlLW1vZGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbW9kYWwvZGVsZXRlLXB1cmNoYXNlLW1vZGFsL2RlbGV0ZS1wdXJjaGFzZS1tb2RhbC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9tb2RhbC9kZWxldGUtcHVyY2hhc2UtbW9kYWwvZGVsZXRlLXB1cmNoYXNlLW1vZGFsLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVB1cmNoYXNlTW9kYWxDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBwdXJjaGFzZTogUHVyY2hhc2VSb3c7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIGJ1ZGdldFNlcnZpY2U6IEJ1ZGdldFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlID0gZGlhbG9nU2VydmljZS5hY3RpdmVQdXJjaGFzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Db25maXJtVGFwKCkge1xyXG4gICAgICAgIHRoaXMucHVyY2hhc2UuY29zdCA9ICckMC4wMCc7XHJcbiAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLmNvcnJlY3RQdXJjaGFzZSh0aGlzLnB1cmNoYXNlLmRhdGUsICcnLCAnMCcpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5mYWRlT3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2FuY2VsVGFwKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5mYWRlT3V0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19