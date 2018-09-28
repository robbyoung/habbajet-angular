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
var application = require("application");
var ModalTypes;
(function (ModalTypes) {
    ModalTypes["NewPurchase"] = "newPurchase";
    ModalTypes["AboutPurchase"] = "aboutPurchase";
    ModalTypes["DeletePurchase"] = "deletePurchase";
})(ModalTypes = exports.ModalTypes || (exports.ModalTypes = {}));
var DialogService = /** @class */ (function () {
    function DialogService() {
        var _this = this;
        var modalFindingInterval = setInterval(function () {
            if (frame.topmost().currentPage && frame.topmost().currentPage.getViewById('modalForeground')) {
                _this.modalForeground = frame.topmost().currentPage.getViewById('modalForeground');
                _this.modalBackground = frame.topmost().currentPage.getViewById('modalBackground');
                _this.modalBackground.backgroundColor = '#757575';
                _this.modalBackground.width = 1000;
                _this.modalBackground.height = 1000;
                _this.modalBackground.on('tap', function () { _this.fadeOut(); });
                clearInterval(modalFindingInterval);
            }
        }, 0);
        this.modalStateObject = { type: ModalTypes.AboutPurchase };
    }
    DialogService.prototype.newPurchaseDialog = function () {
        this.modalStateObject.type = ModalTypes.NewPurchase;
        this.onNewPurchasePopup();
        this.fadeIn();
    };
    DialogService.prototype.aboutPurchaseDialog = function (purchase) {
        this.modalStateObject.type = ModalTypes.AboutPurchase;
        this.onAboutPurchasePopup(purchase);
        this.fadeIn();
    };
    DialogService.prototype.deletePurchaseDialog = function (purchase) {
        this.modalStateObject.type = ModalTypes.DeletePurchase;
        this.onDeletePurchasePopup(purchase);
    };
    DialogService.prototype.fadeIn = function () {
        var _this = this;
        this.setBackButtonCallback();
        this.modalBackground.opacity = 0;
        this.modalForeground.opacity = 0;
        this.modalBackground.visibility = "visible";
        this.modalForeground.visibility = "visible";
        var fadeInterval = setInterval(function () {
            _this.modalForeground.opacity += 0.04;
            _this.modalBackground.opacity += 0.02;
            if (_this.modalForeground.opacity >= 1) {
                clearInterval(fadeInterval);
            }
        }, 2);
    };
    DialogService.prototype.fadeOut = function () {
        var _this = this;
        this.removeBackButtonCallback();
        this.modalBackground.opacity = 0.5;
        this.modalForeground.opacity = 1;
        var fadeInterval = setInterval(function () {
            _this.modalForeground.opacity -= 0.04;
            _this.modalBackground.opacity -= 0.02;
            if (_this.modalForeground.opacity <= 0) {
                _this.modalBackground.visibility = "collapse";
                _this.modalForeground.visibility = "collapse";
                clearInterval(fadeInterval);
            }
        }, 2);
    };
    DialogService.prototype.setBackButtonCallback = function () {
        var _this = this;
        application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
            args.cancel = true;
            _this.fadeOut();
        });
    };
    DialogService.prototype.removeBackButtonCallback = function () {
        application.android.removeEventListener(application.AndroidApplication.activityBackPressedEvent);
    };
    DialogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnQ0FBa0M7QUFHbEMseUNBQTJDO0FBRTNDLElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNsQix5Q0FBMkIsQ0FBQTtJQUMzQiw2Q0FBK0IsQ0FBQTtJQUMvQiwrQ0FBaUMsQ0FBQTtBQUNyQyxDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFHRDtJQVNJO1FBQUEsaUJBYUM7UUFaRyxJQUFNLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2xGLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO2dCQUNqRCxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLGNBQVEsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELGFB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LEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxnREFBd0IsR0FBL0I7UUFDSSxXQUFXLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFoRlEsYUFBYTtRQUR6QixpQkFBVSxFQUFFOztPQUNBLGFBQWEsQ0FpRnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpGRCxJQWlGQztBQWpGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IFB1cmNoYXNlUm93IH0gZnJvbSBcIi4vYnVkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xyXG5cclxuZXhwb3J0IGVudW0gTW9kYWxUeXBlcyB7XHJcbiAgICBOZXdQdXJjaGFzZSA9ICduZXdQdXJjaGFzZScsXHJcbiAgICBBYm91dFB1cmNoYXNlID0gJ2Fib3V0UHVyY2hhc2UnLFxyXG4gICAgRGVsZXRlUHVyY2hhc2UgPSAnZGVsZXRlUHVyY2hhc2UnLFxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbW9kYWxCYWNrZ3JvdW5kOiBTdGFja0xheW91dDtcclxuICAgIHByaXZhdGUgbW9kYWxGb3JlZ3JvdW5kOiBTdGFja0xheW91dDtcclxuICAgIHB1YmxpYyBtb2RhbFN0YXRlT2JqZWN0OiB7IHR5cGU6IE1vZGFsVHlwZXMgfTtcclxuXHJcbiAgICBwdWJsaWMgb25OZXdQdXJjaGFzZVBvcHVwOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIG9uQWJvdXRQdXJjaGFzZVBvcHVwOiAocHVyY2hhc2U6IFB1cmNoYXNlUm93KSA9PiB2b2lkO1xyXG4gICAgcHVibGljIG9uRGVsZXRlUHVyY2hhc2VQb3B1cDogKHB1cmNoYXNlOiBQdXJjaGFzZVJvdykgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBtb2RhbEZpbmRpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZSAmJiBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ21vZGFsRm9yZWdyb3VuZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZCA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgnbW9kYWxGb3JlZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZCA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgnbW9kYWxCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IgPSAnIzc1NzU3NSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC53aWR0aCA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5oZWlnaHQgPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub24oJ3RhcCcsICgpID0+IHsgdGhpcy5mYWRlT3V0KCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtb2RhbEZpbmRpbmdJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QgPSB7IHR5cGU6IE1vZGFsVHlwZXMuQWJvdXRQdXJjaGFzZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdQdXJjaGFzZURpYWxvZygpIHtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuTmV3UHVyY2hhc2U7XHJcbiAgICAgICAgdGhpcy5vbk5ld1B1cmNoYXNlUG9wdXAoKTtcclxuICAgICAgICB0aGlzLmZhZGVJbigpOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYm91dFB1cmNoYXNlRGlhbG9nKHB1cmNoYXNlOiBQdXJjaGFzZVJvdykge1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5BYm91dFB1cmNoYXNlO1xyXG4gICAgICAgIHRoaXMub25BYm91dFB1cmNoYXNlUG9wdXAocHVyY2hhc2UpO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVB1cmNoYXNlRGlhbG9nKHB1cmNoYXNlOiBQdXJjaGFzZVJvdykge1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5EZWxldGVQdXJjaGFzZTtcclxuICAgICAgICB0aGlzLm9uRGVsZXRlUHVyY2hhc2VQb3B1cChwdXJjaGFzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmYWRlSW4oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRCYWNrQnV0dG9uQ2FsbGJhY2soKTtcclxuICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIGNvbnN0IGZhZGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSArPSAwLjA0O1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vcGFjaXR5ICs9IDAuMDI7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZhZGVPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCYWNrQnV0dG9uQ2FsbGJhY2soKTtcclxuICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vcGFjaXR5ID0gMC41O1xyXG4gICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIGNvbnN0IGZhZGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSAtPSAwLjA0O1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vcGFjaXR5IC09IDAuMDI7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGZhZGVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QmFja0J1dHRvbkNhbGxiYWNrKCkge1xyXG4gICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oYXBwbGljYXRpb24uQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgKGFyZ3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBhcmdzLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVCYWNrQnV0dG9uQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5yZW1vdmVFdmVudExpc3RlbmVyKGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==