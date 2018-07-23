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
var validation_service_1 = require("../../../../services/validation.service");
var dialogs = require("ui/dialogs");
var HabbajetInputBoxComponent = /** @class */ (function () {
    function HabbajetInputBoxComponent(validationService) {
        this.validationService = validationService;
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
        dialogs.alert({
            title: this.field,
            message: infoText,
            okButtonText: 'OK',
        });
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
            selector: "habbajet-input-box",
            templateUrl: "views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.html",
            styleUrls: ["views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.css",
                "app.css"]
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], HabbajetInputBoxComponent);
    return HabbajetInputBoxComponent;
}());
exports.HabbajetInputBoxComponent = HabbajetInputBoxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5wdXQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LWlucHV0LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFDakQsOEVBQTRFO0FBQzVFLG9DQUFzQztBQVN0QztJQU1JLG1DQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRSxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ25FLENBQUM7SUFFTSxnREFBWSxHQUFuQixVQUFvQixJQUFJO1FBQ3BCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsRUFBRSxDQUFBLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFTSxxREFBaUIsR0FBeEI7UUFDSSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsUUFBUTtZQUNqQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sK0NBQVcsR0FBbkI7UUFDSSxNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsMERBQTBELENBQUM7WUFDL0UsS0FBSyxPQUFPLEVBQUUsTUFBTSxDQUFDLHFEQUFxRCxDQUFDO1lBQzNFLEtBQUssUUFBUSxFQUFFLE1BQU0sQ0FBQyx1REFBdUQsQ0FBQztZQUM5RSxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsK0RBQStELENBQUM7WUFDckYsU0FBUyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBdkNRO1FBQVIsWUFBSyxFQUFFOzs0REFBZTtJQURkLHlCQUF5QjtRQVByQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsNEVBQTRFO1lBQ3pGLFNBQVMsRUFBRSxDQUFDLDJFQUEyRTtnQkFDM0UsU0FBUyxDQUFDO1NBQ3pCLENBQUM7eUNBUXlDLHNDQUFpQjtPQU4vQyx5QkFBeUIsQ0F5Q3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImhhYmJhamV0LWlucHV0LWJveFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9oYWJiYWpldC1pbnB1dC1ib3gvaGFiYmFqZXQtaW5wdXQtYm94Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9oYWJiYWpldC1pbnB1dC1ib3gvaGFiYmFqZXQtaW5wdXQtYm94LmNzc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhcHAuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRJbnB1dEJveENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBmaWVsZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGlucHV0Q2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBrZXlib2FyZFR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBidXR0b25Db2xvcjoge2NvbG9yOiBzdHJpbmd9O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uQ29sb3IgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnN1Ym1pdEJ1dHRvbkNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRDbGFzcyA9ICdpbnZhbGlkJztcclxuICAgICAgICB0aGlzLmtleWJvYXJkVHlwZSA9IHRoaXMuZmllbGQgPT09ICdOYW1lJyA/ICdlbWFpbCcgOiAnbnVtYmVyJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlKGFyZ3MpIHtcclxuICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBpZih0ZXh0RmllbGQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZUlucHV0KHRoaXMuZmllbGQsIHRleHRGaWVsZC50ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dENsYXNzID0gaXNWYWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5SW5mb0RpYWxvZygpIHtcclxuICAgICAgICBjb25zdCBpbmZvVGV4dCA9IHRoaXMuZ2V0SW5mb1RleHQoKTtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuZmllbGQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGluZm9UZXh0LFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJbmZvVGV4dCgpIHtcclxuICAgICAgICBzd2l0Y2godGhpcy5maWVsZCkge1xyXG4gICAgICAgICAgICBjYXNlICdOYW1lJzogcmV0dXJuICdUaGlzIGlzIHRoZSB0aXRsZSB0byBiZSBkaXNwbGF5ZWQgYWxvbmdzaWRlIHRoZSBIYWJiYWpldCc7XHJcbiAgICAgICAgICAgIGNhc2UgJ1ZhbHVlJzogcmV0dXJuICdUaGlzIGlzIHRoZSBtYXhpbXVtIHBheW91dCBhbW91bnQgZm9yIHlvdXIgSGFiYmFqZXQnO1xyXG4gICAgICAgICAgICBjYXNlICdGYWN0b3InOiByZXR1cm4gJ1RoaXMgZGV0ZXJtaW5lcyBob3cgdGhlIHZhbHVlIGlzIGRlY3JlYXNlZCBvbiBmYWlsdXJlJztcclxuICAgICAgICAgICAgY2FzZSAnU2xhY2snOiByZXR1cm4gJ1RoaXMgZGV0ZXJtaW5lcyBob3cgbWFueSBcImZyZWVcIiBkYXlzIHlvdSBnZXQgZm9yIHRoZSBIYWJiYWpldCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAnVW5rbm93bic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19