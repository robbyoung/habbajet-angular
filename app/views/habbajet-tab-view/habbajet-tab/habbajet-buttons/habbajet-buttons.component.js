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
var checkbox_service_1 = require("../../../../services/checkbox.service");
var habbajet_service_1 = require("../../../../services/habbajet.service");
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
            selector: 'habbajet-buttons',
            templateUrl: 'views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.html',
            styleUrls: ['views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.css',
                'app.css'],
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetButtonsComponent);
    return HabbajetButtonsComponent;
}());
exports.HabbajetButtonsComponent = HabbajetButtonsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1idXR0b25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCwwRUFBa0U7QUFDbEUsMEVBQXVHO0FBU3ZHO0lBS0ksa0NBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFakQsMkNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU0sc0RBQW1CLEdBQTFCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsNEJBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4RyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUQ7SUFDTCxDQUFDO0lBRU0sc0RBQW1CLEdBQTFCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsNEJBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4RyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1RDtJQUNMLENBQUM7SUF0QlE7UUFBUixZQUFLLEVBQUU7O2dFQUEyQjtJQUQxQix3QkFBd0I7UUFQcEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDZFQUE2RTtZQUMxRixTQUFTLEVBQUUsQ0FBQyw0RUFBNEU7Z0JBQzVFLFNBQVMsQ0FBQztTQUN6QixDQUFDO3lDQU91QyxrQ0FBZTtPQUwzQyx3QkFBd0IsQ0F5QnBDO0lBQUQsK0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoZWNrbWFyayB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NoZWNrYm94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCdXR0b25JbWFnZXMsIEhhYmJhamV0QnV0dG9ucywgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGFiYmFqZXQtYnV0dG9ucycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1idXR0b25zL2hhYmJhamV0LWJ1dHRvbnMuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWJ1dHRvbnMvaGFiYmFqZXQtYnV0dG9ucy5jc3MnLFxyXG4gICAgICAgICAgICAgICAgJ2FwcC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldEJ1dHRvbnNDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcHVibGljIGhhYmJhamV0SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBoYWJiYWpldEJ1dHRvbnM6IEhhYmJhamV0QnV0dG9ucztcclxuICAgIHB1YmxpYyBjb2xvckNsYXNzOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldEJ1dHRvbnMgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldEJ1dHRvbnModGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICB0aGlzLmNvbG9yQ2xhc3MgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldENvbG9yKHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUG9zaXRpdmVMb25nUHJlc3MoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhYmJhamV0QnV0dG9ucy5sb2NrZWQgJiYgdGhpcy5oYWJiYWpldFNlcnZpY2Uuc2V0Q2hlY2ttYXJrKHRoaXMuaGFiYmFqZXRJZCwgQ2hlY2ttYXJrLlBvc2l0aXZlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5ldm9sdmUodGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldFNlcnZpY2UudXBkYXRlQnV0dG9uSW1hZ2VzKHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk5lZ2F0aXZlTG9uZ1ByZXNzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYWJiYWpldEJ1dHRvbnMubG9ja2VkICYmIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLnNldENoZWNrbWFyayh0aGlzLmhhYmJhamV0SWQsIENoZWNrbWFyay5OZWdhdGl2ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldFNlcnZpY2UudXBkYXRlQnV0dG9uSW1hZ2VzKHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=