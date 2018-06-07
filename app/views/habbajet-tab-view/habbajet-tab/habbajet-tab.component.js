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
var habbajet_service_1 = require("../../../services/habbajet.service");
var HabbajetTabComponent = /** @class */ (function () {
    function HabbajetTabComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    HabbajetTabComponent.prototype.ngOnInit = function () {
        this.name = this.habbajetService.getHabbajetName(this.habbajetIndex);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HabbajetTabComponent.prototype, "habbajetIndex", void 0);
    HabbajetTabComponent = __decorate([
        core_1.Component({
            selector: "habbajet-tab",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-tab.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-tab.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetTabComponent);
    return HabbajetTabComponent;
}());
exports.HabbajetTabComponent = HabbajetTabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LXRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFFakQsdUVBQXFFO0FBUXJFO0lBSUksOEJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFQUTtRQUFSLFlBQUssRUFBRTs7K0RBQXVCO0lBRHRCLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHdEQUF3RDtZQUNyRSxTQUFTLEVBQUUsQ0FBQyx1REFBdUQsQ0FBQztTQUN2RSxDQUFDO3lDQU11QyxrQ0FBZTtPQUozQyxvQkFBb0IsQ0FTaEM7SUFBRCwyQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhhYmJhamV0LXRhYlwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LXRhYi5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC10YWIuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRUYWJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaGFiYmFqZXRJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldE5hbWUodGhpcy5oYWJiYWpldEluZGV4KTtcclxuICAgIH1cclxufSJdfQ==