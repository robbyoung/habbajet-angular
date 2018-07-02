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
var budget_service_1 = require("../../../../services/budget.service");
var dialog_service_1 = require("../../../../services/dialog.service");
var NewPurchaseComponent = /** @class */ (function () {
    function NewPurchaseComponent(budgetService, dialogService) {
        this.budgetService = budgetService;
        this.dialogService = dialogService;
    }
    NewPurchaseComponent.prototype.ngOnInit = function () { };
    NewPurchaseComponent.prototype.onNewPurchaseTap = function () {
        // dialogs.prompt("What did you purchase?")
        // .then((name) => {
        //     if(name.result) {
        //         dialogs.prompt("How much did it cost?")
        //         .then((cost) => {
        //             if(cost.result) {
        //                 this.budgetService.makePurchase(name.text, _.toNumber(cost.text));
        //             }
        //         });
        //     }
        // });
        this.dialogService.newPurchaseDialog();
    };
    NewPurchaseComponent = __decorate([
        core_1.Component({
            selector: "new-purchase",
            templateUrl: "views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.html",
            styleUrls: ["views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.css"]
        }),
        __metadata("design:paramtypes", [budget_service_1.BudgetService, dialog_service_1.DialogService])
    ], NewPurchaseComponent);
    return NewPurchaseComponent;
}());
exports.NewPurchaseComponent = NewPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFFMUMsc0VBQW9FO0FBRXBFLHNFQUFvRTtBQVFwRTtJQUVJLDhCQUFvQixhQUE0QixFQUFVLGFBQTRCO1FBQWxFLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRTFGLHVDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRU4sK0NBQWdCLEdBQXZCO1FBQ0ksMkNBQTJDO1FBQzNDLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsa0RBQWtEO1FBQ2xELDRCQUE0QjtRQUM1QixnQ0FBZ0M7UUFDaEMscUZBQXFGO1FBQ3JGLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsUUFBUTtRQUNSLE1BQU07UUFFTixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFFM0MsQ0FBQztJQXJCUSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxtRUFBbUU7WUFDaEYsU0FBUyxFQUFFLENBQUMsa0VBQWtFLENBQUM7U0FDbEYsQ0FBQzt5Q0FJcUMsOEJBQWEsRUFBeUIsOEJBQWE7T0FGN0Usb0JBQW9CLENBc0JoQztJQUFELDJCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2J1ZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibmV3LXB1cmNoYXNlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL25ldy1wdXJjaGFzZS9uZXctcHVyY2hhc2UuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL25ldy1wdXJjaGFzZS9uZXctcHVyY2hhc2UuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3UHVyY2hhc2VDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYnVkZ2V0U2VydmljZTogQnVkZ2V0U2VydmljZSwgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge31cclxuXHJcbiAgICBwdWJsaWMgb25OZXdQdXJjaGFzZVRhcCgpIHtcclxuICAgICAgICAvLyBkaWFsb2dzLnByb21wdChcIldoYXQgZGlkIHlvdSBwdXJjaGFzZT9cIilcclxuICAgICAgICAvLyAudGhlbigobmFtZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZihuYW1lLnJlc3VsdCkge1xyXG4gICAgICAgIC8vICAgICAgICAgZGlhbG9ncy5wcm9tcHQoXCJIb3cgbXVjaCBkaWQgaXQgY29zdD9cIilcclxuICAgICAgICAvLyAgICAgICAgIC50aGVuKChjb3N0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoY29zdC5yZXN1bHQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLm1ha2VQdXJjaGFzZShuYW1lLnRleHQsIF8udG9OdW1iZXIoY29zdC50ZXh0KSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm5ld1B1cmNoYXNlRGlhbG9nKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0=