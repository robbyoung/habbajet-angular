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
            selector: "old-purchase",
            templateUrl: "views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.html",
            styleUrls: ["views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.css"]
        }),
        __metadata("design:paramtypes", [validation_service_1.ValidationService, budget_service_1.BudgetService])
    ], OldPurchaseComponent);
    return OldPurchaseComponent;
}());
exports.OldPurchaseComponent = OldPurchaseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2xkLXB1cmNoYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9sZC1wdXJjaGFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFpRDtBQUNqRCxzRUFBa0Y7QUFDbEYsNkRBQStEO0FBQy9ELDhFQUE0RTtBQVE1RTtJQUlJLDhCQUFvQixpQkFBb0MsRUFBVSxhQUE0QjtRQUExRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRWxHLHVDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRUEsNENBQWEsR0FBMUI7Ozs7OzRCQUM2QixxQkFBTSxPQUFPLENBQUMsT0FBTyxDQUFDOzRCQUMzQyxLQUFLLEVBQUUsaUJBQWlCOzRCQUN4QixPQUFPLEVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBb0I7NEJBQzdFLFlBQVksRUFBRSxNQUFNOzRCQUNwQixnQkFBZ0IsRUFBRSxJQUFJO3lCQUN6QixDQUFDLEVBQUE7O3dCQUxJLGdCQUFnQixHQUFHLFNBS3ZCO3dCQUNGLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzs0QkFDbkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7d0JBQ2hDLENBQUM7Ozs7O0tBQ0o7SUFFYSxtREFBb0IsR0FBbEM7Ozs7OzRCQUNvQixxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQXZDLE9BQU8sR0FBRyxTQUE2Qjs2QkFDekMsT0FBTyxFQUFQLHdCQUFPO3dCQUNTLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBdkMsT0FBTyxHQUFHLFNBQTZCO3dCQUM3QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDeEUsQ0FBQzs7Ozs7O0tBRVI7SUFFYSwrQ0FBZ0IsR0FBOUI7Ozs7OzRCQUMyQixxQkFBTSxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUN4QyxLQUFLLEVBQUUsZUFBZTs0QkFDdEIsT0FBTyxFQUFFLHdCQUF3Qjs0QkFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTs0QkFDMUIsWUFBWSxFQUFFLFNBQVM7NEJBQ3ZCLGdCQUFnQixFQUFFLFFBQVE7eUJBQzdCLENBQUMsRUFBQTs7d0JBTkksY0FBYyxHQUFHLFNBTXJCO3dCQUdGLEVBQUUsQ0FBQSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLE1BQU0sZ0JBQUMsU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVLLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN0RixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzRCQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDcEMsTUFBTSxnQkFBQyxTQUFTLEVBQUM7d0JBQ3JCLENBQUM7d0JBRUQsc0JBQU8sY0FBYyxDQUFDLElBQUksRUFBQzs7OztLQUM5QjtJQUVhLCtDQUFnQixHQUE5Qjs7Ozs7NEJBQzJCLHFCQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUM7NEJBQ3hDLEtBQUssRUFBRSxlQUFlOzRCQUN0QixPQUFPLEVBQUUsNkNBQTZDOzRCQUN0RCxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDdkMsWUFBWSxFQUFFLFNBQVM7NEJBQ3ZCLGdCQUFnQixFQUFFLFFBQVE7eUJBQzdCLENBQUMsRUFBQTs7d0JBTkksY0FBYyxHQUFHLFNBTXJCO3dCQUNGLEVBQUUsQ0FBQSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLE1BQU0sZ0JBQUMsU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVLLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDNUYsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs0QkFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3BDLE1BQU0sZ0JBQUMsU0FBUyxFQUFDO3dCQUNyQixDQUFDO3dCQUVELHNCQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUM7Ozs7S0FDOUI7SUFFTywrQ0FBZ0IsR0FBeEIsVUFBeUIsWUFBb0I7UUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSxlQUFlO1lBQ3RCLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE5RVE7UUFBUixZQUFLLEVBQUU7O3FEQUFtQjtJQUZsQixvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxtRUFBbUU7WUFDaEYsU0FBUyxFQUFFLENBQUMsa0VBQWtFLENBQUM7U0FDbEYsQ0FBQzt5Q0FNeUMsc0NBQWlCLEVBQXlCLDhCQUFhO09BSnJGLG9CQUFvQixDQWlGaEM7SUFBRCwyQkFBQztDQUFBLEFBakZELElBaUZDO0FBakZZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCdWRnZXRUYWJSb3csIEJ1ZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MvZGlhbG9ncyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJvbGQtcHVyY2hhc2VcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvb2xkLXB1cmNoYXNlL29sZC1wdXJjaGFzZS5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvb2xkLXB1cmNoYXNlL29sZC1wdXJjaGFzZS5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPbGRQdXJjaGFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgcm93OiBCdWRnZXRUYWJSb3c7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UsIHByaXZhdGUgYnVkZ2V0U2VydmljZTogQnVkZ2V0U2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG9uUHVyY2hhc2VUYXAoKSB7XHJcbiAgICAgICAgY29uc3QgY29ycmVjdGlvbk5lZWRlZCA9IGF3YWl0IGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUmV2aWV3IFB1cmNoYXNlJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogYCR7dGhpcy5yb3cubmFtZX1cXG4ke3RoaXMucm93LmNvc3R9XFxuJHt0aGlzLnJvdy5hYnNvbHV0ZURhdGVTdHJpbmd9YCxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnRWRpdCcsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdPSycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGNvcnJlY3Rpb25OZWVkZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvcnJlY3RQdXJjaGFzZVRhcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIG9uQ29ycmVjdFB1cmNoYXNlVGFwKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld05hbWUgPSBhd2FpdCB0aGlzLnJlYWRQdXJjaGFzZU5hbWUoKVxyXG4gICAgICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0Nvc3QgPSBhd2FpdCB0aGlzLnJlYWRQdXJjaGFzZUNvc3QoKVxyXG4gICAgICAgICAgICBpZiAobmV3Q29zdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLmNvcnJlY3RQdXJjaGFzZSh0aGlzLnJvdy5kYXRlLCBuZXdOYW1lLCBuZXdDb3N0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHJlYWRQdXJjaGFzZU5hbWUoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbXB0UmVzcG9uc2UgPSBhd2FpdCBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUHVyY2hhc2UgTmFtZScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdXaGF0IGRpZCB5b3UgcHVyY2hhc2U/JyxcclxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IHRoaXMucm93Lm5hbWUsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0NvbmZpcm0nLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGlmKCFwcm9tcHRSZXNwb25zZS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlUHVyY2hhc2VOYW1lKHByb21wdFJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBwcm9tcHRSZXNwb25zZS50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVhZFB1cmNoYXNlQ29zdCgpIHtcclxuICAgICAgICBjb25zdCBwcm9tcHRSZXNwb25zZSA9IGF3YWl0IGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQdXJjaGFzZSBDb3N0JyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0hvdyBtdWNoIGRpZCBpdCBjb3N0P1xcbihTZXQgdG8gMCB0byBkZWxldGUpJyxcclxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IHRoaXMucm93LmNvc3Quc3Vic3RyaW5nKDEpLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdDb25maXJtJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoIXByb21wdFJlc3BvbnNlLnJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMudmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVQdXJjaGFzZUNvc3QocHJvbXB0UmVzcG9uc2UudGV4dCwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHByb21wdFJlc3BvbnNlLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSW52YWxpZCBJbnB1dCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXX0=