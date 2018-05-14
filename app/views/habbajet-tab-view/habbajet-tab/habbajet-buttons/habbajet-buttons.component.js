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
    HabbajetButtonsComponent.prototype.onPositiveTap = function () {
        if (!this.habbajetButtons.locked) {
            this.habbajetService.setCheckmark(this.habbajetIndex, checkbox_service_1.Checkmark.Positive);
            this.habbajetService.evolve(this.habbajetIndex);
        }
        this.habbajetButtons.locked = true;
    };
    HabbajetButtonsComponent.prototype.onNegativeTap = function () {
        if (!this.habbajetButtons.locked) {
            this.habbajetService.setCheckmark(this.habbajetIndex, checkbox_service_1.Checkmark.Negative);
        }
        this.habbajetButtons.locked = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1idXR0b25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUVqRCwwRUFBeUY7QUFDekYsMEVBQWtFO0FBU2xFO0lBSUksa0NBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQsMkNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELGdEQUFhLEdBQWI7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDRCQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVELGdEQUFhLEdBQWI7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDRCQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUUsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBdEJRO1FBQVIsWUFBSyxFQUFFOzttRUFBdUI7SUFEdEIsd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSw2RUFBNkU7WUFDMUYsU0FBUyxFQUFFLENBQUMsNEVBQTRFLENBQUM7U0FDNUYsQ0FBQzt5Q0FNdUMsa0NBQWU7T0FKM0Msd0JBQXdCLENBd0JwQztJQUFELCtCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4QlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlLCBIYWJiYWpldEJ1dHRvbnMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDaGVja21hcmsgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvY2hlY2tib3guc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtYnV0dG9uc1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWJ1dHRvbnMvaGFiYmFqZXQtYnV0dG9ucy5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1idXR0b25zL2hhYmJhamV0LWJ1dHRvbnMuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRCdXR0b25zQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGhhYmJhamV0SW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoYWJiYWpldEJ1dHRvbnM6IEhhYmJhamV0QnV0dG9ucztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRCdXR0b25zID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRCdXR0b25zKHRoaXMuaGFiYmFqZXRJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qb3NpdGl2ZVRhcCgpIHtcclxuICAgICAgICBpZighdGhpcy5oYWJiYWpldEJ1dHRvbnMubG9ja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLnNldENoZWNrbWFyayh0aGlzLmhhYmJhamV0SW5kZXgsIENoZWNrbWFyay5Qb3NpdGl2ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmV2b2x2ZSh0aGlzLmhhYmJhamV0SW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhYmJhamV0QnV0dG9ucy5sb2NrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmVnYXRpdmVUYXAoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaGFiYmFqZXRCdXR0b25zLmxvY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5zZXRDaGVja21hcmsodGhpcy5oYWJiYWpldEluZGV4LCBDaGVja21hcmsuTmVnYXRpdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhYmJhamV0QnV0dG9ucy5sb2NrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59Il19