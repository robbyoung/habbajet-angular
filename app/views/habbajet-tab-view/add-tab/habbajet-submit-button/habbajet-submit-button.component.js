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
var HabbajetSubmitButtonComponent = /** @class */ (function () {
    function HabbajetSubmitButtonComponent(validationService) {
        this.validationService = validationService;
    }
    HabbajetSubmitButtonComponent.prototype.ngOnInit = function () { };
    HabbajetSubmitButtonComponent = __decorate([
        core_1.Component({
            selector: "habbajet-submit-button",
            templateUrl: "views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.html",
            styleUrls: ["views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.css"]
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], HabbajetSubmitButtonComponent);
    return HabbajetSubmitButtonComponent;
}());
exports.HabbajetSubmitButtonComponent = HabbajetSubmitButtonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtc3VibWl0LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYWJiYWpldC1zdWJtaXQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyw4RUFBNEU7QUFRNUU7SUFFSSx1Q0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBRTVELGdEQUFRLEdBQVIsY0FBVyxDQUFDO0lBSkgsNkJBQTZCO1FBTnpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFdBQVcsRUFBRSxvRkFBb0Y7WUFDakcsU0FBUyxFQUFFLENBQUMsbUZBQW1GLENBQUM7U0FDbkcsQ0FBQzt5Q0FJeUMsc0NBQWlCO09BRi9DLDZCQUE2QixDQUt6QztJQUFELG9DQUFDO0NBQUEsQUFMRCxJQUtDO0FBTFksc0VBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaGFiYmFqZXQtc3VibWl0LWJ1dHRvblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9oYWJiYWpldC1zdWJtaXQtYnV0dG9uL2hhYmJhamV0LXN1Ym1pdC1idXR0b24uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2hhYmJhamV0LXN1Ym1pdC1idXR0b24vaGFiYmFqZXQtc3VibWl0LWJ1dHRvbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldFN1Ym1pdEJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCl7fVxyXG59Il19