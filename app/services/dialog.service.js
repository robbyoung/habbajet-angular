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
var application = require("application");
var frame = require("ui/frame");
var ModalTypes;
(function (ModalTypes) {
    ModalTypes["None"] = "none";
    ModalTypes["NewPurchase"] = "newPurchase";
    ModalTypes["AboutPurchase"] = "aboutPurchase";
    ModalTypes["DeletePurchase"] = "deletePurchase";
    ModalTypes["EditPurchase"] = "editPurchase";
    ModalTypes["Alert"] = "alert";
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
        this.modalStateObject = { type: ModalTypes.None };
        this.prayToAngular();
    }
    DialogService.prototype.newPurchaseDialog = function () {
        this.modalStateObject.type = ModalTypes.NewPurchase;
        this.fadeIn();
    };
    DialogService.prototype.aboutPurchaseDialog = function (purchase) {
        this.activePurchase = purchase;
        this.modalStateObject.type = ModalTypes.AboutPurchase;
        this.fadeIn();
    };
    DialogService.prototype.deletePurchaseDialog = function () {
        this.modalStateObject.type = ModalTypes.DeletePurchase;
    };
    DialogService.prototype.editPurchaseDialog = function () {
        this.modalStateObject.type = ModalTypes.EditPurchase;
    };
    DialogService.prototype.alertDialog = function (title, text, okButtonText) {
        this.alertContents = {
            title: title,
            text: text,
            okButtonText: okButtonText,
        };
        this.modalStateObject.type = ModalTypes.Alert;
        this.fadeIn();
    };
    DialogService.prototype.fadeIn = function () {
        var _this = this;
        this.setBackButtonCallback();
        this.modalBackground.opacity = 0;
        this.modalForeground.opacity = 0;
        this.modalBackground.visibility = 'visible';
        this.modalForeground.visibility = 'visible';
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
                _this.modalStateObject.type = ModalTypes.None;
                _this.modalBackground.visibility = 'collapse';
                _this.modalForeground.visibility = 'collapse';
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
    DialogService.prototype.prayToAngular = function () {
        var _this = this;
        setInterval(function () {
            _this.modalStateObject.type = _this.modalStateObject.type;
        }, 10);
    };
    DialogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyx5Q0FBMkM7QUFDM0MsZ0NBQWtDO0FBSWxDLElBQVksVUFPWDtBQVBELFdBQVksVUFBVTtJQUNsQiwyQkFBYSxDQUFBO0lBQ2IseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7SUFDL0IsK0NBQWlDLENBQUE7SUFDakMsMkNBQTZCLENBQUE7SUFDN0IsNkJBQWUsQ0FBQTtBQUNuQixDQUFDLEVBUFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFPckI7QUFHRDtJQVlJO1FBQUEsaUJBY0M7UUFiRyxJQUFNLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2xGLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO2dCQUNqRCxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLGNBQVEsS0FB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Q0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDN0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2dCQUM3QyxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzdDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVNLDZDQUFxQixHQUE1QjtRQUFBLGlCQU1DO1FBTEcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixFQUMxRSxVQUFDLElBQXFEO1lBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxnREFBd0IsR0FBL0I7UUFDSSxXQUFXLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFTyxxQ0FBYSxHQUFyQjtRQUFBLGlCQUlDO1FBSEcsV0FBVyxDQUFDO1lBQ1IsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBQzVELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7SUF4R1EsYUFBYTtRQUR6QixpQkFBVSxFQUFFOztPQUNBLGFBQWEsQ0F5R3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXpHRCxJQXlHQztBQXpHWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG5pbXBvcnQgeyBQdXJjaGFzZVJvdyB9IGZyb20gJy4vYnVkZ2V0LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGVudW0gTW9kYWxUeXBlcyB7XHJcbiAgICBOb25lID0gJ25vbmUnLFxyXG4gICAgTmV3UHVyY2hhc2UgPSAnbmV3UHVyY2hhc2UnLFxyXG4gICAgQWJvdXRQdXJjaGFzZSA9ICdhYm91dFB1cmNoYXNlJyxcclxuICAgIERlbGV0ZVB1cmNoYXNlID0gJ2RlbGV0ZVB1cmNoYXNlJyxcclxuICAgIEVkaXRQdXJjaGFzZSA9ICdlZGl0UHVyY2hhc2UnLFxyXG4gICAgQWxlcnQgPSAnYWxlcnQnLFxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBtb2RhbFN0YXRlT2JqZWN0OiB7IHR5cGU6IE1vZGFsVHlwZXMgfTtcclxuICAgIHB1YmxpYyBhY3RpdmVQdXJjaGFzZTogUHVyY2hhc2VSb3c7XHJcbiAgICBwdWJsaWMgYWxlcnRDb250ZW50czoge1xyXG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogc3RyaW5nO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIG1vZGFsQmFja2dyb3VuZDogU3RhY2tMYXlvdXQ7XHJcbiAgICBwcml2YXRlIG1vZGFsRm9yZWdyb3VuZDogU3RhY2tMYXlvdXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxGaW5kaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UgJiYgZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKCdtb2RhbEZvcmVncm91bmQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ21vZGFsRm9yZWdyb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ21vZGFsQmFja2dyb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yID0gJyM3NTc1NzUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQud2lkdGggPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQuaGVpZ2h0ID0gMTAwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9uKCd0YXAnLCAoKSA9PiB7IHRoaXMuZmFkZU91dCgpOyB9KTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobW9kYWxGaW5kaW5nSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0ID0geyB0eXBlOiBNb2RhbFR5cGVzLk5vbmUgfTtcclxuICAgICAgICB0aGlzLnByYXlUb0FuZ3VsYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3UHVyY2hhc2VEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLk5ld1B1cmNoYXNlO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFib3V0UHVyY2hhc2VEaWFsb2cocHVyY2hhc2U6IFB1cmNoYXNlUm93KSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVQdXJjaGFzZSA9IHB1cmNoYXNlO1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5BYm91dFB1cmNoYXNlO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVB1cmNoYXNlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5EZWxldGVQdXJjaGFzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZWRpdFB1cmNoYXNlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5FZGl0UHVyY2hhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFsZXJ0RGlhbG9nKHRpdGxlOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgb2tCdXR0b25UZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0Q29udGVudHMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuQWxlcnQ7XHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmFkZUluKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QmFja0J1dHRvbkNhbGxiYWNrKCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIGNvbnN0IGZhZGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSArPSAwLjA0O1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vcGFjaXR5ICs9IDAuMDI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5ID49IDEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZUludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmYWRlT3V0KCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmFja0J1dHRvbkNhbGxiYWNrKCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSA9IDAuNTtcclxuICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5ID0gMTtcclxuICAgICAgICBjb25zdCBmYWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgLT0gMC4wNDtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSAtPSAwLjAyO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuTm9uZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGZhZGVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QmFja0J1dHRvbkNhbGxiYWNrKCkge1xyXG4gICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oYXBwbGljYXRpb24uQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCxcclxuICAgICAgICAgICAgKGFyZ3M6IGFwcGxpY2F0aW9uLkFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGFyZ3MuY2FuY2VsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5mYWRlT3V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUJhY2tCdXR0b25DYWxsYmFjaygpIHtcclxuICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYXBwbGljYXRpb24uQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmF5VG9Bbmd1bGFyKCkge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbn1cclxuIl19