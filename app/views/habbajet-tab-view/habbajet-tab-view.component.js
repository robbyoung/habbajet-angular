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
var frame = require("tns-core-modules/ui/frame/frame");
var habbajet_service_1 = require("../../services/habbajet.service");
var tab_service_1 = require("../../services/tab.service");
var HabbajetTabViewComponent = /** @class */ (function () {
    function HabbajetTabViewComponent(tabService, habbajetService) {
        this.tabService = tabService;
        this.habbajetService = habbajetService;
        var interval = setInterval(function () {
            var page = frame.topmost().currentPage;
            if (page) {
                page.getViewById('tabView').android.removeViewAt(1);
                page.actionBarHidden = true;
                clearInterval(interval);
            }
        }, 10);
    }
    HabbajetTabViewComponent.prototype.ngOnInit = function () {
        this.tabList = this.tabService.tabList;
    };
    HabbajetTabViewComponent = __decorate([
        core_1.Component({
            selector: 'habbajet-tab-view',
            templateUrl: 'views/habbajet-tab-view/habbajet-tab-view.html',
        }),
        __metadata("design:paramtypes", [tab_service_1.TabService, habbajet_service_1.HabbajetService])
    ], HabbajetTabViewComponent);
    return HabbajetTabViewComponent;
}());
exports.HabbajetTabViewComponent = HabbajetTabViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLHVEQUF5RDtBQUN6RCxvRUFBa0U7QUFDbEUsMERBQW9FO0FBT3BFO0lBSUksa0NBQW9CLFVBQXNCLEVBQVUsZUFBZ0M7UUFBaEUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRixJQUFNLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDekIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLDJDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFqQlEsd0JBQXdCO1FBTHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7U0FDaEUsQ0FBQzt5Q0FNa0Msd0JBQVUsRUFBMkIsa0NBQWU7T0FKM0Usd0JBQXdCLENBa0JwQztJQUFELCtCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWUnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFiQmluZGluZywgVGFiU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RhYi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoYWJiYWpldC10YWItdmlldycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi12aWV3Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0VGFiVmlld0NvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHRhYkxpc3Q6IFRhYkJpbmRpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYlNlcnZpY2U6IFRhYlNlcnZpY2UsIHByaXZhdGUgaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFnZSA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZTtcclxuICAgICAgICAgICAgaWYgKHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHBhZ2UuZ2V0Vmlld0J5SWQoJ3RhYlZpZXcnKS5hbmRyb2lkLnJlbW92ZVZpZXdBdCgxKTtcclxuICAgICAgICAgICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRhYkxpc3QgPSB0aGlzLnRhYlNlcnZpY2UudGFiTGlzdDtcclxuICAgIH1cclxufVxyXG4iXX0=