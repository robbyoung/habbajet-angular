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
var dialog_service_1 = require("../../../services/dialog.service");
var AboutPurchaseModalComponent = /** @class */ (function () {
    function AboutPurchaseModalComponent(dialogService) {
        this.dialogService = dialogService;
        this.purchase = this.dialogService.activePurchase;
        this.purchaseName = this.purchase.name;
        this.purchaseCost = this.purchase.cost;
        this.purchaseDate = this.purchase.absoluteDateString;
    }
    AboutPurchaseModalComponent.prototype.onEditTap = function () {
    };
    AboutPurchaseModalComponent.prototype.onDeleteTap = function () {
        this.dialogService.deletePurchaseDialog();
    };
    AboutPurchaseModalComponent = __decorate([
        core_1.Component({
            selector: "about-purchase-modal",
            templateUrl: "views/modal/about-purchase-modal/about-purchase-modal.html",
            styleUrls: ["views/modal/about-purchase-modal/about-purchase-modal.css"]
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService])
    ], AboutPurchaseModalComponent);
    return AboutPurchaseModalComponent;
}());
exports.AboutPurchaseModalComponent = AboutPurchaseModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQtcHVyY2hhc2UtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQtcHVyY2hhc2UtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUFpRTtBQVNqRTtJQU1JLHFDQUFxQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7SUFDekQsQ0FBQztJQUVNLCtDQUFTLEdBQWhCO0lBRUEsQ0FBQztJQUVNLGlEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFuQlEsMkJBQTJCO1FBTnZDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSw0REFBNEQ7WUFDekUsU0FBUyxFQUFFLENBQUMsMkRBQTJELENBQUM7U0FDM0UsQ0FBQzt5Q0FRc0MsOEJBQWE7T0FOeEMsMkJBQTJCLENBb0J2QztJQUFELGtDQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQdXJjaGFzZVJvdyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9idWRnZXQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhYm91dC1wdXJjaGFzZS1tb2RhbFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbW9kYWwvYWJvdXQtcHVyY2hhc2UtbW9kYWwvYWJvdXQtcHVyY2hhc2UtbW9kYWwuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9tb2RhbC9hYm91dC1wdXJjaGFzZS1tb2RhbC9hYm91dC1wdXJjaGFzZS1tb2RhbC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBYm91dFB1cmNoYXNlTW9kYWxDb21wb25lbnQge1xyXG4gICAgcHVibGljIHB1cmNoYXNlOiBQdXJjaGFzZVJvdztcclxuICAgIHB1YmxpYyBwdXJjaGFzZU5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBwdXJjaGFzZUNvc3Q6IHN0cmluZztcclxuICAgIHB1YmxpYyBwdXJjaGFzZURhdGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5wdXJjaGFzZSA9IHRoaXMuZGlhbG9nU2VydmljZS5hY3RpdmVQdXJjaGFzZTtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlTmFtZSA9IHRoaXMucHVyY2hhc2UubmFtZTtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlQ29zdCA9IHRoaXMucHVyY2hhc2UuY29zdDtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlRGF0ZSA9IHRoaXMucHVyY2hhc2UuYWJzb2x1dGVEYXRlU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkVkaXRUYXAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRGVsZXRlVGFwKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5kZWxldGVQdXJjaGFzZURpYWxvZygpO1xyXG4gICAgfVxyXG59Il19