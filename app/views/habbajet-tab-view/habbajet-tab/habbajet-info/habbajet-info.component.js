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
var dialogs = require("tns-core-modules/ui/dialogs/dialogs");
var frame = require("tns-core-modules/ui/frame/frame");
var habbajet_service_1 = require("../../../../services/habbajet.service");
var HabbajetInfoComponent = /** @class */ (function () {
    function HabbajetInfoComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    HabbajetInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = this.habbajetService.getHabbajetInfo(this.habbajetId);
        this.colorClass = this.habbajetService.getHabbajetColor(this.habbajetId);
        this.expectedPayoutLabelID = 'expectedPayout' + this.habbajetId;
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
                _this.habbajetService.deleteHabbajet(_this.habbajetId);
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
        __metadata("design:type", String)
    ], HabbajetInfoComponent.prototype, "habbajetId", void 0);
    HabbajetInfoComponent = __decorate([
        core_1.Component({
            selector: 'habbajet-info',
            templateUrl: 'views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.html',
            styleUrls: ['views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.css',
                'app.css'],
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetInfoComponent);
    return HabbajetInfoComponent;
}());
exports.HabbajetInfoComponent = HabbajetInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCw2REFBK0Q7QUFDL0QsdURBQXlEO0FBRXpELDBFQUFzRjtBQVN0RjtJQU1JLCtCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRWpELHdDQUFRLEdBQWY7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUF2RCxDQUF1RCxDQUFDO0lBQzNHLENBQUM7SUFFTSx5Q0FBUyxHQUFoQjtRQUFBLGlCQWdCQztRQWZHLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDUixLQUFLLEVBQUUsV0FBVztZQUNsQixPQUFPLEVBQUUsOEJBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG9DQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxtQ0FDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG9DQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSx5QkFDekI7WUFDRCxZQUFZLEVBQUUsUUFBUTtZQUN0QixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMs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QUEsQUExRUQsSUEwRUM7QUExRVksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncy9kaWFsb2dzJztcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZSc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcclxuaW1wb3J0IHsgSGFiYmFqZXRJbmZvLCBIYWJiYWpldFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoYWJiYWpldC1pbmZvJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWluZm8vaGFiYmFqZXQtaW5mby5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW5mby9oYWJiYWpldC1pbmZvLmNzcycsXHJcbiAgICAgICAgICAgICAgICAnYXBwLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW5mb0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGFiYmFqZXRJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGluZm86IEhhYmJhamV0SW5mbztcclxuICAgIHB1YmxpYyBjb2xvckNsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZXhwZWN0ZWRQYXlvdXRMYWJlbElEOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbmZvID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRJbmZvKHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICAgICAgdGhpcy5jb2xvckNsYXNzID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRDb2xvcih0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgIHRoaXMuZXhwZWN0ZWRQYXlvdXRMYWJlbElEID0gJ2V4cGVjdGVkUGF5b3V0JyArIHRoaXMuaGFiYmFqZXRJZDtcclxuICAgICAgICB0aGlzLmluZm8uZXhwZWN0ZWRQYXlvdXRVcGRhdGVDYWxsYmFjayA9ICgpID0+IHRoaXMub25FeHBlY3RlZFBheW91dFVwZGF0ZSh0aGlzLmV4cGVjdGVkUGF5b3V0TGFiZWxJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSW5mb1RhcCgpIHtcclxuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNb3JlIEluZm8nLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFxyXG4gICAgICAgICAgICAgICAgVmFsdWU6ICR7dGhpcy5pbmZvLnZhbHVlfVxcblxyXG4gICAgICAgICAgICAgICAgRmFjdG9yOiAke3RoaXMuaW5mby5mYWN0b3J9XFxuXHJcbiAgICAgICAgICAgICAgICBTbGFjazogJHt0aGlzLmluZm8uc2xhY2t9XFxuXHJcbiAgICAgICAgICAgICAgICBTdHJlYWs6ICR7dGhpcy5pbmZvLnN0cmVha31cXG5cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdEZWxldGUnLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ09LJyxcclxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRlbGV0ZVRhcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25EZWxldGVUYXAoKSB7XHJcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEZWxldGUgSGFiYmFqZXQnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhpcyBoYWJiYWpldCB3aWxsIGJlIGRlbGV0ZWQgZm9yZXZlci4nLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5kZWxldGVIYWJiYWpldCh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRXhwZWN0ZWRQYXlvdXRVcGRhdGUoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSBmcmFtZS50b3Btb3N0KCkuY3VycmVudFBhZ2U7XHJcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRQYXlvdXRMYWJlbCA9IHBhZ2UuZ2V0Vmlld0J5SWQoaWQpIGFzIFZpZXc7XHJcbiAgICAgICAgaWYgKGV4cGVjdGVkUGF5b3V0TGFiZWwpIHtcclxuICAgICAgICAgICAgY29uc3QgTlVNX0lURVJBVElPTlMgPSAyMDtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JUb1JldHVyblRvID0gZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvcjtcclxuICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvciA9IG5ldyBmcmFtZS5Db2xvcignI2RiNDg0OCcpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YVIgPSAoZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5yIC0gY29sb3JUb1JldHVyblRvLnIpIC8gTlVNX0lURVJBVElPTlM7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhRyA9IChleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmcgLSBjb2xvclRvUmV0dXJuVG8uZykgLyBOVU1fSVRFUkFUSU9OUztcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFCID0gKGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYiAtIGNvbG9yVG9SZXR1cm5Uby5iKSAvIE5VTV9JVEVSQVRJT05TO1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRpb25zID09PSBOVU1fSVRFUkFUSU9OUykge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IgPSBjb2xvclRvUmV0dXJuVG87XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IgPSBuZXcgZnJhbWUuQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5yIC0gZGVsdGFSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLmcgLSBkZWx0YUcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuYiAtIGRlbHRhQixcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9ucysrO1xyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==