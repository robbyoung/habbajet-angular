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
var dialog_service_1 = require("../../services/dialog.service");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(dialogService) {
        this.modalTypeObject = dialogService.modalStateObject;
    }
    ModalComponent.prototype.onModalTap = function () { };
    ModalComponent = __decorate([
        core_1.Component({
            selector: "modal",
            templateUrl: "views/modal/modal.html",
            styleUrls: ["views/modal/modal.css"]
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLGdFQUEwRTtBQVExRTtJQUdJLHdCQUFhLGFBQTRCO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQzFELENBQUM7SUFFRCxtQ0FBVSxHQUFWLGNBQWMsQ0FBQztJQVBOLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FLOEIsOEJBQWE7T0FIaEMsY0FBYyxDQVExQjtJQUFELHFCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlLCBNb2RhbFR5cGVzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1vZGFsXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9tb2RhbC9tb2RhbC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL21vZGFsL21vZGFsLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBtb2RhbFR5cGVPYmplY3Q6IHsgdHlwZTogTW9kYWxUeXBlcyB9O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciAoZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubW9kYWxUeXBlT2JqZWN0ID0gZGlhbG9nU2VydmljZS5tb2RhbFN0YXRlT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW9kYWxUYXAoKSB7fVxyXG59Il19