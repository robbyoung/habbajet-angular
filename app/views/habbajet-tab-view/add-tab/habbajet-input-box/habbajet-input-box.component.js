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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5wdXQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LWlucHV0LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFDakQsc0VBQW9FO0FBQ3BFLDhFQUE0RTtBQVM1RTtJQU9JLG1DQUFvQixpQkFBb0MsRUFBVSxhQUE0QjtRQUExRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDMUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7SUFDaEUsQ0FBQztJQUVNLDRDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sZ0RBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BELENBQUM7SUFDTCxDQUFDO0lBRU0scURBQWlCLEdBQXhCO1FBQ0ksSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTywrQ0FBVyxHQUFuQjtRQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssTUFBTSxFQUFFLE1BQU0sQ0FBQywwREFBMEQsQ0FBQztZQUMvRSxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMscURBQXFELENBQUM7WUFDM0UsS0FBSyxRQUFRLEVBQUUsTUFBTSxDQUFDLHVEQUF1RCxDQUFDO1lBQzlFLEtBQUssT0FBTyxFQUFFLE1BQU0sQ0FBQywrREFBK0QsQ0FBQztZQUNyRixTQUFTLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDOUIsQ0FBQztJQUNMLENBQUM7SUFFTywyQ0FBTyxHQUFmO1FBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDakIsS0FBSyxNQUFNLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUNsQyxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFCLEtBQUssUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDMUIsS0FBSyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUN6QixTQUFTLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUEvQ1E7UUFBUixZQUFLLEVBQUU7OzREQUFzQjtJQURyQix5QkFBeUI7UUFQckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLDRFQUE0RTtZQUN6RixTQUFTLEVBQUUsQ0FBQywyRUFBMkU7Z0JBQzNFLFNBQVMsQ0FBQztTQUN6QixDQUFDO3lDQVN5QyxzQ0FBaUIsRUFBeUIsOEJBQWE7T0FQckYseUJBQXlCLENBaURyQztJQUFELGdDQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGFiYmFqZXQtaW5wdXQtYm94JyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9oYWJiYWpldC1pbnB1dC1ib3gvaGFiYmFqZXQtaW5wdXQtYm94Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtaW5wdXQtYm94L2hhYmJhamV0LWlucHV0LWJveC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgJ2FwcC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldElucHV0Qm94Q29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmaWVsZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGlucHV0Q2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBrZXlib2FyZFR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBoaW50OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYnV0dG9uQ29sb3I6IHtjb2xvcjogc3RyaW5nfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSwgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25Db2xvciA9IHRoaXMudmFsaWRhdGlvblNlcnZpY2Uuc3VibWl0QnV0dG9uQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRDbGFzcyA9ICd2YWxpZCc7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZFR5cGUgPSB0aGlzLmZpZWxkID09PSAnTmFtZScgPyAnZW1haWwnIDogJ251bWJlcic7XHJcbiAgICAgICAgdGhpcy5oaW50ID0gdGhpcy5nZXRIaW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGV4dENoYW5nZShhcmdzKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgaWYgKHRleHRGaWVsZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlSW5wdXQodGhpcy5maWVsZCwgdGV4dEZpZWxkLnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0Q2xhc3MgPSBpc1ZhbGlkID8gJ3ZhbGlkJyA6ICdpbnZhbGlkJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BsYXlJbmZvRGlhbG9nKCkge1xyXG4gICAgICAgIGNvbnN0IGluZm9UZXh0ID0gdGhpcy5nZXRJbmZvVGV4dCgpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5hbGVydERpYWxvZyh0aGlzLmZpZWxkLCBpbmZvVGV4dCwgJ09LJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJbmZvVGV4dCgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZmllbGQpIHtcclxuICAgICAgICAgICAgY2FzZSAnTmFtZSc6IHJldHVybiAnVGhpcyBpcyB0aGUgdGl0bGUgdG8gYmUgZGlzcGxheWVkIGFsb25nc2lkZSB0aGUgSGFiYmFqZXQnO1xyXG4gICAgICAgICAgICBjYXNlICdWYWx1ZSc6IHJldHVybiAnVGhpcyBpcyB0aGUgbWF4aW11bSBwYXlvdXQgYW1vdW50IGZvciB5b3VyIEhhYmJhamV0JztcclxuICAgICAgICAgICAgY2FzZSAnRmFjdG9yJzogcmV0dXJuICdUaGlzIGRldGVybWluZXMgaG93IHRoZSB2YWx1ZSBpcyBkZWNyZWFzZWQgb24gZmFpbHVyZSc7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NsYWNrJzogcmV0dXJuICdUaGlzIGRldGVybWluZXMgaG93IG1hbnkgXCJmcmVlXCIgZGF5cyB5b3UgZ2V0IGZvciB0aGUgSGFiYmFqZXQnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ1Vua25vd24nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEhpbnQoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ05hbWUnOiByZXR1cm4gJ015IEhhYmJhamV0JztcclxuICAgICAgICAgICAgY2FzZSAnVmFsdWUnOiByZXR1cm4gJzUwJztcclxuICAgICAgICAgICAgY2FzZSAnRmFjdG9yJzogcmV0dXJuICcyJztcclxuICAgICAgICAgICAgY2FzZSAnU2xhY2snOiByZXR1cm4gJzAnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJz8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=