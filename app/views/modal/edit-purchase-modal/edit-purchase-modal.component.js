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
var frame = require("ui/frame");
var budget_service_1 = require("../../../services/budget.service");
var dialog_service_1 = require("../../../services/dialog.service");
var validation_service_1 = require("../../../services/validation.service");
var EditPurchaseModalComponent = /** @class */ (function () {
    function EditPurchaseModalComponent(validationService, dialogService, budgetService) {
        var _this = this;
        this.validationService = validationService;
        this.dialogService = dialogService;
        this.budgetService = budgetService;
        this.purchase = this.dialogService.activePurchase;
        this.errorMessage = '';
        var fieldFindingInterval = setInterval(function () {
            if (frame.topmost().currentPage && frame.topmost().currentPage.getViewById('purchaseCostField')) {
                _this.nameField = frame.topmost().currentPage.getViewById('purchaseNameField');
                _this.costField = frame.topmost().currentPage.getViewById('purchaseCostField');
                _this.nameField.text = _this.purchase.name;
                _this.nameField.android.setSelection(_this.nameField.text.length);
                _this.costField.text = _this.purchase.cost.substring(1);
                _this.errorMessage = '';
                _this.nameField.focus();
                clearInterval(fieldFindingInterval);
            }
        }, 0);
    }
    EditPurchaseModalComponent.prototype.onSubmitTap = function () {
        var nameSubmission = this.nameField.text;
        var costSubmission = this.costField.text;
        if (this.validationService.validatePurchaseName(nameSubmission)) {
            this.errorMessage = 'Invalid Name';
        }
        else if (this.validationService.validatePurchaseCost(costSubmission, false)) {
            this.errorMessage = 'Invalid Cost';
        }
        else {
            this.errorMessage = '';
            this.budgetService.correctPurchase(this.purchase.date, nameSubmission, costSubmission);
            this.dialogService.fadeOut();
        }
    };
    EditPurchaseModalComponent = __decorate([
        core_1.Component({
            selector: 'edit-purchase-modal',
            templateUrl: 'views/modal/edit-purchase-modal/edit-purchase-modal.html',
            styleUrls: ['views/modal/edit-purchase-modal/edit-purchase-modal.css'],
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService, dialog_service_1.DialogService,
            budget_service_1.BudgetService])
    ], EditPurchaseModalComponent);
    return EditPurchaseModalComponent;
}());
exports.EditPurchaseModalComponent = EditPurchaseModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wdXJjaGFzZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0LXB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUcxQyxnQ0FBa0M7QUFDbEMsbUVBQThFO0FBQzlFLG1FQUFpRTtBQUNqRSwyRUFBeUU7QUFRekU7SUFNSSxvQ0FBb0IsaUJBQW9DLEVBQVUsYUFBNEIsRUFDMUUsYUFBNEI7UUFEaEQsaUJBZ0JDO1FBaEJtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDMUUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFNLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztZQUNyQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsRUFBRTtnQkFDN0YsS0FBSSxDQUFDLFNBQVMsR0FBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUMvRSxLQUFJLENBQUMsU0FBUyxHQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQy9FLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hFLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVNLGdEQUFXLEdBQWxCO1FBQ0ksSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7U0FDdEM7YUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDM0UsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7U0FDdEM7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQXBDUSwwQkFBMEI7UUFOdEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLDBEQUEwRDtZQUN2RSxTQUFTLEVBQUUsQ0FBQyx5REFBeUQsQ0FBQztTQUN6RSxDQUFDO3lDQVF5QyxzQ0FBaUIsRUFBeUIsOEJBQWE7WUFDM0QsOEJBQWE7T0FQdkMsMEJBQTBCLENBcUN0QztJQUFELGlDQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkL3RleHQtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UsIFB1cmNoYXNlUm93IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWRpdC1wdXJjaGFzZS1tb2RhbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21vZGFsL2VkaXQtcHVyY2hhc2UtbW9kYWwvZWRpdC1wdXJjaGFzZS1tb2RhbC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9tb2RhbC9lZGl0LXB1cmNoYXNlLW1vZGFsL2VkaXQtcHVyY2hhc2UtbW9kYWwuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFB1cmNoYXNlTW9kYWxDb21wb25lbnQge1xyXG4gICAgcHVibGljIG5hbWVGaWVsZDogVGV4dEZpZWxkO1xyXG4gICAgcHVibGljIGNvc3RGaWVsZDogVGV4dEZpZWxkO1xyXG4gICAgcHVibGljIHB1cmNoYXNlOiBQdXJjaGFzZVJvdztcclxuICAgIHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSwgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBidWRnZXRTZXJ2aWNlOiBCdWRnZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5wdXJjaGFzZSA9IHRoaXMuZGlhbG9nU2VydmljZS5hY3RpdmVQdXJjaGFzZTtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkRmluZGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlICYmIGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgncHVyY2hhc2VDb3N0RmllbGQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lRmllbGQgID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKCdwdXJjaGFzZU5hbWVGaWVsZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3N0RmllbGQgID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKCdwdXJjaGFzZUNvc3RGaWVsZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lRmllbGQudGV4dCA9IHRoaXMucHVyY2hhc2UubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZUZpZWxkLmFuZHJvaWQuc2V0U2VsZWN0aW9uKHRoaXMubmFtZUZpZWxkLnRleHQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29zdEZpZWxkLnRleHQgPSB0aGlzLnB1cmNoYXNlLmNvc3Quc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZUZpZWxkLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGZpZWxkRmluZGluZ0ludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN1Ym1pdFRhcCgpIHtcclxuICAgICAgICBjb25zdCBuYW1lU3VibWlzc2lvbiA9IHRoaXMubmFtZUZpZWxkLnRleHQ7XHJcbiAgICAgICAgY29uc3QgY29zdFN1Ym1pc3Npb24gPSB0aGlzLmNvc3RGaWVsZC50ZXh0O1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VOYW1lKG5hbWVTdWJtaXNzaW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdJbnZhbGlkIE5hbWUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZVB1cmNoYXNlQ29zdChjb3N0U3VibWlzc2lvbiwgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0ludmFsaWQgQ29zdCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLmNvcnJlY3RQdXJjaGFzZSh0aGlzLnB1cmNoYXNlLmRhdGUsIG5hbWVTdWJtaXNzaW9uLCBjb3N0U3VibWlzc2lvbik7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==