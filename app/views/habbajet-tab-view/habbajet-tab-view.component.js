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
var frame = require("ui/frame");
var tab_service_1 = require("../../services/tab.service");
var habbajet_service_1 = require("../../services/habbajet.service");
var HabbajetTabViewComponent = /** @class */ (function () {
    function HabbajetTabViewComponent(tabService, habbajetService) {
        this.tabService = tabService;
        this.habbajetService = habbajetService;
        var interval = setInterval(function () {
            var page = frame.topmost().currentPage;
            if (page) {
                page.getViewById('tabView').android.removeViewAt(0);
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
            selector: "habbajet-tab-view",
            templateUrl: "views/habbajet-tab-view/habbajet-tab-view.html",
        }),
        __metadata("design:paramtypes", [tab_service_1.TabService, habbajet_service_1.HabbajetService])
    ], HabbajetTabViewComponent);
    return HabbajetTabViewComponent;
}());
exports.HabbajetTabViewComponent = HabbajetTabViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUFrQztBQUNsQywwREFBb0U7QUFDcEUsb0VBQWtFO0FBT2xFO0lBSUksa0NBQW9CLFVBQXNCLEVBQVUsZUFBZ0M7UUFBaEUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRixJQUFNLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDekIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN6QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDJDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFqQlEsd0JBQXdCO1FBTHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7U0FDaEUsQ0FBQzt5Q0FNa0Msd0JBQVUsRUFBMkIsa0NBQWU7T0FKM0Usd0JBQXdCLENBbUJwQztJQUFELCtCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xyXG5pbXBvcnQgeyBUYWJTZXJ2aWNlLCBUYWJCaW5kaW5nIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RhYi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhhYmJhamV0LXRhYi12aWV3XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWItdmlldy5odG1sXCIsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRUYWJWaWV3Q29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgdGFiTGlzdDogVGFiQmluZGluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFiU2VydmljZTogVGFiU2VydmljZSwgcHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlO1xyXG4gICAgICAgICAgICBpZihwYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlLmdldFZpZXdCeUlkKCd0YWJWaWV3JykuYW5kcm9pZC5yZW1vdmVWaWV3QXQoMCk7XHJcbiAgICAgICAgICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRhYkxpc3QgPSB0aGlzLnRhYlNlcnZpY2UudGFiTGlzdDtcclxuICAgIH1cclxuXHJcbn0iXX0=