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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialog_service_1 = require("../../../../services/dialog.service");
var dialogs = require("tns-core-modules/ui/dialogs/dialogs");
var validation_service_1 = require("../../../../services/validation.service");
var NewPurchaseComponent = /** @class */ (function () {
    function NewPurchaseComponent(validationService, dialogService) {
        this.validationService = validationService;
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
        // return promptResponse.text;
    };
    NewPurchaseComponent.prototype.readPurchaseCost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promptResponse, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dialogs.prompt({
                            title: 'Purchase Cost',
                            message: 'How much did it cost?',
                            okButtonText: 'Confirm',
                            cancelButtonText: 'Cancel',
                        })];
                    case 1:
                        promptResponse = _a.sent();
                        if (!promptResponse.result) {
                            return [2 /*return*/, undefined];
                        }
                        errorMessage = this.validationService.validatePurchaseCost(promptResponse.text, false);
                        if (errorMessage) {
                            this.showErrorMessage(errorMessage);
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, promptResponse.text];
                }
            });
        });
    };
    NewPurchaseComponent.prototype.showErrorMessage = function (errorMessage) {
        dialogs.alert({
            title: 'Invalid Input',
            message: errorMessage,
            okButtonText: 'OK',
        });
    };
    NewPurchaseComponent = __decorate([
        core_1.Component({
            selector: "new-purchase",
            templateUrl: "views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.html",
            styleUrls: ["views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.css"]
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService, dialog_service_1.DialogService])
    ], NewPurchaseComponent);
    return NewPurchaseComponent;
}());
exports.NewPurchaseComponent = NewPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUcxQyxzRUFBb0U7QUFDcEUsNkRBQStEO0FBQy9ELDhFQUE0RTtBQVE1RTtJQUVJLDhCQUFvQixpQkFBb0MsRUFBVSxhQUE0QjtRQUExRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRWxHLHVDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRU4sK0NBQWdCLEdBQXZCO1FBQ0ksMkNBQTJDO1FBQzNDLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsa0RBQWtEO1FBQ2xELDRCQUE0QjtRQUM1QixnQ0FBZ0M7UUFDaEMscUZBQXFGO1FBQ3JGLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsUUFBUTtRQUNSLE1BQU07UUFFTixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFdkMsOEJBQThCO0lBQ2xDLENBQUM7SUFFYSwrQ0FBZ0IsR0FBOUI7Ozs7OzRCQUMyQixxQkFBTSxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUN4QyxLQUFLLEVBQUUsZUFBZTs0QkFDdEIsT0FBTyxFQUFFLHVCQUF1Qjs0QkFDaEMsWUFBWSxFQUFFLFNBQVM7NEJBQ3ZCLGdCQUFnQixFQUFFLFFBQVE7eUJBQzdCLENBQUMsRUFBQTs7d0JBTEksY0FBYyxHQUFHLFNBS3JCO3dCQUVGLEVBQUUsQ0FBQSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLE1BQU0sZ0JBQUMsU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVLLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDN0YsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs0QkFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3BDLE1BQU0sZ0JBQUMsU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVELHNCQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUM7Ozs7S0FDOUI7SUFFTywrQ0FBZ0IsR0FBeEIsVUFBeUIsWUFBb0I7UUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSxlQUFlO1lBQ3RCLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFuRFEsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsbUVBQW1FO1lBQ2hGLFNBQVMsRUFBRSxDQUFDLGtFQUFrRSxDQUFDO1NBQ2xGLENBQUM7eUNBSXlDLHNDQUFpQixFQUF5Qiw4QkFBYTtPQUZyRixvQkFBb0IsQ0FvRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncy9kaWFsb2dzJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5ldy1wdXJjaGFzZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9uZXctcHVyY2hhc2UvbmV3LXB1cmNoYXNlLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9uZXctcHVyY2hhc2UvbmV3LXB1cmNoYXNlLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld1B1cmNoYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSwgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge31cclxuXHJcbiAgICBwdWJsaWMgb25OZXdQdXJjaGFzZVRhcCgpIHtcclxuICAgICAgICAvLyBkaWFsb2dzLnByb21wdChcIldoYXQgZGlkIHlvdSBwdXJjaGFzZT9cIilcclxuICAgICAgICAvLyAudGhlbigobmFtZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZihuYW1lLnJlc3VsdCkge1xyXG4gICAgICAgIC8vICAgICAgICAgZGlhbG9ncy5wcm9tcHQoXCJIb3cgbXVjaCBkaWQgaXQgY29zdD9cIilcclxuICAgICAgICAvLyAgICAgICAgIC50aGVuKChjb3N0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoY29zdC5yZXN1bHQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLm1ha2VQdXJjaGFzZShuYW1lLnRleHQsIF8udG9OdW1iZXIoY29zdC50ZXh0KSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm5ld1B1cmNoYXNlRGlhbG9nKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmV0dXJuIHByb21wdFJlc3BvbnNlLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyByZWFkUHVyY2hhc2VDb3N0KCkge1xyXG4gICAgICAgIGNvbnN0IHByb21wdFJlc3BvbnNlID0gYXdhaXQgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1B1cmNoYXNlIENvc3QnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnSG93IG11Y2ggZGlkIGl0IGNvc3Q/JyxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnQ29uZmlybScsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZighcHJvbXB0UmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZVB1cmNoYXNlQ29zdChwcm9tcHRSZXNwb25zZS50ZXh0LCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHByb21wdFJlc3BvbnNlLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSW52YWxpZCBJbnB1dCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXX0=