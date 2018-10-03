"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Moment = require("moment");
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day = exports.Day || (exports.Day = {}));
var Checkmark;
(function (Checkmark) {
    Checkmark[Checkmark["None"] = 0] = "None";
    Checkmark[Checkmark["Positive"] = 1] = "Positive";
    Checkmark[Checkmark["Negative"] = 2] = "Negative";
})(Checkmark = exports.Checkmark || (exports.Checkmark = {}));
var CheckboxService = /** @class */ (function () {
    function CheckboxService() {
    }
    CheckboxService.prototype.getCurrentWeek = function () {
        var weekOfCheckboxes = [];
        var currentDay = Moment().startOf('week');
        var today = Moment().startOf('day');
        for (var day = Day.Sunday; day <= Day.Saturday; day++) {
            weekOfCheckboxes.push({
                locked: false,
                moment: currentDay.clone(),
                active: currentDay.valueOf() === today.valueOf(),
                dateName: currentDay.format('dddd Do MMM'),
                day: day,
                checkmark: Checkmark.None,
            });
            currentDay.add(1, 'days');
        }
        return weekOfCheckboxes;
    };
    CheckboxService.prototype.isCurrentWeek = function (startOfWeekInQuestion) {
        var startOfCurrentWeek = Moment().startOf('week');
        if (startOfCurrentWeek.format('dddd Do MMM') !== startOfWeekInQuestion) {
            return false;
        }
        else {
            return true;
        }
    };
    CheckboxService = __decorate([
        core_1.Injectable()
    ], CheckboxService);
    return CheckboxService;
}());
exports.CheckboxService = CheckboxService;
