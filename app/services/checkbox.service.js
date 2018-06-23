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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoZWNrYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBaUM7QUFDakMsc0NBQTJDO0FBRTNDLElBQVksR0FRWDtBQVJELFdBQVksR0FBRztJQUNYLGlDQUFVLENBQUE7SUFDVixpQ0FBVSxDQUFBO0lBQ1YsbUNBQVcsQ0FBQTtJQUNYLHVDQUFhLENBQUE7SUFDYixxQ0FBWSxDQUFBO0lBQ1osaUNBQVUsQ0FBQTtJQUNWLHFDQUFZLENBQUE7QUFDaEIsQ0FBQyxFQVJXLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQVFkO0FBRUQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLHlDQUFRLENBQUE7SUFDUixpREFBWSxDQUFBO0lBQ1osaURBQVksQ0FBQTtBQUNoQixDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFZRDtJQUVJO0lBQWUsQ0FBQztJQUVULHdDQUFjLEdBQXJCO1FBQ0ksSUFBTSxnQkFBZ0IsR0FBdUIsRUFBRSxDQUFDO1FBQ2hELElBQUksVUFBVSxHQUFrQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSxLQUFLLEdBQWtCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxHQUFHLENBQUEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDbkQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUNsQixNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRTtnQkFDMUIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNoRCxRQUFRLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQzFDLEdBQUcsS0FBQTtnQkFDSCxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7YUFDNUIsQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBRU0sdUNBQWEsR0FBcEIsVUFBcUIscUJBQTZCO1FBQzlDLElBQUksa0JBQWtCLEdBQUcsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7WUFDcEUsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBN0JRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBOEIzQjtJQUFELHNCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIERheSB7XHJcbiAgICBTdW5kYXkgPSAwLFxyXG4gICAgTW9uZGF5ID0gMSxcclxuICAgIFR1ZXNkYXkgPSAyLFxyXG4gICAgV2VkbmVzZGF5ID0gMyxcclxuICAgIFRodXJzZGF5ID0gNCxcclxuICAgIEZyaWRheSA9IDUsXHJcbiAgICBTYXR1cmRheSA9IDYsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENoZWNrbWFyayB7XHJcbiAgICBOb25lID0gMCxcclxuICAgIFBvc2l0aXZlID0gMSxcclxuICAgIE5lZ2F0aXZlID0gMixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIYWJiYWpldENoZWNrYm94IHtcclxuICAgIGxvY2tlZDogYm9vbGVhbjtcclxuICAgIG1vbWVudDogTW9tZW50Lk1vbWVudDtcclxuICAgIGFjdGl2ZTogYm9vbGVhbjtcclxuICAgIGRhdGVOYW1lOiBzdHJpbmc7XHJcbiAgICBkYXk6IERheTtcclxuICAgIGNoZWNrbWFyazogQ2hlY2ttYXJrLFxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudFdlZWsoKTogSGFiYmFqZXRDaGVja2JveFtdIHtcclxuICAgICAgICBjb25zdCB3ZWVrT2ZDaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10gPSBbXTtcclxuICAgICAgICBsZXQgY3VycmVudERheTogTW9tZW50Lk1vbWVudCA9IE1vbWVudCgpLnN0YXJ0T2YoJ3dlZWsnKTtcclxuICAgICAgICBsZXQgdG9kYXk6IE1vbWVudC5Nb21lbnQgPSBNb21lbnQoKS5zdGFydE9mKCdkYXknKTtcclxuICAgICAgICBmb3IobGV0IGRheSA9IERheS5TdW5kYXk7IGRheSA8PSBEYXkuU2F0dXJkYXk7IGRheSsrKSB7XHJcbiAgICAgICAgICAgIHdlZWtPZkNoZWNrYm94ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBsb2NrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9tZW50OiBjdXJyZW50RGF5LmNsb25lKCksXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGN1cnJlbnREYXkudmFsdWVPZigpID09PSB0b2RheS52YWx1ZU9mKCksXHJcbiAgICAgICAgICAgICAgICBkYXRlTmFtZTogY3VycmVudERheS5mb3JtYXQoJ2RkZGQgRG8gTU1NJyksXHJcbiAgICAgICAgICAgICAgICBkYXksXHJcbiAgICAgICAgICAgICAgICBjaGVja21hcms6IENoZWNrbWFyay5Ob25lLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY3VycmVudERheS5hZGQoMSwgJ2RheXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlZWtPZkNoZWNrYm94ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQ3VycmVudFdlZWsoc3RhcnRPZldlZWtJblF1ZXN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgc3RhcnRPZkN1cnJlbnRXZWVrID0gTW9tZW50KCkuc3RhcnRPZignd2VlaycpO1xyXG4gICAgICAgIGlmKHN0YXJ0T2ZDdXJyZW50V2Vlay5mb3JtYXQoJ2RkZGQgRG8gTU1NJykgIT09IHN0YXJ0T2ZXZWVrSW5RdWVzdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19