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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1idXR0b25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCwwRUFBdUc7QUFDdkcsMEVBQWtFO0FBU2xFO0lBSUksa0NBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQsMkNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELHNEQUFtQixHQUFuQjtRQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSw0QkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLCtCQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsQ0FBQztJQUNMLENBQUM7SUFFRCxzREFBbUIsR0FBbkI7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsNEJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0csSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLCtCQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsQ0FBQztJQUNMLENBQUM7SUF0QlE7UUFBUixZQUFLLEVBQUU7O21FQUF1QjtJQUR0Qix3QkFBd0I7UUFOcEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDZFQUE2RTtZQUMxRixTQUFTLEVBQUUsQ0FBQyw0RUFBNEUsQ0FBQztTQUM1RixDQUFDO3lDQU11QyxrQ0FBZTtPQUozQyx3QkFBd0IsQ0F5QnBDO0lBQUQsK0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlLCBIYWJiYWpldEJ1dHRvbnMsIEJ1dHRvbkltYWdlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENoZWNrbWFyayB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jaGVja2JveC5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoYWJiYWpldC1idXR0b25zXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtYnV0dG9ucy9oYWJiYWpldC1idXR0b25zLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWJ1dHRvbnMvaGFiYmFqZXQtYnV0dG9ucy5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldEJ1dHRvbnNDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaGFiYmFqZXRJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhhYmJhamV0QnV0dG9uczogSGFiYmFqZXRCdXR0b25zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldEJ1dHRvbnMgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldEJ1dHRvbnModGhpcy5oYWJiYWpldEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBvblBvc2l0aXZlTG9uZ1ByZXNzKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmhhYmJhamV0QnV0dG9ucy5sb2NrZWQgJiYgdGhpcy5oYWJiYWpldFNlcnZpY2Uuc2V0Q2hlY2ttYXJrKHRoaXMuaGFiYmFqZXRJbmRleCwgQ2hlY2ttYXJrLlBvc2l0aXZlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5ldm9sdmUodGhpcy5oYWJiYWpldEluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldEJ1dHRvbnMubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldEJ1dHRvbnMucG9zaXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuUG9zaXRpdmVTZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25OZWdhdGl2ZUxvbmdQcmVzcygpIHtcclxuICAgICAgICBpZighdGhpcy5oYWJiYWpldEJ1dHRvbnMubG9ja2VkICYmIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLnNldENoZWNrbWFyayh0aGlzLmhhYmJhamV0SW5kZXgsIENoZWNrbWFyay5OZWdhdGl2ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldEJ1dHRvbnMubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldEJ1dHRvbnMubmVnYXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuTmVnYXRpdmVTZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19