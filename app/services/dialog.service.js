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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyx5Q0FBMkM7QUFDM0MsZ0NBQWtDO0FBSWxDLElBQVksVUFRWDtBQVJELFdBQVksVUFBVTtJQUNsQiwyQkFBYSxDQUFBO0lBQ2IseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7SUFDL0IsMkNBQTZCLENBQUE7SUFDN0IsNkJBQWUsQ0FBQTtJQUNmLDJDQUE2QixDQUFBO0lBQzdCLG1DQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFSVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVFyQjtBQUVELElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUNyQixzQ0FBcUIsQ0FBQTtJQUNyQixzQ0FBcUIsQ0FBQTtBQUN6QixDQUFDLEVBSFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFHeEI7QUFHRDtJQWNJO1FBQUEsaUJBY0M7UUFiRyxJQUFNLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2xGLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO2dCQUNqRCxLQUFJLENBQUMs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RU0sZ0RBQXdCLEdBQS9CO1FBQ0ksV0FBVyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRU8scUNBQWEsR0FBckI7UUFBQSxpQkFJQztRQUhHLFdBQVcsQ0FBQztZQUNSLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUM1RCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdEhRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTs7T0FDQSxhQUFhLENBdUh6QjtJQUFELG9CQUFDO0NBQUEsQUF2SEQsSUF1SEM7QUF2SFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ2FwcGxpY2F0aW9uJztcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0IHsgUHVyY2hhc2VSb3cgfSBmcm9tICcuL2J1ZGdldC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBlbnVtIE1vZGFsVHlwZXMge1xyXG4gICAgTm9uZSA9ICdub25lJyxcclxuICAgIE5ld1B1cmNoYXNlID0gJ25ld1B1cmNoYXNlJyxcclxuICAgIEFib3V0UHVyY2hhc2UgPSAnYWJvdXRQdXJjaGFzZScsXHJcbiAgICBFZGl0UHVyY2hhc2UgPSAnZWRpdFB1cmNoYXNlJyxcclxuICAgIEFsZXJ0ID0gJ2FsZXJ0JyxcclxuICAgIEhhYmJhamV0SW5mbyA9ICdoYWJiYWpldEluZm8nLFxyXG4gICAgRGVsZXRpb24gPSAnZGVsZXRpb24nLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEZWxldGlvblR5cGVzIHtcclxuICAgIEhhYmJhamV0ID0gJ2hhYmJhamV0JyxcclxuICAgIFB1cmNoYXNlID0gJ3B1cmNoYXNlJyxcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XHJcbiAgICBwdWJsaWMgbW9kYWxTdGF0ZU9iamVjdDogeyB0eXBlOiBNb2RhbFR5cGVzIH07XHJcbiAgICBwdWJsaWMgYWN0aXZlUHVyY2hhc2U6IFB1cmNoYXNlUm93O1xyXG4gICAgcHVibGljIGFjdGl2ZUhhYmJhamV0SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBhbGVydENvbnRlbnRzOiB7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgcHVibGljIHR5cGVPZkRlbGV0aW9uOiBEZWxldGlvblR5cGVzO1xyXG5cclxuICAgIHByaXZhdGUgbW9kYWxCYWNrZ3JvdW5kOiBTdGFja0xheW91dDtcclxuICAgIHByaXZhdGUgbW9kYWxGb3JlZ3JvdW5kOiBTdGFja0xheW91dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBtb2RhbEZpbmRpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZSAmJiBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ21vZGFsRm9yZWdyb3VuZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZCA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgnbW9kYWxGb3JlZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZCA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgnbW9kYWxCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IgPSAnIzc1NzU3NSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC53aWR0aCA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5oZWlnaHQgPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub24oJ3RhcCcsICgpID0+IHsgdGhpcy5mYWRlT3V0KCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtb2RhbEZpbmRpbmdJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QgPSB7IHR5cGU6IE1vZGFsVHlwZXMuTm9uZSB9O1xyXG4gICAgICAgIHRoaXMucHJheVRvQW5ndWxhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdQdXJjaGFzZURpYWxvZygpIHtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuTmV3UHVyY2hhc2U7XHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJvdXRQdXJjaGFzZURpYWxvZyhwdXJjaGFzZTogUHVyY2hhc2VSb3cpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVB1cmNoYXNlID0gcHVyY2hhc2U7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLkFib3V0UHVyY2hhc2U7XHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlUHVyY2hhc2VEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy50eXBlT2ZEZWxldGlvbiA9IERlbGV0aW9uVHlwZXMuUHVyY2hhc2U7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLkRlbGV0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVIYWJiYWpldERpYWxvZygpIHtcclxuICAgICAgICB0aGlzLnR5cGVPZkRlbGV0aW9uID0gRGVsZXRpb25UeXBlcy5IYWJiYWpldDtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuRGVsZXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVkaXRQdXJjaGFzZURpYWxvZygpIHtcclxuICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuRWRpdFB1cmNoYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhbGVydERpYWxvZyh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIG9rQnV0dG9uVGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5hbGVydENvbnRlbnRzID0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLkFsZXJ0O1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhYmJhamV0SW5mb0RpYWxvZyhoYWJiYWpldElkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUhhYmJhamV0SWQgPSBoYWJiYWpldElkO1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5IYWJiYWpldEluZm87XHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmFkZUluKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QmFja0J1dHRvbkNhbGxiYWNrKCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIGNvbnN0IGZhZGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSArPSAwLjA0O1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vcGFjaXR5ICs9IDAuMDI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5ID49IDEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZUludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmYWRlT3V0KCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmFja0J1dHRvbkNhbGxiYWNrKCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSA9IDAuNTtcclxuICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5ID0gMTtcclxuICAgICAgICBjb25zdCBmYWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgLT0gMC4wNDtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSAtPSAwLjAyO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZSA9IE1vZGFsVHlwZXMuTm9uZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGZhZGVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QmFja0J1dHRvbkNhbGxiYWNrKCkge1xyXG4gICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oYXBwbGljYXRpb24uQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCxcclxuICAgICAgICAgICAgKGFyZ3M6IGFwcGxpY2F0aW9uLkFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGFyZ3MuY2FuY2VsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5mYWRlT3V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUJhY2tCdXR0b25DYWxsYmFjaygpIHtcclxuICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYXBwbGljYXRpb24uQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmF5VG9Bbmd1bGFyKCkge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSB0aGlzLm1vZGFsU3RhdGVPYmplY3QudHlwZTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbn1cclxuIl19