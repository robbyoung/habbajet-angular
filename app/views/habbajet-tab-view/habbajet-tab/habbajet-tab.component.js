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
        this.name = this.habbajetService.getHabbajetName(this.habbajetId);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HabbajetTabComponent.prototype, "habbajetId", void 0);
    HabbajetTabComponent = __decorate([
        core_1.Component({
            selector: 'habbajet-tab',
            templateUrl: 'views/habbajet-tab-view/habbajet-tab/habbajet-tab.html',
            styleUrls: ['views/habbajet-tab-view/habbajet-tab/habbajet-tab.css'],
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetTabComponent);
    return HabbajetTabComponent;
}());
exports.HabbajetTabComponent = HabbajetTabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LXRhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFFakQsdUVBQXFFO0FBUXJFO0lBSUksOEJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFakQsdUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFQUTtRQUFSLFlBQUssRUFBRTs7NERBQTJCO0lBRDFCLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHdEQUF3RDtZQUNyRSxTQUFTLEVBQUUsQ0FBQyx1REFBdUQsQ0FBQztTQUN2RSxDQUFDO3lDQU11QyxrQ0FBZTtPQUozQyxvQkFBb0IsQ0FTaEM7SUFBRCwyQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoYWJiYWpldC10YWInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtdGFiLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC10YWIuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRUYWJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcHVibGljIGhhYmJhamV0SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXROYW1lKHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICB9XHJcbn1cclxuIl19