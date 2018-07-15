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
        this.checkboxes = this.habbajetService.getHabbajetCheckboxes(this.habbajetIndex);
        this.setCurrentDayString();
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetIndex);
    };
    HabbajetCheckboxComponent.prototype.onCheckboxTap = function (day) {
        _.each(this.checkboxes, function (c) {
            c.active = day === c.day;
        });
        this.setCurrentDayString();
        this.habbajetService.selectCheckbox(this.habbajetIndex, day);
    };
    HabbajetCheckboxComponent.prototype.setCurrentDayString = function () {
        var activeCheckbox = _.find(this.checkboxes, function (c) { return c.active; });
        if (activeCheckbox !== undefined) {
            this.currentDay = activeCheckbox.dateName;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HabbajetCheckboxComponent.prototype, "habbajetIndex", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBQ2pELDBCQUE0QjtBQUM1QiwwRUFBd0U7QUFFeEUsc0VBQTBFO0FBUzFFO0lBT0ksbUNBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0NBQW1CLENBQUM7SUFDbkQsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELGlEQUFhLEdBQWIsVUFBYyxHQUFRO1FBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELHVEQUFtQixHQUFuQjtRQUNJLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQW1CLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQyxDQUFDO1FBQ2xGLEVBQUUsQ0FBQSxDQUFDLGNBQWMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUM5QyxDQUFDO0lBQ0wsQ0FBQztJQTdCUTtRQUFSLFlBQUssRUFBRTs7b0VBQXVCO0lBRHRCLHlCQUF5QjtRQVByQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsK0VBQStFO1lBQzVGLFNBQVMsRUFBRSxDQUFDLDhFQUE4RTtnQkFDOUUsU0FBUyxDQUFDO1NBQ3pCLENBQUM7eUNBU3VDLGtDQUFlO09BUDNDLHlCQUF5QixDQStCckM7SUFBRCxnQ0FBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0Q2hlY2tib3gsIERheSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jaGVja2JveC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGNoZWNrYm94SW1hZ2VQcmVmaXggfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvaW1hZ2VzLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtY2hlY2tib3hcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1jaGVja2JveC9oYWJiYWpldC1jaGVja2JveC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1jaGVja2JveC9oYWJiYWpldC1jaGVja2JveC5jc3NcIixcclxuICAgICAgICAgICAgICAgIFwiYXBwLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0Q2hlY2tib3hDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaGFiYmFqZXRJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXTtcclxuICAgIHB1YmxpYyBjdXJyZW50RGF5OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2hlY2tib3hJbWFnZVByZWZpeDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbG9yQ2xhc3M6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hJbWFnZVByZWZpeCA9IGNoZWNrYm94SW1hZ2VQcmVmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLmNoZWNrYm94ZXMgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldENoZWNrYm94ZXModGhpcy5oYWJiYWpldEluZGV4KTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnREYXlTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmNvbG9yQ2xhc3MgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldENvbG9yKHRoaXMuaGFiYmFqZXRJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGVja2JveFRhcChkYXk6IERheSkge1xyXG4gICAgICAgIF8uZWFjaCh0aGlzLmNoZWNrYm94ZXMsIChjKSA9PiB7XHJcbiAgICAgICAgICAgIGMuYWN0aXZlID0gZGF5ID09PSBjLmRheTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnREYXlTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5zZWxlY3RDaGVja2JveCh0aGlzLmhhYmJhamV0SW5kZXgsIGRheSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudERheVN0cmluZygpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVDaGVja2JveCA9IF8uZmluZCh0aGlzLmNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiBjLmFjdGl2ZSk7XHJcbiAgICAgICAgaWYoYWN0aXZlQ2hlY2tib3ggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXkgPSBhY3RpdmVDaGVja2JveC5kYXRlTmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=