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
var dialog_service_1 = require("./dialog.service");
var habbajet_service_1 = require("./habbajet.service");
var NAME_ERROR = 'Habbajet name must be between 1 and 20 characters long.';
var VALUE_ERROR = 'Habbajet value must be a number between 1 and 10,000.';
var SLACK_ERROR = 'Habbajet slack must be a number between 0 and 6.';
var FACTOR_ERROR = 'Habbajet factor must be a number between 1 and 10.';
var COLOR_ERROR = 'Habbajet color is invalid';
var VALID_SUBMISSION = 'Habbajet properties are valid';
var PURCHASE_NAME_ERROR = 'Purchase name is invalid';
var PURCHASE_COST_ERROR = 'Purchase cost is invalid';
var ValidationService = /** @class */ (function () {
    function ValidationService(habbajetService, budgetService, dialogService) {
        this.habbajetService = habbajetService;
        this.budgetService = budgetService;
        this.dialogService = dialogService;
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
            this.dialogService.alertDialog('Invalid Submission', result, 'OK');
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
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService, budget_service_1.BudgetService,
            dialog_service_1.DialogService])
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDBCQUE0QjtBQUM1QixtREFBaUQ7QUFDakQsbURBQWlEO0FBQ2pELHVEQUFxRDtBQVVyRCxJQUFNLFVBQVUsR0FBVyx5REFBeUQsQ0FBQztBQUNyRixJQUFNLFdBQVcsR0FBVyx1REFBdUQsQ0FBQztBQUNwRixJQUFNLFdBQVcsR0FBVyxrREFBa0QsQ0FBQztBQUMvRSxJQUFNLFlBQVksR0FBVyxvREFBb0QsQ0FBQztBQUNsRixJQUFNLFdBQVcsR0FBVywyQkFBMkIsQ0FBQztBQUN4RCxJQUFNLGdCQUFnQixHQUFXLCtCQUErQixDQUFDO0FBRWpFLElBQU0sbUJBQW1CLEdBQVcsMEJBQTBCLENBQUM7QUFDL0QsSUFBTSxtQkFBbUIsR0FBVywwQkFBMEIsQ0FBQztBQUcvRDtJQUlJLDJCQUFvQixlQUFnQyxFQUFVLGFBQTRCLEVBQ3RFLGFBQTRCO1FBRDVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3RFLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSx5Q0FBYSxHQUFwQixVQUFxQixLQUFhLEVBQUUsS0FBYTtRQUM3QyxRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLEtB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STdCO0lBQUQsd0JBQUM7Q0FBQSxBQXhJRCxJQXdJQztBQXhJWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQnVkZ2V0U2VydmljZSB9IGZyb20gJy4vYnVkZ2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9kaWFsb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gJy4vaGFiYmFqZXQuc2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgSGFiYmFqZXRTdWJtaXNzaW9uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBzbGFjazogbnVtYmVyO1xyXG4gICAgZmFjdG9yOiBudW1iZXI7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBOQU1FX0VSUk9SOiBzdHJpbmcgPSAnSGFiYmFqZXQgbmFtZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgMjAgY2hhcmFjdGVycyBsb25nLic7XHJcbmNvbnN0IFZBTFVFX0VSUk9SOiBzdHJpbmcgPSAnSGFiYmFqZXQgdmFsdWUgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIDEgYW5kIDEwLDAwMC4nO1xyXG5jb25zdCBTTEFDS19FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IHNsYWNrIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA2Lic7XHJcbmNvbnN0IEZBQ1RPUl9FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IGZhY3RvciBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gMSBhbmQgMTAuJztcclxuY29uc3QgQ09MT1JfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCBjb2xvciBpcyBpbnZhbGlkJztcclxuY29uc3QgVkFMSURfU1VCTUlTU0lPTjogc3RyaW5nID0gJ0hhYmJhamV0IHByb3BlcnRpZXMgYXJlIHZhbGlkJztcclxuXHJcbmNvbnN0IFBVUkNIQVNFX05BTUVfRVJST1I6IHN0cmluZyA9ICdQdXJjaGFzZSBuYW1lIGlzIGludmFsaWQnO1xyXG5jb25zdCBQVVJDSEFTRV9DT1NUX0VSUk9SOiBzdHJpbmcgPSAnUHVyY2hhc2UgY29zdCBpcyBpbnZhbGlkJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBzdWJtaXRCdXR0b25Db2xvcjogeyBjb2xvcjogc3RyaW5nIH07XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTdWJtaXNzaW9uOiBIYWJiYWpldFN1Ym1pc3Npb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSwgcHJpdmF0ZSBidWRnZXRTZXJ2aWNlOiBCdWRnZXRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEN1cnJlbnRTdWJtaXNzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlSW5wdXQoZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHN3aXRjaCAoZmllbGQpIHtcclxuICAgICAgICAgICAgY2FzZSAnTmFtZSc6IHJldHVybiB0aGlzLnZhbGlkYXRlTmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1ZhbHVlJzogcmV0dXJuIHRoaXMudmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NsYWNrJzogcmV0dXJuIHRoaXMudmFsaWRhdGVTbGFjayh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0ZhY3Rvcic6IHJldHVybiB0aGlzLnZhbGlkYXRlRmFjdG9yKHZhbHVlKTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVOYW1lKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQgfHwgbmFtZS5sZW5ndGggPT09IDAgfHwgbmFtZS5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlVmFsdWUodmFsdWVTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcih2YWx1ZVN0cmluZyk7XHJcbiAgICAgICAgaWYgKCFfLmlzRmluaXRlKHZhbHVlKSB8fCB2YWx1ZSA8PSAwIHx8IHZhbHVlID4gMTAwMDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZUZhY3RvcihmYWN0b3JTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGZhY3RvciA9IF8udG9OdW1iZXIoZmFjdG9yU3RyaW5nKTtcclxuICAgICAgICBpZiAoIV8uaXNGaW5pdGUoZmFjdG9yKSB8fCBmYWN0b3IgPD0gMSB8fCBmYWN0b3IgPiAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmZhY3RvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uZmFjdG9yID0gZmFjdG9yO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlU2xhY2soc2xhY2tTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHNsYWNrID0gXy50b051bWJlcihzbGFja1N0cmluZyk7XHJcbiAgICAgICAgaWYgKCFfLmlzRmluaXRlKHNsYWNrKSB8fCBzbGFjayA8IDAgfHwgc2xhY2sgPiA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uc2xhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnNsYWNrID0gc2xhY2s7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVDb2xvcihjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uQ29sb3IuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudmFsaWRhdGVTdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gVkFMSURfU1VCTUlTU0lPTikge1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5uZXdIYWJiYWpldChcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24ubmFtZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24udmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmZhY3RvcixcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uc2xhY2ssXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmNvbG9yLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0Q3VycmVudFN1Ym1pc3Npb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuYWxlcnREaWFsb2coXHJcbiAgICAgICAgICAgICAgICAnSW52YWxpZCBTdWJtaXNzaW9uJyxcclxuICAgICAgICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICAgICAgICAgICdPSycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXRDdXJyZW50U3VibWlzc2lvbigpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbkNvbG9yID0geyBjb2xvcjogJ3JlZCcgfTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uID0ge1xyXG4gICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHNsYWNrOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGZhY3RvcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBjb2xvcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlUHVyY2hhc2VOYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFuYW1lLmxlbmd0aCB8fCBuYW1lLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQVVJDSEFTRV9OQU1FX0VSUk9SO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVQdXJjaGFzZUNvc3QoY29zdFN0cmluZzogc3RyaW5nLCBjYW5CZVplcm86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGNvc3QgPSBfLnRvTnVtYmVyKGNvc3RTdHJpbmcpO1xyXG4gICAgICAgIGlmICghaXNGaW5pdGUoY29zdCkgfHwgY29zdCA8IDAgfHwgY29zdCA+IDk5OTkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBVUkNIQVNFX0NPU1RfRVJST1I7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb3N0ID09PSAwICYmICFjYW5CZVplcm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBVUkNIQVNFX0NPU1RfRVJST1I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXRQdXJjaGFzZShuYW1lOiBzdHJpbmcsIGNvc3Q6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlUHVyY2hhc2VOYW1lKG5hbWUpIHx8IHRoaXMudmFsaWRhdGVQdXJjaGFzZUNvc3QoY29zdCwgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJpZWQgdG8gc3VibWl0IGFuIGludmFsaWQgcHVyY2hhc2UnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5tYWtlUHVyY2hhc2UobmFtZSwgXy50b051bWJlcihjb3N0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVN1Ym1pc3Npb24oKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVOYW1lKHRoaXMuY3VycmVudFN1Ym1pc3Npb24ubmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5BTUVfRVJST1I7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZGF0ZVZhbHVlKHRoaXMuY3VycmVudFN1Ym1pc3Npb24udmFsdWUgKyAnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZBTFVFX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRhdGVGYWN0b3IodGhpcy5jdXJyZW50U3VibWlzc2lvbi5mYWN0b3IgKyAnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEZBQ1RPUl9FUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkYXRlU2xhY2sodGhpcy5jdXJyZW50U3VibWlzc2lvbi5zbGFjayArICcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gU0xBQ0tfRVJST1I7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZGF0ZUNvbG9yKHRoaXMuY3VycmVudFN1Ym1pc3Npb24uY29sb3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDT0xPUl9FUlJPUjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gVkFMSURfU1VCTUlTU0lPTjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19