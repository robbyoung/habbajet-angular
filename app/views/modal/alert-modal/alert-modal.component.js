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
var AlertModalComponent = /** @class */ (function () {
    function AlertModalComponent(dialogService) {
        this.dialogService = dialogService;
        var contents = dialogService.alertContents;
        this.title = contents.title;
        this.text = contents.text;
        this.okButtonText = contents.okButtonText;
    }
    AlertModalComponent.prototype.onSubmitTap = function () {
        this.dialogService.fadeOut();
    };
    AlertModalComponent = __decorate([
        core_1.Component({
            selector: 'alert-modal',
            templateUrl: 'views/modal/alert-modal/alert-modal.html',
            styleUrls: ['views/modal/alert-modal/alert-modal.css'],
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService])
    ], AlertModalComponent);
    return AlertModalComponent;
}());
exports.AlertModalComponent = AlertModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxlcnQtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUFpRTtBQVFqRTtJQUtJLDZCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QyxJQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO0lBQzlDLENBQUM7SUFFTSx5Q0FBVyxHQUFsQjtRQUNHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQWRRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztTQUN6RCxDQUFDO3lDQU9xQyw4QkFBYTtPQUx2QyxtQkFBbUIsQ0FlL0I7SUFBRCwwQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FsZXJ0LW1vZGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbW9kYWwvYWxlcnQtbW9kYWwvYWxlcnQtbW9kYWwuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsndmlld3MvbW9kYWwvYWxlcnQtbW9kYWwvYWxlcnQtbW9kYWwuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWxlcnRNb2RhbENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgb2tCdXR0b25UZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudHMgPSBkaWFsb2dTZXJ2aWNlLmFsZXJ0Q29udGVudHM7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGNvbnRlbnRzLnRpdGxlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IGNvbnRlbnRzLnRleHQ7XHJcbiAgICAgICAgdGhpcy5va0J1dHRvblRleHQgPSBjb250ZW50cy5va0J1dHRvblRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3VibWl0VGFwKCkge1xyXG4gICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmZhZGVPdXQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=