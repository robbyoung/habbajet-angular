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
        this.habbajetButtons = this.habbajetService.getHabbajetButtons(this.habbajetIndex);
    };
    HabbajetButtonsComponent.prototype.onPositiveLongPress = function () {
        if (!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetIndex, checkbox_service_1.Checkmark.Positive)) {
            this.habbajetService.evolve(this.habbajetIndex);
            this.habbajetButtons.locked = true;
            this.habbajetButtons.positiveSrc = habbajet_service_1.ButtonImages.PositiveSelected;
        }
    };
    HabbajetButtonsComponent.prototype.onNegativeLongPress = function () {
        if (!this.habbajetButtons.locked && this.habbajetService.setCheckmark(this.habbajetIndex, checkbox_service_1.Checkmark.Negative)) {
            this.habbajetButtons.locked = true;
            this.habbajetButtons.negativeSrc = habbajet_service_1.ButtonImages.NegativeSelected;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HabbajetButtonsComponent.prototype, "habbajetIndex", void 0);
    HabbajetButtonsComponent = __decorate([
        core_1.Component({
            selector: "habbajet-buttons",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetButtonsComponent);
    return HabbajetButtonsComponent;
}());
exports.HabbajetButtonsComponent = HabbajetButtonsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1idXR0b25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUVqRCwwRUFBdUc7QUFDdkcsMEVBQWtFO0FBU2xFO0lBSUksa0NBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQsMkNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELHNEQUFtQixHQUFuQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSw0QkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLCtCQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsQ0FBQztJQUNMLENBQUM7SUFFRCxzREFBbUIsR0FBbkI7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsNEJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0csSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLCtCQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsQ0FBQztJQUNMLENBQUM7SUF0QlE7UUFBUixZQUFLLEVBQUU7O21FQUF1QjtJQUR0Qix3QkFBd0I7UUFOcEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDZFQUE2RTtZQUMxRixTQUFTLEVBQUUsQ0FBQyw0RUFBNEUsQ0FBQztTQUM1RixDQUFDO3lDQU11QyxrQ0FBZTtPQUozQyx3QkFBd0IsQ0F5QnBDO0lBQUQsK0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UsIEhhYmJhamV0QnV0dG9ucywgQnV0dG9uSW1hZ2VzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hlY2ttYXJrIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2NoZWNrYm94LnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhhYmJhamV0LWJ1dHRvbnNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1idXR0b25zL2hhYmJhamV0LWJ1dHRvbnMuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtYnV0dG9ucy9oYWJiYWpldC1idXR0b25zLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0QnV0dG9uc0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBoYWJiYWpldEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGFiYmFqZXRCdXR0b25zOiBIYWJiYWpldEJ1dHRvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0QnV0dG9ucyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0QnV0dG9ucyh0aGlzLmhhYmJhamV0SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUG9zaXRpdmVMb25nUHJlc3MoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaGFiYmFqZXRCdXR0b25zLmxvY2tlZCAmJiB0aGlzLmhhYmJhamV0U2VydmljZS5zZXRDaGVja21hcmsodGhpcy5oYWJiYWpldEluZGV4LCBDaGVja21hcmsuUG9zaXRpdmUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmV2b2x2ZSh0aGlzLmhhYmJhamV0SW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0QnV0dG9ucy5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0QnV0dG9ucy5wb3NpdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZVNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk5lZ2F0aXZlTG9uZ1ByZXNzKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmhhYmJhamV0QnV0dG9ucy5sb2NrZWQgJiYgdGhpcy5oYWJiYWpldFNlcnZpY2Uuc2V0Q2hlY2ttYXJrKHRoaXMuaGFiYmFqZXRJbmRleCwgQ2hlY2ttYXJrLk5lZ2F0aXZlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0QnV0dG9ucy5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0QnV0dG9ucy5uZWdhdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZVNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=