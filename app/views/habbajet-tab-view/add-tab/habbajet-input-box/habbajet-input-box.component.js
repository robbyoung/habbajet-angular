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
var HabbajetInputBoxComponent = /** @class */ (function () {
    function HabbajetInputBoxComponent(validationService, dialogService) {
        this.validationService = validationService;
        this.dialogService = dialogService;
        this.buttonColor = this.validationService.submitButtonColor;
    }
    HabbajetInputBoxComponent.prototype.ngOnInit = function () {
        this.inputClass = 'valid';
        this.keyboardType = this.field === 'Name' ? 'email' : 'number';
        this.hint = this.getHint();
    };
    HabbajetInputBoxComponent.prototype.onTextChange = function (args) {
        var textField = args.object;
        if (textField !== undefined) {
            var isValid = this.validationService.validateInput(this.field, textField.text);
            this.inputClass = isValid ? 'valid' : 'invalid';
        }
    };
    HabbajetInputBoxComponent.prototype.displayInfoDialog = function () {
        var infoText = this.getInfoText();
        this.dialogService.alertDialog(this.field, infoText, 'OK');
    };
    HabbajetInputBoxComponent.prototype.getInfoText = function () {
        switch (this.field) {
            case 'Name': return 'This is the title to be displayed alongside the Habbajet';
            case 'Value': return 'This is the maximum payout amount for your Habbajet';
            case 'Factor': return 'This determines how the value is decreased on failure';
            case 'Slack': return 'This determines how many "free" days you get for the Habbajet';
            default: return 'Unknown';
        }
    };
    HabbajetInputBoxComponent.prototype.getHint = function () {
        switch (this.field) {
            case 'Name': return 'My Habbajet';
            case 'Value': return '50';
            case 'Factor': return '2';
            case 'Slack': return '0';
            default: return '?';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HabbajetInputBoxComponent.prototype, "field", void 0);
    HabbajetInputBoxComponent = __decorate([
        core_1.Component({
            selector: 'habbajet-input-box',
            templateUrl: 'views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.html',
            styleUrls: ['views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.css',
                'app.css'],
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService, dialog_service_1.DialogService])
    ], HabbajetInputBoxComponent);
    return HabbajetInputBoxComponent;
}());
exports.HabbajetInputBoxComponent = HabbajetInputBoxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5wdXQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LWlucHV0LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFDakQsc0VBQW9FO0FBQ3BFLDhFQUE0RTtBQVM1RTtJQU9JLG1DQUFvQixpQkFBb0MsRUFBVSxhQUE0QjtRQUExRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDMUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7SUFDaEUsQ0FBQztJQUVNLDRDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sZ0RBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUN6QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFFTSxxREFBaUIsR0FBeEI7UUFDSSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVPLCtDQUFXLEdBQW5CO1FBQ0ksUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTywwREFBMEQsQ0FBQztZQUMvRSxLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8scURBQXFELENBQUM7WUFDM0UsS0FBSyxRQUFRLENBQUMsQ0FBQyxPQUFPLHVEQUF1RCxDQUFDO1lBQzlFLEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTywrREFBK0QsQ0FBQztZQUNyRixPQUFPLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFTywyQ0FBTyxHQUFmO1FBQ0ksUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxhQUFhLENBQUM7WUFDbEMsS0FBSyxPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQztZQUMxQixLQUFLLFFBQVEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDO1lBQzFCLEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUM7WUFDekIsT0FBTyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBL0NRO1FBQVIsWUFBSyxFQUFFOzs0REFBc0I7SUFEckIseUJBQXlCO1FBUHJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSw0RUFBNEU7WUFDekYsU0FBUyxFQUFFLENBQUMsMkVBQTJFO2dCQUMzRSxTQUFTLENBQUM7U0FDekIsQ0FBQzt5Q0FTeUMsc0NBQWlCLEVBQXlCLDhCQUFhO09BUHJGLHlCQUF5QixDQWlEckM7SUFBRCxnQ0FBQztDQUFBLEFBakRELElBaURDO0FBakRZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hhYmJhamV0LWlucHV0LWJveCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtaW5wdXQtYm94L2hhYmJhamV0LWlucHV0LWJveC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2hhYmJhamV0LWlucHV0LWJveC9oYWJiYWpldC1pbnB1dC1ib3guY3NzJyxcclxuICAgICAgICAgICAgICAgICdhcHAuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRJbnB1dEJveENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZmllbGQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbnB1dENsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMga2V5Ym9hcmRUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaGludDogc3RyaW5nO1xyXG4gICAgcHVibGljIGJ1dHRvbkNvbG9yOiB7Y29sb3I6IHN0cmluZ307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UsIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29sb3IgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnN1Ym1pdEJ1dHRvbkNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlucHV0Q2xhc3MgPSAndmFsaWQnO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRUeXBlID0gdGhpcy5maWVsZCA9PT0gJ05hbWUnID8gJ2VtYWlsJyA6ICdudW1iZXInO1xyXG4gICAgICAgIHRoaXMuaGludCA9IHRoaXMuZ2V0SGludCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2UoYXJncykge1xyXG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGlmICh0ZXh0RmllbGQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZUlucHV0KHRoaXMuZmllbGQsIHRleHRGaWVsZC50ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dENsYXNzID0gaXNWYWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5SW5mb0RpYWxvZygpIHtcclxuICAgICAgICBjb25zdCBpbmZvVGV4dCA9IHRoaXMuZ2V0SW5mb1RleHQoKTtcclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuYWxlcnREaWFsb2codGhpcy5maWVsZCwgaW5mb1RleHQsICdPSycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW5mb1RleHQoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ05hbWUnOiByZXR1cm4gJ1RoaXMgaXMgdGhlIHRpdGxlIHRvIGJlIGRpc3BsYXllZCBhbG9uZ3NpZGUgdGhlIEhhYmJhamV0JztcclxuICAgICAgICAgICAgY2FzZSAnVmFsdWUnOiByZXR1cm4gJ1RoaXMgaXMgdGhlIG1heGltdW0gcGF5b3V0IGFtb3VudCBmb3IgeW91ciBIYWJiYWpldCc7XHJcbiAgICAgICAgICAgIGNhc2UgJ0ZhY3Rvcic6IHJldHVybiAnVGhpcyBkZXRlcm1pbmVzIGhvdyB0aGUgdmFsdWUgaXMgZGVjcmVhc2VkIG9uIGZhaWx1cmUnO1xyXG4gICAgICAgICAgICBjYXNlICdTbGFjayc6IHJldHVybiAnVGhpcyBkZXRlcm1pbmVzIGhvdyBtYW55IFwiZnJlZVwiIGRheXMgeW91IGdldCBmb3IgdGhlIEhhYmJhamV0JztcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICdVbmtub3duJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRIaW50KCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5maWVsZCkge1xyXG4gICAgICAgICAgICBjYXNlICdOYW1lJzogcmV0dXJuICdNeSBIYWJiYWpldCc7XHJcbiAgICAgICAgICAgIGNhc2UgJ1ZhbHVlJzogcmV0dXJuICc1MCc7XHJcbiAgICAgICAgICAgIGNhc2UgJ0ZhY3Rvcic6IHJldHVybiAnMic7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NsYWNrJzogcmV0dXJuICcwJztcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICc/JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19