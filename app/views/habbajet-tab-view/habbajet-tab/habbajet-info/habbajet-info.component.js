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
var habbajet_service_1 = require("../../../../services/habbajet.service");
var dialogs = require("tns-core-modules/ui/dialogs/dialogs");
var HabbajetInfoComponent = /** @class */ (function () {
    function HabbajetInfoComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCx1REFBeUQ7QUFDekQsMEVBQXNGO0FBRXRGLDZEQUErRDtBQVMvRDtJQU1JLCtCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBQUEsQ0FBQztJQUV6RCx3Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQztJQUMzRyxDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUFBLGlCQWdCQztRQWZHLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDUixLQUFLLEVBQUUsV0FBVztZQUNsQixPQUFPLEVBQUUsOEJBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG9DQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxtQ0FDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLG9DQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSx5QkFDekI7WUFDRCxZQUFZLEVBQUUsUUFBUTtZQUN0QixnQkFBZ0IsRUFBRSxJQUFJO1NB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NEJBQUM7Q0FBQSxBQTFFRCxJQTBFQztBQTFFWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZSc7XHJcbmltcG9ydCB7IEhhYmJhamV0SW5mbywgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzL2RpYWxvZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoYWJiYWpldC1pbmZvXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW5mby9oYWJiYWpldC1pbmZvLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWluZm8vaGFiYmFqZXQtaW5mby5jc3NcIixcclxuICAgICAgICAgICAgICAgIFwiYXBwLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW5mb0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBoYWJiYWpldElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW5mbzogSGFiYmFqZXRJbmZvO1xyXG4gICAgcHVibGljIGNvbG9yQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBleHBlY3RlZFBheW91dExhYmVsSUQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7fTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluZm8gPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldEluZm8odGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICB0aGlzLmNvbG9yQ2xhc3MgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldENvbG9yKHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICAgICAgdGhpcy5leHBlY3RlZFBheW91dExhYmVsSUQgPSAnZXhwZWN0ZWRQYXlvdXQnICsgdGhpcy5oYWJiYWpldElkO1xyXG4gICAgICAgIHRoaXMuaW5mby5leHBlY3RlZFBheW91dFVwZGF0ZUNhbGxiYWNrID0gKCkgPT4gdGhpcy5vbkV4cGVjdGVkUGF5b3V0VXBkYXRlKHRoaXMuZXhwZWN0ZWRQYXlvdXRMYWJlbElEKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluZm9UYXAoKSB7XHJcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTW9yZSBJbmZvJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBcclxuICAgICAgICAgICAgICAgIFZhbHVlOiAke3RoaXMuaW5mby52YWx1ZX1cXG5cclxuICAgICAgICAgICAgICAgIEZhY3RvcjogJHt0aGlzLmluZm8uZmFjdG9yfVxcblxyXG4gICAgICAgICAgICAgICAgU2xhY2s6ICR7dGhpcy5pbmZvLnNsYWNrfVxcblxyXG4gICAgICAgICAgICAgICAgU3RyZWFrOiAke3RoaXMuaW5mby5zdHJlYWt9XFxuXHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnRGVsZXRlJyxcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdPSycsXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EZWxldGVUYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWxldGVUYXAoKSB7XHJcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEZWxldGUgSGFiYmFqZXQnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhpcyBoYWJiYWpldCB3aWxsIGJlIGRlbGV0ZWQgZm9yZXZlci4nLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5kZWxldGVIYWJiYWpldCh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeHBlY3RlZFBheW91dFVwZGF0ZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZTtcclxuICAgICAgICBjb25zdCBleHBlY3RlZFBheW91dExhYmVsID0gcGFnZS5nZXRWaWV3QnlJZChpZCkgYXMgVmlldztcclxuICAgICAgICBpZiAoZXhwZWN0ZWRQYXlvdXRMYWJlbCkge1xyXG4gICAgICAgICAgICBjb25zdCBOVU1fSVRFUkFUSU9OUyA9IDIwO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvclRvUmV0dXJuVG8gPSBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yO1xyXG4gICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yID0gbmV3IGZyYW1lLkNvbG9yKCcjZGI0ODQ4Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhUiA9IChleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLnIgLSBjb2xvclRvUmV0dXJuVG8ucikgLyBOVU1fSVRFUkFUSU9OUztcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFHID0gKGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuZyAtIGNvbG9yVG9SZXR1cm5Uby5nKSAvIE5VTV9JVEVSQVRJT05TO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YUIgPSAoZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5iIC0gY29sb3JUb1JldHVyblRvLmIpIC8gTlVNX0lURVJBVElPTlM7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlcmF0aW9ucyA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbnMgPT09IE5VTV9JVEVSQVRJT05TKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvciA9IGNvbG9yVG9SZXR1cm5UbztcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvciA9IG5ldyBmcmFtZS5Db2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5hLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dExhYmVsLmNvbG9yLnIgLSBkZWx0YVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0TGFiZWwuY29sb3IuZyAtIGRlbHRhRyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXRMYWJlbC5jb2xvci5iIC0gZGVsdGFCLFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zKys7XHJcbiAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=