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
var dialog_service_1 = require("../../../../services/dialog.service");
var validation_service_1 = require("../../../../services/validation.service");
var NewPurchaseComponent = /** @class */ (function () {
    function NewPurchaseComponent(validationService, dialogService) {
        this.validationService = validationService;
        this.dialogService = dialogService;
    }
    NewPurchaseComponent.prototype.onNewPurchaseTap = function () {
        this.dialogService.newPurchaseDialog();
    };
    NewPurchaseComponent = __decorate([
        core_1.Component({
            selector: 'new-purchase',
            templateUrl: 'views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.html',
            styleUrls: ['views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.css'],
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService, dialog_service_1.DialogService])
    ], NewPurchaseComponent);
    return NewPurchaseComponent;
}());
exports.NewPurchaseComponent = NewPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFFMUMsc0VBQW9FO0FBQ3BFLDhFQUE0RTtBQVE1RTtJQUVJLDhCQUFvQixpQkFBb0MsRUFBVSxhQUE0QjtRQUExRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRTNGLCtDQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBTlEsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsbUVBQW1FO1lBQ2hGLFNBQVMsRUFBRSxDQUFDLGtFQUFrRSxDQUFDO1NBQ2xGLENBQUM7eUNBSXlDLHNDQUFpQixFQUF5Qiw4QkFBYTtPQUZyRixvQkFBb0IsQ0FPaEM7SUFBRCwyQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZXctcHVyY2hhc2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL25ldy1wdXJjaGFzZS9uZXctcHVyY2hhc2UuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9uZXctcHVyY2hhc2UvbmV3LXB1cmNoYXNlLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld1B1cmNoYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSwgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBvbk5ld1B1cmNoYXNlVGFwKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5uZXdQdXJjaGFzZURpYWxvZygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==