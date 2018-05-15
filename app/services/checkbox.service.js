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
var Moment = require("moment");
var core_1 = require("@angular/core");
var _ = require("lodash");
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
    CheckboxService.prototype.getNextWeek = function (checkboxes) {
        return _.each(checkboxes, function (c) {
            c.checkmark = Checkmark.None;
        });
    };
    CheckboxService.prototype.getPreviousWeek = function (checkboxes) {
        return undefined;
    };
    CheckboxService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CheckboxService);
    return CheckboxService;
}());
exports.CheckboxService = CheckboxService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoZWNrYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBaUM7QUFDakMsc0NBQTJDO0FBQzNDLDBCQUE2QjtBQUU3QixJQUFZLEdBUVg7QUFSRCxXQUFZLEdBQUc7SUFDWCxpQ0FBVSxDQUFBO0lBQ1YsaUNBQVUsQ0FBQTtJQUNWLG1DQUFXLENBQUE7SUFDWCx1Q0FBYSxDQUFBO0lBQ2IscUNBQVksQ0FBQTtJQUNaLGlDQUFVLENBQUE7SUFDVixxQ0FBWSxDQUFBO0FBQ2hCLENBQUMsRUFSVyxHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUFRZDtBQUVELElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNqQix5Q0FBUSxDQUFBO0lBQ1IsaURBQVksQ0FBQTtJQUNaLGlEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBWUQ7SUFFSTtJQUFlLENBQUM7SUFFaEIsd0NBQWMsR0FBZDtRQUNJLElBQU0sZ0JBQWdCLEdBQXVCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLFVBQVUsR0FBa0IsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksS0FBSyxHQUFrQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsR0FBRyxDQUFBLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ25ELGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDbEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsTUFBTSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUU7Z0JBQzFCLE1BQU0sRUFBRSxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDaEQsUUFBUSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUMxQyxHQUFHLEtBQUE7Z0JBQ0gsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJO2FBQzVCLENBQUMsQ0FBQztZQUNILFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFDRCxNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxVQUE4QjtRQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFtQjtZQUMxQyxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQWUsR0FBZixVQUFnQixVQUE4QjtRQUMxQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUE5QlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFOztPQUNBLGVBQWUsQ0ErQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XHJcblxyXG5leHBvcnQgZW51bSBEYXkge1xyXG4gICAgU3VuZGF5ID0gMCxcclxuICAgIE1vbmRheSA9IDEsXHJcbiAgICBUdWVzZGF5ID0gMixcclxuICAgIFdlZG5lc2RheSA9IDMsXHJcbiAgICBUaHVyc2RheSA9IDQsXHJcbiAgICBGcmlkYXkgPSA1LFxyXG4gICAgU2F0dXJkYXkgPSA2LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDaGVja21hcmsge1xyXG4gICAgTm9uZSA9IDAsXHJcbiAgICBQb3NpdGl2ZSA9IDEsXHJcbiAgICBOZWdhdGl2ZSA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFiYmFqZXRDaGVja2JveCB7XHJcbiAgICBsb2NrZWQ6IGJvb2xlYW47XHJcbiAgICBtb21lbnQ6IE1vbWVudC5Nb21lbnQ7XHJcbiAgICBhY3RpdmU6IGJvb2xlYW47XHJcbiAgICBkYXRlTmFtZTogc3RyaW5nO1xyXG4gICAgZGF5OiBEYXk7XHJcbiAgICBjaGVja21hcms6IENoZWNrbWFyayxcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgZ2V0Q3VycmVudFdlZWsoKTogSGFiYmFqZXRDaGVja2JveFtdIHtcclxuICAgICAgICBjb25zdCB3ZWVrT2ZDaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10gPSBbXTtcclxuICAgICAgICBsZXQgY3VycmVudERheTogTW9tZW50Lk1vbWVudCA9IE1vbWVudCgpLnN0YXJ0T2YoJ3dlZWsnKTtcclxuICAgICAgICBsZXQgdG9kYXk6IE1vbWVudC5Nb21lbnQgPSBNb21lbnQoKS5zdGFydE9mKCdkYXknKTtcclxuICAgICAgICBmb3IobGV0IGRheSA9IERheS5TdW5kYXk7IGRheSA8PSBEYXkuU2F0dXJkYXk7IGRheSsrKSB7XHJcbiAgICAgICAgICAgIHdlZWtPZkNoZWNrYm94ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBsb2NrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9tZW50OiBjdXJyZW50RGF5LmNsb25lKCksXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGN1cnJlbnREYXkudmFsdWVPZigpID09PSB0b2RheS52YWx1ZU9mKCksXHJcbiAgICAgICAgICAgICAgICBkYXRlTmFtZTogY3VycmVudERheS5mb3JtYXQoJ2RkZGQgRG8gTU1NJyksXHJcbiAgICAgICAgICAgICAgICBkYXksXHJcbiAgICAgICAgICAgICAgICBjaGVja21hcms6IENoZWNrbWFyay5Ob25lLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY3VycmVudERheS5hZGQoMSwgJ2RheXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlZWtPZkNoZWNrYm94ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV4dFdlZWsoY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdKTogSGFiYmFqZXRDaGVja2JveFtdIHtcclxuICAgICAgICByZXR1cm4gXy5lYWNoKGNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgIGMuY2hlY2ttYXJrID0gQ2hlY2ttYXJrLk5vbmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJldmlvdXNXZWVrKGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSk6IEhhYmJhamV0Q2hlY2tib3hbXSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufSJdfQ==