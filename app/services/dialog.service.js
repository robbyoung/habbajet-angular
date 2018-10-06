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
    ModalTypes["HabbajetInfo"] = "habbajetInfo";
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
    DialogService.prototype.habbajetInfoDialog = function (habbajetId) {
        this.activeHabbajetId = habbajetId;
        this.modalStateObject.type = ModalTypes.HabbajetInfo;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyx5Q0FBMkM7QUFDM0MsZ0NBQWtDO0FBSWxDLElBQVksVUFRWDtBQVJELFdBQVksVUFBVTtJQUNsQiwyQkFBYSxDQUFBO0lBQ2IseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7SUFDL0IsK0NBQWlDLENBQUE7SUFDakMsMkNBQTZCLENBQUE7SUFDN0IsNkJBQWUsQ0FBQTtJQUNmLDJDQUE2QixDQUFBO0FBQ2pDLENBQUMsRUFSVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVFyQjtBQUdEO0lBYUk7UUFBQSxpQkFjQztRQWJHLElBQU0sb0JBQW9CLEdBQUcsV0FBVyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVGLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEYsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNsRixLQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7Z0JBQ2pELEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxL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YSxDQWdIekI7SUFBRCxvQkFBQztDQUFBLEFBaEhELElBZ0hDO0FBaEhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XHJcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XHJcbmltcG9ydCB7IFB1cmNoYXNlUm93IH0gZnJvbSAnLi9idWRnZXQuc2VydmljZSc7XHJcblxyXG5leHBvcnQgZW51bSBNb2RhbFR5cGVzIHtcclxuICAgIE5vbmUgPSAnbm9uZScsXHJcbiAgICBOZXdQdXJjaGFzZSA9ICduZXdQdXJjaGFzZScsXHJcbiAgICBBYm91dFB1cmNoYXNlID0gJ2Fib3V0UHVyY2hhc2UnLFxyXG4gICAgRGVsZXRlUHVyY2hhc2UgPSAnZGVsZXRlUHVyY2hhc2UnLFxyXG4gICAgRWRpdFB1cmNoYXNlID0gJ2VkaXRQdXJjaGFzZScsXHJcbiAgICBBbGVydCA9ICdhbGVydCcsXHJcbiAgICBIYWJiYWpldEluZm8gPSAnaGFiYmFqZXRJbmZvJyxcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XHJcbiAgICBwdWJsaWMgbW9kYWxTdGF0ZU9iamVjdDogeyB0eXBlOiBNb2RhbFR5cGVzIH07XHJcbiAgICBwdWJsaWMgYWN0aXZlUHVyY2hhc2U6IFB1cmNoYXNlUm93O1xyXG4gICAgcHVibGljIGFjdGl2ZUhhYmJhamV0SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBhbGVydENvbnRlbnRzOiB7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgbW9kYWxCYWNrZ3JvdW5kOiBTdGFja0xheW91dDtcclxuICAgIHByaXZhdGUgbW9kYWxGb3JlZ3JvdW5kOiBTdGFja0xheW91dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBtb2RhbEZpbmRpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZSAmJiBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ21vZGFsRm9yZWdyb3VuZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZCA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgnbW9kYWxGb3JlZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZCA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgnbW9kYWxCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IgPSAnIzc1NzU3NSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC53aWR0aCA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5oZWlnaHQgPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub24oJ3RhcCcsICgpID0+IHsgdGhpcy5mYWRlT3V0KCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtb2RhbEZpbmRpbmdJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QgPSB7IHR5cGU6IE1vZGFsVHlwZXMuTm9uZSB9O1xyXG4gICAgICAgIHRoaXMucHJheVRvQW5ndWxhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdQdXJjaGFzZURpYWxvZygpIHtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuTmV3UHVyY2hhc2U7XHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJvdXRQdXJjaGFzZURpYWxvZyhwdXJjaGFzZTogUHVyY2hhc2VSb3cpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVB1cmNoYXNlID0gcHVyY2hhc2U7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLkFib3V0UHVyY2hhc2U7XHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlUHVyY2hhc2VEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLkRlbGV0ZVB1cmNoYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlZGl0UHVyY2hhc2VEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLkVkaXRQdXJjaGFzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWxlcnREaWFsb2codGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBva0J1dHRvblRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYWxlcnRDb250ZW50cyA9IHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5BbGVydDtcclxuICAgICAgICB0aGlzLmZhZGVJbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYWJiYWpldEluZm9EaWFsb2coaGFiYmFqZXRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVIYWJiYWpldElkID0gaGFiYmFqZXRJZDtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuSGFiYmFqZXRJbmZvO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZhZGVJbigpIHtcclxuICAgICAgICB0aGlzLnNldEJhY2tCdXR0b25DYWxsYmFjaygpO1xyXG4gICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICBjb25zdCBmYWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgKz0gMC4wNDtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSArPSAwLjAyO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGZhZGVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmFkZU91dCgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUJhY2tCdXR0b25DYWxsYmFjaygpO1xyXG4gICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgY29uc3QgZmFkZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5IC09IDAuMDQ7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9wYWNpdHkgLT0gMC4wMjtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLk5vbmU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEJhY2tCdXR0b25DYWxsYmFjaygpIHtcclxuICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsXHJcbiAgICAgICAgICAgIChhcmdzOiBhcHBsaWNhdGlvbi5BbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBhcmdzLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVCYWNrQnV0dG9uQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5yZW1vdmVFdmVudExpc3RlbmVyKGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJheVRvQW5ndWxhcigpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGU7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==