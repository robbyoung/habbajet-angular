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
var images_service_1 = require("../../../../services/images.service");
var habbajet_service_1 = require("../../../../services/habbajet.service");
var HabbajetImageComponent = /** @class */ (function () {
    function HabbajetImageComponent(habbajetService, imageService) {
        this.habbajetService = habbajetService;
        this.imageService = imageService;
    }
    HabbajetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.image = this.habbajetService.getHabbajetImage(this.habbajetId);
        setInterval(function () {
            _this.imageService.nextState(_this.image);
        }, 100);
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
            selector: "habbajet-image",
            templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.html",
            styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.css"]
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService, images_service_1.ImageService])
    ], HabbajetImageComponent);
    return HabbajetImageComponent;
}());
exports.HabbajetImageComponent = HabbajetImageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBRWpELHNFQUErRTtBQUMvRSwwRUFBd0U7QUFReEU7SUFJSSxnQ0FBb0IsZUFBZ0MsRUFBVSxZQUEwQjtRQUFwRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFFNUYseUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxXQUFXLENBQUM7WUFDUixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVNLDJDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFkUTtRQUFSLFlBQUssRUFBRTs7OERBQW9CO0lBRG5CLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUseUVBQXlFO1lBQ3RGLFNBQVMsRUFBRSxDQUFDLHdFQUF3RSxDQUFDO1NBQ3hGLENBQUM7eUNBTXVDLGtDQUFlLEVBQXdCLDZCQUFZO09BSi9FLHNCQUFzQixDQWdCbEM7SUFBRCw2QkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEltYWdlU3RhdGUsIEltYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9pbWFnZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoYWJiYWpldC1pbWFnZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWltYWdlL2hhYmJhamV0LWltYWdlLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWltYWdlL2hhYmJhamV0LWltYWdlLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW1hZ2VDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaGFiYmFqZXRJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlOiBJbWFnZVN0YXRlO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlLCBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldEltYWdlKHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5uZXh0U3RhdGUodGhpcy5pbWFnZSk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JbWFnZVRhcCgpIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5hY3Rpb24odGhpcy5oYWJiYWpldElkKTtcclxuICAgIH1cclxufSJdfQ==