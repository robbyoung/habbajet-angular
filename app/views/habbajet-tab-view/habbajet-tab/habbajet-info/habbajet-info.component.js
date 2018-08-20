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
var habbajet_service_1 = require("../../../../services/habbajet.service");
var dialogs = require("ui/dialogs");
var HabbajetInfoComponent = /** @class */ (function () {
    function HabbajetInfoComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    ;
    HabbajetInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = this.habbajetService.getHabbajetInfo(this.habbajetIndex);
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetIndex);
        this.expectedPayoutLabelID = 'expectedPayout' + this.habbajetIndex;
        this.info.expectedPayoutUpdateCallback = function () { return _this.onExpectedPayoutUpdate(_this.expectedPayoutLabelID); };
    };
    HabbajetInfoComponent.prototype.onInfoTap = function () {
        var _this = this;
        dialogs.confirm({
            title: 'More Info',
            message: "\n                Value: " + this.info.value + "\n\n                Factor: " + this.info.factor + "\n\n                Slack: " + this.info.slack + "\n\n                Streak: " + this.info.streak + "\n\n                ",
            okButtonText: 'Delete',
            cancelButtonText: 'OK',
        }).then(function (result) {
            if (result) {
                _this.onDeleteTap();
            }
        });
    };
    HabbajetInfoComponent.prototype.onDeleteTap = function () {
        var _this = this;
        dialogs.confirm({
            title: 'Delete Habbajet',
            message: 'This habbajet will be deleted forever.',
            okButtonText: 'OK',
            cancelButtonText: 'Cancel',
        }).then(function (result) {
            if (result) {
                _this.habbajetService.deleteHabbajet(_this.habbajetIndex);
            }
        });
    };
    HabbajetInfoComponent.prototype.onExpectedPayoutUpdate = function (id) {
        var page = frame.topmost().currentPage;
        var expectedPayoutLabel = page.getViewById(id);
        if (expectedPayoutLabel) {
            var NUM_ITERATIONS_1 = 20;
            var colorToReturnTo_1 = expectedPayoutLabel.color;
            expectedPayoutLabel.color = new frame.Color('#db4848');
            var deltaR_1 = (expectedPayoutLabel.color.r - colorToReturnTo_1.r) / NUM_ITERATIONS_1;
            var deltaG_1 = (expectedPayoutLabel.color.g - colorToReturnTo_1.g) / NUM_ITERATIONS_1;
            var deltaB_1 = (expectedPayoutLabel.color.b - colorToReturnTo_1.b) / NUM_ITERATIONS_1;
            var iterations_1 = 0;
            var interval_1 = setInterval(function () {
                if (iterations_1 === NUM_ITERATIONS_1) {
                    expectedPayoutLabel.color = colorToReturnTo_1;
                    clearInterval(interval_1);
                }
                else {
                    expectedPayoutLabel.color = new frame.Color(expectedPayoutLabel.color.a, expectedPayoutLabel.color.r - deltaR_1, expectedPayoutLabel.color.g - deltaG_1, expectedPayoutLabel.color.b - deltaB_1);
                }
                iterations_1++;
            }, 50);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HabbajetInfoComponent.prototype, "habbajetIndex", void 0);
    HabbajetInfoComponent = __decorate([
        core_1.Component({
            selector: "habbajet-info",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.css",
                "app.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetInfoComponent);
    return HabbajetInfoComponent;
}());
exports.HabbajetInfoComponent = HabbajetInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCxnQ0FBa0M7QUFDbEMsMEVBQXNGO0FBRXRGLG9DQUFzQztBQVN0QztJQU1JLCtCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBQUEsQ0FBQztJQUV6RCx3Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQztJQUMzRyxDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUFBLGlCQWdCQztRQWZHLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDUixLQUFLLEVBQUUsV0FBVztZQUNsQixPQUFPLEVBQUUsOEJBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG9DQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxtQ0FDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG9DQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSx5QkFDekI7WUFDRCxZQUFZLEVBQUUsUUFBUTtZQUN0QixnQkFBZ0IsRUFBRSxJQUFJO1NB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NEJBQUM7Q0FBQSxBQTFFRCxJQTBFQztBQTFFWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xyXG5pbXBvcnQgeyBIYWJiYWpldEluZm8sIEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtaW5mb1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWluZm8vaGFiYmFqZXQtaW5mby5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbmZvL2hhYmJhamV0LWluZm8uY3NzXCIsXHJcbiAgICAgICAgICAgICAgICBcImFwcC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldEluZm9Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaGFiYmFqZXRJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIGluZm86IEhhYmJhamV0SW5mbztcclxuICAgIHB1YmxpYyBjb2xvckNsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZXhwZWN0ZWRQYXlvdXRMYWJlbElEOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge307XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbmZvID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRJbmZvKHRoaXMuaGFiYmFqZXRJbmRleCk7XHJcbiAgICAgICAgdGhpcy5jb2xvckNsYXNzID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRDb2xvcih0aGlzLmhhYmJhamV0SW5kZXgpO1xyXG4gICAgICAgIHRoaXMuZXhwZWN0ZWRQYXlvdXRMYWJlbElEID0gJ2V4cGVjdGVkUGF5b3V0JyArIHRoaXMuaGFiYmFqZXRJbmRleDtcclxuICAgICAgICB0aGlzLmluZm8uZXhwZWN0ZWRQYXlvdXRVcGRhdGVDYWxsYmFjayA9ICgpID0+IHRoaXMub25FeHBlY3RlZFBheW91dFVwZGF0ZSh0aGlzLmV4cGVjdGVkUGF5b3V0TGFiZWxJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbmZvVGFwKCkge1xyXG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01vcmUgSW5mbycsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgXHJcbiAgICAgICAgICAgICAgICBWYWx1ZTogJHt0aGlzLmluZm8udmFsdWV9XFxuXHJcbiAgICAgICAgICAgICAgICBGYWN0b3I6ICR7dGhpcy5pbmZvLmZhY3Rvcn1cXG5cclxuICAgICAgICAgICAgICAgIFNsYWNrOiAke3RoaXMuaW5mby5zbGFja31cXG5cclxuICAgICAgICAgICAgICAgIFN0cmVhazogJHt0aGlzLmluZm8uc3RyZWFrfVxcblxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0RlbGV0ZScsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnT0snLFxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRGVsZXRlVGFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVsZXRlVGFwKCkge1xyXG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlIEhhYmJhamV0JyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1RoaXMgaGFiYmFqZXQgd2lsbCBiZSBkZWxldGVkIGZvcmV2ZXIuJyxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWJiYWpldFNlcnZpY2UuZGVsZXRlSGFiYmFqZXQodGhpcy5oYWJiYWpldEluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXhwZWN0ZWRQYXlvdXRVcGRhdGUoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2U7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRQYXlvdXRMYWJlbCA9IHBhZ2UuZ2V0Vmlld0J5SWQoaWQpIGFzIFZpZXc7XHJcbiAgICAgICAgaWYgKGV4cGVjdGVkUGF5b3V0TGFiZWwpIHtcclxuICAgICAgICAgICAgY29uc3QgTlVNX0lURVJBVElPTlMgPSAyMDtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JUb1JldHVyblRvID0gZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvcjtcclxuICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvciA9IG5ldyBmcmFtZS5Db2xvcignI2RiNDg0OCcpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YVIgPSAoZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5yIC0gY29sb3JUb1JldHVyblRvLnIpIC8gTlVNX0lURVJBVElPTlM7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhRyA9IChleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmcgLSBjb2xvclRvUmV0dXJuVG8uZykgLyBOVU1fSVRFUkFUSU9OUztcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFCID0gKGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYiAtIGNvbG9yVG9SZXR1cm5Uby5iKSAvIE5VTV9JVEVSQVRJT05TO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRpb25zID09PSBOVU1fSVRFUkFUSU9OUykge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IgPSBjb2xvclRvUmV0dXJuVG87XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IgPSBuZXcgZnJhbWUuQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5yIC0gZGVsdGFSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmcgLSBkZWx0YUcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYiAtIGRlbHRhQixcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9ucysrO1xyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19