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
        this.inputClass = 'invalid';
        this.keyboardType = this.field === 'Name' ? 'email' : 'number';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5wdXQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LWlucHV0LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFDakQsc0VBQW9FO0FBQ3BFLDhFQUE0RTtBQVM1RTtJQU1JLG1DQUFvQixpQkFBb0MsRUFBVSxhQUE0QjtRQUExRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDMUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7SUFDaEUsQ0FBQztJQUVNLDRDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNuRSxDQUFDO0lBRU0sZ0RBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BELENBQUM7SUFDTCxDQUFDO0lBRU0scURBQWlCLEdBQXhCO1FBQ0ksSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTywrQ0FBVyxHQUFuQjtRQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssTUFBTSxFQUFFLE1BQU0sQ0FBQywwREFBMEQsQ0FBQztZQUMvRSxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMscURBQXFELENBQUM7WUFDM0UsS0FBSyxRQUFRLEVBQUUsTUFBTSxDQUFDLHVEQUF1RCxDQUFDO1lBQzlFLEtBQUssT0FBTyxFQUFFLE1BQU0sQ0FBQywrREFBK0QsQ0FBQztZQUNyRixTQUFTLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDOUIsQ0FBQztJQUNMLENBQUM7SUFuQ1E7UUFBUixZQUFLLEVBQUU7OzREQUFzQjtJQURyQix5QkFBeUI7UUFQckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLDRFQUE0RTtZQUN6RixTQUFTLEVBQUUsQ0FBQywyRUFBMkU7Z0JBQzNFLFNBQVMsQ0FBQztTQUN6QixDQUFDO3lDQVF5QyxzQ0FBaUIsRUFBeUIsOEJBQWE7T0FOckYseUJBQXlCLENBcUNyQztJQUFELGdDQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGFiYmFqZXQtaW5wdXQtYm94JyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9oYWJiYWpldC1pbnB1dC1ib3gvaGFiYmFqZXQtaW5wdXQtYm94Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtaW5wdXQtYm94L2hhYmJhamV0LWlucHV0LWJveC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgJ2FwcC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldElucHV0Qm94Q29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWVsZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGlucHV0Q2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBrZXlib2FyZFR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBidXR0b25Db2xvcjoge2NvbG9yOiBzdHJpbmd9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlLCBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNvbG9yID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS5zdWJtaXRCdXR0b25Db2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dENsYXNzID0gJ2ludmFsaWQnO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRUeXBlID0gdGhpcy5maWVsZCA9PT0gJ05hbWUnID8gJ2VtYWlsJyA6ICdudW1iZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2UoYXJncykge1xyXG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGlmICh0ZXh0RmllbGQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZUlucHV0KHRoaXMuZmllbGQsIHRleHRGaWVsZC50ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dENsYXNzID0gaXNWYWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5SW5mb0RpYWxvZygpIHtcclxuICAgICAgICBjb25zdCBpbmZvVGV4dCA9IHRoaXMuZ2V0SW5mb1RleHQoKTtcclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuYWxlcnREaWFsb2codGhpcy5maWVsZCwgaW5mb1RleHQsICdPSycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW5mb1RleHQoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ05hbWUnOiByZXR1cm4gJ1RoaXMgaXMgdGhlIHRpdGxlIHRvIGJlIGRpc3BsYXllZCBhbG9uZ3NpZGUgdGhlIEhhYmJhamV0JztcclxuICAgICAgICAgICAgY2FzZSAnVmFsdWUnOiByZXR1cm4gJ1RoaXMgaXMgdGhlIG1heGltdW0gcGF5b3V0IGFtb3VudCBmb3IgeW91ciBIYWJiYWpldCc7XHJcbiAgICAgICAgICAgIGNhc2UgJ0ZhY3Rvcic6IHJldHVybiAnVGhpcyBkZXRlcm1pbmVzIGhvdyB0aGUgdmFsdWUgaXMgZGVjcmVhc2VkIG9uIGZhaWx1cmUnO1xyXG4gICAgICAgICAgICBjYXNlICdTbGFjayc6IHJldHVybiAnVGhpcyBkZXRlcm1pbmVzIGhvdyBtYW55IFwiZnJlZVwiIGRheXMgeW91IGdldCBmb3IgdGhlIEhhYmJhamV0JztcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICdVbmtub3duJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19