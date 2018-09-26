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
    OldPurchaseComponent.prototype.ngOnInit = function () { };
    OldPurchaseComponent.prototype.onPurchaseTap = function () {
        this.dialogService.aboutPurchaseDialog(this.row);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OldPurchaseComponent.prototype, "row", void 0);
    OldPurchaseComponent = __decorate([
        core_1.Component({
            selector: "old-purchase",
            templateUrl: "views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.html",
            styleUrls: ["views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.css"]
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService])
    ], OldPurchaseComponent);
    return OldPurchaseComponent;
}());
exports.OldPurchaseComponent = OldPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2xkLXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9sZC1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFFakQsc0VBQW9FO0FBUXBFO0lBSUksOEJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQztJQUVwRCx1Q0FBUSxHQUFSLGNBQVksQ0FBQztJQUVOLDRDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQVJRO1FBQVIsWUFBSyxFQUFFOztxREFBbUI7SUFGbEIsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsbUVBQW1FO1lBQ2hGLFNBQVMsRUFBRSxDQUFDLGtFQUFrRSxDQUFDO1NBQ2xGLENBQUM7eUNBTXFDLDhCQUFhO09BSnZDLG9CQUFvQixDQXlFaEM7SUFBRCwyQkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCdWRnZXRUYWJSb3cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJvbGQtcHVyY2hhc2VcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvb2xkLXB1cmNoYXNlL29sZC1wdXJjaGFzZS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvb2xkLXB1cmNoYXNlL29sZC1wdXJjaGFzZS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPbGRQdXJjaGFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgcm93OiBCdWRnZXRUYWJSb3c7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge31cclxuXHJcbiAgICBwdWJsaWMgb25QdXJjaGFzZVRhcCgpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuYWJvdXRQdXJjaGFzZURpYWxvZyh0aGlzLnJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBhc3luYyBvbkNvcnJlY3RQdXJjaGFzZVRhcCgpIHtcclxuICAgIC8vICAgICBjb25zdCBuZXdOYW1lID0gYXdhaXQgdGhpcy5yZWFkUHVyY2hhc2VOYW1lKClcclxuICAgIC8vICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBuZXdDb3N0ID0gYXdhaXQgdGhpcy5yZWFkUHVyY2hhc2VDb3N0KClcclxuICAgIC8vICAgICAgICAgaWYgKG5ld0Nvc3QpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5jb3JyZWN0UHVyY2hhc2UodGhpcy5yb3cuZGF0ZSwgbmV3TmFtZSwgbmV3Q29zdCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBhc3luYyByZWFkUHVyY2hhc2VOYW1lKCkge1xyXG4gICAgLy8gICAgIGNvbnN0IHByb21wdFJlc3BvbnNlID0gYXdhaXQgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgLy8gICAgICAgICB0aXRsZTogJ1B1cmNoYXNlIE5hbWUnLFxyXG4gICAgLy8gICAgICAgICBtZXNzYWdlOiAnV2hhdCBkaWQgeW91IHB1cmNoYXNlPycsXHJcbiAgICAvLyAgICAgICAgIGRlZmF1bHRUZXh0OiB0aGlzLnJvdy5uYW1lLFxyXG4gICAgLy8gICAgICAgICBva0J1dHRvblRleHQ6ICdDb25maXJtJyxcclxuICAgIC8vICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG5cclxuICAgIC8vICAgICBpZighcHJvbXB0UmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZVB1cmNoYXNlTmFtZShwcm9tcHRSZXNwb25zZS50ZXh0KTtcclxuICAgIC8vICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZShlcnJvck1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgLy8gICAgIH1cclxuICAgICAgICBcclxuICAgIC8vICAgICByZXR1cm4gcHJvbXB0UmVzcG9uc2UudGV4dDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGFzeW5jIHJlYWRQdXJjaGFzZUNvc3QoKSB7XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbXB0UmVzcG9uc2UgPSBhd2FpdCBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAvLyAgICAgICAgIHRpdGxlOiAnUHVyY2hhc2UgQ29zdCcsXHJcbiAgICAvLyAgICAgICAgIG1lc3NhZ2U6ICdIb3cgbXVjaCBkaWQgaXQgY29zdD9cXG4oU2V0IHRvIDAgdG8gZGVsZXRlKScsXHJcbiAgICAvLyAgICAgICAgIGRlZmF1bHRUZXh0OiB0aGlzLnJvdy5jb3N0LnN1YnN0cmluZygxKSxcclxuICAgIC8vICAgICAgICAgb2tCdXR0b25UZXh0OiAnQ29uZmlybScsXHJcbiAgICAvLyAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIGlmKCFwcm9tcHRSZXNwb25zZS5yZXN1bHQpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VDb3N0KHByb21wdFJlc3BvbnNlLnRleHQsIHRydWUpO1xyXG4gICAgLy8gICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIHJldHVybiBwcm9tcHRSZXNwb25zZS50ZXh0O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHByaXZhdGUgc2hvd0Vycm9yTWVzc2FnZShlcnJvck1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgLy8gICAgICAgICB0aXRsZTogJ0ludmFsaWQgSW5wdXQnLFxyXG4gICAgLy8gICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXHJcbiAgICAvLyAgICAgICAgIG9rQnV0dG9uVGV4dDogJ09LJyxcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfVxyXG59Il19