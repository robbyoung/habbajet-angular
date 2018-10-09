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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDBCQUE0QjtBQUM1QixtREFBaUQ7QUFDakQsbURBQWlEO0FBQ2pELHVEQUFxRDtBQVVyRCxJQUFNLFVBQVUsR0FBVyx5REFBeUQsQ0FBQztBQUNyRixJQUFNLFdBQVcsR0FBVyx1REFBdUQsQ0FBQztBQUNwRixJQUFNLFdBQVcsR0FBVyxrREFBa0QsQ0FBQztBQUMvRSxJQUFNLFlBQVksR0FBVyxvREFBb0QsQ0FBQztBQUNsRixJQUFNLFdBQVcsR0FBVywyQkFBMkIsQ0FBQztBQUN4RCxJQUFNLGdCQUFnQixHQUFXLCtCQUErQixDQUFDO0FBRWpFLElBQU0sbUJBQW1CLEdBQVcsMEJBQTBCLENBQUM7QUFDL0QsSUFBTSxtQkFBbUIsR0FBVywwQkFBMEIsQ0FBQztBQUcvRDtJQUlJLDJCQUFvQixlQUFnQyxFQUFVLGFBQTRCLEVBQ3RFLGFBQTRCO1FBRDVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3RFLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSx5Q0FBYSxHQUFwQixVQUFxQixLQUFhLEVBQUUsS0FBYTtRQUM3QyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1osS0FBSyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsS0FBSyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsS0FBSyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FB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QUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUM1QixDQUFDO0lBQ0wsQ0FBQztJQXZJUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FLNEIsa0NBQWUsRUFBeUIsOEJBQWE7WUFDdkQsOEJBQWE7T0FMdkMsaUJBQWlCLENBd0k3QjtJQUFELHdCQUFDO0NBQUEsQUF4SUQsSUF3SUM7QUF4SVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tICcuL2J1ZGdldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UgfSBmcm9tICcuL2hhYmJhamV0LnNlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIEhhYmJhamV0U3VibWlzc2lvbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgc2xhY2s6IG51bWJlcjtcclxuICAgIGZhY3RvcjogbnVtYmVyO1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTkFNRV9FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IG5hbWUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDIwIGNoYXJhY3RlcnMgbG9uZy4nO1xyXG5jb25zdCBWQUxVRV9FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IHZhbHVlIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAxIGFuZCAxMCwwMDAuJztcclxuY29uc3QgU0xBQ0tfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCBzbGFjayBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNi4nO1xyXG5jb25zdCBGQUNUT1JfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCBmYWN0b3IgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIDEgYW5kIDEwLic7XHJcbmNvbnN0IENPTE9SX0VSUk9SOiBzdHJpbmcgPSAnSGFiYmFqZXQgY29sb3IgaXMgaW52YWxpZCc7XHJcbmNvbnN0IFZBTElEX1NVQk1JU1NJT046IHN0cmluZyA9ICdIYWJiYWpldCBwcm9wZXJ0aWVzIGFyZSB2YWxpZCc7XHJcblxyXG5jb25zdCBQVVJDSEFTRV9OQU1FX0VSUk9SOiBzdHJpbmcgPSAnUHVyY2hhc2UgbmFtZSBpcyBpbnZhbGlkJztcclxuY29uc3QgUFVSQ0hBU0VfQ09TVF9FUlJPUjogc3RyaW5nID0gJ1B1cmNoYXNlIGNvc3QgaXMgaW52YWxpZCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU2VydmljZSB7XHJcbiAgICBwdWJsaWMgc3VibWl0QnV0dG9uQ29sb3I6IHsgY29sb3I6IHN0cmluZyB9O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U3VibWlzc2lvbjogSGFiYmFqZXRTdWJtaXNzaW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UsIHByaXZhdGUgYnVkZ2V0U2VydmljZTogQnVkZ2V0U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucmVzZXRDdXJyZW50U3VibWlzc2lvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZUlucHV0KGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBzd2l0Y2ggKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ05hbWUnOiByZXR1cm4gdGhpcy52YWxpZGF0ZU5hbWUodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICdWYWx1ZSc6IHJldHVybiB0aGlzLnZhbGlkYXRlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICdTbGFjayc6IHJldHVybiB0aGlzLnZhbGlkYXRlU2xhY2sodmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICdGYWN0b3InOiByZXR1cm4gdGhpcy52YWxpZGF0ZUZhY3Rvcih2YWx1ZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlTmFtZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkIHx8IG5hbWUubGVuZ3RoID09PSAwIHx8IG5hbWUubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZVZhbHVlKHZhbHVlU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IF8udG9OdW1iZXIodmFsdWVTdHJpbmcpO1xyXG4gICAgICAgIGlmICghXy5pc0Zpbml0ZSh2YWx1ZSkgfHwgdmFsdWUgPD0gMCB8fCB2YWx1ZSA+IDEwMDAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24udmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVGYWN0b3IoZmFjdG9yU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBmYWN0b3IgPSBfLnRvTnVtYmVyKGZhY3RvclN0cmluZyk7XHJcbiAgICAgICAgaWYgKCFfLmlzRmluaXRlKGZhY3RvcikgfHwgZmFjdG9yIDw9IDEgfHwgZmFjdG9yID4gMTApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5mYWN0b3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmZhY3RvciA9IGZhY3RvcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZVNsYWNrKHNsYWNrU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBzbGFjayA9IF8udG9OdW1iZXIoc2xhY2tTdHJpbmcpO1xyXG4gICAgICAgIGlmICghXy5pc0Zpbml0ZShzbGFjaykgfHwgc2xhY2sgPCAwIHx8IHNsYWNrID4gNikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnNsYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5zbGFjayA9IHNsYWNrO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlQ29sb3IoY29sb3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbkNvbG9yLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnZhbGlkYXRlU3VibWlzc2lvbigpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IFZBTElEX1NVQk1JU1NJT04pIHtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldFNlcnZpY2UubmV3SGFiYmFqZXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5mYWN0b3IsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnNsYWNrLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5jb2xvcixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEN1cnJlbnRTdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmFsZXJ0RGlhbG9nKFxyXG4gICAgICAgICAgICAgICAgJ0ludmFsaWQgU3VibWlzc2lvbicsXHJcbiAgICAgICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAnT0snKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0Q3VycmVudFN1Ym1pc3Npb24oKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b25Db2xvciA9IHsgY29sb3I6ICdyZWQnIH07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbiA9IHtcclxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBzbGFjazogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBmYWN0b3I6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY29sb3I6IHVuZGVmaW5lZCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZVB1cmNoYXNlTmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghbmFtZS5sZW5ndGggfHwgbmFtZS5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUFVSQ0hBU0VfTkFNRV9FUlJPUjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlUHVyY2hhc2VDb3N0KGNvc3RTdHJpbmc6IHN0cmluZywgY2FuQmVaZXJvOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBjb3N0ID0gXy50b051bWJlcihjb3N0U3RyaW5nKTtcclxuICAgICAgICBpZiAoIWlzRmluaXRlKGNvc3QpIHx8IGNvc3QgPCAwIHx8IGNvc3QgPiA5OTk5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQVVJDSEFTRV9DT1NUX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29zdCA9PT0gMCAmJiAhY2FuQmVaZXJvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQVVJDSEFTRV9DT1NUX0VSUk9SO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0UHVyY2hhc2UobmFtZTogc3RyaW5nLCBjb3N0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVB1cmNoYXNlTmFtZShuYW1lKSB8fCB0aGlzLnZhbGlkYXRlUHVyY2hhc2VDb3N0KGNvc3QsIGZhbHNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWVkIHRvIHN1Ym1pdCBhbiBpbnZhbGlkIHB1cmNoYXNlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2UubWFrZVB1cmNoYXNlKG5hbWUsIF8udG9OdW1iZXIoY29zdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVTdWJtaXNzaW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlTmFtZSh0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOQU1FX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRhdGVWYWx1ZSh0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnZhbHVlICsgJycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWQUxVRV9FUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkYXRlRmFjdG9yKHRoaXMuY3VycmVudFN1Ym1pc3Npb24uZmFjdG9yICsgJycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBGQUNUT1JfRVJST1I7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZGF0ZVNsYWNrKHRoaXMuY3VycmVudFN1Ym1pc3Npb24uc2xhY2sgKyAnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNMQUNLX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRhdGVDb2xvcih0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmNvbG9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ09MT1JfRVJST1I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZBTElEX1NVQk1JU1NJT047XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==