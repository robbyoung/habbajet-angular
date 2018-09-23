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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLGdFQUEwRTtBQVExRTtJQUdJLHdCQUFhLGFBQTRCO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQzFELENBQUM7SUFMUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBSzhCLDhCQUFhO09BSGhDLGNBQWMsQ0FNMUI7SUFBRCxxQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSwgTW9kYWxUeXBlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJtb2RhbFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbW9kYWwvbW9kYWwuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9tb2RhbC9tb2RhbC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgbW9kYWxUeXBlT2JqZWN0OiB7IHR5cGU6IE1vZGFsVHlwZXMgfTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IgKGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLm1vZGFsVHlwZU9iamVjdCA9IGRpYWxvZ1NlcnZpY2UubW9kYWxTdGF0ZU9iamVjdDtcclxuICAgIH1cclxufSJdfQ==