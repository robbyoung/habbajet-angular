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
var HabbajetInputBoxComponent = /** @class */ (function () {
    function HabbajetInputBoxComponent(validationService) {
        this.validationService = validationService;
    }
    HabbajetInputBoxComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HabbajetInputBoxComponent.prototype, "field", void 0);
    HabbajetInputBoxComponent = __decorate([
        core_1.Component({
            selector: "habbajet-input-box",
            templateUrl: "views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.html",
            styleUrls: ["views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.css"]
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], HabbajetInputBoxComponent);
    return HabbajetInputBoxComponent;
}());
exports.HabbajetInputBoxComponent = HabbajetInputBoxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQtaW5wdXQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LWlucHV0LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFFakQsOEVBQTRFO0FBUTVFO0lBR0ksbUNBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQUU1RCw0Q0FBUSxHQUFSLGNBQVcsQ0FBQztJQUpIO1FBQVIsWUFBSyxFQUFFOzs0REFBZTtJQURkLHlCQUF5QjtRQU5yQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsNEVBQTRFO1lBQ3pGLFNBQVMsRUFBRSxDQUFDLDJFQUEyRSxDQUFDO1NBQzNGLENBQUM7eUNBS3lDLHNDQUFpQjtPQUgvQyx5QkFBeUIsQ0FNckM7SUFBRCxnQ0FBQztDQUFBLEFBTkQsSUFNQztBQU5ZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJoYWJiYWpldC1pbnB1dC1ib3hcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtaW5wdXQtYm94L2hhYmJhamV0LWlucHV0LWJveC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtaW5wdXQtYm94L2hhYmJhamV0LWlucHV0LWJveC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldElucHV0Qm94Q29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGZpZWxkOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCl7fVxyXG59Il19