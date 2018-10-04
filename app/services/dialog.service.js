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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyx5Q0FBMkM7QUFDM0MsZ0NBQWtDO0FBSWxDLElBQVksVUFNWDtBQU5ELFdBQVksVUFBVTtJQUNsQiwyQkFBYSxDQUFBO0lBQ2IseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7SUFDL0IsK0NBQWlDLENBQUE7SUFDakMsMkNBQTZCLENBQUE7QUFDakMsQ0FBQyxFQU5XLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBTXJCO0FBR0Q7SUFPSTtRQUFBLGlCQWNDO1FBYkcsSUFBTSxvQkFBb0IsR0FBRyxXQUFXLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUYsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNsRixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2xGLEtBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztnQkFDakQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxjQUFRLEtBQUksQ0FBQyxPQUFPLEVBQUUs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QUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQzFFLFVBQUMsSUFBcUQ7WUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGdEQUF3QixHQUEvQjtRQUNJLFdBQVcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVPLHFDQUFhLEdBQXJCO1FBQUEsaUJBSUM7UUFIRyxXQUFXLENBQUM7WUFDUixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFDNUQsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXpGUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQTBGekI7SUFBRCxvQkFBQztDQUFBLEFBMUZELElBMEZDO0FBMUZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XHJcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XHJcbmltcG9ydCB7IFB1cmNoYXNlUm93IH0gZnJvbSAnLi9idWRnZXQuc2VydmljZSc7XHJcblxyXG5leHBvcnQgZW51bSBNb2RhbFR5cGVzIHtcclxuICAgIE5vbmUgPSAnbm9uZScsXHJcbiAgICBOZXdQdXJjaGFzZSA9ICduZXdQdXJjaGFzZScsXHJcbiAgICBBYm91dFB1cmNoYXNlID0gJ2Fib3V0UHVyY2hhc2UnLFxyXG4gICAgRGVsZXRlUHVyY2hhc2UgPSAnZGVsZXRlUHVyY2hhc2UnLFxyXG4gICAgRWRpdFB1cmNoYXNlID0gJ2VkaXRQdXJjaGFzZScsXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xyXG4gICAgcHVibGljIG1vZGFsU3RhdGVPYmplY3Q6IHsgdHlwZTogTW9kYWxUeXBlcyB9O1xyXG4gICAgcHVibGljIGFjdGl2ZVB1cmNoYXNlOiBQdXJjaGFzZVJvdztcclxuXHJcbiAgICBwcml2YXRlIG1vZGFsQmFja2dyb3VuZDogU3RhY2tMYXlvdXQ7XHJcbiAgICBwcml2YXRlIG1vZGFsRm9yZWdyb3VuZDogU3RhY2tMYXlvdXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxGaW5kaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UgJiYgZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKCdtb2RhbEZvcmVncm91bmQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ21vZGFsRm9yZWdyb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ21vZGFsQmFja2dyb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yID0gJyM3NTc1NzUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQud2lkdGggPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQuaGVpZ2h0ID0gMTAwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9uKCd0YXAnLCAoKSA9PiB7IHRoaXMuZmFkZU91dCgpOyB9KTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobW9kYWxGaW5kaW5nSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0ID0geyB0eXBlOiBNb2RhbFR5cGVzLk5vbmUgfTtcclxuICAgICAgICB0aGlzLnByYXlUb0FuZ3VsYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3UHVyY2hhc2VEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLk5ld1B1cmNoYXNlO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFib3V0UHVyY2hhc2VEaWFsb2cocHVyY2hhc2U6IFB1cmNoYXNlUm93KSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVQdXJjaGFzZSA9IHB1cmNoYXNlO1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5BYm91dFB1cmNoYXNlO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVB1cmNoYXNlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5EZWxldGVQdXJjaGFzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZWRpdFB1cmNoYXNlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5FZGl0UHVyY2hhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZhZGVJbigpIHtcclxuICAgICAgICB0aGlzLnNldEJhY2tCdXR0b25DYWxsYmFjaygpO1xyXG4gICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICBjb25zdCBmYWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgKz0gMC4wNDtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSArPSAwLjAyO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGZhZGVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmFkZU91dCgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUJhY2tCdXR0b25DYWxsYmFjaygpO1xyXG4gICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgY29uc3QgZmFkZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5IC09IDAuMDQ7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9wYWNpdHkgLT0gMC4wMjtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLk5vbmU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEJhY2tCdXR0b25DYWxsYmFjaygpIHtcclxuICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsXHJcbiAgICAgICAgICAgIChhcmdzOiBhcHBsaWNhdGlvbi5BbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBhcmdzLmNhbmNlbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVCYWNrQnV0dG9uQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5yZW1vdmVFdmVudExpc3RlbmVyKGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJheVRvQW5ndWxhcigpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGU7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==