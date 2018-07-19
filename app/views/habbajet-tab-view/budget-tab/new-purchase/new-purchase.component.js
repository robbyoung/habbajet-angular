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
var dialogs = require("ui/dialogs");
var validation_service_1 = require("../../../../services/validation.service");
var NewPurchaseComponent = /** @class */ (function () {
    function NewPurchaseComponent(validationService) {
        this.validationService = validationService;
    }
    NewPurchaseComponent.prototype.ngOnInit = function () { };
    NewPurchaseComponent.prototype.onNewPurchaseTap = function () {
        var _this = this;
        this.readPurchaseName()
            .then(function (purchaseName) {
            if (purchaseName) {
                _this.readPurchaseCost()
                    .then(function (purchaseCost) {
                    if (purchaseCost) {
                        _this.validationService.submitPurchase(purchaseName, purchaseCost);
                    }
                });
            }
        });
    };
    NewPurchaseComponent.prototype.readPurchaseName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promptResponse, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dialogs.prompt("What did you purchase?")];
                    case 1:
                        promptResponse = _a.sent();
                        if (!promptResponse.result) {
                            return [2 /*return*/, undefined];
                        }
                        errorMessage = this.validationService.validatePurchaseName(promptResponse.text);
                        if (errorMessage) {
                            this.showErrorMessage(errorMessage);
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, promptResponse.text];
                }
            });
        });
    };
    NewPurchaseComponent.prototype.readPurchaseCost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promptResponse, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dialogs.prompt("How much did it cost?")];
                    case 1:
                        promptResponse = _a.sent();
                        if (!promptResponse.result) {
                            return [2 /*return*/, undefined];
                        }
                        errorMessage = this.validationService.validatePurchaseCost(promptResponse.text);
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
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], NewPurchaseComponent);
    return NewPurchaseComponent;
}());
exports.NewPurchaseComponent = NewPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyxvQ0FBc0M7QUFDdEMsOEVBQTRFO0FBUTVFO0lBRUksOEJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQUU1RCx1Q0FBUSxHQUFSLGNBQVksQ0FBQztJQUVOLCtDQUFnQixHQUF2QjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2FBQ3RCLElBQUksQ0FBQyxVQUFDLFlBQVk7WUFDZixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTtxQkFDdEIsSUFBSSxDQUFDLFVBQUMsWUFBWTtvQkFDZixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUNmLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUN0RSxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVhLCtDQUFnQixHQUE5Qjs7Ozs7NEJBQzJCLHFCQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsRUFBQTs7d0JBQS9ELGNBQWMsR0FBRyxTQUE4Qzt3QkFFckUsRUFBRSxDQUFBLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDeEIsTUFBTSxnQkFBQyxTQUFTLEVBQUM7d0JBQ3JCLENBQUM7d0JBRUssWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RGLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NEJBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUNwQyxNQUFNLGdCQUFDLFNBQVMsRUFBQzt3QkFDckIsQ0FBQzt3QkFFRCxzQkFBTyxjQUFjLENBQUMsSUFBSSxFQUFDOzs7O0tBQzlCO0lBRWEsK0NBQWdCLEdBQTlCOzs7Ozs0QkFDMkIscUJBQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFBOzt3QkFBOUQsY0FBYyxHQUFHLFNBQTZDO3dCQUVwRSxFQUFFLENBQUEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUN4QixNQUFNLGdCQUFDLFNBQVMsRUFBQzt3QkFDckIsQ0FBQzt3QkFFSyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEYsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs0QkFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3BDLE1BQU0sZ0JBQUMsU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVELHNCQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUM7Ozs7S0FDOUI7SUFFTywrQ0FBZ0IsR0FBeEIsVUFBeUIsWUFBb0I7UUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSxlQUFlO1lBQ3RCLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUExRFEsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsbUVBQW1FO1lBQ2hGLFNBQVMsRUFBRSxDQUFDLGtFQUFrRSxDQUFDO1NBQ2xGLENBQUM7eUNBSXlDLHNDQUFpQjtPQUYvQyxvQkFBb0IsQ0EyRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJuZXctcHVyY2hhc2VcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvbmV3LXB1cmNoYXNlL25ldy1wdXJjaGFzZS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvbmV3LXB1cmNoYXNlL25ldy1wdXJjaGFzZS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdQdXJjaGFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBvbk5ld1B1cmNoYXNlVGFwKCkge1xyXG4gICAgICAgIHRoaXMucmVhZFB1cmNoYXNlTmFtZSgpXHJcbiAgICAgICAgLnRoZW4oKHB1cmNoYXNlTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHVyY2hhc2VOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRQdXJjaGFzZUNvc3QoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHB1cmNoYXNlQ29zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwdXJjaGFzZUNvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uU2VydmljZS5zdWJtaXRQdXJjaGFzZShwdXJjaGFzZU5hbWUsIHB1cmNoYXNlQ29zdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHJlYWRQdXJjaGFzZU5hbWUoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbXB0UmVzcG9uc2UgPSBhd2FpdCBkaWFsb2dzLnByb21wdChcIldoYXQgZGlkIHlvdSBwdXJjaGFzZT9cIik7XHJcblxyXG4gICAgICAgIGlmKCFwcm9tcHRSZXNwb25zZS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VOYW1lKHByb21wdFJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwcm9tcHRSZXNwb25zZS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVhZFB1cmNoYXNlQ29zdCgpIHtcclxuICAgICAgICBjb25zdCBwcm9tcHRSZXNwb25zZSA9IGF3YWl0IGRpYWxvZ3MucHJvbXB0KFwiSG93IG11Y2ggZGlkIGl0IGNvc3Q/XCIpO1xyXG5cclxuICAgICAgICBpZighcHJvbXB0UmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy52YWxpZGF0aW9uU2VydmljZS52YWxpZGF0ZVB1cmNoYXNlQ29zdChwcm9tcHRSZXNwb25zZS50ZXh0KTtcclxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZShlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcHJvbXB0UmVzcG9uc2UudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdJbnZhbGlkIElucHV0JyxcclxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==