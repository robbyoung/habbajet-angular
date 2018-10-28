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
var habbajet_service_1 = require("../../../services/habbajet.service");
var DeletionModalComponent = /** @class */ (function () {
    function DeletionModalComponent(dialogService, budgetService, habbajetService) {
        this.dialogService = dialogService;
        this.budgetService = budgetService;
        this.habbajetService = habbajetService;
        this.deleteType = this.dialogService.typeOfDeletion;
        if (this.deleteType === dialog_service_1.DeletionTypes.Purchase) {
            this.title = 'Delete Purchase';
            this.deletionText = 'This will permanently delete the purchase.';
            this.buttonClass = 'button red';
            this.headingClass = 'heading';
        }
        else {
            this.title = 'Delete Habbajet';
            this.habbajetId = this.dialogService.activeHabbajetId;
            this.deletionText = 'This will permanently delete the habbajet.';
            var color = this.habbajetService.getHabbajetColor(this.habbajetId);
            this.buttonClass = 'button ' + color;
            this.headingClass = 'heading ' + color;
        }
        this.purchase = dialogService.activePurchase;
    }
    DeletionModalComponent.prototype.onConfirmTap = function () {
        if (this.deleteType === dialog_service_1.DeletionTypes.Purchase) {
            this.purchase.cost = '$0.00';
            this.budgetService.correctPurchase(this.purchase.date, '', '0');
        }
        else {
            this.habbajetService.deleteHabbajet(this.habbajetId);
        }
        this.dialogService.fadeOut();
    };
    DeletionModalComponent.prototype.onCancelTap = function () {
        this.dialogService.fadeOut();
    };
    DeletionModalComponent = __decorate([
        core_1.Component({
            selector: 'deletion-modal',
            templateUrl: 'views/modal/deletion-modal/deletion-modal.html',
            styleUrls: ['views/modal/deletion-modal/deletion-modal.css',
                'app.css'],
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService, budget_service_1.BudgetService,
            habbajet_service_1.HabbajetService])
    ], DeletionModalComponent);
    return DeletionModalComponent;
}());
exports.DeletionModalComponent = DeletionModalComponent;
