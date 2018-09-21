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
var validation_service_1 = require("../../../../services/validation.service");
var HabbajetColorPickerComponent = /** @class */ (function () {
    function HabbajetColorPickerComponent(validationService) {
        this.validationService = validationService;
    }
    HabbajetColorPickerComponent.prototype.ngOnInit = function () {
        this.colors = [
            { name: 'red', class: '' },
            { name: 'blue', class: '' },
            { name: 'green', class: '' },
            { name: 'yellow', class: '' },
            { name: 'purple', class: '' },
        ];
        this.onColorTap(0);
    };
    HabbajetColorPickerComponent.prototype.onColorTap = function (index) {
        if (index < 0 || index >= this.colors.length) {
            return;
        }
        var selectedColor = this.colors[index];
        this.validationService.validateColor(selectedColor.name);
        _.each(this.colors, function (c) {
            c.class = 'colorChoice ' + c.name +
                (c.name === selectedColor.name ? ' selected' : '');
        });
    };
    HabbajetColorPickerComponent = __decorate([
        core_1.Component({
            selector: "habbajet-color-picker",
            templateUrl: "views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.html",
            styleUrls: ["views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.css"]
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], HabbajetColorPickerComponent);
    return HabbajetColorPickerComponent;
}());
exports.HabbajetColorPickerComponent = HabbajetColorPickerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LWNvbG9yLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsMEJBQTRCO0FBQzVCLDhFQUE0RTtBQWE1RTtJQUdJLHNDQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFHLENBQUM7SUFFNUQsK0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUMzQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUM1QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUM3QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtTQUNoQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsaURBQVUsR0FBVixVQUFXLEtBQWE7UUFDcEIsRUFBRSxDQUFBLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFNLGFBQWEsR0FBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJO2dCQUM3QixDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUEzQlEsNEJBQTRCO1FBTnhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFdBQVcsRUFBRSxrRkFBa0Y7WUFDL0YsU0FBUyxFQUFFLENBQUMsaUZBQWlGLENBQUM7U0FDakcsQ0FBQzt5Q0FLeUMsc0NBQWlCO09BSC9DLDRCQUE0QixDQTRCeEM7SUFBRCxtQ0FBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29sb3JCaW5kaW5nIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNsYXNzOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtY29sb3ItcGlja2VyXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2hhYmJhamV0LWNvbG9yLXBpY2tlci9oYWJiYWpldC1jb2xvci1waWNrZXIuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2hhYmJhamV0LWNvbG9yLXBpY2tlci9oYWJiYWpldC1jb2xvci1waWNrZXIuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRDb2xvclBpY2tlckNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY29sb3JzOiBDb2xvckJpbmRpbmdbXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLmNvbG9ycyA9IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAncmVkJywgY2xhc3M6ICcnIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2JsdWUnLCBjbGFzczogJycgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnZ3JlZW4nLCBjbGFzczogJycgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAneWVsbG93JywgY2xhc3M6ICcnIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ3B1cnBsZScsIGNsYXNzOiAnJyB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5vbkNvbG9yVGFwKDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sb3JUYXAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLmNvbG9ycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2xvcjogQ29sb3JCaW5kaW5nID0gdGhpcy5jb2xvcnNbaW5kZXhdO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVDb2xvcihzZWxlY3RlZENvbG9yLm5hbWUpO1xyXG4gICAgICAgIF8uZWFjaCh0aGlzLmNvbG9ycywgKGMpID0+IHtcclxuICAgICAgICAgICAgYy5jbGFzcyA9ICdjb2xvckNob2ljZSAnICsgYy5uYW1lICtcclxuICAgICAgICAgICAgICAgIChjLm5hbWUgPT09IHNlbGVjdGVkQ29sb3IubmFtZSA/ICcgc2VsZWN0ZWQnIDogJycpIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19