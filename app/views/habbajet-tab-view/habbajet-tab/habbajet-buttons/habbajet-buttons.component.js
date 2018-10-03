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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1idXR0b25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCwwRUFBa0U7QUFDbEUsMEVBQXVHO0FBU3ZHO0lBS0ksa0NBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFakQsMkNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU0sc0RBQW1CLEdBQTFCO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDRCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RCxDQUFDO0lBQ0wsQ0FBQztJQUVNLHNEQUFtQixHQUExQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSw0QkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RCxDQUFDO0lBQ0wsQ0FBQztJQXRCUTtRQUFSLFlBQUssRUFBRTs7Z0VBQTJCO0lBRDFCLHdCQUF3QjtRQVBwQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsNkVBQTZFO1lBQzFGLFNBQVMsRUFBRSxDQUFDLDRFQUE0RTtnQkFDNUUsU0FBUyxDQUFDO1NBQ3pCLENBQUM7eUNBT3VDLGtDQUFlO09BTDNDLHdCQUF3QixDQXlCcEM7SUFBRCwrQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hlY2ttYXJrIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY2hlY2tib3guc2VydmljZSc7XHJcbmltcG9ydCB7IEJ1dHRvbkltYWdlcywgSGFiYmFqZXRCdXR0b25zLCBIYWJiYWpldFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoYWJiYWpldC1idXR0b25zJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWJ1dHRvbnMvaGFiYmFqZXQtYnV0dG9ucy5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtYnV0dG9ucy9oYWJiYWpldC1idXR0b25zLmNzcycsXHJcbiAgICAgICAgICAgICAgICAnYXBwLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0QnV0dG9uc0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGFiYmFqZXRJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGhhYmJhamV0QnV0dG9uczogSGFiYmFqZXRCdXR0b25zO1xyXG4gICAgcHVibGljIGNvbG9yQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0QnV0dG9ucyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0QnV0dG9ucyh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgIHRoaXMuY29sb3JDbGFzcyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0Q29sb3IodGhpcy5oYWJiYWpldElkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Qb3NpdGl2ZUxvbmdQcmVzcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFiYmFqZXRCdXR0b25zLmxvY2tlZCAmJiB0aGlzLmhhYmJhamV0U2VydmljZS5zZXRDaGVja21hcmsodGhpcy5oYWJiYWpldElkLCBDaGVja21hcmsuUG9zaXRpdmUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmV2b2x2ZSh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS51cGRhdGVCdXR0b25JbWFnZXModGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTmVnYXRpdmVMb25nUHJlc3MoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhYmJhamV0QnV0dG9ucy5sb2NrZWQgJiYgdGhpcy5oYWJiYWpldFNlcnZpY2Uuc2V0Q2hlY2ttYXJrKHRoaXMuaGFiYmFqZXRJZCwgQ2hlY2ttYXJrLk5lZ2F0aXZlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS51cGRhdGVCdXR0b25JbWFnZXModGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==