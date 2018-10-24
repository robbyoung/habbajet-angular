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
        var _this = this;
        this.image = this.habbajetService.getHabbajetImage(this.habbajetId);
        setInterval(function () {
            _this.imageService.nextState(_this.image);
        }, 200);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBRWpELDBFQUF3RTtBQUN4RSxzRUFBK0U7QUFRL0U7SUFJSSxnQ0FBb0IsZUFBZ0MsRUFBVSxZQUEwQjtRQUFwRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFFckYseUNBQVEsR0FBZjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxXQUFXLENBQUM7WUFDUixLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVNLDJDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFkUTtRQUFSLFlBQUssRUFBRTs7OERBQTJCO0lBRDFCLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUseUVBQXlFO1lBQ3RGLFNBQVMsRUFBRSxDQUFDLHdFQUF3RSxDQUFDO1NBQ3hGLENBQUM7eUNBTXVDLGtDQUFlLEVBQXdCLDZCQUFZO09BSi9FLHNCQUFzQixDQWdCbEM7SUFBRCw2QkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlLCBJbWFnZVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvaW1hZ2VzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hhYmJhamV0LWltYWdlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWltYWdlL2hhYmJhamV0LWltYWdlLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbWFnZS9oYWJiYWpldC1pbWFnZS5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldEltYWdlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBoYWJiYWpldElkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IEltYWdlU3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSwgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0SW1hZ2UodGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLm5leHRTdGF0ZSh0aGlzLmltYWdlKTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkltYWdlVGFwKCkge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmFjdGlvbih0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==