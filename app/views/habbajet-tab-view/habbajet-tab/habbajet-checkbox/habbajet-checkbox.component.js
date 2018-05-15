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
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetCheckboxComponent);
    return HabbajetCheckboxComponent;
}());
exports.HabbajetCheckboxComponent = HabbajetCheckboxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBQ2pELDBCQUE0QjtBQUM1QiwwRUFBd0U7QUFFeEUsc0VBQTBFO0FBUTFFO0lBTUksbUNBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0NBQW1CLENBQUM7SUFDbkQsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxpREFBYSxHQUFiLFVBQWMsR0FBUTtRQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCx1REFBbUIsR0FBbkI7UUFDSSxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFtQixJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsQ0FBQztRQUNsRixFQUFFLENBQUEsQ0FBQyxjQUFjLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7SUEzQlE7UUFBUixZQUFLLEVBQUU7O29FQUF1QjtJQUR0Qix5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLCtFQUErRTtZQUM1RixTQUFTLEVBQUUsQ0FBQyw4RUFBOEUsQ0FBQztTQUM5RixDQUFDO3lDQVF1QyxrQ0FBZTtPQU4zQyx5QkFBeUIsQ0E2QnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldENoZWNrYm94LCBEYXkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvY2hlY2tib3guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBjaGVja2JveEltYWdlUHJlZml4IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2ltYWdlcy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhhYmJhamV0LWNoZWNrYm94XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtY2hlY2tib3gvaGFiYmFqZXQtY2hlY2tib3guaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtY2hlY2tib3gvaGFiYmFqZXQtY2hlY2tib3guY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRDaGVja2JveENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBoYWJiYWpldEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdO1xyXG4gICAgcHVibGljIGN1cnJlbnREYXk6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGVja2JveEltYWdlUHJlZml4OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94SW1hZ2VQcmVmaXggPSBjaGVja2JveEltYWdlUHJlZml4O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5jaGVja2JveGVzID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRDaGVja2JveGVzKHRoaXMuaGFiYmFqZXRJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50RGF5U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGVja2JveFRhcChkYXk6IERheSkge1xyXG4gICAgICAgIF8uZWFjaCh0aGlzLmNoZWNrYm94ZXMsIChjKSA9PiB7XHJcbiAgICAgICAgICAgIGMuYWN0aXZlID0gZGF5ID09PSBjLmRheTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnREYXlTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5zZWxlY3RDaGVja2JveCh0aGlzLmhhYmJhamV0SW5kZXgsIGRheSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudERheVN0cmluZygpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVDaGVja2JveCA9IF8uZmluZCh0aGlzLmNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiBjLmFjdGl2ZSk7XHJcbiAgICAgICAgaWYoYWN0aXZlQ2hlY2tib3ggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXkgPSBhY3RpdmVDaGVja2JveC5kYXRlTmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=