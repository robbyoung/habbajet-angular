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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUVqRCx1REFBeUQ7QUFFekQsc0VBQW9FO0FBQ3BFLDBFQUFzRjtBQVN0RjtJQU1JLCtCQUFvQixlQUFnQyxFQUFVLGFBQTRCO1FBQXRFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQztJQUV2Rix3Q0FBUSxHQUFmO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQztJQUMzRyxDQUFDO0lBRU0seUNBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sc0RBQXNCLEdBQTdCLFVBQThCLEVBQVU7UUFDcEMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFTLENBQUM7UUFDekQsSUFBSSxtQkFBbUIsRUFBRTtZQUNyQixJQUFNLGdCQUFjLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQU0saUJBQWUsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7WUFDbEQsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2RCxJQUFNLFFBQU0sR0FBRyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsaUJBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBYyxDQUFDO1lBQ2xGLElBQU0sUUFBTSxHQUFHLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxpQkFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFjLENBQUM7WUFDbEYsSUFBTSxRQUFNLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLGlCQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsZ0JBQWMsQ0FBQztZQUVsRixJQUFJLFlBQVUsR0FBRyxDQUFDLENBQUM7WUFDbkIsSUFBTSxVQUFRLEdBQUcsV0FBVyxDQUFDO2dCQUN6QixJQUFJLFlBQVUsS0FBSyxnQkFBYyxFQUFFO29CQUMvQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsaUJBQWUsQ0FBQztvQkFDNUMsYUFBYSxDQUFDLFVBQVEsQ0FBQyxDQUFDO2lCQUMzQjtxQkFBTTtvQkFDSCxtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUN2QyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMzQixtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFFBQU0sRUFDcEMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFNLEVBQ3BDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsUUFBTSxDQUN2QyxDQUFDO2lCQUNMO2dCQUNELFlBQVUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNWO0lBQ0wsQ0FBQztJQTdDUTtRQUFSLFlBQUssRUFBRTs7NkRBQTJCO0lBRDFCLHFCQUFxQjtRQVBqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHVFQUF1RTtZQUNwRixTQUFTLEVBQUUsQ0FBQyxzRUFBc0U7Z0JBQ3RFLFNBQVMsQ0FBQztTQUN6QixDQUFDO3lDQVF1QyxrQ0FBZSxFQUF5Qiw4QkFBYTtPQU5qRixxQkFBcUIsQ0ErQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzL2RpYWxvZ3MnO1xyXG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWUnO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIYWJiYWpldEluZm8sIEhhYmJhamV0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hhYmJhamV0LWluZm8nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW5mby9oYWJiYWpldC1pbmZvLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbmZvL2hhYmJhamV0LWluZm8uY3NzJyxcclxuICAgICAgICAgICAgICAgICdhcHAuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRJbmZvQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBoYWJiYWpldElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW5mbzogSGFiYmFqZXRJbmZvO1xyXG4gICAgcHVibGljIGNvbG9yQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBleHBlY3RlZFBheW91dExhYmVsSUQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlLCBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UpIHt9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5mbyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0SW5mbyh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgIHRoaXMuY29sb3JDbGFzcyA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0Q29sb3IodGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICB0aGlzLmV4cGVjdGVkUGF5b3V0TGFiZWxJRCA9ICdleHBlY3RlZFBheW91dCcgKyB0aGlzLmhhYmJhamV0SWQ7XHJcbiAgICAgICAgdGhpcy5pbmZvLmV4cGVjdGVkUGF5b3V0VXBkYXRlQ2FsbGJhY2sgPSAoKSA9PiB0aGlzLm9uRXhwZWN0ZWRQYXlvdXRVcGRhdGUodGhpcy5leHBlY3RlZFBheW91dExhYmVsSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkluZm9UYXAoKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmhhYmJhamV0SW5mb0RpYWxvZyh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkV4cGVjdGVkUGF5b3V0VXBkYXRlKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBwYWdlID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlO1xyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkUGF5b3V0TGFiZWwgPSBwYWdlLmdldFZpZXdCeUlkKGlkKSBhcyBWaWV3O1xyXG4gICAgICAgIGlmIChleHBlY3RlZFBheW91dExhYmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IE5VTV9JVEVSQVRJT05TID0gMjA7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yVG9SZXR1cm5UbyA9IGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3I7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IgPSBuZXcgZnJhbWUuQ29sb3IoJyNkYjQ4NDgnKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFSID0gKGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuciAtIGNvbG9yVG9SZXR1cm5Uby5yKSAvIE5VTV9JVEVSQVRJT05TO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YUcgPSAoZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5nIC0gY29sb3JUb1JldHVyblRvLmcpIC8gTlVNX0lURVJBVElPTlM7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhQiA9IChleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmIgLSBjb2xvclRvUmV0dXJuVG8uYikgLyBOVU1fSVRFUkFUSU9OUztcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVyYXRpb25zID0gMDtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0aW9ucyA9PT0gTlVNX0lURVJBVElPTlMpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yID0gY29sb3JUb1JldHVyblRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yID0gbmV3IGZyYW1lLkNvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuciAtIGRlbHRhUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5nIC0gZGVsdGFHLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmIgLSBkZWx0YUIsXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnMrKztcclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=