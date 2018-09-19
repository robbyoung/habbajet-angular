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
var habbajet_service_1 = require("../../../../services/habbajet.service");
var checkbox_service_1 = require("../../../../services/checkbox.service");
var HabbajetButtonsComponent = /** @class */ (function () {
    function HabbajetButtonsComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    HabbajetButtonsComponent.prototype.ngOnInit = function () {
        this.habbajetButtons = this.habbajetService.getHabbajetButtons(this.habbajetId);
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetId);
    };
    HabbajetButtonsComponent.prototype.onPositiveLongPress = function () {
        if (!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetId, checkbox_service_1.Checkmark.Positive)) {
            this.habbajetService.evolve(this.habbajetId);
            this.habbajetService.updateButtonImages(this.habbajetId);
        }
    };
    HabbajetButtonsComponent.prototype.onNegativeLongPress = function () {
        if (!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetId, checkbox_service_1.Checkmark.Negative)) {
            this.habbajetService.updateButtonImages(this.habbajetId);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HabbajetButtonsComponent.prototype, "habbajetId", void 0);
    HabbajetButtonsComponent = __decorate([
        core_1.Component({
            selector: "habbajet-buttons",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.css",
                "app.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetButtonsComponent);
    return HabbajetButtonsComponent;
}());
exports.HabbajetButtonsComponent = HabbajetButtonsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1idXR0b25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCwwRUFBdUc7QUFDdkcsMEVBQWtFO0FBVWxFO0lBS0ksa0NBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQsMkNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsc0RBQW1CLEdBQW5CO1FBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDRCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RCxDQUFDO0lBQ0wsQ0FBQztJQUVELHNEQUFtQixHQUFuQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSw0QkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RCxDQUFDO0lBQ0wsQ0FBQztJQXRCUTtRQUFSLFlBQUssRUFBRTs7Z0VBQW9CO0lBRG5CLHdCQUF3QjtRQVBwQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsNkVBQTZFO1lBQzFGLFNBQVMsRUFBRSxDQUFDLDRFQUE0RTtnQkFDNUUsU0FBUyxDQUFDO1NBQ3pCLENBQUM7eUNBT3VDLGtDQUFlO09BTDNDLHdCQUF3QixDQXlCcEM7SUFBRCwrQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UsIEhhYmJhamV0QnV0dG9ucywgQnV0dG9uSW1hZ2VzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hlY2ttYXJrIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2NoZWNrYm94LnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhhYmJhamV0LWJ1dHRvbnNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1idXR0b25zL2hhYmJhamV0LWJ1dHRvbnMuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtYnV0dG9ucy9oYWJiYWpldC1idXR0b25zLmNzc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhcHAuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRCdXR0b25zQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGhhYmJhamV0SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBoYWJiYWpldEJ1dHRvbnM6IEhhYmJhamV0QnV0dG9ucztcclxuICAgIHB1YmxpYyBjb2xvckNsYXNzOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0QnV0dG9ucyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0QnV0dG9ucyh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgIHRoaXMuY29sb3JDbGFzcyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0Q29sb3IodGhpcy5oYWJiYWpldElkKTtcclxuICAgIH1cclxuXHJcbiAgICBvblBvc2l0aXZlTG9uZ1ByZXNzKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmhhYmJhamV0QnV0dG9ucy5sb2NrZWQgJiYgdGhpcy5oYWJiYWpldFNlcnZpY2Uuc2V0Q2hlY2ttYXJrKHRoaXMuaGFiYmFqZXRJZCwgQ2hlY2ttYXJrLlBvc2l0aXZlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5ldm9sdmUodGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldFNlcnZpY2UudXBkYXRlQnV0dG9uSW1hZ2VzKHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTmVnYXRpdmVMb25nUHJlc3MoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaGFiYmFqZXRCdXR0b25zLmxvY2tlZCAmJiB0aGlzLmhhYmJhamV0U2VydmljZS5zZXRDaGVja21hcmsodGhpcy5oYWJiYWpldElkLCBDaGVja21hcmsuTmVnYXRpdmUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLnVwZGF0ZUJ1dHRvbkltYWdlcyh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=