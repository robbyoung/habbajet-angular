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
            selector: 'habbajet-color-picker',
            templateUrl: 'views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.html',
            styleUrls: ['views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.css'],
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], HabbajetColorPickerComponent);
    return HabbajetColorPickerComponent;
}());
exports.HabbajetColorPickerComponent = HabbajetColorPickerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LWNvbG9yLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsMEJBQTRCO0FBQzVCLDhFQUE0RTtBQWE1RTtJQUdJLHNDQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFHLENBQUM7SUFFckQsK0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUMzQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUM1QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUM3QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtTQUNoQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0saURBQVUsR0FBakIsVUFBa0IsS0FBYTtRQUMzQixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQU0sYUFBYSxHQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEtBQUssR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUk7Z0JBQzdCLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTNCUSw0QkFBNEI7UUFOeEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLGtGQUFrRjtZQUMvRixTQUFTLEVBQUUsQ0FBQyxpRkFBaUYsQ0FBQztTQUNqRyxDQUFDO3lDQUt5QyxzQ0FBaUI7T0FIL0MsNEJBQTRCLENBNEJ4QztJQUFELG1DQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIENvbG9yQmluZGluZyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjbGFzczogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGFiYmFqZXQtY29sb3ItcGlja2VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9oYWJiYWpldC1jb2xvci1waWNrZXIvaGFiYmFqZXQtY29sb3ItcGlja2VyLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtY29sb3ItcGlja2VyL2hhYmJhamV0LWNvbG9yLXBpY2tlci5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldENvbG9yUGlja2VyQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjb2xvcnM6IENvbG9yQmluZGluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbG9ycyA9IFtcclxuICAgICAgICAgICAgeyBuYW1lOiAncmVkJywgY2xhc3M6ICcnIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ2JsdWUnLCBjbGFzczogJycgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnZ3JlZW4nLCBjbGFzczogJycgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiAneWVsbG93JywgY2xhc3M6ICcnIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ3B1cnBsZScsIGNsYXNzOiAnJyB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5vbkNvbG9yVGFwKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNvbG9yVGFwKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuY29sb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RlZENvbG9yOiBDb2xvckJpbmRpbmcgPSB0aGlzLmNvbG9yc1tpbmRleF07XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZUNvbG9yKHNlbGVjdGVkQ29sb3IubmFtZSk7XHJcbiAgICAgICAgXy5lYWNoKHRoaXMuY29sb3JzLCAoYykgPT4ge1xyXG4gICAgICAgICAgICBjLmNsYXNzID0gJ2NvbG9yQ2hvaWNlICcgKyBjLm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgKGMubmFtZSA9PT0gc2VsZWN0ZWRDb2xvci5uYW1lID8gJyBzZWxlY3RlZCcgOiAnJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19