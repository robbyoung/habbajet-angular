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
var frame = require("ui/frame");
var budget_service_1 = require("../../../services/budget.service");
var dialog_service_1 = require("../../../services/dialog.service");
var validation_service_1 = require("../../../services/validation.service");
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
            selector: 'new-purchase-modal',
            templateUrl: 'views/modal/new-purchase-modal/new-purchase-modal.html',
            styleUrls: ['views/modal/new-purchase-modal/new-purchase-modal.css'],
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService, dialog_service_1.DialogService,
            budget_service_1.BudgetService])
    ], NewPurchaseModalComponent);
    return NewPurchaseModalComponent;
}());
exports.NewPurchaseModalComponent = NewPurchaseModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1wdXJjaGFzZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsMEJBQTRCO0FBQzVCLGdDQUFrQztBQUVsQyxtRUFBaUU7QUFDakUsbUVBQWlFO0FBQ2pFLDJFQUF5RTtBQVF6RTtJQUtJLG1DQUFvQixpQkFBb0MsRUFBVSxhQUE0QixFQUMxRSxhQUE0QjtRQURoRCxpQkFjQztRQWRtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDMUUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBTSxvQkFBb0IsR0FBRyxXQUFXLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakcsS0FBSSxDQUFDLFNBQVMsR0FBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNsRixLQUFJLENBQUMsU0FBUyxHQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ2xGLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDekIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUN6QixLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDdkIsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTSwrQ0FBVyxHQUFsQjtRQUNJLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztRQUN2QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsQ0FBQztJQUNMLENBQUM7SUFqQ1EseUJBQXlCO1FBTnJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSx3REFBd0Q7WUFDckUsU0FBUyxFQUFFLENBQUMsdURBQXVELENBQUM7U0FDdkUsQ0FBQzt5Q0FPeUMsc0NBQWlCLEVBQXlCLDhCQUFhO1lBQzNELDhCQUFhO09BTnZDLHlCQUF5QixDQWtDckM7SUFBRCxnQ0FBQztDQUFBLEFBbENELElBa0NDO0FBbENZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcclxuaW1wb3J0IHtUZXh0RmllbGR9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmV3LXB1cmNoYXNlLW1vZGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbW9kYWwvbmV3LXB1cmNoYXNlLW1vZGFsL25ldy1wdXJjaGFzZS1tb2RhbC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9tb2RhbC9uZXctcHVyY2hhc2UtbW9kYWwvbmV3LXB1cmNoYXNlLW1vZGFsLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld1B1cmNoYXNlTW9kYWxDb21wb25lbnQge1xyXG4gICAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBuYW1lRmllbGQ6IFRleHRGaWVsZDtcclxuICAgIHByaXZhdGUgY29zdEZpZWxkOiBUZXh0RmllbGQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UsIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgYnVkZ2V0U2VydmljZTogQnVkZ2V0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgY29uc3QgZmllbGRGaW5kaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UgJiYgZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKCduZXdQdXJjaGFzZUNvc3RGaWVsZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVGaWVsZCAgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ25ld1B1cmNoYXNlTmFtZUZpZWxkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvc3RGaWVsZCAgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ25ld1B1cmNoYXNlQ29zdEZpZWxkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVGaWVsZC50ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvc3RGaWVsZC50ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lRmllbGQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmllbGRGaW5kaW5nSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3VibWl0VGFwKCkge1xyXG4gICAgICAgIGNvbnN0IG5hbWVTdWJtaXNzaW9uID0gdGhpcy5uYW1lRmllbGQudGV4dDtcclxuICAgICAgICBjb25zdCBjb3N0U3VibWlzc2lvbiA9IHRoaXMuY29zdEZpZWxkLnRleHQ7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVQdXJjaGFzZU5hbWUobmFtZVN1Ym1pc3Npb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0ludmFsaWQgTmFtZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VDb3N0KGNvc3RTdWJtaXNzaW9uLCBmYWxzZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnSW52YWxpZCBDb3N0JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2UubWFrZVB1cmNoYXNlKG5hbWVTdWJtaXNzaW9uLCBfLnRvTnVtYmVyKGNvc3RTdWJtaXNzaW9uKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==