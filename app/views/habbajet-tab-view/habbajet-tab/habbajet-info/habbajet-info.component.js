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
var HabbajetInfoComponent = /** @class */ (function () {
    function HabbajetInfoComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    ;
    HabbajetInfoComponent.prototype.ngOnInit = function () {
        this.info = this.habbajetService.getHabbajetInfo(this.habbajetIndex);
        this.info.expectedPayoutUpdateCallback = this.onExpectedPayoutUpdate;
    };
    HabbajetInfoComponent.prototype.onExpectedPayoutUpdate = function () {
        var page = frame.topmost().currentPage;
        var expectedPayoutLabel = page.getViewById('expectedPayout');
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
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetInfoComponent);
    return HabbajetInfoComponent;
}());
exports.HabbajetInfoComponent = HabbajetInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCxnQ0FBa0M7QUFDbEMsMEVBQXNGO0FBU3RGO0lBSUksK0JBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFBQSxDQUFDO0lBRXpELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN6RSxDQUFDO0lBRUQsc0RBQXNCLEdBQXRCO1FBQ0ksSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQVMsQ0FBQztRQUN2RSxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBTSxnQkFBYyxHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFNLGlCQUFlLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1lBQ2xELG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkQsSUFBTSxRQUFNLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLGlCQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsZ0JBQWMsQ0FBQztZQUNsRixJQUFNLFFBQU0sR0FBRyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsaUJBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBYyxDQUFDO1lBQ2xGLElBQU0sUUFBTSxHQUFHLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxpQkFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFjLENBQUM7WUFFbEYsSUFBSSxZQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQU0sVUFBUSxHQUFHLFdBQVcsQ0FBQztnQkFDekIsRUFBRSxDQUFDLENBQUMsWUFBVSxLQUFLLGdCQUFjLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsaUJBQWUsQ0FBQztvQkFDNUMsYUFBYSxDQUFDLFVBQVEsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQ3ZDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzNCLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsUUFBTSxFQUNwQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQU0sRUFDcEMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFNLENBQ3ZDLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxZQUFVLEVBQUUsQ0FBQztZQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDWCxDQUFDO0lBQ0wsQ0FBQztJQXJDUTtRQUFSLFlBQUssRUFBRTs7Z0VBQXVCO0lBRHRCLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHVFQUF1RTtZQUNwRixTQUFTLEVBQUUsQ0FBQyxzRUFBc0UsQ0FBQztTQUN0RixDQUFDO3lDQU11QyxrQ0FBZTtPQUozQyxxQkFBcUIsQ0F1Q2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xyXG5pbXBvcnQgeyBIYWJiYWpldEluZm8sIEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtaW5mb1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWluZm8vaGFiYmFqZXQtaW5mby5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbmZvL2hhYmJhamV0LWluZm8uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRJbmZvQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGhhYmJhamV0SW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpbmZvOiBIYWJiYWpldEluZm87XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge307XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbmZvID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRJbmZvKHRoaXMuaGFiYmFqZXRJbmRleCk7XHJcbiAgICAgICAgdGhpcy5pbmZvLmV4cGVjdGVkUGF5b3V0VXBkYXRlQ2FsbGJhY2sgPSB0aGlzLm9uRXhwZWN0ZWRQYXlvdXRVcGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeHBlY3RlZFBheW91dFVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBwYWdlID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkUGF5b3V0TGFiZWwgPSBwYWdlLmdldFZpZXdCeUlkKCdleHBlY3RlZFBheW91dCcpIGFzIFZpZXc7XHJcbiAgICAgICAgaWYgKGV4cGVjdGVkUGF5b3V0TGFiZWwpIHtcclxuICAgICAgICAgICAgY29uc3QgTlVNX0lURVJBVElPTlMgPSAyMDtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JUb1JldHVyblRvID0gZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvcjtcclxuICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvciA9IG5ldyBmcmFtZS5Db2xvcignI2RiNDg0OCcpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YVIgPSAoZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5yIC0gY29sb3JUb1JldHVyblRvLnIpIC8gTlVNX0lURVJBVElPTlM7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhRyA9IChleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmcgLSBjb2xvclRvUmV0dXJuVG8uZykgLyBOVU1fSVRFUkFUSU9OUztcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFCID0gKGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYiAtIGNvbG9yVG9SZXR1cm5Uby5iKSAvIE5VTV9JVEVSQVRJT05TO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRpb25zID09PSBOVU1fSVRFUkFUSU9OUykge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IgPSBjb2xvclRvUmV0dXJuVG87XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IgPSBuZXcgZnJhbWUuQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5yIC0gZGVsdGFSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmcgLSBkZWx0YUcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYiAtIGRlbHRhQixcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9ucysrO1xyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19