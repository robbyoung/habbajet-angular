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
var _ = require("lodash");
var dialog_service_1 = require("../../services/dialog.service");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(dialogService) {
        this.modalTypeObject = dialogService.modalStateObject;
    }
    ModalComponent.prototype.onModalTap = function () {
        _.noop();
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'modal',
            templateUrl: 'views/modal/modal.html',
            styleUrls: ['views/modal/modal.css'],
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLDBCQUE0QjtBQUM1QixnRUFBMEU7QUFRMUU7SUFHSSx3QkFBWSxhQUE0QjtRQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMxRCxDQUFDO0lBRU0sbUNBQVUsR0FBakI7UUFDSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDO0lBVFEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQUs2Qiw4QkFBYTtPQUgvQixjQUFjLENBVTFCO0lBQUQscUJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UsIE1vZGFsVHlwZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tb2RhbC9tb2RhbC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9tb2RhbC9tb2RhbC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgbW9kYWxUeXBlT2JqZWN0OiB7IHR5cGU6IE1vZGFsVHlwZXMgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFR5cGVPYmplY3QgPSBkaWFsb2dTZXJ2aWNlLm1vZGFsU3RhdGVPYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTW9kYWxUYXAoKSB7XHJcbiAgICAgICAgXy5ub29wKCk7XHJcbiAgICB9XHJcbn1cclxuIl19