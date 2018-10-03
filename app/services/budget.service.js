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
var _ = require("lodash");
var Moment = require("moment");
var checkbox_service_1 = require("./checkbox.service");
var saving_service_1 = require("./saving.service");
var NEGATIVE_BUDGET_MODIFIER = 0.9;
var MAX_PURCHASE_LIST_LENGTH = 20;
exports.ABSOLUTE_DATE_FORMAT = 'Do MMMM YYYY, h:mm a';
var BudgetTabRowType;
(function (BudgetTabRowType) {
    BudgetTabRowType["Purchase"] = "purchase";
})(BudgetTabRowType = exports.BudgetTabRowType || (exports.BudgetTabRowType = {}));
var BudgetService = /** @class */ (function () {
    function BudgetService(savingService) {
        this.savingService = savingService;
        this.totalAmount = this.savingService.loadBudget();
        this.totalAmountString = {
            text: '',
        };
        this.budgetTabRows = this.savingService.loadPurchases();
        this.updateTotalAmountString();
        this.onPurchaseCallback = _.noop;
    }
    BudgetService.prototype.getTotalAmountString = function () {
        return this.totalAmountString;
    };
    BudgetService.prototype.addToBudgetWithHabbajet = function (info, checkboxes) {
        var amountToAdd = info.value;
        var slackDaysLeft = info.slack;
        var penalty = info.factor;
        _.each(checkboxes, function (checkbox) {
            if (checkbox.checkmark !== checkbox_service_1.Checkmark.Positive) {
                if (slackDaysLeft > 0) {
                    slackDaysLeft--;
                }
                else {
                    amountToAdd = amountToAdd / penalty;
                }
            }
        });
        if (this.totalAmount < 0) {
            amountToAdd *= NEGATIVE_BUDGET_MODIFIER;
        }
        this.totalAmount = this.totalAmount + amountToAdd;
        this.updateTotalAmountString();
        this.onPurchaseCallback();
    };
    BudgetService.prototype.setExpectedPayout = function (info, checkboxes) {
        var expectedPayout = info.value;
        var oldPayout = info.expectedPayout;
        var slackDaysLeft = info.slack;
        var penalty = info.factor;
        _.each(checkboxes, function (checkbox) {
            if (checkbox.checkmark === checkbox_service_1.Checkmark.Negative) {
                if (slackDaysLeft > 0) {
                    slackDaysLeft--;
                }
                else {
                    expectedPayout = expectedPayout / penalty;
                }
            }
        });
        if (this.totalAmount < 0) {
            expectedPayout *= NEGATIVE_BUDGET_MODIFIER;
        }
        info.expectedPayout = this.formatMoney(expectedPayout);
        if (this.totalAmount < 0) {
            info.expectedPayout += ' (-10%)';
        }
        if (info.expectedPayout !== oldPayout && info.expectedPayoutUpdateCallback) {
            info.expectedPayoutUpdateCallback();
        }
    };
    BudgetService.prototype.makePurchase = function (name, cost) {
        var date = Moment().unix();
        var newPurchase = {
            rowType: BudgetTabRowType.Purchase,
            name: name,
            cost: this.formatMoney(cost),
            date: date,
            relativeDateString: Moment.unix(date).calendar(),
            absoluteDateString: Moment.unix(date).format('DD/MM/YY'),
        };
        this.budgetTabRows.unshift(newPurchase);
        if (this.budgetTabRows.length > MAX_PURCHASE_LIST_LENGTH) {
            this.budgetTabRows.pop();
        }
        this.totalAmount = this.totalAmount - cost;
        this.updateTotalAmountString();
        this.onPurchaseCallback();
        this.savePurchases();
    };
    BudgetService.prototype.getPurchases = function () {
        return this.budgetTabRows;
    };
    BudgetService.prototype.correctPurchase = function (date, newName, newCost) {
        var purchase = _.find(this.budgetTabRows, function (row) {
            return row.date === date;
        });
        var newCostNumber = _.toNumber(newCost);
        var oldCostNumber = _.toNumber(purchase.cost.substring(1));
        this.totalAmount += oldCostNumber - newCostNumber;
        this.updateTotalAmountString();
        purchase.name = newName;
        purchase.cost = this.formatMoney(newCostNumber);
        if (purchase.cost === '$0.00') {
            this.budgetTabRows = _.filter(this.budgetTabRows, function (row) {
                return row.date !== date;
            });
        }
        this.onPurchaseCallback();
        this.savePurchases();
    };
    BudgetService.prototype.formatMoney = function (moneyNumber) {
        if (moneyNumber >= 0) {
            return '$' + moneyNumber.toFixed(2);
        }
        else {
            return '-$' + (-1 * moneyNumber).toFixed(2);
        }
    };
    BudgetService.prototype.updateTotalAmountString = function () {
        this.totalAmountString.text = this.formatMoney(this.totalAmount);
        this.savingService.saveBudget(this.totalAmount);
    };
    BudgetService.prototype.isPurchaseRow = function (row) {
        return row.rowType === BudgetTabRowType.Purchase;
    };
    BudgetService.prototype.savePurchases = function () {
        var _this = this;
        this.savingService.savePurchases(_.filter(this.budgetTabRows, function (row) {
            return _this.isPurchaseRow(row);
        }));
    };
    BudgetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [saving_service_1.SavingService])
    ], BudgetService);
    return BudgetService;
}());
exports.BudgetService = BudgetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQywwQkFBNEI7QUFDNUIsK0JBQWlDO0FBQ2pDLHVEQUFpRTtBQUVqRSxtREFBaUQ7QUFFakQsSUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUM7QUFDckMsSUFBTSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7QUFDdkIsUUFBQSxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztBQUszRCxJQUFZLGdCQUVYO0FBRkQsV0FBWSxnQkFBZ0I7SUFDeEIseUNBQXFCLENBQUE7QUFDekIsQ0FBQyxFQUZXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRTNCO0FBWUQ7SUFTSSx1QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUNyQixJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVNLDRDQUFvQixHQUEzQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVNLCtDQUF1QixHQUE5QixVQUErQixJQUFrQixFQUFFLFVBQThCO1FBQzdFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUss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Q0FBQztJQUVPLHFDQUFhLEdBQXJCO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsVUFBQyxHQUFpQjtZQUM1RSxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQWtCLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBL0lRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FVMEIsOEJBQWE7T0FUdkMsYUFBYSxDQWdKekI7SUFBRCxvQkFBQztDQUFBLEFBaEpELElBZ0pDO0FBaEpZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIE1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBDaGVja21hcmssIEhhYmJhamV0Q2hlY2tib3ggfSBmcm9tICcuL2NoZWNrYm94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIYWJiYWpldEluZm8gfSBmcm9tICcuL2hhYmJhamV0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTYXZpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zYXZpbmcuc2VydmljZSc7XHJcblxyXG5jb25zdCBORUdBVElWRV9CVURHRVRfTU9ESUZJRVIgPSAwLjk7XHJcbmNvbnN0IE1BWF9QVVJDSEFTRV9MSVNUX0xFTkdUSCA9IDIwO1xyXG5leHBvcnQgY29uc3QgQUJTT0xVVEVfREFURV9GT1JNQVQgPSAnRG8gTU1NTSBZWVlZLCBoOm1tIGEnO1xyXG5cclxuLy8gVE9ETzogTWFrZSBhICdzaG93IG1vcmUnIHJvdztcclxuZXhwb3J0IHR5cGUgQnVkZ2V0VGFiUm93ID0gUHVyY2hhc2VSb3c7XHJcblxyXG5leHBvcnQgZW51bSBCdWRnZXRUYWJSb3dUeXBlIHtcclxuICAgIFB1cmNoYXNlID0gJ3B1cmNoYXNlJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQdXJjaGFzZVJvdyB7XHJcbiAgICByb3dUeXBlOiBCdWRnZXRUYWJSb3dUeXBlLlB1cmNoYXNlO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY29zdDogc3RyaW5nO1xyXG4gICAgZGF0ZTogbnVtYmVyO1xyXG4gICAgcmVsYXRpdmVEYXRlU3RyaW5nOiBzdHJpbmc7XHJcbiAgICBhYnNvbHV0ZURhdGVTdHJpbmc6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnVkZ2V0U2VydmljZSB7XHJcbiAgICBwdWJsaWMgb25QdXJjaGFzZUNhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIHByaXZhdGUgdG90YWxBbW91bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdG90YWxBbW91bnRTdHJpbmc6IHtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBidWRnZXRUYWJSb3dzOiBCdWRnZXRUYWJSb3dbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhdmluZ1NlcnZpY2U6IFNhdmluZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdGhpcy5zYXZpbmdTZXJ2aWNlLmxvYWRCdWRnZXQoKTtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50U3RyaW5nID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYnVkZ2V0VGFiUm93cyA9IHRoaXMuc2F2aW5nU2VydmljZS5sb2FkUHVyY2hhc2VzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbEFtb3VudFN0cmluZygpO1xyXG4gICAgICAgIHRoaXMub25QdXJjaGFzZUNhbGxiYWNrID0gXy5ub29wO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3RhbEFtb3VudFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3RhbEFtb3VudFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVG9CdWRnZXRXaXRoSGFiYmFqZXQoaW5mbzogSGFiYmFqZXRJbmZvLCBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10pIHtcclxuICAgICAgICBsZXQgYW1vdW50VG9BZGQgPSBpbmZvLnZhbHVlO1xyXG4gICAgICAgIGxldCBzbGFja0RheXNMZWZ0ID0gaW5mby5zbGFjaztcclxuICAgICAgICBjb25zdCBwZW5hbHR5ID0gaW5mby5mYWN0b3I7XHJcbiAgICAgICAgXy5lYWNoKGNoZWNrYm94ZXMsIChjaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2ttYXJrICE9PSBDaGVja21hcmsuUG9zaXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbGFja0RheXNMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsYWNrRGF5c0xlZnQtLTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50VG9BZGQgPSBhbW91bnRUb0FkZCAvIHBlbmFsdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy50b3RhbEFtb3VudCA8IDApIHtcclxuICAgICAgICAgICAgYW1vdW50VG9BZGQgKj0gTkVHQVRJVkVfQlVER0VUX01PRElGSUVSO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdGhpcy50b3RhbEFtb3VudCArIGFtb3VudFRvQWRkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLm9uUHVyY2hhc2VDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRFeHBlY3RlZFBheW91dChpbmZvOiBIYWJiYWpldEluZm8sIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSkge1xyXG4gICAgICAgIGxldCBleHBlY3RlZFBheW91dCA9IGluZm8udmFsdWU7XHJcbiAgICAgICAgY29uc3Qgb2xkUGF5b3V0ID0gaW5mby5leHBlY3RlZFBheW91dDtcclxuICAgICAgICBsZXQgc2xhY2tEYXlzTGVmdCA9IGluZm8uc2xhY2s7XHJcbiAgICAgICAgY29uc3QgcGVuYWx0eSA9IGluZm8uZmFjdG9yO1xyXG4gICAgICAgIF8uZWFjaChjaGVja2JveGVzLCAoY2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrbWFyayA9PT0gQ2hlY2ttYXJrLk5lZ2F0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xhY2tEYXlzTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGFja0RheXNMZWZ0LS07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0ID0gZXhwZWN0ZWRQYXlvdXQgLyBwZW5hbHR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxBbW91bnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0ICo9IE5FR0FUSVZFX0JVREdFVF9NT0RJRklFUjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5mby5leHBlY3RlZFBheW91dCA9IHRoaXMuZm9ybWF0TW9uZXkoZXhwZWN0ZWRQYXlvdXQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50b3RhbEFtb3VudCA8IDApIHtcclxuICAgICAgICAgICAgaW5mby5leHBlY3RlZFBheW91dCArPSAnICgtMTAlKSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5mby5leHBlY3RlZFBheW91dCAhPT0gb2xkUGF5b3V0ICYmIGluZm8uZXhwZWN0ZWRQYXlvdXRVcGRhdGVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpbmZvLmV4cGVjdGVkUGF5b3V0VXBkYXRlQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VQdXJjaGFzZShuYW1lOiBzdHJpbmcsIGNvc3Q6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBNb21lbnQoKS51bml4KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1B1cmNoYXNlOiBQdXJjaGFzZVJvdyA9IHtcclxuICAgICAgICAgICAgcm93VHlwZTogQnVkZ2V0VGFiUm93VHlwZS5QdXJjaGFzZSxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgY29zdDogdGhpcy5mb3JtYXRNb25leShjb3N0KSxcclxuICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgcmVsYXRpdmVEYXRlU3RyaW5nOiBNb21lbnQudW5peChkYXRlKS5jYWxlbmRhcigpLFxyXG4gICAgICAgICAgICBhYnNvbHV0ZURhdGVTdHJpbmc6IE1vbWVudC51bml4KGRhdGUpLmZvcm1hdCgnREQvTU0vWVknKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmJ1ZGdldFRhYlJvd3MudW5zaGlmdChuZXdQdXJjaGFzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVkZ2V0VGFiUm93cy5sZW5ndGggPiBNQVhfUFVSQ0hBU0VfTElTVF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhpcy5idWRnZXRUYWJSb3dzLnBvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMudG90YWxBbW91bnQgLSBjb3N0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vblB1cmNoYXNlQ2FsbGJhY2soKTtcclxuICAgICAgICB0aGlzLnNhdmVQdXJjaGFzZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UHVyY2hhc2VzKCk6IEJ1ZGdldFRhYlJvd1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5idWRnZXRUYWJSb3dzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3JyZWN0UHVyY2hhc2UoZGF0ZTogbnVtYmVyLCBuZXdOYW1lOiBzdHJpbmcsIG5ld0Nvc3Q6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHB1cmNoYXNlOiBQdXJjaGFzZVJvdyA9IF8uZmluZCh0aGlzLmJ1ZGdldFRhYlJvd3MsIChyb3cpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdy5kYXRlID09PSBkYXRlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG5ld0Nvc3ROdW1iZXIgPSBfLnRvTnVtYmVyKG5ld0Nvc3QpO1xyXG4gICAgICAgIGNvbnN0IG9sZENvc3ROdW1iZXIgPSBfLnRvTnVtYmVyKHB1cmNoYXNlLmNvc3Quc3Vic3RyaW5nKDEpKTtcclxuXHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCArPSBvbGRDb3N0TnVtYmVyIC0gbmV3Q29zdE51bWJlcjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCk7XHJcblxyXG4gICAgICAgIHB1cmNoYXNlLm5hbWUgPSBuZXdOYW1lO1xyXG4gICAgICAgIHB1cmNoYXNlLmNvc3QgPSB0aGlzLmZvcm1hdE1vbmV5KG5ld0Nvc3ROdW1iZXIpO1xyXG5cclxuICAgICAgICBpZiAocHVyY2hhc2UuY29zdCA9PT0gJyQwLjAwJykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZGdldFRhYlJvd3MgPSBfLmZpbHRlcih0aGlzLmJ1ZGdldFRhYlJvd3MsIChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByb3cuZGF0ZSAhPT0gZGF0ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25QdXJjaGFzZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgdGhpcy5zYXZlUHVyY2hhc2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXRNb25leShtb25leU51bWJlcjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAobW9uZXlOdW1iZXIgPj0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyQnICsgbW9uZXlOdW1iZXIudG9GaXhlZCgyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJy0kJyArICgtMSAqIG1vbmV5TnVtYmVyKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnRTdHJpbmcudGV4dCA9IHRoaXMuZm9ybWF0TW9uZXkodGhpcy50b3RhbEFtb3VudCk7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVCdWRnZXQodGhpcy50b3RhbEFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1B1cmNoYXNlUm93KHJvdzogQnVkZ2V0VGFiUm93KTogcm93IGlzIFB1cmNoYXNlUm93IHtcclxuICAgICAgICByZXR1cm4gcm93LnJvd1R5cGUgPT09IEJ1ZGdldFRhYlJvd1R5cGUuUHVyY2hhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlUHVyY2hhc2VzKCkge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlUHVyY2hhc2VzKF8uZmlsdGVyKHRoaXMuYnVkZ2V0VGFiUm93cywgKHJvdzogQnVkZ2V0VGFiUm93KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUHVyY2hhc2VSb3cocm93KTtcclxuICAgICAgICB9KSBhcyBQdXJjaGFzZVJvd1tdKTtcclxuICAgIH1cclxufVxyXG4iXX0=