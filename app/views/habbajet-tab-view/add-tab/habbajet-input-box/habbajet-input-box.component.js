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
var dialogs = require("tns-core-modules/ui/dialogs/dialogs");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5wdXQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LWlucHV0LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFDakQsOEVBQTRFO0FBQzVFLDZEQUErRDtBQVMvRDtJQU1JLG1DQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRSxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ25FLENBQUM7SUFFTSxnREFBWSxHQUFuQixVQUFvQixJQUFJO1FBQ3BCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsRUFBRSxDQUFBLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFTSxxREFBaUIsR0FBeEI7UUFDSSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsUUFBUTtZQUNqQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sK0NBQVcsR0FBbkI7UUFDSSxNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsMERBQTBELENBQUM7WUFDL0UsS0FBSyxPQUFPLEVBQUUsTUFBTSxDQUFDLHFEQUFxRCxDQUFDO1lBQzNFLEtBQUssUUFBUSxFQUFFLE1BQU0sQ0FBQyx1REFBdUQsQ0FBQztZQUM5RSxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsK0RBQStELENBQUM7WUFDckYsU0FBUyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBdkNRO1FBQVIsWUFBSyxFQUFFOzs0REFBZTtJQURkLHlCQUF5QjtRQVByQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsNEVBQTRFO1lBQ3pGLFNBQVMsRUFBRSxDQUFDLDJFQUEyRTtnQkFDM0UsU0FBUyxDQUFDO1NBQ3pCLENBQUM7eUNBUXlDLHNDQUFpQjtPQU4vQyx5QkFBeUIsQ0F5Q3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzL2RpYWxvZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoYWJiYWpldC1pbnB1dC1ib3hcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtaW5wdXQtYm94L2hhYmJhamV0LWlucHV0LWJveC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtaW5wdXQtYm94L2hhYmJhamV0LWlucHV0LWJveC5jc3NcIixcclxuICAgICAgICAgICAgICAgIFwiYXBwLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0SW5wdXRCb3hDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZmllbGQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbnB1dENsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMga2V5Ym9hcmRUeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYnV0dG9uQ29sb3I6IHtjb2xvcjogc3RyaW5nfTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNvbG9yID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS5zdWJtaXRCdXR0b25Db2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlucHV0Q2xhc3MgPSAnaW52YWxpZCc7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFR5cGUgPSB0aGlzLmZpZWxkID09PSAnTmFtZScgPyAnZW1haWwnIDogJ251bWJlcic7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGV4dENoYW5nZShhcmdzKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgaWYodGV4dEZpZWxkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVJbnB1dCh0aGlzLmZpZWxkLCB0ZXh0RmllbGQudGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRDbGFzcyA9IGlzVmFsaWQgPyAndmFsaWQnIDogJ2ludmFsaWQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheUluZm9EaWFsb2coKSB7XHJcbiAgICAgICAgY29uc3QgaW5mb1RleHQgPSB0aGlzLmdldEluZm9UZXh0KCk7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmZpZWxkLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBpbmZvVGV4dCxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW5mb1RleHQoKSB7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMuZmllbGQpIHtcclxuICAgICAgICAgICAgY2FzZSAnTmFtZSc6IHJldHVybiAnVGhpcyBpcyB0aGUgdGl0bGUgdG8gYmUgZGlzcGxheWVkIGFsb25nc2lkZSB0aGUgSGFiYmFqZXQnO1xyXG4gICAgICAgICAgICBjYXNlICdWYWx1ZSc6IHJldHVybiAnVGhpcyBpcyB0aGUgbWF4aW11bSBwYXlvdXQgYW1vdW50IGZvciB5b3VyIEhhYmJhamV0JztcclxuICAgICAgICAgICAgY2FzZSAnRmFjdG9yJzogcmV0dXJuICdUaGlzIGRldGVybWluZXMgaG93IHRoZSB2YWx1ZSBpcyBkZWNyZWFzZWQgb24gZmFpbHVyZSc7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NsYWNrJzogcmV0dXJuICdUaGlzIGRldGVybWluZXMgaG93IG1hbnkgXCJmcmVlXCIgZGF5cyB5b3UgZ2V0IGZvciB0aGUgSGFiYmFqZXQnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ1Vua25vd24nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==