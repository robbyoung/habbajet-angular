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
var frame = require("tns-core-modules/ui/frame/frame");
var dialog_service_1 = require("../../../../services/dialog.service");
var habbajet_service_1 = require("../../../../services/habbajet.service");
var HabbajetInfoComponent = /** @class */ (function () {
    function HabbajetInfoComponent(habbajetService, dialogService) {
        this.habbajetService = habbajetService;
        this.dialogService = dialogService;
    }
    HabbajetInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = this.habbajetService.getHabbajetInfo(this.habbajetId);
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetId);
        this.expectedPayoutLabelID = 'expectedPayout' + this.habbajetId;
        this.info.expectedPayoutUpdateCallback = function () { return _this.onExpectedPayoutUpdate(_this.expectedPayoutLabelID); };
    };
    HabbajetInfoComponent.prototype.onInfoTap = function () {
        this.dialogService.habbajetInfoDialog(this.habbajetId);
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
        __metadata("design:type", String)
    ], HabbajetInfoComponent.prototype, "habbajetId", void 0);
    HabbajetInfoComponent = __decorate([
        core_1.Component({
            selector: 'habbajet-info',
            templateUrl: 'views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.html',
            styleUrls: ['views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.css',
                'app.css'],
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService, dialog_service_1.DialogService])
    ], HabbajetInfoComponent);
    return HabbajetInfoComponent;
}());
exports.HabbajetInfoComponent = HabbajetInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUVqRCx1REFBeUQ7QUFFekQsc0VBQW9FO0FBQ3BFLDBFQUFzRjtBQVN0RjtJQU1JLCtCQUFvQixlQUFnQyxFQUFVLGFBQTRCO1FBQXRFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQztJQUV2Rix3Q0FBUSxHQUFmO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQztJQUMzRyxDQUFDO0lBRU0seUNBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sc0RBQXNCLEdBQTdCLFVBQThCLEVBQVU7UUFDcEMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFTLENBQUM7UUFDekQsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQU0sZ0JBQWMsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBTSxpQkFBZSxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQztZQUNsRCxtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZELElBQU0sUUFBTSxHQUFHLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxpQkFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFjLENBQUM7WUFDbEYsSUFBTSxRQUFNLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLGlCQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsZ0JBQWMsQ0FBQztZQUNsRixJQUFNLFFBQU0sR0FBRyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsaUJBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBYyxDQUFDO1lBRWxGLElBQUksWUFBVSxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFNLFVBQVEsR0FBRyxXQUFXLENBQUM7Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLFlBQVUsS0FBSyxnQkFBYyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsbUJBQW1CLENBQUMsS0FBSyxHQUFHLGlCQUFlLENBQUM7b0JBQzVDLGFBQWEsQ0FBQyxVQUFRLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUN2QyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMzQixtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQU0sRUFDcEMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFNLEVBQ3BDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsUUFBTSxDQUN2QyxDQUFDO2dCQUNOLENBQUM7Z0JBQ0QsWUFBVSxFQUFFLENBQUM7WUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztJQUNMLENBQUM7SUE3Q1E7UUFBUixZQUFLLEVBQUU7OzZEQUEyQjtJQUQxQixxQkFBcUI7UUFQakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSx1RUFBdUU7WUFDcEYsU0FBUyxFQUFFLENBQUMsc0VBQXNFO2dCQUN0RSxTQUFTLENBQUM7U0FDekIsQ0FBQzt5Q0FRdUMsa0NBQWUsRUFBeUIsOEJBQWE7T0FOakYscUJBQXFCLENBK0NqQztJQUFELDRCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncy9kaWFsb2dzJztcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZSc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGFiYmFqZXRJbmZvLCBIYWJiYWpldFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoYWJiYWpldC1pbmZvJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWluZm8vaGFiYmFqZXQtaW5mby5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW5mby9oYWJiYWpldC1pbmZvLmNzcycsXHJcbiAgICAgICAgICAgICAgICAnYXBwLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW5mb0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGFiYmFqZXRJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGluZm86IEhhYmJhamV0SW5mbztcclxuICAgIHB1YmxpYyBjb2xvckNsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZXhwZWN0ZWRQYXlvdXRMYWJlbElEOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSwgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluZm8gPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldEluZm8odGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICB0aGlzLmNvbG9yQ2xhc3MgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldENvbG9yKHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICAgICAgdGhpcy5leHBlY3RlZFBheW91dExhYmVsSUQgPSAnZXhwZWN0ZWRQYXlvdXQnICsgdGhpcy5oYWJiYWpldElkO1xyXG4gICAgICAgIHRoaXMuaW5mby5leHBlY3RlZFBheW91dFVwZGF0ZUNhbGxiYWNrID0gKCkgPT4gdGhpcy5vbkV4cGVjdGVkUGF5b3V0VXBkYXRlKHRoaXMuZXhwZWN0ZWRQYXlvdXRMYWJlbElEKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JbmZvVGFwKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5oYWJiYWpldEluZm9EaWFsb2codGhpcy5oYWJiYWpldElkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25FeHBlY3RlZFBheW91dFVwZGF0ZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZFBheW91dExhYmVsID0gcGFnZS5nZXRWaWV3QnlJZChpZCkgYXMgVmlldztcclxuICAgICAgICBpZiAoZXhwZWN0ZWRQYXlvdXRMYWJlbCkge1xyXG4gICAgICAgICAgICBjb25zdCBOVU1fSVRFUkFUSU9OUyA9IDIwO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvclRvUmV0dXJuVG8gPSBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yO1xyXG4gICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yID0gbmV3IGZyYW1lLkNvbG9yKCcjZGI0ODQ4Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhUiA9IChleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLnIgLSBjb2xvclRvUmV0dXJuVG8ucikgLyBOVU1fSVRFUkFUSU9OUztcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFHID0gKGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuZyAtIGNvbG9yVG9SZXR1cm5Uby5nKSAvIE5VTV9JVEVSQVRJT05TO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YUIgPSAoZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5iIC0gY29sb3JUb1JldHVyblRvLmIpIC8gTlVNX0lURVJBVElPTlM7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlcmF0aW9ucyA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbnMgPT09IE5VTV9JVEVSQVRJT05TKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvciA9IGNvbG9yVG9SZXR1cm5UbztcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvciA9IG5ldyBmcmFtZS5Db2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5hLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLnIgLSBkZWx0YVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuZyAtIGRlbHRhRyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5iIC0gZGVsdGFCLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zKys7XHJcbiAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19