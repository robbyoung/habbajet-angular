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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoZWNrYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsK0JBQWlDO0FBRWpDLElBQVksR0FRWDtBQVJELFdBQVksR0FBRztJQUNYLGlDQUFVLENBQUE7SUFDVixpQ0FBVSxDQUFBO0lBQ1YsbUNBQVcsQ0FBQTtJQUNYLHVDQUFhLENBQUE7SUFDYixxQ0FBWSxDQUFBO0lBQ1osaUNBQVUsQ0FBQTtJQUNWLHFDQUFZLENBQUE7QUFDaEIsQ0FBQyxFQVJXLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQVFkO0FBRUQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLHlDQUFRLENBQUE7SUFDUixpREFBWSxDQUFBO0lBQ1osaURBQVksQ0FBQTtBQUNoQixDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFZRDtJQUFBO0lBNEJBLENBQUM7SUExQlUsd0NBQWMsR0FBckI7UUFDSSxJQUFNLGdCQUFnQixHQUF1QixFQUFFLENBQUM7UUFDaEQsSUFBTSxVQUFVLEdBQWtCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFNLEtBQUssR0FBa0IsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNwRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE1BQU0sRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFO2dCQUMxQixNQUFNLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hELFFBQVEsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDMUMsR0FBRyxLQUFBO2dCQUNILFNBQVMsRUFBRSxTQUFTLENBQUMsSUFBSTthQUM1QixDQUFDLENBQUM7WUFDSCxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQ0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7SUFFTSx1Q0FBYSxHQUFwQixVQUFxQixxQkFBNkI7UUFDOUMsSUFBTSxrQkFBa0IsR0FBRyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNyRSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUEzQlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO09BQ0EsZUFBZSxDQTRCM0I7SUFBRCxzQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBNb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBlbnVtIERheSB7XHJcbiAgICBTdW5kYXkgPSAwLFxyXG4gICAgTW9uZGF5ID0gMSxcclxuICAgIFR1ZXNkYXkgPSAyLFxyXG4gICAgV2VkbmVzZGF5ID0gMyxcclxuICAgIFRodXJzZGF5ID0gNCxcclxuICAgIEZyaWRheSA9IDUsXHJcbiAgICBTYXR1cmRheSA9IDYsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENoZWNrbWFyayB7XHJcbiAgICBOb25lID0gMCxcclxuICAgIFBvc2l0aXZlID0gMSxcclxuICAgIE5lZ2F0aXZlID0gMixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIYWJiYWpldENoZWNrYm94IHtcclxuICAgIGxvY2tlZDogYm9vbGVhbjtcclxuICAgIG1vbWVudDogTW9tZW50Lk1vbWVudDtcclxuICAgIGFjdGl2ZTogYm9vbGVhbjtcclxuICAgIGRhdGVOYW1lOiBzdHJpbmc7XHJcbiAgICBkYXk6IERheTtcclxuICAgIGNoZWNrbWFyazogQ2hlY2ttYXJrO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveFNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50V2VlaygpOiBIYWJiYWpldENoZWNrYm94W10ge1xyXG4gICAgICAgIGNvbnN0IHdlZWtPZkNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXk6IE1vbWVudC5Nb21lbnQgPSBNb21lbnQoKS5zdGFydE9mKCd3ZWVrJyk7XHJcbiAgICAgICAgY29uc3QgdG9kYXk6IE1vbWVudC5Nb21lbnQgPSBNb21lbnQoKS5zdGFydE9mKCdkYXknKTtcclxuICAgICAgICBmb3IgKGxldCBkYXkgPSBEYXkuU3VuZGF5OyBkYXkgPD0gRGF5LlNhdHVyZGF5OyBkYXkrKykge1xyXG4gICAgICAgICAgICB3ZWVrT2ZDaGVja2JveGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbG9ja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vbWVudDogY3VycmVudERheS5jbG9uZSgpLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBjdXJyZW50RGF5LnZhbHVlT2YoKSA9PT0gdG9kYXkudmFsdWVPZigpLFxyXG4gICAgICAgICAgICAgICAgZGF0ZU5hbWU6IGN1cnJlbnREYXkuZm9ybWF0KCdkZGRkIERvIE1NTScpLFxyXG4gICAgICAgICAgICAgICAgZGF5LFxyXG4gICAgICAgICAgICAgICAgY2hlY2ttYXJrOiBDaGVja21hcmsuTm9uZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnREYXkuYWRkKDEsICdkYXlzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWVrT2ZDaGVja2JveGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0N1cnJlbnRXZWVrKHN0YXJ0T2ZXZWVrSW5RdWVzdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRPZkN1cnJlbnRXZWVrID0gTW9tZW50KCkuc3RhcnRPZignd2VlaycpO1xyXG4gICAgICAgIGlmIChzdGFydE9mQ3VycmVudFdlZWsuZm9ybWF0KCdkZGRkIERvIE1NTScpICE9PSBzdGFydE9mV2Vla0luUXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=