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
            selector: 'habbajet-checkbox',
            templateUrl: 'views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.html',
            styleUrls: ['views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.css',
                'app.css'],
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetCheckboxComponent);
    return HabbajetCheckboxComponent;
}());
exports.HabbajetCheckboxComponent = HabbajetCheckboxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBQ2pELDBCQUE0QjtBQUU1QiwwRUFBd0U7QUFDeEUsc0VBQTBFO0FBUzFFO0lBT0ksbUNBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0NBQW1CLENBQUM7SUFDbkQsQ0FBQztJQUVNLDRDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVNLGlEQUFhLEdBQXBCLFVBQXFCLEdBQVE7UUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSx1REFBbUIsR0FBMUI7UUFDSSxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFtQixJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsQ0FBQztRQUNsRixJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQTdCUTtRQUFSLFlBQUssRUFBRTs7aUVBQTJCO0lBRDFCLHlCQUF5QjtRQVByQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsK0VBQStFO1lBQzVGLFNBQVMsRUFBRSxDQUFDLDhFQUE4RTtnQkFDOUUsU0FBUyxDQUFDO1NBQ3pCLENBQUM7eUNBU3VDLGtDQUFlO09BUDNDLHlCQUF5QixDQStCckM7SUFBRCxnQ0FBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBEYXksIEhhYmJhamV0Q2hlY2tib3ggfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jaGVja2JveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZSc7XHJcbmltcG9ydCB7IGNoZWNrYm94SW1hZ2VQcmVmaXggfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9pbWFnZXMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGFiYmFqZXQtY2hlY2tib3gnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtY2hlY2tib3gvaGFiYmFqZXQtY2hlY2tib3guaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWNoZWNrYm94L2hhYmJhamV0LWNoZWNrYm94LmNzcycsXHJcbiAgICAgICAgICAgICAgICAnYXBwLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0Q2hlY2tib3hDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcHVibGljIGhhYmJhamV0SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W107XHJcbiAgICBwdWJsaWMgY3VycmVudERheTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNoZWNrYm94SW1hZ2VQcmVmaXg6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb2xvckNsYXNzOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hJbWFnZVByZWZpeCA9IGNoZWNrYm94SW1hZ2VQcmVmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hlcyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0Q2hlY2tib3hlcyh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudERheVN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuY29sb3JDbGFzcyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0Q29sb3IodGhpcy5oYWJiYWpldElkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DaGVja2JveFRhcChkYXk6IERheSkge1xyXG4gICAgICAgIF8uZWFjaCh0aGlzLmNoZWNrYm94ZXMsIChjKSA9PiB7XHJcbiAgICAgICAgICAgIGMuYWN0aXZlID0gZGF5ID09PSBjLmRheTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnREYXlTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5zZWxlY3RDaGVja2JveCh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50RGF5U3RyaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNoZWNrYm94ID0gXy5maW5kKHRoaXMuY2hlY2tib3hlcywgKGM6IEhhYmJhamV0Q2hlY2tib3gpID0+IGMuYWN0aXZlKTtcclxuICAgICAgICBpZiAoYWN0aXZlQ2hlY2tib3ggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXkgPSBhY3RpdmVDaGVja2JveC5kYXRlTmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19