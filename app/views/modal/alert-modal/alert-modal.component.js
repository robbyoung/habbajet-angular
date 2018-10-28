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
var AlertModalComponent = /** @class */ (function () {
    function AlertModalComponent(dialogService) {
        this.dialogService = dialogService;
        var contents = dialogService.alertContents;
        this.title = contents.title;
        this.text = contents.text;
        this.okButtonText = contents.okButtonText;
    }
    AlertModalComponent.prototype.onSubmitTap = function () {
        this.dialogService.fadeOut();
    };
    AlertModalComponent = __decorate([
        core_1.Component({
            selector: 'alert-modal',
            templateUrl: 'views/modal/alert-modal/alert-modal.html',
            styleUrls: ['views/modal/alert-modal/alert-modal.css'],
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService])
    ], AlertModalComponent);
    return AlertModalComponent;
}());
exports.AlertModalComponent = AlertModalComponent;
