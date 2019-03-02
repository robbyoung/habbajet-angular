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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLHVEQUF5RDtBQUN6RCxvRUFBa0U7QUFDbEUsMERBQW9FO0FBT3BFO0lBSUksa0NBQW9CLFVBQXNCLEVBQVUsZUFBZ0M7UUFBaEUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRixJQUFNLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDekIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN6QyxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDM0I7UUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sMkNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDM0MsQ0FBQztJQWpCUSx3QkFBd0I7UUFMcEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGdEQUFnRDtTQUNoRSxDQUFDO3lDQU1rQyx3QkFBVSxFQUEyQixrQ0FBZTtPQUozRSx3QkFBd0IsQ0FrQnBDO0lBQUQsK0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZSc7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYWJCaW5kaW5nLCBUYWJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGFiLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hhYmJhamV0LXRhYi12aWV3JyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiLXZpZXcuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRUYWJWaWV3Q29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgdGFiTGlzdDogVGFiQmluZGluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFiU2VydmljZTogVGFiU2VydmljZSwgcHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlO1xyXG4gICAgICAgICAgICBpZiAocGFnZSkge1xyXG4gICAgICAgICAgICAgICAgcGFnZS5nZXRWaWV3QnlJZCgndGFiVmlldycpLmFuZHJvaWQucmVtb3ZlVmlld0F0KDEpO1xyXG4gICAgICAgICAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudGFiTGlzdCA9IHRoaXMudGFiU2VydmljZS50YWJMaXN0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==