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
var NAME_ERROR = 'Habbajet name is invalid';
var VALUE_ERROR = 'Habbajet value is invalid';
var SLACK_ERROR = 'Habbajet slack is invalid';
var FACTOR_ERROR = 'Habbajet factor is invalid';
var COLOR_ERROR = 'Habbajet color is invalid';
var ValidationService = /** @class */ (function () {
    function ValidationService(habbajetService) {
        this.habbajetService = habbajetService;
        this.resetCurrentSubmission();
    }
    ValidationService.prototype.validateInput = function (field, value) {
        switch (field) {
            case 'name': return this.validateName(value);
        }
    };
    ValidationService.prototype.validateName = function (name) {
        if (name === undefined || name.length === 0 || name.length > 10) {
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
        if (this.validateSubmission()) {
            this.habbajetService.newHabbajet();
            this.resetCurrentSubmission();
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
        return this.validateName(this.currentSubmission.name) &&
            this.validateValue(this.currentSubmission.value + '') &&
            this.validateFactor(this.currentSubmission.factor + '') &&
            this.validateSlack(this.currentSubmission.slack + '') &&
            this.validateColor(this.currentSubmission.color);
    };
    ValidationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDBCQUE0QjtBQUM1Qix1REFBcUQ7QUFVckQsSUFBTSxVQUFVLEdBQVcsMEJBQTBCLENBQUM7QUFDdEQsSUFBTSxXQUFXLEdBQVcsMkJBQTJCLENBQUM7QUFDeEQsSUFBTSxXQUFXLEdBQVcsMkJBQTJCLENBQUM7QUFDeEQsSUFBTSxZQUFZLEdBQVcsNEJBQTRCLENBQUM7QUFDMUQsSUFBTSxXQUFXLEdBQVcsMkJBQTJCLENBQUM7QUFHeEQ7SUFHSSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hELElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSx5Q0FBYSxHQUFwQixVQUFxQixLQUFhLEVBQUUsS0FBYTtRQUM3QyxNQUFNLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1gsS0FBSyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQztJQUNMLENBQUM7SUFFTSx3Q0FBWSxHQUFuQixVQUFvQixJQUFZO1FBQzVCLEVBQUUsQ0FBQSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkMsTUFBTSxDQUFD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LEtBQUssR0FBRyxFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFyRlEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBSTRCLGtDQUFlO09BSDNDLGlCQUFpQixDQXNGN0I7SUFBRCx3QkFBQztDQUFBLEFBdEZELElBc0ZDO0FBdEZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuXHJcbmludGVyZmFjZSBIYWJiYWpldFN1Ym1pc3Npb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIHNsYWNrOiBudW1iZXI7XHJcbiAgICBmYWN0b3I6IG51bWJlcjtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE5BTUVfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCBuYW1lIGlzIGludmFsaWQnO1xyXG5jb25zdCBWQUxVRV9FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IHZhbHVlIGlzIGludmFsaWQnO1xyXG5jb25zdCBTTEFDS19FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IHNsYWNrIGlzIGludmFsaWQnO1xyXG5jb25zdCBGQUNUT1JfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCBmYWN0b3IgaXMgaW52YWxpZCc7XHJcbmNvbnN0IENPTE9SX0VSUk9SOiBzdHJpbmcgPSAnSGFiYmFqZXQgY29sb3IgaXMgaW52YWxpZCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTdWJtaXNzaW9uOiBIYWJiYWpldFN1Ym1pc3Npb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucmVzZXRDdXJyZW50U3VibWlzc2lvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZUlucHV0KGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBzd2l0Y2goZmllbGQpIHtcclxuICAgICAgICAgICAgY2FzZSAnbmFtZSc6IHJldHVybiB0aGlzLnZhbGlkYXRlTmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZU5hbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYobmFtZSA9PT0gdW5kZWZpbmVkIHx8IG5hbWUubGVuZ3RoID09PSAwIHx8IG5hbWUubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZVZhbHVlKHZhbHVlU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IF8udG9OdW1iZXIodmFsdWVTdHJpbmcpO1xyXG4gICAgICAgIGlmKCFfLmlzRmluaXRlKHZhbHVlKSB8fCB2YWx1ZSA8PSAwIHx8IHZhbHVlID4gMTAwMDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZUZhY3RvcihmYWN0b3JTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGZhY3RvciA9IF8udG9OdW1iZXIoZmFjdG9yU3RyaW5nKTtcclxuICAgICAgICBpZighXy5pc0Zpbml0ZShmYWN0b3IpIHx8IGZhY3RvciA8PSAxIHx8IGZhY3RvciA+IDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uZmFjdG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5mYWN0b3IgPSBmYWN0b3I7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVTbGFjayhzbGFja1N0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qgc2xhY2sgPSBfLnRvTnVtYmVyKHNsYWNrU3RyaW5nKTtcclxuICAgICAgICBpZighXy5pc0Zpbml0ZShzbGFjaykgfHwgc2xhY2sgPCAwIHx8IHNsYWNrID4gNikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnNsYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5zbGFjayA9IHNsYWNrO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlQ29sb3IoY29sb3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uY29sb3IgPSBjb2xvcjtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0KCkge1xyXG4gICAgICAgIGlmKHRoaXMudmFsaWRhdGVTdWJtaXNzaW9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldFNlcnZpY2UubmV3SGFiYmFqZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEN1cnJlbnRTdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldEN1cnJlbnRTdWJtaXNzaW9uKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24gPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgc2xhY2s6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZmFjdG9yOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGNvbG9yOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlU3VibWlzc2lvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZU5hbWUodGhpcy5jdXJyZW50U3VibWlzc2lvbi5uYW1lKSAmJlxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlVmFsdWUodGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSArICcnKSAmJiBcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUZhY3Rvcih0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmZhY3RvciArICcnKSAmJlxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlU2xhY2sodGhpcy5jdXJyZW50U3VibWlzc2lvbi5zbGFjayArICcnKSAmJlxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlQ29sb3IodGhpcy5jdXJyZW50U3VibWlzc2lvbi5jb2xvcik7XHJcbiAgICB9XHJcbn0iXX0=