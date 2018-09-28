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
        var _this = this;
        this.dialogService = dialogService;
        this.dialogService.onAboutPurchasePopup = function (purchase) { _this.onPopup(purchase); };
    }
    AboutPurchaseModalComponent.prototype.onPopup = function (purchase) {
        this.purchase = purchase;
        this.purchaseName = purchase.name;
        this.purchaseCost = purchase.cost;
        this.purchaseDate = purchase.absoluteDateString;
    };
    AboutPurchaseModalComponent.prototype.onEditTap = function () {
    };
    AboutPurchaseModalComponent.prototype.onDeleteTap = function () {
        this.dialogService.deletePurchaseDialog(this.purchase);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQtcHVyY2hhc2UtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQtcHVyY2hhc2UtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUFpRTtBQVNqRTtJQU1JLHFDQUFxQixhQUE0QjtRQUFqRCxpQkFFQztRQUZvQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixHQUFHLFVBQUMsUUFBcUIsSUFBTyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFTSw2Q0FBTyxHQUFkLFVBQWUsUUFBcUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztJQUNwRCxDQUFDO0lBRU0sK0NBQVMsR0FBaEI7SUFFQSxDQUFDO0lBRU0saURBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBdkJRLDJCQUEyQjtRQU52QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsNERBQTREO1lBQ3pFLFNBQVMsRUFBRSxDQUFDLDJEQUEyRCxDQUFDO1NBQzNFLENBQUM7eUNBUXNDLDhCQUFhO09BTnhDLDJCQUEyQixDQXdCdkM7SUFBRCxrQ0FBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHVyY2hhc2VSb3cgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYWJvdXQtcHVyY2hhc2UtbW9kYWxcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL21vZGFsL2Fib3V0LXB1cmNoYXNlLW1vZGFsL2Fib3V0LXB1cmNoYXNlLW1vZGFsLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvbW9kYWwvYWJvdXQtcHVyY2hhc2UtbW9kYWwvYWJvdXQtcHVyY2hhc2UtbW9kYWwuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRQdXJjaGFzZU1vZGFsQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBwdXJjaGFzZTogUHVyY2hhc2VSb3c7XHJcbiAgICBwdWJsaWMgcHVyY2hhc2VOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHVyY2hhc2VDb3N0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHVyY2hhc2VEYXRlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5vbkFib3V0UHVyY2hhc2VQb3B1cCA9IChwdXJjaGFzZTogUHVyY2hhc2VSb3cpID0+IHsgdGhpcy5vblBvcHVwKHB1cmNoYXNlKTsgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Qb3B1cChwdXJjaGFzZTogUHVyY2hhc2VSb3cpIHtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlID0gcHVyY2hhc2U7XHJcbiAgICAgICAgdGhpcy5wdXJjaGFzZU5hbWUgPSBwdXJjaGFzZS5uYW1lO1xyXG4gICAgICAgIHRoaXMucHVyY2hhc2VDb3N0ID0gcHVyY2hhc2UuY29zdDtcclxuICAgICAgICB0aGlzLnB1cmNoYXNlRGF0ZSA9IHB1cmNoYXNlLmFic29sdXRlRGF0ZVN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25FZGl0VGFwKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRlbGV0ZVRhcCgpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuZGVsZXRlUHVyY2hhc2VEaWFsb2codGhpcy5wdXJjaGFzZSk7XHJcbiAgICB9XHJcbn0iXX0=