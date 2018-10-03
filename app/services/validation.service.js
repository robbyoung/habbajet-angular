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
var budget_service_1 = require("./budget.service");
var habbajet_service_1 = require("./habbajet.service");
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
        this.submitButtonColor = { color: 'red' };
        this.currentSubmission = {
            name: undefined,
            value: undefined,
            slack: undefined,
            factor: undefined,
            color: undefined,
        };
    };
    ValidationService.prototype.validatePurchaseName = function (name) {
        if (!name.length || name.length > 20) {
            return PURCHASE_NAME_ERROR;
        }
    };
    ValidationService.prototype.validatePurchaseCost = function (costString, canBeZero) {
        var cost = _.toNumber(costString);
        if (!isFinite(cost) || cost < 0 || cost > 9999) {
            return PURCHASE_COST_ERROR;
        }
        else if (cost === 0 && !canBeZero) {
            return PURCHASE_COST_ERROR;
        }
    };
    ValidationService.prototype.submitPurchase = function (name, cost) {
        if (this.validatePurchaseName(name) || this.validatePurchaseCost(cost, false)) {
            throw new Error('Tried to submit an invalid purchase');
        }
        this.budgetService.makePurchase(name, _.toNumber(cost));
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
    ValidationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService, budget_service_1.BudgetService])
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDBCQUE0QjtBQUM1QixtREFBaUQ7QUFDakQsdURBQXFEO0FBVXJELElBQU0sVUFBVSxHQUFXLDBCQUEwQixDQUFDO0FBQ3RELElBQU0sV0FBVyxHQUFXLDJCQUEyQixDQUFDO0FBQ3hELElBQU0sV0FBVyxHQUFXLDJCQUEyQixDQUFDO0FBQ3hELElBQU0sWUFBWSxHQUFXLDRCQUE0QixDQUFDO0FBQzFELElBQU0sV0FBVyxHQUFXLDJCQUEyQixDQUFDO0FBQ3hELElBQU0sZ0JBQWdCLEdBQVcsK0JBQStCLENBQUM7QUFFakUsSUFBTSxtQkFBbUIsR0FBVywwQkFBMEIsQ0FBQztBQUMvRCxJQUFNLG1CQUFtQixHQUFXLDBCQUEwQixDQUFDO0FBRy9EO0lBSUksMkJBQW9CLGVBQWdDLEVBQVUsYUFBNEI7UUFBdEUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDdEYsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLHlDQUFhLEdBQXBCLFVBQXFCLEtBQWEsRUFBRSxLQUFhO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxLQUFLLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFD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LENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN4QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDNUIsQ0FBQztJQUNMLENBQUM7SUFuSVEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBSzRCLGtDQUFlLEVBQXlCLDhCQUFhO09BSmpGLGlCQUFpQixDQW9JN0I7SUFBRCx3QkFBQztDQUFBLEFBcElELElBb0lDO0FBcElZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlIH0gZnJvbSAnLi9idWRnZXQuc2VydmljZSc7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gJy4vaGFiYmFqZXQuc2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgSGFiYmFqZXRTdWJtaXNzaW9uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBzbGFjazogbnVtYmVyO1xyXG4gICAgZmFjdG9yOiBudW1iZXI7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBOQU1FX0VSUk9SOiBzdHJpbmcgPSAnSGFiYmFqZXQgbmFtZSBpcyBpbnZhbGlkJztcclxuY29uc3QgVkFMVUVfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCB2YWx1ZSBpcyBpbnZhbGlkJztcclxuY29uc3QgU0xBQ0tfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCBzbGFjayBpcyBpbnZhbGlkJztcclxuY29uc3QgRkFDVE9SX0VSUk9SOiBzdHJpbmcgPSAnSGFiYmFqZXQgZmFjdG9yIGlzIGludmFsaWQnO1xyXG5jb25zdCBDT0xPUl9FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IGNvbG9yIGlzIGludmFsaWQnO1xyXG5jb25zdCBWQUxJRF9TVUJNSVNTSU9OOiBzdHJpbmcgPSAnSGFiYmFqZXQgcHJvcGVydGllcyBhcmUgdmFsaWQnO1xyXG5cclxuY29uc3QgUFVSQ0hBU0VfTkFNRV9FUlJPUjogc3RyaW5nID0gJ1B1cmNoYXNlIG5hbWUgaXMgaW52YWxpZCc7XHJcbmNvbnN0IFBVUkNIQVNFX0NPU1RfRVJST1I6IHN0cmluZyA9ICdQdXJjaGFzZSBjb3N0IGlzIGludmFsaWQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblNlcnZpY2Uge1xyXG4gICAgcHVibGljIHN1Ym1pdEJ1dHRvbkNvbG9yOiB7IGNvbG9yOiBzdHJpbmcgfTtcclxuICAgIHByaXZhdGUgY3VycmVudFN1Ym1pc3Npb246IEhhYmJhamV0U3VibWlzc2lvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlLCBwcml2YXRlIGJ1ZGdldFNlcnZpY2U6IEJ1ZGdldFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnJlc2V0Q3VycmVudFN1Ym1pc3Npb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVJbnB1dChmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgc3dpdGNoIChmaWVsZCkge1xyXG4gICAgICAgICAgICBjYXNlICdOYW1lJzogcmV0dXJuIHRoaXMudmFsaWRhdGVOYW1lKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAnVmFsdWUnOiByZXR1cm4gdGhpcy52YWxpZGF0ZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAnU2xhY2snOiByZXR1cm4gdGhpcy52YWxpZGF0ZVNsYWNrKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAnRmFjdG9yJzogcmV0dXJuIHRoaXMudmFsaWRhdGVGYWN0b3IodmFsdWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZU5hbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCB8fCBuYW1lLmxlbmd0aCA9PT0gMCB8fCBuYW1lLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24ubmFtZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24ubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVWYWx1ZSh2YWx1ZVN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBfLnRvTnVtYmVyKHZhbHVlU3RyaW5nKTtcclxuICAgICAgICBpZiAoIV8uaXNGaW5pdGUodmFsdWUpIHx8IHZhbHVlIDw9IDAgfHwgdmFsdWUgPiAxMDAwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlRmFjdG9yKGZhY3RvclN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yID0gXy50b051bWJlcihmYWN0b3JTdHJpbmcpO1xyXG4gICAgICAgIGlmICghXy5pc0Zpbml0ZShmYWN0b3IpIHx8IGZhY3RvciA8PSAxIHx8IGZhY3RvciA+IDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uZmFjdG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5mYWN0b3IgPSBmYWN0b3I7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVTbGFjayhzbGFja1N0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qgc2xhY2sgPSBfLnRvTnVtYmVyKHNsYWNrU3RyaW5nKTtcclxuICAgICAgICBpZiAoIV8uaXNGaW5pdGUoc2xhY2spIHx8IHNsYWNrIDwgMCB8fCBzbGFjayA+IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5zbGFjayA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uc2xhY2sgPSBzbGFjaztcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZUNvbG9yKGNvbG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b25Db2xvci5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy52YWxpZGF0ZVN1Ym1pc3Npb24oKTtcclxuICAgICAgICBpZiAocmVzdWx0ID09PSBWQUxJRF9TVUJNSVNTSU9OKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLm5ld0hhYmJhamV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uZmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5zbGFjayxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uY29sb3IsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRDdXJyZW50U3VibWlzc2lvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldEN1cnJlbnRTdWJtaXNzaW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uQ29sb3IgPSB7IGNvbG9yOiAncmVkJyB9O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24gPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgc2xhY2s6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZmFjdG9yOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGNvbG9yOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVQdXJjaGFzZU5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIW5hbWUubGVuZ3RoIHx8IG5hbWUubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBVUkNIQVNFX05BTUVfRVJST1I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZVB1cmNoYXNlQ29zdChjb3N0U3RyaW5nOiBzdHJpbmcsIGNhbkJlWmVybzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgY29zdCA9IF8udG9OdW1iZXIoY29zdFN0cmluZyk7XHJcbiAgICAgICAgaWYgKCFpc0Zpbml0ZShjb3N0KSB8fCBjb3N0IDwgMCB8fCBjb3N0ID4gOTk5OSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUFVSQ0hBU0VfQ09TVF9FUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKGNvc3QgPT09IDAgJiYgIWNhbkJlWmVybykge1xyXG4gICAgICAgICAgICByZXR1cm4gUFVSQ0hBU0VfQ09TVF9FUlJPUjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Ym1pdFB1cmNoYXNlKG5hbWU6IHN0cmluZywgY29zdDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVQdXJjaGFzZU5hbWUobmFtZSkgfHwgdGhpcy52YWxpZGF0ZVB1cmNoYXNlQ29zdChjb3N0LCBmYWxzZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmllZCB0byBzdWJtaXQgYW4gaW52YWxpZCBwdXJjaGFzZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLm1ha2VQdXJjaGFzZShuYW1lLCBfLnRvTnVtYmVyKGNvc3QpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlU3VibWlzc2lvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZU5hbWUodGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTkFNRV9FUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkYXRlVmFsdWUodGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSArICcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVkFMVUVfRVJST1I7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZGF0ZUZhY3Rvcih0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmZhY3RvciArICcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRkFDVE9SX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRhdGVTbGFjayh0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnNsYWNrICsgJycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTTEFDS19FUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkYXRlQ29sb3IodGhpcy5jdXJyZW50U3VibWlzc2lvbi5jb2xvcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENPTE9SX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWQUxJRF9TVUJNSVNTSU9OO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=