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
        _.noop();
    };
    AboutPurchaseModalComponent.prototype.onDeleteTap = function () {
        this.dialogService.deletePurchaseDialog();
    };
    AboutPurchaseModalComponent = __decorate([
        core_1.Component({
            selector: 'about-purchase-modal',
            templateUrl: 'views/modal/about-purchase-modal/about-purchase-modal.html',
            styleUrls: ['views/modal/about-purchase-modal/about-purchase-modal.css'],
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService])
    ], AboutPurchaseModalComponent);
    return AboutPurchaseModalComponent;
}());
exports.AboutPurchaseModalComponent = AboutPurchaseModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQtcHVyY2hhc2UtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQtcHVyY2hhc2UtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLDBCQUE0QjtBQUU1QixtRUFBaUU7QUFRakU7SUFNSSxxQ0FBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO0lBQ3pELENBQUM7SUFFTSwrQ0FBUyxHQUFoQjtRQUNJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFTSxpREFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBbkJRLDJCQUEyQjtRQU52QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsNERBQTREO1lBQ3pFLFNBQVMsRUFBRSxDQUFDLDJEQUEyRCxDQUFDO1NBQzNFLENBQUM7eUNBUXFDLDhCQUFhO09BTnZDLDJCQUEyQixDQW9CdkM7SUFBRCxrQ0FBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFB1cmNoYXNlUm93IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Fib3V0LXB1cmNoYXNlLW1vZGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbW9kYWwvYWJvdXQtcHVyY2hhc2UtbW9kYWwvYWJvdXQtcHVyY2hhc2UtbW9kYWwuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsndmlld3MvbW9kYWwvYWJvdXQtcHVyY2hhc2UtbW9kYWwvYWJvdXQtcHVyY2hhc2UtbW9kYWwuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRQdXJjaGFzZU1vZGFsQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBwdXJjaGFzZTogUHVyY2hhc2VSb3c7XHJcbiAgICBwdWJsaWMgcHVyY2hhc2VOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHVyY2hhc2VDb3N0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHVyY2hhc2VEYXRlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5wdXJjaGFzZSA9IHRoaXMuZGlhbG9nU2VydmljZS5hY3RpdmVQdXJjaGFzZTtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlTmFtZSA9IHRoaXMucHVyY2hhc2UubmFtZTtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlQ29zdCA9IHRoaXMucHVyY2hhc2UuY29zdDtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlRGF0ZSA9IHRoaXMucHVyY2hhc2UuYWJzb2x1dGVEYXRlU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkVkaXRUYXAoKSB7XHJcbiAgICAgICAgXy5ub29wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRGVsZXRlVGFwKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5kZWxldGVQdXJjaGFzZURpYWxvZygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==