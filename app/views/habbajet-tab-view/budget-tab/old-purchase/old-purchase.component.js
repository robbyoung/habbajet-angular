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
var budget_service_1 = require("../../../../services/budget.service");
var validation_service_1 = require("../../../../services/validation.service");
var OldPurchaseComponent = /** @class */ (function () {
    function OldPurchaseComponent(validationService, budgetService) {
        this.validationService = validationService;
        this.budgetService = budgetService;
    }
    OldPurchaseComponent.prototype.onPurchaseTap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var correctionNeeded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dialogs.confirm({
                            title: 'Review Purchase',
                            message: this.row.name + "\n" + this.row.cost + "\n" + this.row.absoluteDateString,
                            okButtonText: 'Edit',
                            cancelButtonText: 'OK',
                        })];
                    case 1:
                        correctionNeeded = _a.sent();
                        if (correctionNeeded) {
                            this.onCorrectPurchaseTap();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OldPurchaseComponent.prototype.onCorrectPurchaseTap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newName, newCost;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readPurchaseName()];
                    case 1:
                        newName = _a.sent();
                        if (!newName) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.readPurchaseCost()];
                    case 2:
                        newCost = _a.sent();
                        if (newCost) {
                            this.budgetService.correctPurchase(this.row.date, newName, newCost);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OldPurchaseComponent.prototype.readPurchaseName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promptResponse, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dialogs.prompt({
                            title: 'Purchase Name',
                            message: 'What did you purchase?',
                            defaultText: this.row.name,
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
    OldPurchaseComponent.prototype.readPurchaseCost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promptResponse, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dialogs.prompt({
                            title: 'Purchase Cost',
                            message: 'How much did it cost?\n(Set to 0 to delete)',
                            defaultText: this.row.cost.substring(1),
                            okButtonText: 'Confirm',
                            cancelButtonText: 'Cancel',
                        })];
                    case 1:
                        promptResponse = _a.sent();
                        if (!promptResponse.result) {
                            return [2 /*return*/, undefined];
                        }
                        errorMessage = this.validationService.validatePurchaseCost(promptResponse.text, true);
                        if (errorMessage) {
                            this.showErrorMessage(errorMessage);
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, promptResponse.text];
                }
            });
        });
    };
    OldPurchaseComponent.prototype.showErrorMessage = function (errorMessage) {
        dialogs.alert({
            title: 'Invalid Input',
            message: errorMessage,
            okButtonText: 'OK',
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OldPurchaseComponent.prototype, "row", void 0);
    OldPurchaseComponent = __decorate([
        core_1.Component({
            selector: 'old-purchase',
            templateUrl: 'views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.html',
            styleUrls: ['views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.css'],
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService, budget_service_1.BudgetService])
    ], OldPurchaseComponent);
    return OldPurchaseComponent;
}());
exports.OldPurchaseComponent = OldPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2xkLXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9sZC1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCw2REFBK0Q7QUFDL0Qsc0VBQWtGO0FBQ2xGLDhFQUE0RTtBQVE1RTtJQUlJLDhCQUFvQixpQkFBb0MsRUFBVSxhQUE0QjtRQUExRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRXJGLDRDQUFhLEdBQTFCOzs7Ozs0QkFDNkIscUJBQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQzs0QkFDM0MsS0FBSyxFQUFFLGlCQUFpQjs0QkFDeEIsT0FBTyxFQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQW9COzRCQUM3RSxZQUFZLEVBQUUsTUFBTTs0QkFDcEIsZ0JBQWdCLEVBQUUsSUFBSTt5QkFDekIsQ0FBQyxFQUFBOzt3QkFMSSxnQkFBZ0IsR0FBRyxTQUt2Qjt3QkFDRixFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7NEJBQ25CLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO3dCQUNoQyxDQUFDOzs7OztLQUNKO0lBRWEsbURBQW9CLEdBQWxDOzs7Ozs0QkFDb0IscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUF2QyxPQUFPLEdBQUcsU0FBNkI7NkJBQ3pDLE9BQU8sRUFBUCx3QkFBTzt3QkFDUyxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQXZDLE9BQU8sR0FBRyxTQUE2Qjt3QkFDN0MsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDVixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQ3hFLENBQUM7Ozs7OztLQUVSO0lBRWEsK0NBQWdCLEdBQTlCOzs7Ozs0QkFDMkIscUJBQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQzs0QkFDeEMsS0FBSyxFQUFFLGVBQWU7NEJBQ3RCLE9BQU8sRUFBRSx3QkFBd0I7NEJBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUk7NEJBQzFCLFlBQVksRUFBRSxTQUFTOzRCQUN2QixnQkFBZ0IsRUFBRSxRQUFRO3lCQUM3QixDQUFDLEVBQUE7O3dCQU5JLGNBQWMsR0FBRyxTQU1yQjt3QkFFRixFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixNQUFNLGdCQUFDLFNBQVMsRUFBQzt3QkFDckIsQ0FBQzt3QkFFSyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEYsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs0QkFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3BDLE1BQU0sZ0JBQUMsU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVELHNCQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUM7Ozs7S0FDOUI7SUFFYSwrQ0FBZ0IsR0FBOUI7Ozs7OzRCQUMyQixxQkFBTSxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUN4QyxLQUFLLEVBQUUsZUFBZTs0QkFDdEIsT0FBTyxFQUFFLDZDQUE2Qzs0QkFDdEQsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZDLFlBQVksRUFBRSxTQUFTOzRCQUN2QixnQkFBZ0IsRUFBRSxRQUFRO3lCQUM3QixDQUFDLEVBQUE7O3dCQU5JLGNBQWMsR0FBRyxTQU1yQjt3QkFDRixFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixNQUFNLGdCQUFDLFNBQVMsRUFBQzt3QkFDckIsQ0FBQzt3QkFFSyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzVGLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NEJBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUNwQyxNQUFNLGdCQUFDLFNBQVMsRUFBQzt3QkFDckIsQ0FBQzt3QkFFRCxzQkFBTyxjQUFjLENBQUMsSUFBSSxFQUFDOzs7O0tBQzlCO0lBRU8sK0NBQWdCLEdBQXhCLFVBQXlCLFlBQW9CO1FBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUUsZUFBZTtZQUN0QixPQUFPLEVBQUUsWUFBWTtZQUNyQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0VRO1FBQVIsWUFBSyxFQUFFOztxREFBMEI7SUFGekIsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsbUVBQW1FO1lBQ2hGLFNBQVMsRUFBRSxDQUFDLGtFQUFrRSxDQUFDO1NBQ2xGLENBQUM7eUNBTXlDLHNDQUFpQixFQUF5Qiw4QkFBYTtPQUpyRixvQkFBb0IsQ0E4RWhDO0lBQUQsMkJBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlLCBCdWRnZXRUYWJSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9idWRnZXQuc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvbGQtcHVyY2hhc2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL29sZC1wdXJjaGFzZS9vbGQtcHVyY2hhc2UuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsndmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9vbGQtcHVyY2hhc2Uvb2xkLXB1cmNoYXNlLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE9sZFB1cmNoYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBwdWJsaWMgcm93OiBCdWRnZXRUYWJSb3c7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UsIHByaXZhdGUgYnVkZ2V0U2VydmljZTogQnVkZ2V0U2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgb25QdXJjaGFzZVRhcCgpIHtcclxuICAgICAgICBjb25zdCBjb3JyZWN0aW9uTmVlZGVkID0gYXdhaXQgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdSZXZpZXcgUHVyY2hhc2UnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBgJHt0aGlzLnJvdy5uYW1lfVxcbiR7dGhpcy5yb3cuY29zdH1cXG4ke3RoaXMucm93LmFic29sdXRlRGF0ZVN0cmluZ31gLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdFZGl0JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ09LJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoY29ycmVjdGlvbk5lZWRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29ycmVjdFB1cmNoYXNlVGFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgb25Db3JyZWN0UHVyY2hhc2VUYXAoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IGF3YWl0IHRoaXMucmVhZFB1cmNoYXNlTmFtZSgpO1xyXG4gICAgICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0Nvc3QgPSBhd2FpdCB0aGlzLnJlYWRQdXJjaGFzZUNvc3QoKTtcclxuICAgICAgICAgICAgaWYgKG5ld0Nvc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5jb3JyZWN0UHVyY2hhc2UodGhpcy5yb3cuZGF0ZSwgbmV3TmFtZSwgbmV3Q29zdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyByZWFkUHVyY2hhc2VOYW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHByb21wdFJlc3BvbnNlID0gYXdhaXQgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1B1cmNoYXNlIE5hbWUnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnV2hhdCBkaWQgeW91IHB1cmNoYXNlPycsXHJcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiB0aGlzLnJvdy5uYW1lLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdDb25maXJtJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcHJvbXB0UmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VOYW1lKHByb21wdFJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvbXB0UmVzcG9uc2UudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHJlYWRQdXJjaGFzZUNvc3QoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbXB0UmVzcG9uc2UgPSBhd2FpdCBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUHVyY2hhc2UgQ29zdCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdIb3cgbXVjaCBkaWQgaXQgY29zdD9cXG4oU2V0IHRvIDAgdG8gZGVsZXRlKScsXHJcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiB0aGlzLnJvdy5jb3N0LnN1YnN0cmluZygxKSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnQ29uZmlybScsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghcHJvbXB0UmVzcG9uc2UucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VDb3N0KHByb21wdFJlc3BvbnNlLnRleHQsIHRydWUpO1xyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvbXB0UmVzcG9uc2UudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdJbnZhbGlkIElucHV0JyxcclxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdPSycsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19