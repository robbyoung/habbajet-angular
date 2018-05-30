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
        if (startOfCurrentWeek.valueOf() > startOfWeekInQuestion) {
            return false;
        }
        else {
            return true;
        }
    };
    CheckboxService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CheckboxService);
    return CheckboxService;
}());
exports.CheckboxService = CheckboxService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoZWNrYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBaUM7QUFDakMsc0NBQTJDO0FBRzNDLElBQVksR0FRWDtBQVJELFdBQVksR0FBRztJQUNYLGlDQUFVLENBQUE7SUFDVixpQ0FBVSxDQUFBO0lBQ1YsbUNBQVcsQ0FBQTtJQUNYLHVDQUFhLENBQUE7SUFDYixxQ0FBWSxDQUFBO0lBQ1osaUNBQVUsQ0FBQTtJQUNWLHFDQUFZLENBQUE7QUFDaEIsQ0FBQyxFQVJXLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQVFkO0FBRUQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLHlDQUFRLENBQUE7SUFDUixpREFBWSxDQUFBO0lBQ1osaURBQVksQ0FBQTtBQUNoQixDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFZRDtJQUVJO0lBQWUsQ0FBQztJQUVULHdDQUFjLEdBQXJCO1FBQ0ksSUFBTSxnQkFBZ0IsR0FBdUIsRUFBRSxDQUFDO1FBQ2hELElBQUksVUFBVSxHQUFrQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSxLQUFLLEdBQWtCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxHQUFHLENBQUEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDbkQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUNsQixNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRTtnQkFDMUIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNoRCxRQUFRLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQzFDLEdBQUcsS0FBQTtnQkFDSCxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7YUFDNUIsQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBRU0sdUNBQWEsR0FBcEIsVUFBcUIscUJBQTZCO1FBQzlDLElBQUksa0JBQWtCLEdBQUcsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUE3QlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFOztPQUNBLGVBQWUsQ0E4QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XHJcblxyXG5leHBvcnQgZW51bSBEYXkge1xyXG4gICAgU3VuZGF5ID0gMCxcclxuICAgIE1vbmRheSA9IDEsXHJcbiAgICBUdWVzZGF5ID0gMixcclxuICAgIFdlZG5lc2RheSA9IDMsXHJcbiAgICBUaHVyc2RheSA9IDQsXHJcbiAgICBGcmlkYXkgPSA1LFxyXG4gICAgU2F0dXJkYXkgPSA2LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDaGVja21hcmsge1xyXG4gICAgTm9uZSA9IDAsXHJcbiAgICBQb3NpdGl2ZSA9IDEsXHJcbiAgICBOZWdhdGl2ZSA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFiYmFqZXRDaGVja2JveCB7XHJcbiAgICBsb2NrZWQ6IGJvb2xlYW47XHJcbiAgICBtb21lbnQ6IE1vbWVudC5Nb21lbnQ7XHJcbiAgICBhY3RpdmU6IGJvb2xlYW47XHJcbiAgICBkYXRlTmFtZTogc3RyaW5nO1xyXG4gICAgZGF5OiBEYXk7XHJcbiAgICBjaGVja21hcms6IENoZWNrbWFyayxcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRXZWVrKCk6IEhhYmJhamV0Q2hlY2tib3hbXSB7XHJcbiAgICAgICAgY29uc3Qgd2Vla09mQ2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdID0gW107XHJcbiAgICAgICAgbGV0IGN1cnJlbnREYXk6IE1vbWVudC5Nb21lbnQgPSBNb21lbnQoKS5zdGFydE9mKCd3ZWVrJyk7XHJcbiAgICAgICAgbGV0IHRvZGF5OiBNb21lbnQuTW9tZW50ID0gTW9tZW50KCkuc3RhcnRPZignZGF5Jyk7XHJcbiAgICAgICAgZm9yKGxldCBkYXkgPSBEYXkuU3VuZGF5OyBkYXkgPD0gRGF5LlNhdHVyZGF5OyBkYXkrKykge1xyXG4gICAgICAgICAgICB3ZWVrT2ZDaGVja2JveGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbG9ja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vbWVudDogY3VycmVudERheS5jbG9uZSgpLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBjdXJyZW50RGF5LnZhbHVlT2YoKSA9PT0gdG9kYXkudmFsdWVPZigpLFxyXG4gICAgICAgICAgICAgICAgZGF0ZU5hbWU6IGN1cnJlbnREYXkuZm9ybWF0KCdkZGRkIERvIE1NTScpLFxyXG4gICAgICAgICAgICAgICAgZGF5LFxyXG4gICAgICAgICAgICAgICAgY2hlY2ttYXJrOiBDaGVja21hcmsuTm9uZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnREYXkuYWRkKDEsICdkYXlzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWVrT2ZDaGVja2JveGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0N1cnJlbnRXZWVrKHN0YXJ0T2ZXZWVrSW5RdWVzdGlvbjogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0T2ZDdXJyZW50V2VlayA9IE1vbWVudCgpLnN0YXJ0T2YoJ3dlZWsnKTtcclxuICAgICAgICBpZihzdGFydE9mQ3VycmVudFdlZWsudmFsdWVPZigpID4gc3RhcnRPZldlZWtJblF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=