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
var habbajet_service_1 = require("../../../../services/habbajet.service");
var images_service_1 = require("../../../../services/images.service");
var HabbajetImageComponent = /** @class */ (function () {
    function HabbajetImageComponent(habbajetService, imageService) {
        this.habbajetService = habbajetService;
        this.imageService = imageService;
    }
    HabbajetImageComponent.prototype.ngOnInit = function () {
        this.image = this.habbajetService.getHabbajetImage(this.habbajetId);
        void this.imageService.animate(this.image);
    };
    HabbajetImageComponent.prototype.onImageTap = function () {
        this.habbajetService.action(this.habbajetId);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HabbajetImageComponent.prototype, "habbajetId", void 0);
    HabbajetImageComponent = __decorate([
        core_1.Component({
            selector: 'habbajet-image',
            templateUrl: 'views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.html',
            styleUrls: ['views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.css'],
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService, images_service_1.ImageService])
    ], HabbajetImageComponent);
    return HabbajetImageComponent;
}());
exports.HabbajetImageComponent = HabbajetImageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBRWpELDBFQUF3RTtBQUN4RSxzRUFBK0U7QUFRL0U7SUFJSSxnQ0FBb0IsZUFBZ0MsRUFBVSxZQUEwQjtRQUFwRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFFckYseUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEUsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLDJDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFaUTtRQUFSLFlBQUssRUFBRTs7OERBQTJCO0lBRDFCLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUseUVBQXlFO1lBQ3RGLFNBQVMsRUFBRSxDQUFDLHdFQUF3RSxDQUFDO1NBQ3hGLENBQUM7eUNBTXVDLGtDQUFlLEVBQXdCLDZCQUFZO09BSi9FLHNCQUFzQixDQWNsQztJQUFELDZCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UsIEltYWdlU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9pbWFnZXMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGFiYmFqZXQtaW1hZ2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW1hZ2UvaGFiYmFqZXQtaW1hZ2UuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWltYWdlL2hhYmJhamV0LWltYWdlLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW1hZ2VDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcHVibGljIGhhYmJhamV0SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZTogSW1hZ2VTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRJbWFnZSh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgIHZvaWQgdGhpcy5pbWFnZVNlcnZpY2UuYW5pbWF0ZSh0aGlzLmltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JbWFnZVRhcCgpIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5hY3Rpb24odGhpcy5oYWJiYWpldElkKTtcclxuICAgIH1cclxufVxyXG4iXX0=