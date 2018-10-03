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
var dialogs = require("tns-core-modules/ui/dialogs/dialogs");
var validation_service_1 = require("../../../../services/validation.service");
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
            selector: 'habbajet-input-box',
            templateUrl: 'views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.html',
            styleUrls: ['views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.css',
                'app.css'],
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], HabbajetInputBoxComponent);
    return HabbajetInputBoxComponent;
}());
exports.HabbajetInputBoxComponent = HabbajetInputBoxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5wdXQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LWlucHV0LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFDakQsNkRBQStEO0FBQy9ELDhFQUE0RTtBQVM1RTtJQU1JLG1DQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRSxDQUFDO0lBRU0sNENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ25FLENBQUM7SUFFTSxnREFBWSxHQUFuQixVQUFvQixJQUFJO1FBQ3BCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFTSxxREFBaUIsR0FBeEI7UUFDSSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsUUFBUTtZQUNqQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sK0NBQVcsR0FBbkI7UUFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNqQixLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsMERBQTBELENBQUM7WUFDL0UsS0FBSyxPQUFPLEVBQUUsTUFBTSxDQUFDLHFEQUFxRCxDQUFDO1lBQzNFLEtBQUssUUFBUSxFQUFFLE1BQU0sQ0FBQyx1REFBdUQsQ0FBQztZQUM5RSxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsK0RBQStELENBQUM7WUFDckYsU0FBUyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBdkNRO1FBQVIsWUFBSyxFQUFFOzs0REFBc0I7SUFEckIseUJBQXlCO1FBUHJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSw0RUFBNEU7WUFDekYsU0FBUyxFQUFFLENBQUMsMkVBQTJFO2dCQUMzRSxTQUFTLENBQUM7U0FDekIsQ0FBQzt5Q0FReUMsc0NBQWlCO09BTi9DLHlCQUF5QixDQXlDckM7SUFBRCxnQ0FBQztDQUFBLEFBekNELElBeUNDO0FBekNZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MvZGlhbG9ncyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdoYWJiYWpldC1pbnB1dC1ib3gnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2hhYmJhamV0LWlucHV0LWJveC9oYWJiYWpldC1pbnB1dC1ib3guaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9oYWJiYWpldC1pbnB1dC1ib3gvaGFiYmFqZXQtaW5wdXQtYm94LmNzcycsXHJcbiAgICAgICAgICAgICAgICAnYXBwLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW5wdXRCb3hDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcHVibGljIGZpZWxkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW5wdXRDbGFzczogc3RyaW5nO1xyXG4gICAgcHVibGljIGtleWJvYXJkVHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGJ1dHRvbkNvbG9yOiB7Y29sb3I6IHN0cmluZ307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNvbG9yID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS5zdWJtaXRCdXR0b25Db2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dENsYXNzID0gJ2ludmFsaWQnO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRUeXBlID0gdGhpcy5maWVsZCA9PT0gJ05hbWUnID8gJ2VtYWlsJyA6ICdudW1iZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2UoYXJncykge1xyXG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGlmICh0ZXh0RmllbGQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZUlucHV0KHRoaXMuZmllbGQsIHRleHRGaWVsZC50ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dENsYXNzID0gaXNWYWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5SW5mb0RpYWxvZygpIHtcclxuICAgICAgICBjb25zdCBpbmZvVGV4dCA9IHRoaXMuZ2V0SW5mb1RleHQoKTtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuZmllbGQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGluZm9UZXh0LFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJbmZvVGV4dCgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZmllbGQpIHtcclxuICAgICAgICAgICAgY2FzZSAnTmFtZSc6IHJldHVybiAnVGhpcyBpcyB0aGUgdGl0bGUgdG8gYmUgZGlzcGxheWVkIGFsb25nc2lkZSB0aGUgSGFiYmFqZXQnO1xyXG4gICAgICAgICAgICBjYXNlICdWYWx1ZSc6IHJldHVybiAnVGhpcyBpcyB0aGUgbWF4aW11bSBwYXlvdXQgYW1vdW50IGZvciB5b3VyIEhhYmJhamV0JztcclxuICAgICAgICAgICAgY2FzZSAnRmFjdG9yJzogcmV0dXJuICdUaGlzIGRldGVybWluZXMgaG93IHRoZSB2YWx1ZSBpcyBkZWNyZWFzZWQgb24gZmFpbHVyZSc7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NsYWNrJzogcmV0dXJuICdUaGlzIGRldGVybWluZXMgaG93IG1hbnkgXCJmcmVlXCIgZGF5cyB5b3UgZ2V0IGZvciB0aGUgSGFiYmFqZXQnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ1Vua25vd24nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=