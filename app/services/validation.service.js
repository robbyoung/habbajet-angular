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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDBCQUE0QjtBQUM1Qix1REFBcUQ7QUFDckQsbURBQWlEO0FBVWpELElBQU0sVUFBVSxHQUFXLDBCQUEwQixDQUFDO0FBQ3RELElBQU0sV0FBVyxHQUFXLDJCQUEyQixDQUFDO0FBQ3hELElBQU0sV0FBVyxHQUFXLDJCQUEyQixDQUFDO0FBQ3hELElBQU0sWUFBWSxHQUFXLDRCQUE0QixDQUFDO0FBQzFELElBQU0sV0FBVyxHQUFXLDJCQUEyQixDQUFDO0FBQ3hELElBQU0sZ0JBQWdCLEdBQVcsK0JBQStCLENBQUM7QUFFakUsSUFBTSxtQkFBbUIsR0FBVywwQkFBMEIsQ0FBQztBQUMvRCxJQUFNLG1CQUFtQixHQUFXLDBCQUEwQixDQUFDO0FBRy9EO0lBR0ksMkJBQW9CLGVBQWdDLEVBQVUsYUFBNEI7UUFBdEUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDdEYsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLHlDQUFhLEdBQXBCLFVBQXFCLEtBQWEsRUFBRSxLQUFhO1FBQzdDLE1BQU0sQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWCxLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxLQUFLLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFD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QUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQTlIUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FJNEIsa0NBQWUsRUFBeUIsOEJBQWE7T0FIakYsaUJBQWlCLENBK0g3QjtJQUFELHdCQUFDO0NBQUEsQUEvSEQsSUErSEM7QUEvSFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSBcIi4vaGFiYmFqZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4vYnVkZ2V0LnNlcnZpY2VcIjtcclxuXHJcbmludGVyZmFjZSBIYWJiYWpldFN1Ym1pc3Npb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIHNsYWNrOiBudW1iZXI7XHJcbiAgICBmYWN0b3I6IG51bWJlcjtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE5BTUVfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCBuYW1lIGlzIGludmFsaWQnO1xyXG5jb25zdCBWQUxVRV9FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IHZhbHVlIGlzIGludmFsaWQnO1xyXG5jb25zdCBTTEFDS19FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IHNsYWNrIGlzIGludmFsaWQnO1xyXG5jb25zdCBGQUNUT1JfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCBmYWN0b3IgaXMgaW52YWxpZCc7XHJcbmNvbnN0IENPTE9SX0VSUk9SOiBzdHJpbmcgPSAnSGFiYmFqZXQgY29sb3IgaXMgaW52YWxpZCc7XHJcbmNvbnN0IFZBTElEX1NVQk1JU1NJT046IHN0cmluZyA9ICdIYWJiYWpldCBwcm9wZXJ0aWVzIGFyZSB2YWxpZCc7XHJcblxyXG5jb25zdCBQVVJDSEFTRV9OQU1FX0VSUk9SOiBzdHJpbmcgPSAnUHVyY2hhc2UgbmFtZSBpcyBpbnZhbGlkJztcclxuY29uc3QgUFVSQ0hBU0VfQ09TVF9FUlJPUjogc3RyaW5nID0gJ1B1cmNoYXNlIGNvc3QgaXMgaW52YWxpZCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTdWJtaXNzaW9uOiBIYWJiYWpldFN1Ym1pc3Npb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSwgcHJpdmF0ZSBidWRnZXRTZXJ2aWNlOiBCdWRnZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEN1cnJlbnRTdWJtaXNzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlSW5wdXQoZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHN3aXRjaChmaWVsZCkge1xyXG4gICAgICAgICAgICBjYXNlICdOYW1lJzogcmV0dXJuIHRoaXMudmFsaWRhdGVOYW1lKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAnVmFsdWUnOiByZXR1cm4gdGhpcy52YWxpZGF0ZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAnU2xhY2snOiByZXR1cm4gdGhpcy52YWxpZGF0ZVNsYWNrKHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSAnRmFjdG9yJzogcmV0dXJuIHRoaXMudmFsaWRhdGVGYWN0b3IodmFsdWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZU5hbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYobmFtZSA9PT0gdW5kZWZpbmVkIHx8IG5hbWUubGVuZ3RoID09PSAwIHx8IG5hbWUubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZVZhbHVlKHZhbHVlU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IF8udG9OdW1iZXIodmFsdWVTdHJpbmcpO1xyXG4gICAgICAgIGlmKCFfLmlzRmluaXRlKHZhbHVlKSB8fCB2YWx1ZSA8PSAwIHx8IHZhbHVlID4gMTAwMDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZUZhY3RvcihmYWN0b3JTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGZhY3RvciA9IF8udG9OdW1iZXIoZmFjdG9yU3RyaW5nKTtcclxuICAgICAgICBpZighXy5pc0Zpbml0ZShmYWN0b3IpIHx8IGZhY3RvciA8PSAxIHx8IGZhY3RvciA+IDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uZmFjdG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5mYWN0b3IgPSBmYWN0b3I7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVTbGFjayhzbGFja1N0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qgc2xhY2sgPSBfLnRvTnVtYmVyKHNsYWNrU3RyaW5nKTtcclxuICAgICAgICBpZighXy5pc0Zpbml0ZShzbGFjaykgfHwgc2xhY2sgPCAwIHx8IHNsYWNrID4gNikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnNsYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5zbGFjayA9IHNsYWNrO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlQ29sb3IoY29sb3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uY29sb3IgPSBjb2xvcjtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudmFsaWRhdGVTdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgaWYocmVzdWx0ID09PSBWQUxJRF9TVUJNSVNTSU9OKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLm5ld0hhYmJhamV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uZmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5zbGFjayxcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uY29sb3IsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRDdXJyZW50U3VibWlzc2lvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldEN1cnJlbnRTdWJtaXNzaW9uKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24gPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgc2xhY2s6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZmFjdG9yOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGNvbG9yOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlU3VibWlzc2lvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZU5hbWUodGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTkFNRV9FUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkYXRlVmFsdWUodGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSArICcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gVkFMVUVfRVJST1I7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZGF0ZUZhY3Rvcih0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmZhY3RvciArICcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRkFDVE9SX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRhdGVTbGFjayh0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnNsYWNrICsgJycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTTEFDS19FUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkYXRlQ29sb3IodGhpcy5jdXJyZW50U3VibWlzc2lvbi5jb2xvcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENPTE9SX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWQUxJRF9TVUJNSVNTSU9OO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlUHVyY2hhc2VOYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYoIW5hbWUubGVuZ3RoIHx8IG5hbWUubGVuZ3RoID4gMjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBVUkNIQVNFX05BTUVfRVJST1I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZVB1cmNoYXNlQ29zdChjb3N0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGNvc3QgPSBfLnRvTnVtYmVyKGNvc3RTdHJpbmcpO1xyXG4gICAgICAgIGlmKCFpc0Zpbml0ZShjb3N0KSB8fCBjb3N0IDw9IDAgfHwgY29zdCA+IDk5OTkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBVUkNIQVNFX0NPU1RfRVJST1I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXRQdXJjaGFzZShuYW1lOiBzdHJpbmcsIGNvc3Q6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRoaXMudmFsaWRhdGVQdXJjaGFzZU5hbWUobmFtZSkgfHwgdGhpcy52YWxpZGF0ZVB1cmNoYXNlQ29zdChjb3N0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWVkIHRvIHN1Ym1pdCBhbiBpbnZhbGlkIHB1cmNoYXNlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2UubWFrZVB1cmNoYXNlKG5hbWUsIF8udG9OdW1iZXIoY29zdCkpO1xyXG4gICAgfVxyXG59Il19