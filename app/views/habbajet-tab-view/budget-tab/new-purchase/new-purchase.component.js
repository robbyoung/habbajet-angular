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
            selector: 'new-purchase',
            templateUrl: 'views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.html',
            styleUrls: ['views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.css'],
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService])
    ], NewPurchaseComponent);
    return NewPurchaseComponent;
}());
exports.NewPurchaseComponent = NewPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUUxQyw2REFBK0Q7QUFDL0QsOEVBQTRFO0FBUTVFO0lBRUksOEJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQUVyRCwrQ0FBZ0IsR0FBdkI7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTthQUN0QixJQUFJLENBQUMsVUFBQyxZQUFZO1lBQ2YsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFJLENBQUMsZ0JBQWdCLEVBQUU7cUJBQ3RCLElBQUksQ0FBQyxVQUFDLFlBQVk7b0JBQ2YsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDZixLQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDdEUsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYSwrQ0FBZ0IsR0FBOUI7Ozs7OzRCQUMyQixxQkFBTSxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUN4QyxLQUFLLEVBQUUsZUFBZTs0QkFDdEIsT0FBTyxFQUFFLHdCQUF3Qjs0QkFDakMsWUFBWSxFQUFFLFNBQVM7NEJBQ3ZCLGdCQUFnQixFQUFFLFFBQVE7eUJBQzdCLENBQUMsRUFBQTs7d0JBTEksY0FBYyxHQUFHLFNBS3JCO3dCQUVGLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLE1BQU0sZ0JBQUMsU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVLLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN0RixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzRCQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDcEMsTUFBTSxnQkFBQyxTQUFTLEVBQUM7d0JBQ3JCLENBQUM7d0JBRUQsc0JBQU8sY0FBYyxDQUFDLElBQUksRUFBQzs7OztLQUM5QjtJQUVhLCtDQUFnQixHQUE5Qjs7Ozs7NEJBQzJCLHFCQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUM7NEJBQ3hDLEtBQUssRUFBRSxlQUFlOzRCQUN0QixPQUFPLEVBQUUsdUJBQXVCOzRCQUNoQyxZQUFZLEVBQUUsU0FBUzs0QkFDdkIsZ0JBQWdCLEVBQUUsUUFBUTt5QkFDN0IsQ0FBQyxFQUFBOzt3QkFMSSxjQUFjLEdBQUcsU0FLckI7d0JBRUYsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTSxnQkFBQyxTQUFTLEVBQUM7d0JBQ3JCLENBQUM7d0JBRUssWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUM3RixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzRCQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDcEMsTUFBTSxnQkFBQyxTQUFTLEVBQUM7d0JBQ3JCLENBQUM7d0JBRUQsc0JBQU8sY0FBYyxDQUFDLElBQUksRUFBQzs7OztLQUM5QjtJQUVPLCtDQUFnQixHQUF4QixVQUF5QixZQUFvQjtRQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFFLGVBQWU7WUFDdEIsT0FBTyxFQUFFLFlBQVk7WUFDckIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWxFUSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxtRUFBbUU7WUFDaEYsU0FBUyxFQUFFLENBQUMsa0VBQWtFLENBQUM7U0FDbEYsQ0FBQzt5Q0FJeUMsc0NBQWlCO09BRi9DLG9CQUFvQixDQW1FaEM7SUFBRCwyQkFBQztDQUFBLEFBbkVELElBbUVDO0FBbkVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmV3LXB1cmNoYXNlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9uZXctcHVyY2hhc2UvbmV3LXB1cmNoYXNlLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvbmV3LXB1cmNoYXNlL25ldy1wdXJjaGFzZS5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdQdXJjaGFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gICAgcHVibGljIG9uTmV3UHVyY2hhc2VUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWFkUHVyY2hhc2VOYW1lKClcclxuICAgICAgICAudGhlbigocHVyY2hhc2VOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwdXJjaGFzZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZFB1cmNoYXNlQ29zdCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocHVyY2hhc2VDb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1cmNoYXNlQ29zdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnN1Ym1pdFB1cmNoYXNlKHB1cmNoYXNlTmFtZSwgcHVyY2hhc2VDb3N0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVhZFB1cmNoYXNlTmFtZSgpIHtcclxuICAgICAgICBjb25zdCBwcm9tcHRSZXNwb25zZSA9IGF3YWl0IGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQdXJjaGFzZSBOYW1lJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1doYXQgZGlkIHlvdSBwdXJjaGFzZT8nLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdDb25maXJtJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcHJvbXB0UmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VOYW1lKHByb21wdFJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvbXB0UmVzcG9uc2UudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHJlYWRQdXJjaGFzZUNvc3QoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbXB0UmVzcG9uc2UgPSBhd2FpdCBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUHVyY2hhc2UgQ29zdCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdIb3cgbXVjaCBkaWQgaXQgY29zdD8nLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdDb25maXJtJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcHJvbXB0UmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VDb3N0KHByb21wdFJlc3BvbnNlLnRleHQsIGZhbHNlKTtcclxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZShlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21wdFJlc3BvbnNlLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSW52YWxpZCBJbnB1dCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==