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
var validation_service_1 = require("../../../../services/validation.service");
var HabbajetSubmitButtonComponent = /** @class */ (function () {
    function HabbajetSubmitButtonComponent(validationService) {
        this.validationService = validationService;
    }
    HabbajetSubmitButtonComponent.prototype.ngOnInit = function () {
        this.buttonColor = this.validationService.submitButtonColor;
    };
    HabbajetSubmitButtonComponent.prototype.onSubmitTap = function () {
        this.validationService.submit();
    };
    HabbajetSubmitButtonComponent = __decorate([
        core_1.Component({
            selector: 'habbajet-submit-button',
            templateUrl: 'views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.html',
            styleUrls: ['views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.css',
                'app.css'],
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], HabbajetSubmitButtonComponent);
    return HabbajetSubmitButtonComponent;
}());
exports.HabbajetSubmitButtonComponent = HabbajetSubmitButtonComponent;
