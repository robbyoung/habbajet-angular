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
var dialogs = require("tns-core-modules/ui/dialogs/dialogs");
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
                    case 0: return [4 /*yield*/, dialogs.prompt({
                            title: 'Purchase Name',
                            message: 'What did you purchase?',
                            okButtonText: 'Confirm',
                            cancelButtonText: 'Cancel',
                        })];
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
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], NewPurchaseComponent);
    return NewPurchaseComponent;
}());
exports.NewPurchaseComponent = NewPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyw2REFBK0Q7QUFDL0QsOEVBQTRFO0FBUTVFO0lBRUksOEJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQUU1RCx1Q0FBUSxHQUFSLGNBQVksQ0FBQztJQUVOLCtDQUFnQixHQUF2QjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2FBQ3RCLElBQUksQ0FBQyxVQUFDLFlBQVk7WUFDZixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTtxQkFDdEIsSUFBSSxDQUFDLFVBQUMsWUFBWTtvQkFDZixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUNmLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUN0RSxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVhLCtDQUFnQixHQUE5Qjs7Ozs7NEJBQzJCLHFCQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUM7NEJBQ3hDLEtBQUssRUFBRSxlQUFlOzRCQUN0QixPQUFPLEVBQUUsd0JBQXdCOzRCQUNqQyxZQUFZLEVBQUUsU0FBUzs0QkFDdkIsZ0JBQWdCLEVBQUUsUUFBUTt5QkFDN0IsQ0FBQyxFQUFBOzt3QkFMSSxjQUFjLEdBQUcsU0FLckI7d0JBRUYsRUFBRSxDQUFBLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDeEIsTUFBTSxnQkFBQyxTQUFTLEVBQUM7d0JBQ3JCLENBQUM7d0JBRUssWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RGLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NEJBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUNwQyxNQUFNLGdCQUFDLFNBQVMsRUFBQzt3QkFDckIsQ0FBQzt3QkFFRCxzQkFBTyxjQUFjLENBQUMsSUFBSSxFQUFDOzs7O0tBQzlCO0lBRWEsK0NBQWdCLEdBQTlCOzs7Ozs0QkFDMkIscUJBQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDeEMsS0FBSyxFQUFFLGVBQWU7NEJBQ3RCLE9BQU8sRUFBRSx1QkFBdUI7NEJBQ2hDLFlBQVksRUFBRSxTQUFTOzRCQUN2QixnQkFBZ0IsRUFBRSxRQUFRO3lCQUM3QixDQUFDLEVBQUE7O3dCQUxJLGNBQWMsR0FBRyxTQUtyQjt3QkFFRixFQUFFLENBQUEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUN4QixNQUFNLGdCQUFDLFNBQVMsRUFBQzt3QkFDckIsQ0FBQzt3QkFFSyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQzdGLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NEJBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUNwQyxNQUFNLGdCQUFDLFNBQVMsRUFBQzt3QkFDckIsQ0FBQzt3QkFFRCxzQkFBTyxjQUFjLENBQUMsSUFBSSxFQUFDOzs7O0tBQzlCO0lBRU8sK0NBQWdCLEdBQXhCLFVBQXlCLFlBQW9CO1FBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUUsZUFBZTtZQUN0QixPQUFPLEVBQUUsWUFBWTtZQUNyQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUE7SUFDTixDQUFDO0lBcEVRLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLG1FQUFtRTtZQUNoRixTQUFTLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQztTQUNsRixDQUFDO3lDQUl5QyxzQ0FBaUI7T0FGL0Msb0JBQW9CLENBcUVoQztJQUFELDJCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncy9kaWFsb2dzJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5ldy1wdXJjaGFzZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9uZXctcHVyY2hhc2UvbmV3LXB1cmNoYXNlLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9uZXctcHVyY2hhc2UvbmV3LXB1cmNoYXNlLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld1B1cmNoYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgcHVibGljIG9uTmV3UHVyY2hhc2VUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWFkUHVyY2hhc2VOYW1lKClcclxuICAgICAgICAudGhlbigocHVyY2hhc2VOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwdXJjaGFzZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZFB1cmNoYXNlQ29zdCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocHVyY2hhc2VDb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1cmNoYXNlQ29zdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnN1Ym1pdFB1cmNoYXNlKHB1cmNoYXNlTmFtZSwgcHVyY2hhc2VDb3N0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVhZFB1cmNoYXNlTmFtZSgpIHtcclxuICAgICAgICBjb25zdCBwcm9tcHRSZXNwb25zZSA9IGF3YWl0IGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQdXJjaGFzZSBOYW1lJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1doYXQgZGlkIHlvdSBwdXJjaGFzZT8nLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdDb25maXJtJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKCFwcm9tcHRSZXNwb25zZS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VOYW1lKHByb21wdFJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwcm9tcHRSZXNwb25zZS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVhZFB1cmNoYXNlQ29zdCgpIHtcclxuICAgICAgICBjb25zdCBwcm9tcHRSZXNwb25zZSA9IGF3YWl0IGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQdXJjaGFzZSBDb3N0JyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0hvdyBtdWNoIGRpZCBpdCBjb3N0PycsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0NvbmZpcm0nLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoIXByb21wdFJlc3BvbnNlLnJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMudmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVQdXJjaGFzZUNvc3QocHJvbXB0UmVzcG9uc2UudGV4dCwgZmFsc2UpO1xyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwcm9tcHRSZXNwb25zZS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0Vycm9yTWVzc2FnZShlcnJvck1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ludmFsaWQgSW5wdXQnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ09LJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19