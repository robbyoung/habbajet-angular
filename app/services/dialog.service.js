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
    ModalTypes["EditPurchase"] = "editPurchase";
    ModalTypes["Alert"] = "alert";
    ModalTypes["HabbajetInfo"] = "habbajetInfo";
    ModalTypes["Deletion"] = "deletion";
})(ModalTypes = exports.ModalTypes || (exports.ModalTypes = {}));
var DeletionTypes;
(function (DeletionTypes) {
    DeletionTypes["Habbajet"] = "habbajet";
    DeletionTypes["Purchase"] = "purchase";
})(DeletionTypes = exports.DeletionTypes || (exports.DeletionTypes = {}));
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
        this.fadeLock = false;
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
        this.typeOfDeletion = DeletionTypes.Purchase;
        this.modalStateObject.type = ModalTypes.Deletion;
    };
    DialogService.prototype.deleteHabbajetDialog = function () {
        this.typeOfDeletion = DeletionTypes.Habbajet;
        this.modalStateObject.type = ModalTypes.Deletion;
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
        if (this.fadeLock) {
            return;
        }
        this.fadeLock = true;
        this.setBackButtonCallback();
        this.modalBackground.opacity = 0;
        this.modalForeground.opacity = 0;
        this.modalBackground.visibility = 'visible';
        this.modalForeground.visibility = 'visible';
        var fadeInterval = setInterval(function () {
            _this.modalForeground.opacity += 0.10;
            _this.modalBackground.opacity += 0.05;
            if (_this.modalForeground.opacity >= 1) {
                _this.fadeLock = false;
                clearInterval(fadeInterval);
            }
        }, 1);
    };
    DialogService.prototype.fadeOut = function () {
        var _this = this;
        if (this.fadeLock) {
            return;
        }
        this.fadeLock = true;
        this.removeBackButtonCallback();
        this.modalBackground.opacity = 0.5;
        this.modalForeground.opacity = 1;
        var fadeInterval = setInterval(function () {
            _this.modalForeground.opacity -= 0.10;
            _this.modalBackground.opacity -= 0.05;
            if (_this.modalForeground.opacity <= 0) {
                _this.modalStateObject.type = ModalTypes.None;
                _this.modalBackground.visibility = 'collapse';
                _this.modalForeground.visibility = 'collapse';
                _this.fadeLock = false;
                clearInterval(fadeInterval);
            }
        }, 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyx5Q0FBMkM7QUFDM0MsZ0NBQWtDO0FBSWxDLElBQVksVUFRWDtBQVJELFdBQVksVUFBVTtJQUNsQiwyQkFBYSxDQUFBO0lBQ2IseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7SUFDL0IsMkNBQTZCLENBQUE7SUFDN0IsNkJBQWUsQ0FBQTtJQUNmLDJDQUE2QixDQUFBO0lBQzdCLG1DQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFSVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVFyQjtBQUVELElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUNyQixzQ0FBcUIsQ0FBQTtJQUNyQixzQ0FBcUIsQ0FBQTtBQUN6QixDQUFDLEVBSFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFHeEI7QUFHRDtJQWVJO1FBQUEsaUJBZUM7UUFkRyxJQUFNLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztZQUNyQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsRUFBRTtnQkFDM0YsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNsRixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2xGLEtBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztnQkFDakQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcs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cUIsR0FBNUI7UUFBQSxpQkFNQztRQUxHLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFDMUUsVUFBQyxJQUFxRDtZQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sZ0RBQXdCLEdBQS9CO1FBQ0ksV0FBVyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRU8scUNBQWEsR0FBckI7UUFBQSxpQkFJQztRQUhHLFdBQVcsQ0FBQztZQUNSLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUM1RCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBcElRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTs7T0FDQSxhQUFhLENBcUl6QjtJQUFELG9CQUFDO0NBQUEsQUFySUQsSUFxSUM7QUFySVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ2FwcGxpY2F0aW9uJztcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0IHsgUHVyY2hhc2VSb3cgfSBmcm9tICcuL2J1ZGdldC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBlbnVtIE1vZGFsVHlwZXMge1xyXG4gICAgTm9uZSA9ICdub25lJyxcclxuICAgIE5ld1B1cmNoYXNlID0gJ25ld1B1cmNoYXNlJyxcclxuICAgIEFib3V0UHVyY2hhc2UgPSAnYWJvdXRQdXJjaGFzZScsXHJcbiAgICBFZGl0UHVyY2hhc2UgPSAnZWRpdFB1cmNoYXNlJyxcclxuICAgIEFsZXJ0ID0gJ2FsZXJ0JyxcclxuICAgIEhhYmJhamV0SW5mbyA9ICdoYWJiYWpldEluZm8nLFxyXG4gICAgRGVsZXRpb24gPSAnZGVsZXRpb24nLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEZWxldGlvblR5cGVzIHtcclxuICAgIEhhYmJhamV0ID0gJ2hhYmJhamV0JyxcclxuICAgIFB1cmNoYXNlID0gJ3B1cmNoYXNlJyxcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XHJcbiAgICBwdWJsaWMgbW9kYWxTdGF0ZU9iamVjdDogeyB0eXBlOiBNb2RhbFR5cGVzIH07XHJcbiAgICBwdWJsaWMgYWN0aXZlUHVyY2hhc2U6IFB1cmNoYXNlUm93O1xyXG4gICAgcHVibGljIGFjdGl2ZUhhYmJhamV0SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBhbGVydENvbnRlbnRzOiB7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgcHVibGljIHR5cGVPZkRlbGV0aW9uOiBEZWxldGlvblR5cGVzO1xyXG5cclxuICAgIHByaXZhdGUgbW9kYWxCYWNrZ3JvdW5kOiBTdGFja0xheW91dDtcclxuICAgIHByaXZhdGUgbW9kYWxGb3JlZ3JvdW5kOiBTdGFja0xheW91dDtcclxuICAgIHByaXZhdGUgZmFkZUxvY2s6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxGaW5kaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UgJiYgZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKCdtb2RhbEZvcmVncm91bmQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ21vZGFsRm9yZWdyb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ21vZGFsQmFja2dyb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yID0gJyM3NTc1NzUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQud2lkdGggPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQuaGVpZ2h0ID0gMTAwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9uKCd0YXAnLCAoKSA9PiB7IHRoaXMuZmFkZU91dCgpOyB9KTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobW9kYWxGaW5kaW5nSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgdGhpcy5mYWRlTG9jayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdCA9IHsgdHlwZTogTW9kYWxUeXBlcy5Ob25lIH07XHJcbiAgICAgICAgdGhpcy5wcmF5VG9Bbmd1bGFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld1B1cmNoYXNlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5OZXdQdXJjaGFzZTtcclxuICAgICAgICB0aGlzLmZhZGVJbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYm91dFB1cmNoYXNlRGlhbG9nKHB1cmNoYXNlOiBQdXJjaGFzZVJvdykge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUHVyY2hhc2UgPSBwdXJjaGFzZTtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuQWJvdXRQdXJjaGFzZTtcclxuICAgICAgICB0aGlzLmZhZGVJbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVQdXJjaGFzZURpYWxvZygpIHtcclxuICAgICAgICB0aGlzLnR5cGVPZkRlbGV0aW9uID0gRGVsZXRpb25UeXBlcy5QdXJjaGFzZTtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuRGVsZXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZUhhYmJhamV0RGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMudHlwZU9mRGVsZXRpb24gPSBEZWxldGlvblR5cGVzLkhhYmJhamV0O1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5EZWxldGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZWRpdFB1cmNoYXNlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5FZGl0UHVyY2hhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFsZXJ0RGlhbG9nKHRpdGxlOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgb2tCdXR0b25UZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0Q29udGVudHMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuQWxlcnQ7XHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFiYmFqZXRJbmZvRGlhbG9nKGhhYmJhamV0SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSGFiYmFqZXRJZCA9IGhhYmJhamV0SWQ7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLkhhYmJhamV0SW5mbztcclxuICAgICAgICB0aGlzLmZhZGVJbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmYWRlSW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmFkZUxvY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZhZGVMb2NrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRCYWNrQnV0dG9uQ2FsbGJhY2soKTtcclxuICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgY29uc3QgZmFkZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5ICs9IDAuMTA7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9wYWNpdHkgKz0gMC4wNTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlTG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZhZGVPdXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmFkZUxvY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZhZGVMb2NrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVCYWNrQnV0dG9uQ2FsbGJhY2soKTtcclxuICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vcGFjaXR5ID0gMC41O1xyXG4gICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIGNvbnN0IGZhZGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSAtPSAwLjEwO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vcGFjaXR5IC09IDAuMDU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5Ob25lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgICAgICAgIHRoaXMuZmFkZUxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZUludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRCYWNrQnV0dG9uQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihhcHBsaWNhdGlvbi5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LFxyXG4gICAgICAgICAgICAoYXJnczogYXBwbGljYXRpb24uQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcclxuICAgICAgICAgICAgYXJncy5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQmFja0J1dHRvbkNhbGxiYWNrKCkge1xyXG4gICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhcHBsaWNhdGlvbi5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByYXlUb0FuZ3VsYXIoKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxufVxyXG4iXX0=