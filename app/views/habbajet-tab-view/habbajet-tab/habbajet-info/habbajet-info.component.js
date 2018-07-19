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
        dialogs.alert('Not implemented yet');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCxnQ0FBa0M7QUFDbEMsMEVBQXNGO0FBRXRGLG9DQUFzQztBQVN0QztJQU1JLCtCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBQUEsQ0FBQztJQUV6RCx3Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQztJQUMzRyxDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUFBLGlCQWdCQztRQWZHLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDUixLQUFLLEVBQUUsV0FBVztZQUNsQixPQUFPLEVBQUUsOEJBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG9DQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxtQ0FDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG9DQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSx5QkFDekI7WUFDRCxZQUFZLEVBQUUsUUFBUTtZQUN0QixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1gsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDVCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHNEQUFzQixHQUF0QixVQUF1QixFQUFVO1FBQzdCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDekMsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBUyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFNLGdCQUFjLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQU0saUJBQWUsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7WUFDbEQsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2RCxJQUFNLFFBQU0sR0FBRyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsaUJBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBYyxDQUFDO1lBQ2xGLElBQU0sUUFBTSxHQUFHLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxpQkFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFjLENBQUM7WUFDbEYsSUFBTSxRQUFNLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLGlCQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsZ0JBQWMsQ0FBQztZQUVsRixJQUFJLFlBQVUsR0FBRyxDQUFDLENBQUM7WUFDbkIsSUFBTSxVQUFRLEdBQUcsV0FBVyxDQUFDO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxZQUFVLEtBQUssZ0JBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLG1CQUFtQixDQUFDLEtBQUssR0FBRyxpQkFBZSxDQUFDO29CQUM1QyxhQUFhLENBQUMsVUFBUSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FDdkMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDM0IsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFNLEVBQ3BDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsUUFBTSxFQUNwQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQU0sQ0FDdkMsQ0FBQztnQkFDTixDQUFDO2dCQUNELFlBQVUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDTCxDQUFDO0lBL0RRO1FBQVIsWUFBSyxFQUFFOztnRUFBdUI7SUFEdEIscUJBQXFCO1FBUGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsdUVBQXVFO1lBQ3BGLFNBQVMsRUFBRSxDQUFDLHNFQUFzRTtnQkFDdEUsU0FBUyxDQUFDO1NBQ3pCLENBQUM7eUNBUXVDLGtDQUFlO09BTjNDLHFCQUFxQixDQWlFakM7SUFBRCw0QkFBQztDQUFBLEFBakVELElBaUVDO0FBakVZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XHJcbmltcG9ydCB7IEhhYmJhamV0SW5mbywgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoYWJiYWpldC1pbmZvXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW5mby9oYWJiYWpldC1pbmZvLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWluZm8vaGFiYmFqZXQtaW5mby5jc3NcIixcclxuICAgICAgICAgICAgICAgIFwiYXBwLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW5mb0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBoYWJiYWpldEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaW5mbzogSGFiYmFqZXRJbmZvO1xyXG4gICAgcHVibGljIGNvbG9yQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBleHBlY3RlZFBheW91dExhYmVsSUQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7fTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluZm8gPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldEluZm8odGhpcy5oYWJiYWpldEluZGV4KTtcclxuICAgICAgICB0aGlzLmNvbG9yQ2xhc3MgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldENvbG9yKHRoaXMuaGFiYmFqZXRJbmRleCk7XHJcbiAgICAgICAgdGhpcy5leHBlY3RlZFBheW91dExhYmVsSUQgPSAnZXhwZWN0ZWRQYXlvdXQnICsgdGhpcy5oYWJiYWpldEluZGV4O1xyXG4gICAgICAgIHRoaXMuaW5mby5leHBlY3RlZFBheW91dFVwZGF0ZUNhbGxiYWNrID0gKCkgPT4gdGhpcy5vbkV4cGVjdGVkUGF5b3V0VXBkYXRlKHRoaXMuZXhwZWN0ZWRQYXlvdXRMYWJlbElEKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluZm9UYXAoKSB7XHJcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTW9yZSBJbmZvJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBcclxuICAgICAgICAgICAgICAgIFZhbHVlOiAke3RoaXMuaW5mby52YWx1ZX1cXG5cclxuICAgICAgICAgICAgICAgIEZhY3RvcjogJHt0aGlzLmluZm8uZmFjdG9yfVxcblxyXG4gICAgICAgICAgICAgICAgU2xhY2s6ICR7dGhpcy5pbmZvLnNsYWNrfVxcblxyXG4gICAgICAgICAgICAgICAgU3RyZWFrOiAke3RoaXMuaW5mby5zdHJlYWt9XFxuXHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnRGVsZXRlJyxcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdPSycsXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EZWxldGVUYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWxldGVUYXAoKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCgnTm90IGltcGxlbWVudGVkIHlldCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXhwZWN0ZWRQYXlvdXRVcGRhdGUoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2U7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRQYXlvdXRMYWJlbCA9IHBhZ2UuZ2V0Vmlld0J5SWQoaWQpIGFzIFZpZXc7XHJcbiAgICAgICAgaWYgKGV4cGVjdGVkUGF5b3V0TGFiZWwpIHtcclxuICAgICAgICAgICAgY29uc3QgTlVNX0lURVJBVElPTlMgPSAyMDtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JUb1JldHVyblRvID0gZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvcjtcclxuICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvciA9IG5ldyBmcmFtZS5Db2xvcignI2RiNDg0OCcpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YVIgPSAoZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5yIC0gY29sb3JUb1JldHVyblRvLnIpIC8gTlVNX0lURVJBVElPTlM7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhRyA9IChleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmcgLSBjb2xvclRvUmV0dXJuVG8uZykgLyBOVU1fSVRFUkFUSU9OUztcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFCID0gKGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYiAtIGNvbG9yVG9SZXR1cm5Uby5iKSAvIE5VTV9JVEVSQVRJT05TO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRpb25zID09PSBOVU1fSVRFUkFUSU9OUykge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IgPSBjb2xvclRvUmV0dXJuVG87XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IgPSBuZXcgZnJhbWUuQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5yIC0gZGVsdGFSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmcgLSBkZWx0YUcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYiAtIGRlbHRhQixcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9ucysrO1xyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19