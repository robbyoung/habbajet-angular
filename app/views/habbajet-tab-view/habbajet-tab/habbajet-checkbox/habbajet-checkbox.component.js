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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBQ2pELDBCQUE0QjtBQUU1QiwwRUFBd0U7QUFDeEUsc0VBQTBFO0FBUzFFO0lBT0ksbUNBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0NBQW1CLENBQUM7SUFDbkQsQ0FBQztJQUVNLDRDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVNLGlEQUFhLEdBQXBCLFVBQXFCLEdBQVE7UUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSx1REFBbUIsR0FBMUI7UUFDSSxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFtQixJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsQ0FBQztRQUNsRixFQUFFLENBQUMsQ0FBQyxjQUFjLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7SUE3QlE7UUFBUixZQUFLLEVBQUU7O2lFQUEyQjtJQUQxQix5QkFBeUI7UUFQckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLCtFQUErRTtZQUM1RixTQUFTLEVBQUUsQ0FBQyw4RUFBOEU7Z0JBQzlFLFNBQVMsQ0FBQztTQUN6QixDQUFDO3lDQVN1QyxrQ0FBZTtPQVAzQyx5QkFBeUIsQ0ErQnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRGF5LCBIYWJiYWpldENoZWNrYm94IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY2hlY2tib3guc2VydmljZSc7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBjaGVja2JveEltYWdlUHJlZml4IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvaW1hZ2VzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hhYmJhamV0LWNoZWNrYm94JyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWNoZWNrYm94L2hhYmJhamV0LWNoZWNrYm94Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1jaGVja2JveC9oYWJiYWpldC1jaGVja2JveC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgJ2FwcC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldENoZWNrYm94Q29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBoYWJiYWpldElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdO1xyXG4gICAgcHVibGljIGN1cnJlbnREYXk6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGVja2JveEltYWdlUHJlZml4OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29sb3JDbGFzczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94SW1hZ2VQcmVmaXggPSBjaGVja2JveEltYWdlUHJlZml4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrYm94ZXMgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldENoZWNrYm94ZXModGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnREYXlTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmNvbG9yQ2xhc3MgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldENvbG9yKHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2hlY2tib3hUYXAoZGF5OiBEYXkpIHtcclxuICAgICAgICBfLmVhY2godGhpcy5jaGVja2JveGVzLCAoYykgPT4ge1xyXG4gICAgICAgICAgICBjLmFjdGl2ZSA9IGRheSA9PT0gYy5kYXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50RGF5U3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldFNlcnZpY2Uuc2VsZWN0Q2hlY2tib3godGhpcy5oYWJiYWpldElkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudERheVN0cmluZygpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVDaGVja2JveCA9IF8uZmluZCh0aGlzLmNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiBjLmFjdGl2ZSk7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUNoZWNrYm94ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF5ID0gYWN0aXZlQ2hlY2tib3guZGF0ZU5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==