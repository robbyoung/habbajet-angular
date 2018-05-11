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
var CheckboxService = /** @class */ (function () {
    function CheckboxService() {
    }
    CheckboxService.prototype.getCurrentWeek = function () {
        var startOfThisWeek = Moment().startOf('week').fromNow();
        var today = Moment().startOf('day').fromNow();
        var weekOfCheckboxes = [];
        for (var day = Day.Sunday; day <= Day.Saturday; day++) {
            weekOfCheckboxes.push({
                locked: false,
                time: today,
                active: false,
                dateName: 'Someday',
                day: day,
            });
        }
        weekOfCheckboxes[0].active = true;
        return weekOfCheckboxes;
    };
    CheckboxService.prototype.getNextWeek = function (startOfWeek) {
        return undefined;
    };
    CheckboxService.prototype.getPreviousWeek = function (startOfWeek) {
        return undefined;
    };
    CheckboxService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CheckboxService);
    return CheckboxService;
}());
exports.CheckboxService = CheckboxService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoZWNrYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBaUM7QUFDakMsc0NBQTJDO0FBRTNDLElBQVksR0FRWDtBQVJELFdBQVksR0FBRztJQUNYLGlDQUFVLENBQUE7SUFDVixpQ0FBVSxDQUFBO0lBQ1YsbUNBQVcsQ0FBQTtJQUNYLHVDQUFhLENBQUE7SUFDYixxQ0FBWSxDQUFBO0lBQ1osaUNBQVUsQ0FBQTtJQUNWLHFDQUFZLENBQUE7QUFDaEIsQ0FBQyxFQVJXLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQVFkO0FBV0Q7SUFFSTtJQUFlLENBQUM7SUFFaEIsd0NBQWMsR0FBZDtRQUNJLElBQU0sZUFBZSxHQUFXLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuRSxJQUFNLEtBQUssR0FBVyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEQsSUFBTSxnQkFBZ0IsR0FBdUIsRUFBRSxDQUFDO1FBQ2hELEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNuRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLElBQUksRUFBRSxLQUFLO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2dCQUNiLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixHQUFHLEtBQUE7YUFDTixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxXQUFtQjtRQUMzQixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLFdBQW1CO1FBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQTNCUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQTRCM0I7SUFBRCxzQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgZW51bSBEYXkge1xyXG4gICAgU3VuZGF5ID0gMCxcclxuICAgIE1vbmRheSA9IDEsXHJcbiAgICBUdWVzZGF5ID0gMixcclxuICAgIFdlZG5lc2RheSA9IDMsXHJcbiAgICBUaHVyc2RheSA9IDQsXHJcbiAgICBGcmlkYXkgPSA1LFxyXG4gICAgU2F0dXJkYXkgPSA2LFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhhYmJhamV0Q2hlY2tib3gge1xyXG4gICAgbG9ja2VkOiBib29sZWFuO1xyXG4gICAgdGltZTogc3RyaW5nO1xyXG4gICAgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgZGF0ZU5hbWU6IHN0cmluZztcclxuICAgIGRheTogRGF5O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBnZXRDdXJyZW50V2VlaygpOiBIYWJiYWpldENoZWNrYm94W10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZUaGlzV2Vlazogc3RyaW5nID0gTW9tZW50KCkuc3RhcnRPZignd2VlaycpLmZyb21Ob3coKTtcclxuICAgICAgICBjb25zdCB0b2RheTogc3RyaW5nID0gTW9tZW50KCkuc3RhcnRPZignZGF5JykuZnJvbU5vdygpO1xyXG4gICAgICAgIGNvbnN0IHdlZWtPZkNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgZGF5ID0gRGF5LlN1bmRheTsgZGF5IDw9IERheS5TYXR1cmRheTsgZGF5KyspIHtcclxuICAgICAgICAgICAgd2Vla09mQ2hlY2tib3hlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiB0b2RheSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkYXRlTmFtZTogJ1NvbWVkYXknLFxyXG4gICAgICAgICAgICAgICAgZGF5LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2Vla09mQ2hlY2tib3hlc1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB3ZWVrT2ZDaGVja2JveGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5leHRXZWVrKHN0YXJ0T2ZXZWVrOiBzdHJpbmcpOiBIYWJiYWpldENoZWNrYm94W10ge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJldmlvdXNXZWVrKHN0YXJ0T2ZXZWVrOiBzdHJpbmcpOiBIYWJiYWpldENoZWNrYm94W10ge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn0iXX0=