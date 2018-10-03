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
var OldPurchaseComponent = /** @class */ (function () {
    function OldPurchaseComponent(dialogService) {
        this.dialogService = dialogService;
    }
    OldPurchaseComponent.prototype.onPurchaseTap = function () {
        this.dialogService.aboutPurchaseDialog(this.row);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OldPurchaseComponent.prototype, "row", void 0);
    OldPurchaseComponent = __decorate([
        core_1.Component({
            selector: 'old-purchase',
            templateUrl: 'views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.html',
            styleUrls: ['views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.css'],
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService])
    ], OldPurchaseComponent);
    return OldPurchaseComponent;
}());
exports.OldPurchaseComponent = OldPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2xkLXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9sZC1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFFakQsc0VBQW9FO0FBUXBFO0lBSUksOEJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQztJQUU3Qyw0Q0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFOUTtRQUFSLFlBQUssRUFBRTs7cURBQTBCO0lBRnpCLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLG1FQUFtRTtZQUNoRixTQUFTLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQztTQUNsRixDQUFDO3lDQU1xQyw4QkFBYTtPQUp2QyxvQkFBb0IsQ0FzRWhDO0lBQUQsMkJBQUM7Q0FBQSxBQXRFRCxJQXNFQztBQXRFWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJ1ZGdldFRhYlJvdyB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2J1ZGdldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvbGQtcHVyY2hhc2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL29sZC1wdXJjaGFzZS9vbGQtcHVyY2hhc2UuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9vbGQtcHVyY2hhc2Uvb2xkLXB1cmNoYXNlLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE9sZFB1cmNoYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93OiBCdWRnZXRUYWJSb3c7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBvblB1cmNoYXNlVGFwKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5hYm91dFB1cmNoYXNlRGlhbG9nKHRoaXMucm93KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGFzeW5jIG9uQ29ycmVjdFB1cmNoYXNlVGFwKCkge1xyXG4gICAgLy8gICAgIGNvbnN0IG5ld05hbWUgPSBhd2FpdCB0aGlzLnJlYWRQdXJjaGFzZU5hbWUoKVxyXG4gICAgLy8gICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IG5ld0Nvc3QgPSBhd2FpdCB0aGlzLnJlYWRQdXJjaGFzZUNvc3QoKVxyXG4gICAgLy8gICAgICAgICBpZiAobmV3Q29zdCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLmNvcnJlY3RQdXJjaGFzZSh0aGlzLnJvdy5kYXRlLCBuZXdOYW1lLCBuZXdDb3N0KTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGFzeW5jIHJlYWRQdXJjaGFzZU5hbWUoKSB7XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbXB0UmVzcG9uc2UgPSBhd2FpdCBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAvLyAgICAgICAgIHRpdGxlOiAnUHVyY2hhc2UgTmFtZScsXHJcbiAgICAvLyAgICAgICAgIG1lc3NhZ2U6ICdXaGF0IGRpZCB5b3UgcHVyY2hhc2U/JyxcclxuICAgIC8vICAgICAgICAgZGVmYXVsdFRleHQ6IHRoaXMucm93Lm5hbWUsXHJcbiAgICAvLyAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0NvbmZpcm0nLFxyXG4gICAgLy8gICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgaWYoIXByb21wdFJlc3BvbnNlLnJlc3VsdCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZVB1cmNoYXNlTmFtZShwcm9tcHRSZXNwb25zZS50ZXh0KTtcclxuICAgIC8vICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZShlcnJvck1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHByb21wdFJlc3BvbnNlLnRleHQ7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBhc3luYyByZWFkUHVyY2hhc2VDb3N0KCkge1xyXG4gICAgLy8gICAgIGNvbnN0IHByb21wdFJlc3BvbnNlID0gYXdhaXQgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgLy8gICAgICAgICB0aXRsZTogJ1B1cmNoYXNlIENvc3QnLFxyXG4gICAgLy8gICAgICAgICBtZXNzYWdlOiAnSG93IG11Y2ggZGlkIGl0IGNvc3Q/XFxuKFNldCB0byAwIHRvIGRlbGV0ZSknLFxyXG4gICAgLy8gICAgICAgICBkZWZhdWx0VGV4dDogdGhpcy5yb3cuY29zdC5zdWJzdHJpbmcoMSksXHJcbiAgICAvLyAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0NvbmZpcm0nLFxyXG4gICAgLy8gICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICBpZighcHJvbXB0UmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VDb3N0KHByb21wdFJlc3BvbnNlLnRleHQsIHRydWUpO1xyXG4gICAgLy8gICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gcHJvbXB0UmVzcG9uc2UudGV4dDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgIC8vICAgICAgICAgdGl0bGU6ICdJbnZhbGlkIElucHV0JyxcclxuICAgIC8vICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxyXG4gICAgLy8gICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxufVxyXG4iXX0=