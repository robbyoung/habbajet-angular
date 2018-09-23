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
    ModalTypes[ModalTypes["NewPurchase"] = 0] = "NewPurchase";
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
                _this.modalBackground.visibility = 'collapse';
                _this.modalForeground.visibility = 'collapse';
                _this.modalBackground.on('tap', function () { _this.fadeOut(); });
                clearInterval(modalFindingInterval);
            }
        }, 0);
        this.modalStateObject = { type: ModalTypes.NewPurchase };
    }
    DialogService.prototype.newPurchaseDialog = function () {
        this.modalStateObject.type = ModalTypes.NewPurchase;
        this.onNewPurchasePopup();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnQ0FBa0M7QUFHbEMsSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ2xCLHlEQUFXLENBQUE7QUFDZixDQUFDLEVBRlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFFckI7QUFHRDtJQU1JO1FBQUEsaUJBZUM7UUFkRyxJQUFNLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2xGLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO2dCQUNqRCxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2dCQUM3QyxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxjQUFRLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRU0seUNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ3BELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sOEJBQU0sR0FBZDtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVDLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztZQUM3QixLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7WUFDckMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDO1lBQ3JDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVNLCtCQUFPLEdBQWQ7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQztZQUNyQyxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7WUFDckMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2dCQUM3QyxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzdDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQXZEUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQXdEekI7SUFBRCxvQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBlbnVtIE1vZGFsVHlwZXMge1xyXG4gICAgTmV3UHVyY2hhc2UsXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBtb2RhbEJhY2tncm91bmQ6IFN0YWNrTGF5b3V0O1xyXG4gICAgcHJpdmF0ZSBtb2RhbEZvcmVncm91bmQ6IFN0YWNrTGF5b3V0O1xyXG4gICAgcHVibGljIG1vZGFsU3RhdGVPYmplY3Q6IHsgdHlwZTogTW9kYWxUeXBlcyB9O1xyXG4gICAgcHVibGljIG9uTmV3UHVyY2hhc2VQb3B1cDogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBtb2RhbEZpbmRpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZSAmJiBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ21vZGFsRm9yZWdyb3VuZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZCA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgnbW9kYWxGb3JlZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZCA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5nZXRWaWV3QnlJZCgnbW9kYWxCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IgPSAnIzc1NzU3NSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC53aWR0aCA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC5oZWlnaHQgPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9uKCd0YXAnLCAoKSA9PiB7IHRoaXMuZmFkZU91dCgpOyB9KTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobW9kYWxGaW5kaW5nSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFN0YXRlT2JqZWN0ID0geyB0eXBlOiBNb2RhbFR5cGVzLk5ld1B1cmNoYXNlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld1B1cmNoYXNlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGF0ZU9iamVjdC50eXBlID0gTW9kYWxUeXBlcy5OZXdQdXJjaGFzZTtcclxuICAgICAgICB0aGlzLm9uTmV3UHVyY2hhc2VQb3B1cCgpO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmYWRlSW4oKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICBjb25zdCBmYWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxGb3JlZ3JvdW5kLm9wYWNpdHkgKz0gMC4wNDtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEJhY2tncm91bmQub3BhY2l0eSArPSAwLjAyO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5ID49IDEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZUludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmYWRlT3V0KCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgY29uc3QgZmFkZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsRm9yZWdyb3VuZC5vcGFjaXR5IC09IDAuMDQ7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxCYWNrZ3JvdW5kLm9wYWNpdHkgLT0gMC4wMjtcclxuICAgICAgICAgICAgaWYodGhpcy5tb2RhbEZvcmVncm91bmQub3BhY2l0eSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQmFja2dyb3VuZC52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEZvcmVncm91bmQudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZUludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==