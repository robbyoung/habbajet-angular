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
var DialogService = /** @class */ (function () {
    function DialogService() {
        var _this = this;
        var modalFindingInterval = setInterval(function () {
            if (frame.topmost().currentPage && frame.topmost().currentPage.getViewById('modalView')) {
                _this.modal = frame.topmost().currentPage.getViewById('modalView');
                _this.modal.visibility = 'collapse';
                clearInterval(modalFindingInterval);
            }
        }, 0);
    }
    DialogService.prototype.newPurchaseDialog = function () {
        var _this = this;
        this.fadeIn();
        setTimeout(function () {
            _this.fadeOut();
        }, 2000);
    };
    DialogService.prototype.fadeIn = function () {
        var _this = this;
        this.modal.opacity = 0;
        this.modal.visibility = "visible";
        var fadeInterval = setInterval(function () {
            _this.modal.opacity += 0.05;
            if (_this.modal.opacity >= 1) {
                clearInterval(fadeInterval);
            }
        }, 5);
    };
    DialogService.prototype.fadeOut = function () {
        var _this = this;
        this.modal.opacity = 1;
        var fadeInterval = setInterval(function () {
            _this.modal.opacity -= 0.05;
            if (_this.modal.opacity <= 0) {
                _this.modal.visibility = "collapse";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnQ0FBa0M7QUFJbEM7SUFHSTtRQUFBLGlCQVFDO1FBUEcsSUFBTSxvQkFBb0IsR0FBRyxXQUFXLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2xFLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDbkMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU8sOEJBQU0sR0FBZDtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNsQyxJQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7WUFDN0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDO1lBQzNCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVPLCtCQUFPLEdBQWY7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7WUFDN0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDO1lBQzNCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDbkMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2hDLENBQUM7UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBeENRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTs7T0FDQSxhQUFhLENBeUN6QjtJQUFELG9CQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG1vZGFsOiBTdGFja0xheW91dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBtb2RhbEZpbmRpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZSAmJiBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2UuZ2V0Vmlld0J5SWQoJ21vZGFsVmlldycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlLmdldFZpZXdCeUlkKCdtb2RhbFZpZXcnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwudmlzaWJpbGl0eSA9ICdjb2xsYXBzZSc7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1vZGFsRmluZGluZ0ludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdQdXJjaGFzZURpYWxvZygpIHtcclxuICAgICAgICB0aGlzLmZhZGVJbigpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZhZGVJbigpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubW9kYWwudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIGNvbnN0IGZhZGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbC5vcGFjaXR5ICs9IDAuMDU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubW9kYWwub3BhY2l0eSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGZhZGVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZhZGVPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5vcGFjaXR5ID0gMTtcclxuICAgICAgICBjb25zdCBmYWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWwub3BhY2l0eSAtPSAwLjA1O1xyXG4gICAgICAgICAgICBpZih0aGlzLm1vZGFsLm9wYWNpdHkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmYWRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNSk7XHJcbiAgICB9XHJcbn1cclxuIl19