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
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
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
        var currentDay = Moment().startOf('isoWeek');
        var today = Moment().startOf('day');
        for (var day = Day.Monday; day <= Day.Sunday; day++) {
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
        var startOfCurrentWeek = Moment().startOf('isoWeek');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoZWNrYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsK0JBQWlDO0FBRWpDLElBQVksR0FRWDtBQVJELFdBQVksR0FBRztJQUNYLGlDQUFVLENBQUE7SUFDVixtQ0FBVyxDQUFBO0lBQ1gsdUNBQWEsQ0FBQTtJQUNiLHFDQUFZLENBQUE7SUFDWixpQ0FBVSxDQUFBO0lBQ1YscUNBQVksQ0FBQTtJQUNaLGlDQUFVLENBQUE7QUFDZCxDQUFDLEVBUlcsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBUWQ7QUFFRCxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIseUNBQVEsQ0FBQTtJQUNSLGlEQUFZLENBQUE7SUFDWixpREFBWSxDQUFBO0FBQ2hCLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQVlEO0lBQUE7SUE0QkEsQ0FBQztJQTFCVSx3Q0FBYyxHQUFyQjtRQUNJLElBQU0sZ0JBQWdCLEdBQXVCLEVBQUUsQ0FBQztRQUNoRCxJQUFNLFVBQVUsR0FBa0IsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELElBQU0sS0FBSyxHQUFrQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsS0FBSyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2pELGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDbEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsTUFBTSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUU7Z0JBQzFCLE1BQU0sRUFBRSxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDaEQsUUFBUSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUMxQyxHQUFHLEtBQUE7Z0JBQ0gsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJO2FBQzVCLENBQUMsQ0FBQztZQUNILFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBRU0sdUNBQWEsR0FBcEIsVUFBcUIscUJBQTZCO1FBQzlDLElBQU0sa0JBQWtCLEdBQUcsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLHFCQUFxQixFQUFFO1lBQ3BFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQTNCUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7T0FDQSxlQUFlLENBNEIzQjtJQUFELHNCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIE1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGVudW0gRGF5IHtcclxuICAgIE1vbmRheSA9IDAsXHJcbiAgICBUdWVzZGF5ID0gMSxcclxuICAgIFdlZG5lc2RheSA9IDIsXHJcbiAgICBUaHVyc2RheSA9IDMsXHJcbiAgICBGcmlkYXkgPSA0LFxyXG4gICAgU2F0dXJkYXkgPSA1LFxyXG4gICAgU3VuZGF5ID0gNixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2hlY2ttYXJrIHtcclxuICAgIE5vbmUgPSAwLFxyXG4gICAgUG9zaXRpdmUgPSAxLFxyXG4gICAgTmVnYXRpdmUgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhhYmJhamV0Q2hlY2tib3gge1xyXG4gICAgbG9ja2VkOiBib29sZWFuO1xyXG4gICAgbW9tZW50OiBNb21lbnQuTW9tZW50O1xyXG4gICAgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgZGF0ZU5hbWU6IHN0cmluZztcclxuICAgIGRheTogRGF5O1xyXG4gICAgY2hlY2ttYXJrOiBDaGVja21hcms7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94U2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRXZWVrKCk6IEhhYmJhamV0Q2hlY2tib3hbXSB7XHJcbiAgICAgICAgY29uc3Qgd2Vla09mQ2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdID0gW107XHJcbiAgICAgICAgY29uc3QgY3VycmVudERheTogTW9tZW50Lk1vbWVudCA9IE1vbWVudCgpLnN0YXJ0T2YoJ2lzb1dlZWsnKTtcclxuICAgICAgICBjb25zdCB0b2RheTogTW9tZW50Lk1vbWVudCA9IE1vbWVudCgpLnN0YXJ0T2YoJ2RheScpO1xyXG4gICAgICAgIGZvciAobGV0IGRheSA9IERheS5Nb25kYXk7IGRheSA8PSBEYXkuU3VuZGF5OyBkYXkrKykge1xyXG4gICAgICAgICAgICB3ZWVrT2ZDaGVja2JveGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbG9ja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vbWVudDogY3VycmVudERheS5jbG9uZSgpLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBjdXJyZW50RGF5LnZhbHVlT2YoKSA9PT0gdG9kYXkudmFsdWVPZigpLFxyXG4gICAgICAgICAgICAgICAgZGF0ZU5hbWU6IGN1cnJlbnREYXkuZm9ybWF0KCdkZGRkIERvIE1NTScpLFxyXG4gICAgICAgICAgICAgICAgZGF5LFxyXG4gICAgICAgICAgICAgICAgY2hlY2ttYXJrOiBDaGVja21hcmsuTm9uZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnREYXkuYWRkKDEsICdkYXlzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWVrT2ZDaGVja2JveGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0N1cnJlbnRXZWVrKHN0YXJ0T2ZXZWVrSW5RdWVzdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRPZkN1cnJlbnRXZWVrID0gTW9tZW50KCkuc3RhcnRPZignaXNvV2VlaycpO1xyXG4gICAgICAgIGlmIChzdGFydE9mQ3VycmVudFdlZWsuZm9ybWF0KCdkZGRkIERvIE1NTScpICE9PSBzdGFydE9mV2Vla0luUXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=