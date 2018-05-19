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
var VALID_SUBMISSION = 'Habbajet properties are valid';
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
        var result = this.validateSubmission();
        if (result === VALID_SUBMISSION) {
            this.habbajetService.newHabbajet();
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
        else if (this.validateColor(this.currentSubmission.color)) {
            return COLOR_ERROR;
        }
        else {
            return VALID_SUBMISSION;
        }
    };
    ValidationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDBCQUE0QjtBQUM1Qix1REFBcUQ7QUFVckQsSUFBTSxVQUFVLEdBQVcsMEJBQTBCLENBQUM7QUFDdEQsSUFBTSxXQUFXLEdBQVcsMkJBQTJCLENBQUM7QUFDeEQsSUFBTSxXQUFXLEdBQVcsMkJBQTJCLENBQUM7QUFDeEQsSUFBTSxZQUFZLEdBQVcsNEJBQTRCLENBQUM7QUFDMUQsSUFBTSxXQUFXLEdBQVcsMkJBQTJCLENBQUM7QUFDeEQsSUFBTSxnQkFBZ0IsR0FBVywrQkFBK0IsQ0FBQztBQUdqRTtJQUdJLDJCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEQsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLHlDQUFhLEdBQXBCLFVBQXFCLEtBQWEsRUFBRSxLQUFhO1FBQzdDLE1BQU0sQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWCxLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBQ0wsQ0FBQztJQUVNLHdDQUFZLEdBQW5CLFVBQW9CLElBQVk7UUFDNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7WUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsaUJBQWlCLENBQUMs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OENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSBcIi4vaGFiYmFqZXQuc2VydmljZVwiO1xyXG5cclxuaW50ZXJmYWNlIEhhYmJhamV0U3VibWlzc2lvbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgc2xhY2s6IG51bWJlcjtcclxuICAgIGZhY3RvcjogbnVtYmVyO1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTkFNRV9FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IG5hbWUgaXMgaW52YWxpZCc7XHJcbmNvbnN0IFZBTFVFX0VSUk9SOiBzdHJpbmcgPSAnSGFiYmFqZXQgdmFsdWUgaXMgaW52YWxpZCc7XHJcbmNvbnN0IFNMQUNLX0VSUk9SOiBzdHJpbmcgPSAnSGFiYmFqZXQgc2xhY2sgaXMgaW52YWxpZCc7XHJcbmNvbnN0IEZBQ1RPUl9FUlJPUjogc3RyaW5nID0gJ0hhYmJhamV0IGZhY3RvciBpcyBpbnZhbGlkJztcclxuY29uc3QgQ09MT1JfRVJST1I6IHN0cmluZyA9ICdIYWJiYWpldCBjb2xvciBpcyBpbnZhbGlkJztcclxuY29uc3QgVkFMSURfU1VCTUlTU0lPTjogc3RyaW5nID0gJ0hhYmJhamV0IHByb3BlcnRpZXMgYXJlIHZhbGlkJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgY3VycmVudFN1Ym1pc3Npb246IEhhYmJhamV0U3VibWlzc2lvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEN1cnJlbnRTdWJtaXNzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlSW5wdXQoZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHN3aXRjaChmaWVsZCkge1xyXG4gICAgICAgICAgICBjYXNlICduYW1lJzogcmV0dXJuIHRoaXMudmFsaWRhdGVOYW1lKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlTmFtZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZihuYW1lID09PSB1bmRlZmluZWQgfHwgbmFtZS5sZW5ndGggPT09IDAgfHwgbmFtZS5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLm5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlVmFsdWUodmFsdWVTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcih2YWx1ZVN0cmluZyk7XHJcbiAgICAgICAgaWYoIV8uaXNGaW5pdGUodmFsdWUpIHx8IHZhbHVlIDw9IDAgfHwgdmFsdWUgPiAxMDAwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlRmFjdG9yKGZhY3RvclN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yID0gXy50b051bWJlcihmYWN0b3JTdHJpbmcpO1xyXG4gICAgICAgIGlmKCFfLmlzRmluaXRlKGZhY3RvcikgfHwgZmFjdG9yIDw9IDEgfHwgZmFjdG9yID4gMTApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5mYWN0b3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLmZhY3RvciA9IGZhY3RvcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZVNsYWNrKHNsYWNrU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBzbGFjayA9IF8udG9OdW1iZXIoc2xhY2tTdHJpbmcpO1xyXG4gICAgICAgIGlmKCFfLmlzRmluaXRlKHNsYWNrKSB8fCBzbGFjayA8IDAgfHwgc2xhY2sgPiA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN1Ym1pc3Npb24uc2xhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnNsYWNrID0gc2xhY2s7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVDb2xvcihjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbi5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy52YWxpZGF0ZVN1Ym1pc3Npb24oKTtcclxuICAgICAgICBpZihyZXN1bHQgPT09IFZBTElEX1NVQk1JU1NJT04pIHtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldFNlcnZpY2UubmV3SGFiYmFqZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEN1cnJlbnRTdWJtaXNzaW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0Q3VycmVudFN1Ym1pc3Npb24oKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3VibWlzc2lvbiA9IHtcclxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBzbGFjazogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBmYWN0b3I6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY29sb3I6IHVuZGVmaW5lZCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVTdWJtaXNzaW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlTmFtZSh0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOQU1FX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMudmFsaWRhdGVWYWx1ZSh0aGlzLmN1cnJlbnRTdWJtaXNzaW9uLnZhbHVlICsgJycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWQUxVRV9FUlJPUjtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbGlkYXRlRmFjdG9yKHRoaXMuY3VycmVudFN1Ym1pc3Npb24uZmFjdG9yICsgJycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBGQUNUT1JfRVJST1I7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy52YWxpZGF0ZVNsYWNrKHRoaXMuY3VycmVudFN1Ym1pc3Npb24uc2xhY2sgKyAnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNMQUNLX0VSUk9SO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZGF0ZUNvbG9yKHRoaXMuY3VycmVudFN1Ym1pc3Npb24uY29sb3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDT0xPUl9FUlJPUjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gVkFMSURfU1VCTUlTU0lPTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG59Il19