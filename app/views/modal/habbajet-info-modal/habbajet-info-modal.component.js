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
var dialog_service_1 = require("../../../services/dialog.service");
var habbajet_service_1 = require("../../../services/habbajet.service");
var HabbajetInfoModalComponent = /** @class */ (function () {
    function HabbajetInfoModalComponent(dialogService, habbajetService) {
        this.dialogService = dialogService;
        this.habbajetService = habbajetService;
        var habbajetId = this.dialogService.activeHabbajetId;
        this.info = this.habbajetService.getHabbajetInfo(habbajetId);
        this.colorClass = this.habbajetService.getHabbajetColor(habbajetId);
        this.percent = this.getPercentSuccess();
    }
    HabbajetInfoModalComponent.prototype.onEditTap = function () {
        this.dialogService.fadeOut();
    };
    HabbajetInfoModalComponent.prototype.onDeleteTap = function () {
        this.dialogService.deleteHabbajetDialog();
    };
    HabbajetInfoModalComponent.prototype.getPercentSuccess = function () {
        var successes = this.info.numSuccesses;
        var total = successes + this.info.numFailures;
        var percentSuccess = total === successes ? 100 : Math.floor((successes / total) * 100);
        return percentSuccess + "%";
    };
    HabbajetInfoModalComponent = __decorate([
        core_1.Component({
            selector: 'habbajet-info-modal',
            templateUrl: 'views/modal/habbajet-info-modal/habbajet-info-modal.html',
            styleUrls: ['views/modal/habbajet-info-modal/habbajet-info-modal.css',
                'app.css'],
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService, habbajet_service_1.HabbajetService])
    ], HabbajetInfoModalComponent);
    return HabbajetInfoModalComponent;
}());
exports.HabbajetInfoModalComponent = HabbajetInfoModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5mby1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1pbmZvLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyxtRUFBaUU7QUFDakUsdUVBQW1GO0FBU25GO0lBS0ksb0NBQW9CLGFBQTRCLEVBQVUsZUFBZ0M7UUFBdEUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDdEYsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFTSw4Q0FBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLGdEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFTyxzREFBaUIsR0FBekI7UUFDSSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFNLEtBQUssR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBTSxjQUFjLEdBQUcsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRXpGLE1BQU0sQ0FBSSxjQUFjLE1BQUcsQ0FBQztJQUNoQyxDQUFDO0lBMUJRLDBCQUEwQjtRQVB0QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsMERBQTBEO1lBQ3ZFLFNBQVMsRUFBRSxDQUFDLHlEQUF5RDtnQkFDekQsU0FBUyxDQUFDO1NBQ3pCLENBQUM7eUNBT3FDLDhCQUFhLEVBQTJCLGtDQUFlO09BTGpGLDBCQUEwQixDQTJCdEM7SUFBRCxpQ0FBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IEhhYmJhamV0SW5mbywgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGFiYmFqZXQtaW5mby1tb2RhbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21vZGFsL2hhYmJhamV0LWluZm8tbW9kYWwvaGFiYmFqZXQtaW5mby1tb2RhbC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9tb2RhbC9oYWJiYWpldC1pbmZvLW1vZGFsL2hhYmJhamV0LWluZm8tbW9kYWwuY3NzJyxcclxuICAgICAgICAgICAgICAgICdhcHAuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRJbmZvTW9kYWxDb21wb25lbnQge1xyXG4gICAgcHVibGljIGluZm86IEhhYmJhamV0SW5mbztcclxuICAgIHB1YmxpYyBjb2xvckNsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGVyY2VudDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge1xyXG4gICAgICAgIGNvbnN0IGhhYmJhamV0SWQgPSB0aGlzLmRpYWxvZ1NlcnZpY2UuYWN0aXZlSGFiYmFqZXRJZDtcclxuICAgICAgICB0aGlzLmluZm8gPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldEluZm8oaGFiYmFqZXRJZCk7XHJcbiAgICAgICAgdGhpcy5jb2xvckNsYXNzID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRDb2xvcihoYWJiYWpldElkKTtcclxuICAgICAgICB0aGlzLnBlcmNlbnQgPSB0aGlzLmdldFBlcmNlbnRTdWNjZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRWRpdFRhcCgpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuZmFkZU91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRlbGV0ZVRhcCgpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuZGVsZXRlSGFiYmFqZXREaWFsb2coKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBlcmNlbnRTdWNjZXNzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3Qgc3VjY2Vzc2VzID0gdGhpcy5pbmZvLm51bVN1Y2Nlc3NlcztcclxuICAgICAgICBjb25zdCB0b3RhbCA9IHN1Y2Nlc3NlcyArIHRoaXMuaW5mby5udW1GYWlsdXJlcztcclxuICAgICAgICBjb25zdCBwZXJjZW50U3VjY2VzcyA9IHRvdGFsID09PSBzdWNjZXNzZXMgPyAxMDAgOiBNYXRoLmZsb29yKChzdWNjZXNzZXMgLyB0b3RhbCkgKiAxMDApO1xyXG5cclxuICAgICAgICByZXR1cm4gYCR7cGVyY2VudFN1Y2Nlc3N9JWA7XHJcbiAgICB9XHJcbn1cclxuIl19