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
var HabbajetCheckboxComponent = /** @class */ (function () {
    function HabbajetCheckboxComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    HabbajetCheckboxComponent.prototype.ngOnInit = function () {
        this.checkboxes = this.habbajetService.getHabbajetCheckboxes(this.habbajetIndex);
        this.setCurrentDay();
    };
    HabbajetCheckboxComponent.prototype.onCheckboxTap = function (day) {
        _.each(this.checkboxes, function (c) {
            c.active = day === c.day;
        });
        this.habbajetService.selectCheckbox(this.habbajetIndex, day);
    };
    HabbajetCheckboxComponent.prototype.setCurrentDay = function () {
        this.currentDay = "Current Day";
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HabbajetCheckboxComponent.prototype, "habbajetIndex", void 0);
    HabbajetCheckboxComponent = __decorate([
        core_1.Component({
            selector: "habbajet-checkbox",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetCheckboxComponent);
    return HabbajetCheckboxComponent;
}());
exports.HabbajetCheckboxComponent = HabbajetCheckboxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBQ2pELDBCQUE0QjtBQUM1QiwwRUFBd0U7QUFTeEU7SUFLSSxtQ0FBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQUV4RCw0Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGlEQUFhLEdBQWIsVUFBYyxHQUFRO1FBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGlEQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0lBcEJRO1FBQVIsWUFBSyxFQUFFOztvRUFBdUI7SUFEdEIseUJBQXlCO1FBTnJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSwrRUFBK0U7WUFDNUYsU0FBUyxFQUFFLENBQUMsOEVBQThFLENBQUM7U0FDOUYsQ0FBQzt5Q0FPdUMsa0NBQWU7T0FMM0MseUJBQXlCLENBc0JyQztJQUFELGdDQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRDaGVja2JveCwgRGF5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2NoZWNrYm94LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtY2hlY2tib3hcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1jaGVja2JveC9oYWJiYWpldC1jaGVja2JveC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1jaGVja2JveC9oYWJiYWpldC1jaGVja2JveC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldENoZWNrYm94Q29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGhhYmJhamV0SW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W107XHJcbiAgICBwdWJsaWMgY3VycmVudERheTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveGVzID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRDaGVja2JveGVzKHRoaXMuaGFiYmFqZXRJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50RGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGVja2JveFRhcChkYXk6IERheSkge1xyXG4gICAgICAgIF8uZWFjaCh0aGlzLmNoZWNrYm94ZXMsIChjKSA9PiB7XHJcbiAgICAgICAgICAgIGMuYWN0aXZlID0gZGF5ID09PSBjLmRheTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5zZWxlY3RDaGVja2JveCh0aGlzLmhhYmJhamV0SW5kZXgsIGRheSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudERheSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnREYXkgPSBcIkN1cnJlbnQgRGF5XCI7XHJcbiAgICB9XHJcbn0iXX0=