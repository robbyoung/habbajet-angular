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
var validation_service_1 = require("../../../services/validation.service");
var dialog_service_1 = require("../../../services/dialog.service");
var frame = require("ui/frame");
var budget_service_1 = require("../../../services/budget.service");
var _ = require("lodash");
var NewPurchaseModalComponent = /** @class */ (function () {
    function NewPurchaseModalComponent(validationService, dialogService, budgetService) {
        var _this = this;
        this.validationService = validationService;
        this.dialogService = dialogService;
        this.budgetService = budgetService;
        this.errorMessage = '';
        var fieldFindingInterval = setInterval(function () {
            if (frame.topmost().currentPage && frame.topmost().currentPage.getViewById('newPurchaseCostField')) {
                _this.nameField = frame.topmost().currentPage.getViewById('newPurchaseNameField');
                _this.costField = frame.topmost().currentPage.getViewById('newPurchaseCostField');
                _this.nameField.text = '';
                _this.costField.text = '';
                _this.errorMessage = '';
                _this.nameField.focus();
                clearInterval(fieldFindingInterval);
            }
        }, 0);
    }
    NewPurchaseModalComponent.prototype.onSubmitTap = function () {
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
            this.budgetService.makePurchase(nameSubmission, _.toNumber(costSubmission));
            this.dialogService.fadeOut();
        }
    };
    NewPurchaseModalComponent = __decorate([
        core_1.Component({
            selector: "new-purchase-modal",
            templateUrl: "views/modal/new-purchase-modal/new-purchase-modal.html",
            styleUrls: ["views/modal/new-purchase-modal/new-purchase-modal.css"]
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService, dialog_service_1.DialogService, budget_service_1.BudgetService])
    ], NewPurchaseModalComponent);
    return NewPurchaseModalComponent;
}());
exports.NewPurchaseModalComponent = NewPurchaseModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1wdXJjaGFzZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsMkVBQXlFO0FBQ3pFLG1FQUFpRTtBQUNqRSxnQ0FBa0M7QUFFbEMsbUVBQWlFO0FBQ2pFLDBCQUE0QjtBQVE1QjtJQUtJLG1DQUFxQixpQkFBb0MsRUFBVSxhQUE0QixFQUFVLGFBQTRCO1FBQXJJLGlCQWFDO1FBYm9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ2pJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQU0sb0JBQW9CLEdBQUcsV0FBVyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pHLEtBQUksQ0FBQyxTQUFTLEdBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDbEYsS0FBSSxDQUFDLFNBQVMsR0FBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNsRixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDekIsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRU0sK0NBQVcsR0FBbEI7UUFDSSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLENBQUM7SUFFTCxDQUFDO0lBakNRLHlCQUF5QjtRQU5yQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsd0RBQXdEO1lBQ3JFLFNBQVMsRUFBRSxDQUFDLHVEQUF1RCxDQUFDO1NBQ3ZFLENBQUM7eUNBTzBDLHNDQUFpQixFQUF5Qiw4QkFBYSxFQUF5Qiw4QkFBYTtPQUw1SCx5QkFBeUIsQ0FrQ3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XHJcbmltcG9ydCB7VGV4dEZpZWxkfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcclxuaW1wb3J0IHsgQnVkZ2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9idWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5ldy1wdXJjaGFzZS1tb2RhbFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbW9kYWwvbmV3LXB1cmNoYXNlLW1vZGFsL25ldy1wdXJjaGFzZS1tb2RhbC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL21vZGFsL25ldy1wdXJjaGFzZS1tb2RhbC9uZXctcHVyY2hhc2UtbW9kYWwuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3UHVyY2hhc2VNb2RhbENvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIG5hbWVGaWVsZDogVGV4dEZpZWxkO1xyXG4gICAgcHJpdmF0ZSBjb3N0RmllbGQ6IFRleHRGaWVsZDtcclxuICAgIHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UsIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBidWRnZXRTZXJ2aWNlOiBCdWRnZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICBjb25zdCBmaWVsZEZpbmRpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZSAmJiBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ25ld1B1cmNoYXNlQ29zdEZpZWxkJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZUZpZWxkICA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgnbmV3UHVyY2hhc2VOYW1lRmllbGQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29zdEZpZWxkICA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgnbmV3UHVyY2hhc2VDb3N0RmllbGQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZUZpZWxkLnRleHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY29zdEZpZWxkLnRleHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVGaWVsZC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmaWVsZEZpbmRpbmdJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdWJtaXRUYXAoKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZVN1Ym1pc3Npb24gPSB0aGlzLm5hbWVGaWVsZC50ZXh0O1xyXG4gICAgICAgIGNvbnN0IGNvc3RTdWJtaXNzaW9uID0gdGhpcy5jb3N0RmllbGQudGV4dDtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZVB1cmNoYXNlTmFtZShuYW1lU3VibWlzc2lvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnSW52YWxpZCBOYW1lJztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVQdXJjaGFzZUNvc3QoY29zdFN1Ym1pc3Npb24sIGZhbHNlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdJbnZhbGlkIENvc3QnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5tYWtlUHVyY2hhc2UobmFtZVN1Ym1pc3Npb24sIF8udG9OdW1iZXIoY29zdFN1Ym1pc3Npb24pKTtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmZhZGVPdXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0=