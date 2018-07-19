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
var habbajet_service_1 = require("./habbajet.service");
var budget_service_1 = require("./budget.service");
var NAME_ERROR = 'Habbajet name is invalid';
var VALUE_ERROR = 'Habbajet value is invalid';
var SLACK_ERROR = 'Habbajet slack is invalid';
var FACTOR_ERROR = 'Habbajet factor is invalid';
var COLOR_ERROR = 'Habbajet color is invalid';
var VALID_SUBMISSION = 'Habbajet properties are valid';
var PURCHASE_NAME_ERROR = 'Purchase name is invalid';
var PURCHASE_COST_ERROR = 'Purchase cost is invalid';
var ValidationService = /** @class */ (function () {
    function ValidationService(habbajetService, budgetService) {
        this.habbajetService = habbajetService;
        this.budgetService = budgetService;
        this.resetCurrentSubmission();
    }
    ValidationService.prototype.validateInput = function (field, value) {
        switch (field) {
            case 'Name': return this.validateName(value);
            case 'Value': return this.validateValue(value);
            case 'Slack': return this.validateSlack(value);
            case 'Factor': return this.validateFactor(value);
            default: return false;
        }
    };
    ValidationService.prototype.validateName = function (name) {
        if (name === undefined || name.length === 0 || name.length > 20) {
            this.currentSubmission.name = undefined;
            return false;
        }
        else {
            this.currentSubmission.name = name;
            return true;
        }
    };
    ValidationService.prototype.validateValue = function (valueString) {
        var value = _.toNumber(valueString);
        if (!_.isFinite(value) || value <= 0 || value > 10000) {
            this.currentSubmission.value = undefined;
            return false;
        }
        else {
            this.currentSubmission.value = value;
            return true;
        }
    };
    ValidationService.prototype.validateFactor = function (factorString) {
        var factor = _.toNumber(factorString);
        if (!_.isFinite(factor) || factor <= 1 || factor > 10) {
            this.currentSubmission.factor = undefined;
            return false;
        }
        else {
            this.currentSubmission.factor = factor;
            return true;
        }
    };
    ValidationService.prototype.validateSlack = function (slackString) {
        var slack = _.toNumber(slackString);
        if (!_.isFinite(slack) || slack < 0 || slack > 6) {
            this.currentSubmission.slack = undefined;
            return false;
        }
        else {
            this.currentSubmission.slack = slack;
            return true;
        }
    };
    ValidationService.prototype.validateColor = function (color) {
        this.currentSubmission.color = color;
        this.submitButtonColor.color = color;
        return true;
    };
    ValidationService.prototype.submit = function () {
        var result = this.validateSubmission();
        if (result === VALID_SUBMISSION) {
            this.habbajetService.newHabbajet(this.currentSubmission.name, this.currentSubmission.value, this.currentSubmission.factor, this.currentSubmission.slack, this.currentSubmission.color);
            this.resetCurrentSubmission();
        }
        else {
            alert(result);
        }
    };
    ValidationService.prototype.resetCurrentSubmission = function () {
        this.submitButtonColor = { color: "red" };
        this.currentSubmission = {
            name: undefined,
            value: undefined,
            slack: undefined,
            factor: undefined,
            color: undefined,
        };
    };
    ValidationService.prototype.validateSubmission = function () {
        if (!this.validateName(this.currentSubmission.name)) {
            return NAME_ERROR;
        }
        else if (!this.validateValue(this.currentSubmission.value + '')) {
            return VALUE_ERROR;
        }
        else if (!this.validateFactor(this.currentSubmission.factor + '')) {
            return FACTOR_ERROR;
        }
        else if (!this.validateSlack(this.currentSubmission.slack + '')) {
            return SLACK_ERROR;
        }
        else if (!this.validateColor(this.currentSubmission.color)) {
            return COLOR_ERROR;
        }
        else {
            return VALID_SUBMISSION;
        }
    };
    ValidationService.prototype.validatePurchaseName = function (name) {
        if (!name.length || name.length > 20) {
            return PURCHASE_NAME_ERROR;
        }
    };
    ValidationService.prototype.validatePurchaseCost = function (costString) {
        var cost = _.toNumber(costString);
        if (!isFinite(cost) || cost <= 0 || cost > 9999) {
            return PURCHASE_COST_ERROR;
        }
    };
    ValidationService.prototype.submitPurchase = function (name, cost) {
        if (this.validatePurchaseName(name) || this.validatePurchaseCost(cost)) {
            throw new Error('Tried to submit an invalid purchase');
        }
        this.budgetService.makePurchase(name, _.toNumber(cost));
    };
    ValidationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService, budget_service_1.BudgetService])
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDBCQUE0QjtBQUM1Qix1REFBcUQ7QUFDckQsbURBQWlEO0FBVWpELElBQU0sVUFBVSxHQUFXLDBCQUEwQixDQUFDO0FBQ3RELElBQU0sV0FBVyxHQUFXLDJCQUEyQixDQUFDO0FBQ3hELElBQU0sV0FBVyxHQUFXLDJCQUEyQixDQUFDO0FBQ3hELElBQU0sWUFBWSxHQUFXLDRCQUE0QixDQUFDO0FBQzFELElBQU0sV0FBVyxHQUFXLDJCQUEyQixDQUFDO0FBQ3hELElBQU0sZ0JBQWdCLEdBQVcsK0JBQStCLENBQUM7QUFFakUsSUFBTSxtQkFBbUIsR0FBVywwQkFBMEIsQ0FBQztBQUMvRCxJQUFNLG1CQUFtQixHQUFXLDBCQUEwQixDQUFDO0FBRy9EO0lBSUksMkJBQW9CLGVBQWdDLEVBQVUsYUFBNEI7UUFBdEUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDdEYsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLHlDQUFhLEdBQXBCLFVBQXFCLEtBQWEsRUFBRSxLQUFhO1FBQzdDLE1BQU0sQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWCxLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxLQUFLLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFD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QixDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBRU0sMENBQWMsR0FBckIsVUFBc0IsSUFBWSxFQUFFLElBQVk7UUFDNUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFqSVEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBSzRCLGtDQUFlLEVBQXlCLDhCQUFhO09BSmpGLGlCQUFpQixDQWtJN0I7SUFBRCx3QkFBQztDQUFBLEFBbElELElBa0lDO0FBbElZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQnVkZ2V0U2VydmljZSB9IGZyb20gXCIuL2J1ZGdldC5zZXJ2aWNlXCI7XHJcblxyXG5pbnRlcmZhY2UgSGFiYmFqZXRTdWJtaXNzaW9uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBzbGFjazogbnVtYmVyO1xyXG4gICAgZmFjdG9yOiBudW1iZXI7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBOQU1FX0VSUk9SOiBzdHJpbmcgPSAnSGFiYmFqZXQgbmFtZSBpcyBpbnZhbGlkJztcclxuY29uc3QgVkFMVUVfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCB2YWx1ZSBpcyBpbnZhbGlkJztcclxuY29uc3QgU0xBQ0tfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCBzbGFjayBpcyBpbnZhbGlkJztcclxuY29uc3QgRkFDVE9SX0VSUk9SOiBzdHJpbmcgPSAnSGFiYmFqZXQgZmFjdG9yIGlzIGludmFsaWQnO1xyXG5jb25zdCBDT0xPUl9FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IGNvbG9yIGlzIGludmFsaWQnO1xyXG5jb25zdCBWQUxJRF9TVUJNSVNTSU9OOiBzdHJpbmcgPSAnSGFiYmFqZXQgcHJvcGVydGllcyBhcmUgdmFsaWQnO1xyXG5cclxuY29uc3QgUFVSQ0hBU0VfTkFNRV9FUlJPUjogc3RyaW5nID0gJ1B1cmNoYXNlIG5hbWUgaXMgaW52YWxpZCc7XHJcbmNvbnN0IFBVUkNIQVNFX0NPU1RfRVJST1I6IHN0cmluZyA9ICdQdXJjaGFzZSBjb3N0IGlzIGludmFsaWQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U3VibWlzc2lvbjogSGFiYmFqZXRTdWJtaXNzaW9uO1xyXG4gICAgcHVibGljIHN1Ym1pdEJ1dHRvbkNvbG9yOiB7IGNvbG9yOiBzdHJpbmcgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlLCBwcml2YXRlIGJ1ZGdldFNlcnZpY2U6IEJ1ZGdldFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnJlc2V0Q3VycmVudFN1Ym1pc3Npb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVJbnB1dChmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgc3dpdGNoKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ05hbWUnOiByZXR1cm4gdGhpcy52YWxpZGF0ZU5hbWUodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICdWYWx1ZSc6IHJldHVybiB0aGlzLnZhbGlkYXRlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICdTbGFjayc6IHJldHVybiB0aGlzLnZhbGlkYXRlU2xhY2sodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICdGYWN0b3InOiByZXR1cm4gdGhpcy52YWxpZGF0ZUZhY3Rvcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlTmFtZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZihuYW1lID09PSB1bmRlZmluZWQgfHwgbmFtZS5sZW5ndGggPT09IDAgfHwgbmFtZS5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlVmFsdWUodmFsdWVTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcih2YWx1ZVN0cmluZyk7XHJcbiAgICAgICAgaWYoIV8uaXNGaW5pdGUodmFsdWUpIHx8IHZhbHVlIDw9IDAgfHwgdmFsdWUgPiAxMDAwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlRmFjdG9yKGZhY3RvclN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yID0gXy50b051bWJlcihmYWN0b3JTdHJpbmcpO1xyXG4gICAgICAgIGlmKCFfLmlzRmluaXRlKGZhY3RvcikgfHwgZmFjdG9yIDw9IDEgfHwgZmFjdG9yID4gMTApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5mYWN0b3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmZhY3RvciA9IGZhY3RvcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZVNsYWNrKHNsYWNrU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBzbGFjayA9IF8udG9OdW1iZXIoc2xhY2tTdHJpbmcpO1xyXG4gICAgICAgIGlmKCFfLmlzRmluaXRlKHNsYWNrKSB8fCBzbGFjayA8IDAgfHwgc2xhY2sgPiA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uc2xhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnNsYWNrID0gc2xhY2s7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVDb2xvcihjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uQ29sb3IuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudmFsaWRhdGVTdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgaWYocmVzdWx0ID09PSBWQUxJRF9TVUJNSVNTSU9OKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLm5ld0hhYmJhamV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uZmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5zbGFjayxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uY29sb3IsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRDdXJyZW50U3VibWlzc2lvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldEN1cnJlbnRTdWJtaXNzaW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uQ29sb3IgPSB7IGNvbG9yOiBcInJlZFwiIH07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbiA9IHtcclxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBzbGFjazogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBmYWN0b3I6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY29sb3I6IHVuZGVmaW5lZCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVTdWJtaXNzaW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlTmFtZSh0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOQU1FX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRhdGVWYWx1ZSh0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnZhbHVlICsgJycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWQUxVRV9FUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkYXRlRmFjdG9yKHRoaXMuY3VycmVudFN1Ym1pc3Npb24uZmFjdG9yICsgJycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBGQUNUT1JfRVJST1I7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZGF0ZVNsYWNrKHRoaXMuY3VycmVudFN1Ym1pc3Npb24uc2xhY2sgKyAnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNMQUNLX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRhdGVDb2xvcih0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmNvbG9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ09MT1JfRVJST1I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZBTElEX1NVQk1JU1NJT047XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVQdXJjaGFzZU5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZighbmFtZS5sZW5ndGggfHwgbmFtZS5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUFVSQ0hBU0VfTkFNRV9FUlJPUjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlUHVyY2hhc2VDb3N0KGNvc3RTdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgY29zdCA9IF8udG9OdW1iZXIoY29zdFN0cmluZyk7XHJcbiAgICAgICAgaWYoIWlzRmluaXRlKGNvc3QpIHx8IGNvc3QgPD0gMCB8fCBjb3N0ID4gOTk5OSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUFVSQ0hBU0VfQ09TVF9FUlJPUjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Ym1pdFB1cmNoYXNlKG5hbWU6IHN0cmluZywgY29zdDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYodGhpcy52YWxpZGF0ZVB1cmNoYXNlTmFtZShuYW1lKSB8fCB0aGlzLnZhbGlkYXRlUHVyY2hhc2VDb3N0KGNvc3QpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJpZWQgdG8gc3VibWl0IGFuIGludmFsaWQgcHVyY2hhc2UnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5tYWtlUHVyY2hhc2UobmFtZSwgXy50b051bWJlcihjb3N0KSk7XHJcbiAgICB9XHJcbn0iXX0=