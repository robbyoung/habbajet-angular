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
var validation_service_1 = require("../../../../services/validation.service");
var HabbajetColorPickerComponent = /** @class */ (function () {
    function HabbajetColorPickerComponent(validationService) {
        this.validationService = validationService;
    }
    HabbajetColorPickerComponent.prototype.ngOnInit = function () {
        this.colors = [
            { name: 'red', class: '' },
            { name: 'blue', class: '' },
            { name: 'green', class: '' },
        ];
        this.onColorTap(0);
    };
    HabbajetColorPickerComponent.prototype.onColorTap = function (index) {
        if (index < 0 || index >= this.colors.length) {
            return;
        }
        var selectedColor = this.colors[index];
        this.validationService.validateColor(selectedColor.name);
        _.each(this.colors, function (c) {
            c.class = 'colorChoice ' + c.name +
                (c.name === selectedColor.name ? ' selected' : '');
        });
    };
    HabbajetColorPickerComponent = __decorate([
        core_1.Component({
            selector: "habbajet-color-picker",
            templateUrl: "views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.html",
            styleUrls: ["views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.css"]
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], HabbajetColorPickerComponent);
    return HabbajetColorPickerComponent;
}());
exports.HabbajetColorPickerComponent = HabbajetColorPickerComponent;
