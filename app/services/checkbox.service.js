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
        if (startOfCurrentWeek.format('dddd Do MMM') !== startOfWeekInQuestion) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoZWNrYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBaUM7QUFDakMsc0NBQTJDO0FBRzNDLElBQVksR0FRWDtBQVJELFdBQVksR0FBRztJQUNYLGlDQUFVLENBQUE7SUFDVixpQ0FBVSxDQUFBO0lBQ1YsbUNBQVcsQ0FBQTtJQUNYLHVDQUFhLENBQUE7SUFDYixxQ0FBWSxDQUFBO0lBQ1osaUNBQVUsQ0FBQTtJQUNWLHFDQUFZLENBQUE7QUFDaEIsQ0FBQyxFQVJXLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQVFkO0FBRUQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLHlDQUFRLENBQUE7SUFDUixpREFBWSxDQUFBO0lBQ1osaURBQVksQ0FBQTtBQUNoQixDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFZRDtJQUVJO0lBQWUsQ0FBQztJQUVULHdDQUFjLEdBQXJCO1FBQ0ksSUFBTSxnQkFBZ0IsR0FBdUIsRUFBRSxDQUFDO1FBQ2hELElBQUksVUFBVSxHQUFrQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSxLQUFLLEdBQWtCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxHQUFHLENBQUEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDbkQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUNsQixNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRTtnQkFDMUIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNoRCxRQUFRLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQzFDLEdBQUcsS0FBQTtnQkFDSCxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7YUFDNUIsQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBRU0sdUNBQWEsR0FBcEIsVUFBcUIscUJBQTZCO1FBQzlDLElBQUksa0JBQWtCLEdBQUcsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7WUFDcEUsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBN0JRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBOEIzQjtJQUFELHNCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xyXG5cclxuZXhwb3J0IGVudW0gRGF5IHtcclxuICAgIFN1bmRheSA9IDAsXHJcbiAgICBNb25kYXkgPSAxLFxyXG4gICAgVHVlc2RheSA9IDIsXHJcbiAgICBXZWRuZXNkYXkgPSAzLFxyXG4gICAgVGh1cnNkYXkgPSA0LFxyXG4gICAgRnJpZGF5ID0gNSxcclxuICAgIFNhdHVyZGF5ID0gNixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2hlY2ttYXJrIHtcclxuICAgIE5vbmUgPSAwLFxyXG4gICAgUG9zaXRpdmUgPSAxLFxyXG4gICAgTmVnYXRpdmUgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhhYmJhamV0Q2hlY2tib3gge1xyXG4gICAgbG9ja2VkOiBib29sZWFuO1xyXG4gICAgbW9tZW50OiBNb21lbnQuTW9tZW50O1xyXG4gICAgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgZGF0ZU5hbWU6IHN0cmluZztcclxuICAgIGRheTogRGF5O1xyXG4gICAgY2hlY2ttYXJrOiBDaGVja21hcmssXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94U2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50V2VlaygpOiBIYWJiYWpldENoZWNrYm94W10ge1xyXG4gICAgICAgIGNvbnN0IHdlZWtPZkNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSA9IFtdO1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF5OiBNb21lbnQuTW9tZW50ID0gTW9tZW50KCkuc3RhcnRPZignd2VlaycpO1xyXG4gICAgICAgIGxldCB0b2RheTogTW9tZW50Lk1vbWVudCA9IE1vbWVudCgpLnN0YXJ0T2YoJ2RheScpO1xyXG4gICAgICAgIGZvcihsZXQgZGF5ID0gRGF5LlN1bmRheTsgZGF5IDw9IERheS5TYXR1cmRheTsgZGF5KyspIHtcclxuICAgICAgICAgICAgd2Vla09mQ2hlY2tib3hlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb21lbnQ6IGN1cnJlbnREYXkuY2xvbmUoKSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogY3VycmVudERheS52YWx1ZU9mKCkgPT09IHRvZGF5LnZhbHVlT2YoKSxcclxuICAgICAgICAgICAgICAgIGRhdGVOYW1lOiBjdXJyZW50RGF5LmZvcm1hdCgnZGRkZCBEbyBNTU0nKSxcclxuICAgICAgICAgICAgICAgIGRheSxcclxuICAgICAgICAgICAgICAgIGNoZWNrbWFyazogQ2hlY2ttYXJrLk5vbmUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF5LmFkZCgxLCAnZGF5cycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2Vla09mQ2hlY2tib3hlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNDdXJyZW50V2VlayhzdGFydE9mV2Vla0luUXVlc3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBzdGFydE9mQ3VycmVudFdlZWsgPSBNb21lbnQoKS5zdGFydE9mKCd3ZWVrJyk7XHJcbiAgICAgICAgaWYoc3RhcnRPZkN1cnJlbnRXZWVrLmZvcm1hdCgnZGRkZCBEbyBNTU0nKSAhPT0gc3RhcnRPZldlZWtJblF1ZXN0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=