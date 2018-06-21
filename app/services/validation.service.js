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
    ValidationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;
