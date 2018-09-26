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
        this.dialogService.onNewPurchasePopup = function () { _this.onPopup(); };
        var fieldFindingInterval = setInterval(function () {
            if (frame.topmost().currentPage && frame.topmost().currentPage.getViewById('newPurchaseCostField')) {
                _this.nameField = frame.topmost().currentPage.getViewById('newPurchaseNameField');
                _this.costField = frame.topmost().currentPage.getViewById('newPurchaseCostField');
                _this.nameField.text = '';
                _this.costField.text = '';
                clearInterval(fieldFindingInterval);
            }
        }, 0);
    }
    NewPurchaseModalComponent.prototype.onPopup = function () {
        this.nameField.text = '';
        this.costField.text = '';
        this.errorMessage = '';
        this.nameField.focus();
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1wdXJjaGFzZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsMkVBQXlFO0FBQ3pFLG1FQUFpRTtBQUNqRSxnQ0FBa0M7QUFFbEMsbUVBQWlFO0FBQ2pFLDBCQUE0QjtBQVE1QjtJQUtJLG1DQUFxQixpQkFBb0MsRUFBVSxhQUE0QixFQUFVLGFBQTRCO1FBQXJJLGlCQVlDO1FBWm9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ2pJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEdBQUcsY0FBUSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBTSxvQkFBb0IsR0FBRyxXQUFXLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakcsS0FBSSxDQUFDLFNBQVMsR0FBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNsRixLQUFJLENBQUMsU0FBUyxHQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ2xGLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDekIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUN6QixhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVNLDJDQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLCtDQUFXLEdBQWxCO1FBQ0ksSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztRQUN2QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0lBRUwsQ0FBQztJQXZDUSx5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLHdEQUF3RDtZQUNyRSxTQUFTLEVBQUUsQ0FBQyx1REFBdUQsQ0FBQztTQUN2RSxDQUFDO3lDQU8wQyxzQ0FBaUIsRUFBeUIsOEJBQWEsRUFBeUIsOEJBQWE7T0FMNUgseUJBQXlCLENBd0NyQztJQUFELGdDQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xyXG5pbXBvcnQge1RleHRGaWVsZH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJuZXctcHVyY2hhc2UtbW9kYWxcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL21vZGFsL25ldy1wdXJjaGFzZS1tb2RhbC9uZXctcHVyY2hhc2UtbW9kYWwuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9tb2RhbC9uZXctcHVyY2hhc2UtbW9kYWwvbmV3LXB1cmNoYXNlLW1vZGFsLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld1B1cmNoYXNlTW9kYWxDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBuYW1lRmllbGQ6IFRleHRGaWVsZDtcclxuICAgIHByaXZhdGUgY29zdEZpZWxkOiBUZXh0RmllbGQ7XHJcbiAgICBwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlLCBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgYnVkZ2V0U2VydmljZTogQnVkZ2V0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9uTmV3UHVyY2hhc2VQb3B1cCA9ICgpID0+IHsgdGhpcy5vblBvcHVwKCk7IH07XHJcbiAgICAgICAgY29uc3QgZmllbGRGaW5kaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UgJiYgZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKCduZXdQdXJjaGFzZUNvc3RGaWVsZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVGaWVsZCAgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ25ld1B1cmNoYXNlTmFtZUZpZWxkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvc3RGaWVsZCAgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ25ld1B1cmNoYXNlQ29zdEZpZWxkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVGaWVsZC50ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvc3RGaWVsZC50ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGZpZWxkRmluZGluZ0ludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblBvcHVwKCkge1xyXG4gICAgICAgIHRoaXMubmFtZUZpZWxkLnRleHQgPSAnJztcclxuICAgICAgICB0aGlzLmNvc3RGaWVsZC50ZXh0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICB0aGlzLm5hbWVGaWVsZC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN1Ym1pdFRhcCgpIHtcclxuICAgICAgICBjb25zdCBuYW1lU3VibWlzc2lvbiA9IHRoaXMubmFtZUZpZWxkLnRleHQ7XHJcbiAgICAgICAgY29uc3QgY29zdFN1Ym1pc3Npb24gPSB0aGlzLmNvc3RGaWVsZC50ZXh0O1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VOYW1lKG5hbWVTdWJtaXNzaW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdJbnZhbGlkIE5hbWUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZVB1cmNoYXNlQ29zdChjb3N0U3VibWlzc2lvbiwgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0ludmFsaWQgQ29zdCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLm1ha2VQdXJjaGFzZShuYW1lU3VibWlzc2lvbiwgXy50b051bWJlcihjb3N0U3VibWlzc2lvbikpO1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufSJdfQ==