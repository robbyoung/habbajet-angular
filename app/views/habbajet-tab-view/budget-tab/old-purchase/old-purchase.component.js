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
var budget_service_1 = require("../../../../services/budget.service");
var dialogs = require("tns-core-modules/ui/dialogs/dialogs");
var validation_service_1 = require("../../../../services/validation.service");
var OldPurchaseComponent = /** @class */ (function () {
    function OldPurchaseComponent(validationService, budgetService) {
        this.validationService = validationService;
        this.budgetService = budgetService;
    }
    OldPurchaseComponent.prototype.ngOnInit = function () { };
    OldPurchaseComponent.prototype.onPurchaseTap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var correctionNeeded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dialogs.confirm({
                            title: 'Review Purchase',
                            message: this.row.name + "\n" + this.row.cost,
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
    OldPurchaseComponent.prototype.readPurchaseCost = function () {
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
            selector: "old-purchase",
            templateUrl: "views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.html",
            styleUrls: ["views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.css"]
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService, budget_service_1.BudgetService])
    ], OldPurchaseComponent);
    return OldPurchaseComponent;
}());
exports.OldPurchaseComponent = OldPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2xkLXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9sZC1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCxzRUFBa0Y7QUFDbEYsNkRBQStEO0FBQy9ELDhFQUE0RTtBQVE1RTtJQUlJLDhCQUFvQixpQkFBb0MsRUFBVSxhQUE0QjtRQUExRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRWxHLHVDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRUEsNENBQWEsR0FBMUI7Ozs7OzRCQUM2QixxQkFBTSxPQUFPLENBQUMsT0FBTyxDQUFDOzRCQUMzQyxLQUFLLEVBQUUsaUJBQWlCOzRCQUN4QixPQUFPLEVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFNOzRCQUM3QyxZQUFZLEVBQUUsTUFBTTs0QkFDcEIsZ0JBQWdCLEVBQUUsSUFBSTt5QkFDekIsQ0FBQyxFQUFBOzt3QkFMSSxnQkFBZ0IsR0FBRyxTQUt2Qjt3QkFDRixFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7NEJBQ25CLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO3dCQUNoQyxDQUFDOzs7OztLQUNKO0lBRWEsbURBQW9CLEdBQWxDOzs7Ozs0QkFDb0IscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUF2QyxPQUFPLEdBQUcsU0FBNkI7NkJBQ3pDLE9BQU8sRUFBUCx3QkFBTzt3QkFDUyxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQXZDLE9BQU8sR0FBRyxTQUE2Qjt3QkFDN0MsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDVixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQ3hFLENBQUM7Ozs7OztLQUVSO0lBRWEsK0NBQWdCLEdBQTlCOzs7Ozs0QkFDMkIscUJBQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFBOzt3QkFBL0QsY0FBYyxHQUFHLFNBQThDO3dCQUVyRSxFQUFFLENBQUEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUN4QixNQUFNLGdCQUFDLFNBQVMsRUFBQzt3QkFDckIsQ0FBQzt3QkFFSyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEYsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs0QkFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3BDLE1BQU0sZ0JBQUMsU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVELHNCQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUM7Ozs7S0FDOUI7SUFFYSwrQ0FBZ0IsR0FBOUI7Ozs7OzRCQUMyQixxQkFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUE7O3dCQUE5RCxjQUFjLEdBQUcsU0FBNkM7d0JBRXBFLEVBQUUsQ0FBQSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLE1BQU0sZ0JBQUMsU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVLLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN0RixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzRCQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDcEMsTUFBTSxnQkFBQyxTQUFTLEVBQUM7d0JBQ3JCLENBQUM7d0JBRUQsc0JBQU8sY0FBYyxDQUFDLElBQUksRUFBQzs7OztLQUM5QjtJQUVPLCtDQUFnQixHQUF4QixVQUF5QixZQUFvQjtRQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFFLGVBQWU7WUFDdEIsT0FBTyxFQUFFLFlBQVk7WUFDckIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWxFUTtRQUFSLFlBQUssRUFBRTs7cURBQW1CO0lBRmxCLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLG1FQUFtRTtZQUNoRixTQUFTLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQztTQUNsRixDQUFDO3lDQU15QyxzQ0FBaUIsRUFBeUIsOEJBQWE7T0FKckYsb0JBQW9CLENBcUVoQztJQUFELDJCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJ1ZGdldFRhYlJvdywgQnVkZ2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9idWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncy9kaWFsb2dzJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm9sZC1wdXJjaGFzZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9vbGQtcHVyY2hhc2Uvb2xkLXB1cmNoYXNlLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1widmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9vbGQtcHVyY2hhc2Uvb2xkLXB1cmNoYXNlLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE9sZFB1cmNoYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSByb3c6IEJ1ZGdldFRhYlJvdztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSwgcHJpdmF0ZSBidWRnZXRTZXJ2aWNlOiBCdWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge31cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgb25QdXJjaGFzZVRhcCgpIHtcclxuICAgICAgICBjb25zdCBjb3JyZWN0aW9uTmVlZGVkID0gYXdhaXQgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdSZXZpZXcgUHVyY2hhc2UnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBgJHt0aGlzLnJvdy5uYW1lfVxcbiR7dGhpcy5yb3cuY29zdH1gLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdFZGl0JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ09LJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoY29ycmVjdGlvbk5lZWRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29ycmVjdFB1cmNoYXNlVGFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgb25Db3JyZWN0UHVyY2hhc2VUYXAoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IGF3YWl0IHRoaXMucmVhZFB1cmNoYXNlTmFtZSgpXHJcbiAgICAgICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29zdCA9IGF3YWl0IHRoaXMucmVhZFB1cmNoYXNlQ29zdCgpXHJcbiAgICAgICAgICAgIGlmIChuZXdDb3N0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2UuY29ycmVjdFB1cmNoYXNlKHRoaXMucm93LmRhdGUsIG5ld05hbWUsIG5ld0Nvc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVhZFB1cmNoYXNlTmFtZSgpIHtcclxuICAgICAgICBjb25zdCBwcm9tcHRSZXNwb25zZSA9IGF3YWl0IGRpYWxvZ3MucHJvbXB0KFwiV2hhdCBkaWQgeW91IHB1cmNoYXNlP1wiKTtcclxuXHJcbiAgICAgICAgaWYoIXByb21wdFJlc3BvbnNlLnJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMudmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVQdXJjaGFzZU5hbWUocHJvbXB0UmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHByb21wdFJlc3BvbnNlLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyByZWFkUHVyY2hhc2VDb3N0KCkge1xyXG4gICAgICAgIGNvbnN0IHByb21wdFJlc3BvbnNlID0gYXdhaXQgZGlhbG9ncy5wcm9tcHQoXCJIb3cgbXVjaCBkaWQgaXQgY29zdD9cIik7XHJcblxyXG4gICAgICAgIGlmKCFwcm9tcHRSZXNwb25zZS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VDb3N0KHByb21wdFJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwcm9tcHRSZXNwb25zZS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd0Vycm9yTWVzc2FnZShlcnJvck1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ludmFsaWQgSW5wdXQnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ09LJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19