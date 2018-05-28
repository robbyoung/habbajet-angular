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
var OldPurchaseComponent = /** @class */ (function () {
    function OldPurchaseComponent() {
    }
    OldPurchaseComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OldPurchaseComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OldPurchaseComponent.prototype, "cost", void 0);
    OldPurchaseComponent = __decorate([
        core_1.Component({
            selector: "old-purchase",
            templateUrl: "views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.html",
            styleUrls: ["views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.css"]
        })
    ], OldPurchaseComponent);
    return OldPurchaseComponent;
}());
exports.OldPurchaseComponent = OldPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2xkLXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9sZC1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFVakQ7SUFBQTtJQU1BLENBQUM7SUFERyx1Q0FBUSxHQUFSLGNBQVksQ0FBQztJQUhKO1FBQVIsWUFBSyxFQUFFOztzREFBYztJQUNiO1FBQVIsWUFBSyxFQUFFOztzREFBYztJQUhiLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLG1FQUFtRTtZQUNoRixTQUFTLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQztTQUNsRixDQUFDO09BRVcsb0JBQW9CLENBTWhDO0lBQUQsMkJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2J1ZGdldC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm9sZC1wdXJjaGFzZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9vbGQtcHVyY2hhc2Uvb2xkLXB1cmNoYXNlLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9vbGQtcHVyY2hhc2Uvb2xkLXB1cmNoYXNlLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE9sZFB1cmNoYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjb3N0OiBzdHJpbmc7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7fVxyXG59Il19