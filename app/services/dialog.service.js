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
var ModalTypes;
(function (ModalTypes) {
    ModalTypes["NewPurchase"] = "newPurchase";
    ModalTypes["AboutPurchase"] = "aboutPurchase";
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
    DialogService.prototype.fadeIn = function () {
        var _this = this;
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
        }, 5);
    };
    DialogService.prototype.fadeOut = function () {
        var _this = this;
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
        }, 5);
    };
    DialogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnQ0FBa0M7QUFJbEMsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ2xCLHlDQUEyQixDQUFBO0lBQzNCLDZDQUErQixDQUFBO0FBQ25DLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQUdEO0lBUUk7UUFBQSxpQkFhQztRQVpHLElBQU0sb0JBQW9CLEdBQUcsV0FBVyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVGLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEYsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNsRixLQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7Z0JBQ2pELEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsY0FBUSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVNLHlDQUFpQixHQUF4QjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNwRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVNLDJDQUFtQixHQUExQixVQUEyQixRQUFxQjtRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDdEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sOEJBQU0sR0FBZDtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVDLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztZQUM3QixLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7WUFDckMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDO1lBQ3JDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVNLCtCQUFPLEdBQWQ7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQztZQUNyQyxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7WUFDckMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2dCQUM3QyxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzdDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQTdEUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQThEekI7SUFBRCxvQkFBQztDQUFBLEFBOURELElBOERDO0FBOURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgUHVyY2hhc2VSb3cgfSBmcm9tIFwiLi9idWRnZXQuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gTW9kYWxUeXBlcyB7XHJcbiAgICBOZXdQdXJjaGFzZSA9ICduZXdQdXJjaGFzZScsXHJcbiAgICBBYm91dFB1cmNoYXNlID0gJ2Fib3V0UHVyY2hhc2UnLFxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbW9kYWxCYWNrZ3JvdW5kOiBTdGFja0xheW91dDtcclxuICAgIHByaXZhdGUgbW9kYWxGb3JlZ3JvdW5kOiBTdGFja0xheW91dDtcclxuICAgIHB1YmxpYyBtb2RhbFN0YXRlT2JqZWN0OiB7IHR5cGU6IE1vZGFsVHlwZXMgfTtcclxuXHJcbiAgICBwdWJsaWMgb25OZXdQdXJjaGFzZVBvcHVwOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIG9uQWJvdXRQdXJjaGFzZVBvcHVwOiAocHVyY2hhc2U6IFB1cmNoYXNlUm93KSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsRmluZGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlICYmIGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgnbW9kYWxGb3JlZ3JvdW5kJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKCdtb2RhbEZvcmVncm91bmQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKCdtb2RhbEJhY2tncm91bmQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvciA9ICcjNzU3NTc1JztcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLndpZHRoID0gMTAwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLmhlaWdodCA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vbigndGFwJywgKCkgPT4geyB0aGlzLmZhZGVPdXQoKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1vZGFsRmluZGluZ0ludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdCA9IHsgdHlwZTogTW9kYWxUeXBlcy5BYm91dFB1cmNoYXNlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld1B1cmNoYXNlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5OZXdQdXJjaGFzZTtcclxuICAgICAgICB0aGlzLm9uTmV3UHVyY2hhc2VQb3B1cCgpO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFib3V0UHVyY2hhc2VEaWFsb2cocHVyY2hhc2U6IFB1cmNoYXNlUm93KSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0LnR5cGUgPSBNb2RhbFR5cGVzLkFib3V0UHVyY2hhc2U7XHJcbiAgICAgICAgdGhpcy5vbkFib3V0UHVyY2hhc2VQb3B1cChwdXJjaGFzZSk7XHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKTsgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZhZGVJbigpIHtcclxuICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIGNvbnN0IGZhZGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSArPSAwLjA0O1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5vcGFjaXR5ICs9IDAuMDI7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZhZGVPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSA9IDAuNTtcclxuICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5ID0gMTtcclxuICAgICAgICBjb25zdCBmYWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgLT0gMC4wNDtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSAtPSAwLjAyO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNSk7XHJcbiAgICB9XHJcbn1cclxuIl19