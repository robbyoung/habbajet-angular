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
var habbajet_service_1 = require("../../../../services/habbajet.service");
var images_service_1 = require("../../../../services/images.service");
var HabbajetCheckboxComponent = /** @class */ (function () {
    function HabbajetCheckboxComponent(habbajetService) {
        this.habbajetService = habbajetService;
        this.checkboxImagePrefix = images_service_1.checkboxImagePrefix;
    }
    HabbajetCheckboxComponent.prototype.ngOnInit = function () {
        this.checkboxes = this.habbajetService.getHabbajetCheckboxes(this.habbajetId);
        this.setCurrentDayString();
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetId);
    };
    HabbajetCheckboxComponent.prototype.onCheckboxTap = function (day) {
        _.each(this.checkboxes, function (c) {
            c.active = day === c.day;
        });
        this.setCurrentDayString();
        this.habbajetService.selectCheckbox(this.habbajetId);
    };
    HabbajetCheckboxComponent.prototype.setCurrentDayString = function () {
        var activeCheckbox = _.find(this.checkboxes, function (c) { return c.active; });
        if (activeCheckbox !== undefined) {
            this.currentDay = activeCheckbox.dateName;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HabbajetCheckboxComponent.prototype, "habbajetId", void 0);
    HabbajetCheckboxComponent = __decorate([
        core_1.Component({
            selector: "habbajet-checkbox",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.css",
                "app.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetCheckboxComponent);
    return HabbajetCheckboxComponent;
}());
exports.HabbajetCheckboxComponent = HabbajetCheckboxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBQ2pELDBCQUE0QjtBQUM1QiwwRUFBd0U7QUFFeEUsc0VBQTBFO0FBUzFFO0lBT0ksbUNBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0NBQW1CLENBQUM7SUFDbkQsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELGlEQUFhLEdBQWIsVUFBYyxHQUFRO1FBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsdURBQW1CLEdBQW5CO1FBQ0ksSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBbUIsSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFBLENBQUMsY0FBYyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBN0JRO1FBQVIsWUFBSyxFQUFFOztpRUFBb0I7SUFEbkIseUJBQXlCO1FBUHJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSwrRUFBK0U7WUFDNUYsU0FBUyxFQUFFLENBQUMsOEVBQThFO2dCQUM5RSxTQUFTLENBQUM7U0FDekIsQ0FBQzt5Q0FTdUMsa0NBQWU7T0FQM0MseUJBQXlCLENBK0JyQztJQUFELGdDQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRDaGVja2JveCwgRGF5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2NoZWNrYm94LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgY2hlY2tib3hJbWFnZVByZWZpeCB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9pbWFnZXMuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoYWJiYWpldC1jaGVja2JveFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWNoZWNrYm94L2hhYmJhamV0LWNoZWNrYm94Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWNoZWNrYm94L2hhYmJhamV0LWNoZWNrYm94LmNzc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhcHAuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRDaGVja2JveENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBoYWJiYWpldElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdO1xyXG4gICAgcHVibGljIGN1cnJlbnREYXk6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGVja2JveEltYWdlUHJlZml4OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29sb3JDbGFzczogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveEltYWdlUHJlZml4ID0gY2hlY2tib3hJbWFnZVByZWZpeDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hlcyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0Q2hlY2tib3hlcyh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudERheVN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuY29sb3JDbGFzcyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0Q29sb3IodGhpcy5oYWJiYWpldElkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoZWNrYm94VGFwKGRheTogRGF5KSB7XHJcbiAgICAgICAgXy5lYWNoKHRoaXMuY2hlY2tib3hlcywgKGMpID0+IHtcclxuICAgICAgICAgICAgYy5hY3RpdmUgPSBkYXkgPT09IGMuZGF5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudERheVN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLnNlbGVjdENoZWNrYm94KHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudERheVN0cmluZygpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVDaGVja2JveCA9IF8uZmluZCh0aGlzLmNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiBjLmFjdGl2ZSk7XHJcbiAgICAgICAgaWYoYWN0aXZlQ2hlY2tib3ggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXkgPSBhY3RpdmVDaGVja2JveC5kYXRlTmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=