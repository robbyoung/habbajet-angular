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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLHVEQUF5RDtBQUN6RCwwREFBb0U7QUFDcEUsb0VBQWtFO0FBT2xFO0lBSUksa0NBQW9CLFVBQXNCLEVBQVUsZUFBZ0M7UUFBaEUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRixJQUFNLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDekIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN6QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDJDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFqQlEsd0JBQXdCO1FBTHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxnREFBZ0Q7U0FDaEUsQ0FBQzt5Q0FNa0Msd0JBQVUsRUFBMkIsa0NBQWU7T0FKM0Usd0JBQXdCLENBbUJwQztJQUFELCtCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZSc7XHJcbmltcG9ydCB7IFRhYlNlcnZpY2UsIFRhYkJpbmRpbmcgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdGFiLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtdGFiLXZpZXdcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi12aWV3Lmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldFRhYlZpZXdDb21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyB0YWJMaXN0OiBUYWJCaW5kaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJTZXJ2aWNlOiBUYWJTZXJ2aWNlLCBwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2U7XHJcbiAgICAgICAgICAgIGlmKHBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHBhZ2UuZ2V0Vmlld0J5SWQoJ3RhYlZpZXcnKS5hbmRyb2lkLnJlbW92ZVZpZXdBdCgwKTtcclxuICAgICAgICAgICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudGFiTGlzdCA9IHRoaXMudGFiU2VydmljZS50YWJMaXN0O1xyXG4gICAgfVxyXG5cclxufSJdfQ==