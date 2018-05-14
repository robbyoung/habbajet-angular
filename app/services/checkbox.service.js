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
                checkmark: Checkmark.None,
            });
        }
        weekOfCheckboxes[0].active = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoZWNrYm94LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBaUM7QUFDakMsc0NBQTJDO0FBQzNDLDBCQUE2QjtBQUU3QixJQUFZLEdBUVg7QUFSRCxXQUFZLEdBQUc7SUFDWCxpQ0FBVSxDQUFBO0lBQ1YsaUNBQVUsQ0FBQTtJQUNWLG1DQUFXLENBQUE7SUFDWCx1Q0FBYSxDQUFBO0lBQ2IscUNBQVksQ0FBQTtJQUNaLGlDQUFVLENBQUE7SUFDVixxQ0FBWSxDQUFBO0FBQ2hCLENBQUMsRUFSVyxHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUFRZDtBQUVELElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNqQix5Q0FBUSxDQUFBO0lBQ1IsaURBQVksQ0FBQTtJQUNaLGlEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBWUQ7SUFFSTtJQUFlLENBQUM7SUFFaEIsd0NBQWMsR0FBZDtRQUNJLElBQU0sZUFBZSxHQUFXLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuRSxJQUFNLEtBQUssR0FBVyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEQsSUFBTSxnQkFBZ0IsR0FBdUIsRUFBRSxDQUFDO1FBQ2hELEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNuRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLElBQUksRUFBRSxLQUFLO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2dCQUNiLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixHQUFHLEtBQUE7Z0JBQ0gsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJO2FBQzVCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLFVBQThCO1FBQ3RDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQW1CO1lBQzFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLFVBQThCO1FBQzFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQTlCUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQStCM0I7SUFBRCxzQkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcclxuXHJcbmV4cG9ydCBlbnVtIERheSB7XHJcbiAgICBTdW5kYXkgPSAwLFxyXG4gICAgTW9uZGF5ID0gMSxcclxuICAgIFR1ZXNkYXkgPSAyLFxyXG4gICAgV2VkbmVzZGF5ID0gMyxcclxuICAgIFRodXJzZGF5ID0gNCxcclxuICAgIEZyaWRheSA9IDUsXHJcbiAgICBTYXR1cmRheSA9IDYsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENoZWNrbWFyayB7XHJcbiAgICBOb25lID0gMCxcclxuICAgIFBvc2l0aXZlID0gMSxcclxuICAgIE5lZ2F0aXZlID0gMixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIYWJiYWpldENoZWNrYm94IHtcclxuICAgIGxvY2tlZDogYm9vbGVhbjtcclxuICAgIHRpbWU6IHN0cmluZztcclxuICAgIGFjdGl2ZTogYm9vbGVhbjtcclxuICAgIGRhdGVOYW1lOiBzdHJpbmc7XHJcbiAgICBkYXk6IERheTtcclxuICAgIGNoZWNrbWFyazogQ2hlY2ttYXJrLFxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBnZXRDdXJyZW50V2VlaygpOiBIYWJiYWpldENoZWNrYm94W10ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZUaGlzV2Vlazogc3RyaW5nID0gTW9tZW50KCkuc3RhcnRPZignd2VlaycpLmZyb21Ob3coKTtcclxuICAgICAgICBjb25zdCB0b2RheTogc3RyaW5nID0gTW9tZW50KCkuc3RhcnRPZignZGF5JykuZnJvbU5vdygpO1xyXG4gICAgICAgIGNvbnN0IHdlZWtPZkNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgZGF5ID0gRGF5LlN1bmRheTsgZGF5IDw9IERheS5TYXR1cmRheTsgZGF5KyspIHtcclxuICAgICAgICAgICAgd2Vla09mQ2hlY2tib3hlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiB0b2RheSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkYXRlTmFtZTogJ1NvbWVkYXknLFxyXG4gICAgICAgICAgICAgICAgZGF5LFxyXG4gICAgICAgICAgICAgICAgY2hlY2ttYXJrOiBDaGVja21hcmsuTm9uZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdlZWtPZkNoZWNrYm94ZXNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gd2Vla09mQ2hlY2tib3hlcztcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXh0V2VlayhjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10pOiBIYWJiYWpldENoZWNrYm94W10ge1xyXG4gICAgICAgIHJldHVybiBfLmVhY2goY2hlY2tib3hlcywgKGM6IEhhYmJhamV0Q2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgYy5jaGVja21hcmsgPSBDaGVja21hcmsuTm9uZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcmV2aW91c1dlZWsoY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdKTogSGFiYmFqZXRDaGVja2JveFtdIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59Il19