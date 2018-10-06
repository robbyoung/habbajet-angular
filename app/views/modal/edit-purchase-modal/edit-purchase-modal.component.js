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
