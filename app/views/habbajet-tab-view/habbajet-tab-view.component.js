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
var habbajet_service_1 = require("../../services/habbajet.service");
var HabbajetTabViewComponent = /** @class */ (function () {
    function HabbajetTabViewComponent(habbajetService) {
        this.habbajetService = habbajetService;
        setTimeout(function () {
            var page = frame.topmost().currentPage;
            page.getViewById('tabView').android.removeViewAt(0);
            page.actionBarHidden = true;
        }, 1000);
    }
    HabbajetTabViewComponent.prototype.showTab = function (index) {
        return this.habbajetService.habbajetExists(index);
    };
    HabbajetTabViewComponent.prototype.getName = function (index) {
        return this.habbajetService.getHabbajetName(index);
    };
    HabbajetTabViewComponent = __decorate([
        core_1.Component({
            selector: "habbajet-tab-view",
            templateUrl: "views/habbajet-tab-view/habbajet-tab-view.html",
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetTabViewComponent);
    return HabbajetTabViewComponent;
}());
exports.HabbajetTabViewComponent = HabbajetTabViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBRTFDLGdDQUFrQztBQUNsQyxvRUFBa0U7QUFPbEU7SUFFSSxrQ0FBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hELFVBQVUsQ0FBQztZQUNQLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTSwwQ0FBTyxHQUFkLFVBQWUsS0FBYTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLDBDQUFPLEdBQWQsVUFBZSxLQUFhO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBaEJRLHdCQUF3QjtRQUxwQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsZ0RBQWdEO1NBQ2hFLENBQUM7eUNBSXVDLGtDQUFlO09BRjNDLHdCQUF3QixDQWlCcEM7SUFBRCwrQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoYWJiYWpldC10YWItdmlld1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiLXZpZXcuaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0VGFiVmlld0NvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlO1xyXG4gICAgICAgICAgICBwYWdlLmdldFZpZXdCeUlkKCd0YWJWaWV3JykuYW5kcm9pZC5yZW1vdmVWaWV3QXQoMCk7XHJcbiAgICAgICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1RhYihpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmhhYmJhamV0RXhpc3RzKGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXROYW1lKGluZGV4KTtcclxuICAgIH1cclxufSJdfQ==