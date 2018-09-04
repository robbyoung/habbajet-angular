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
var checkbox_service_1 = require("./checkbox.service");
var saving_service_1 = require("./saving.service");
var Moment = require("moment");
var NEGATIVE_BUDGET_MODIFIER = 0.9;
var MAX_PURCHASE_LIST_LENGTH = 20;
var BudgetTabRowType;
(function (BudgetTabRowType) {
    BudgetTabRowType["Purchase"] = "purchase";
})(BudgetTabRowType = exports.BudgetTabRowType || (exports.BudgetTabRowType = {}));
var BudgetService = /** @class */ (function () {
    function BudgetService(savingService) {
        this.savingService = savingService;
        this.purchaseLengthObject = {
            length: 0,
        };
        this.totalAmount = this.savingService.loadBudget();
        this.totalAmountString = {
            text: '',
        };
        this.budgetTabRows = this.savingService.loadPurchases();
        this.updateTotalAmountString();
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
        info.expectedPayout = this.formatMoney(expectedPayout);
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
            dateString: Moment.unix(date).calendar(),
        };
        this.budgetTabRows.unshift(newPurchase);
        if (this.budgetTabRows.length > MAX_PURCHASE_LIST_LENGTH) {
            this.budgetTabRows.pop();
        }
        this.totalAmount = this.totalAmount - cost;
        this.updateTotalAmountString();
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
        this.purchaseLengthObject.length = this.budgetTabRows.length;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQywwQkFBNEI7QUFDNUIsdURBQWlFO0FBQ2pFLG1EQUFpRDtBQUNqRCwrQkFBaUM7QUFFakMsSUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUM7QUFDckMsSUFBTSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7QUFLcEMsSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLHlDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFGVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUUzQjtBQVdEO0lBVUksdUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBVHpDLHlCQUFvQixHQUFHO1lBQzFCLE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQTtRQVFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDckIsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFBO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTSw0Q0FBb0IsR0FBM0I7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7SUFFTSwrQ0FBdUIsR0FBOUIsVUFBK0IsSUFBa0IsRUFBRSxVQUE4QjtRQUM3RSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFD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fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldEluZm8gfSBmcm9tIFwiLi9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSGFiYmFqZXRDaGVja2JveCwgQ2hlY2ttYXJrIH0gZnJvbSBcIi4vY2hlY2tib3guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTYXZpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vc2F2aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmNvbnN0IE5FR0FUSVZFX0JVREdFVF9NT0RJRklFUiA9IDAuOTtcclxuY29uc3QgTUFYX1BVUkNIQVNFX0xJU1RfTEVOR1RIID0gMjA7XHJcblxyXG4vLyBUT0RPOiBNYWtlIGEgJ3Nob3cgbW9yZScgcm93O1xyXG5leHBvcnQgdHlwZSBCdWRnZXRUYWJSb3cgPSBQdXJjaGFzZVJvdztcclxuXHJcbmV4cG9ydCBlbnVtIEJ1ZGdldFRhYlJvd1R5cGUge1xyXG4gICAgUHVyY2hhc2UgPSAncHVyY2hhc2UnLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFB1cmNoYXNlUm93IHtcclxuICAgIHJvd1R5cGU6IEJ1ZGdldFRhYlJvd1R5cGUuUHVyY2hhc2U7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjb3N0OiBzdHJpbmc7XHJcbiAgICBkYXRlOiBudW1iZXI7XHJcbiAgICBkYXRlU3RyaW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJ1ZGdldFNlcnZpY2Uge1xyXG4gICAgcHVibGljIHB1cmNoYXNlTGVuZ3RoT2JqZWN0ID0ge1xyXG4gICAgICAgIGxlbmd0aDogMCxcclxuICAgIH1cclxuICAgIHByaXZhdGUgdG90YWxBbW91bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdG90YWxBbW91bnRTdHJpbmc6IHtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBidWRnZXRUYWJSb3dzOiBCdWRnZXRUYWJSb3dbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhdmluZ1NlcnZpY2U6IFNhdmluZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdGhpcy5zYXZpbmdTZXJ2aWNlLmxvYWRCdWRnZXQoKTtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50U3RyaW5nID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idWRnZXRUYWJSb3dzID0gdGhpcy5zYXZpbmdTZXJ2aWNlLmxvYWRQdXJjaGFzZXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRvdGFsQW1vdW50U3RyaW5nKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxBbW91bnRTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRvQnVkZ2V0V2l0aEhhYmJhamV0KGluZm86IEhhYmJhamV0SW5mbywgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdKSB7XHJcbiAgICAgICAgbGV0IGFtb3VudFRvQWRkID0gaW5mby52YWx1ZTtcclxuICAgICAgICBsZXQgc2xhY2tEYXlzTGVmdCA9IGluZm8uc2xhY2s7XHJcbiAgICAgICAgbGV0IHBlbmFsdHkgPSBpbmZvLmZhY3RvcjtcclxuICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGNoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrYm94LmNoZWNrbWFyayAhPT0gQ2hlY2ttYXJrLlBvc2l0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzbGFja0RheXNMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsYWNrRGF5c0xlZnQtLTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50VG9BZGQgPSBhbW91bnRUb0FkZCAvIHBlbmFsdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy50b3RhbEFtb3VudCA8IDApIHtcclxuICAgICAgICAgICAgYW1vdW50VG9BZGQgKj0gTkVHQVRJVkVfQlVER0VUX01PRElGSUVSO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdGhpcy50b3RhbEFtb3VudCArIGFtb3VudFRvQWRkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RXhwZWN0ZWRQYXlvdXQoaW5mbzogSGFiYmFqZXRJbmZvLCBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10pIHtcclxuICAgICAgICBsZXQgZXhwZWN0ZWRQYXlvdXQgPSBpbmZvLnZhbHVlO1xyXG4gICAgICAgIGxldCBvbGRQYXlvdXQgPSBpbmZvLmV4cGVjdGVkUGF5b3V0O1xyXG4gICAgICAgIGxldCBzbGFja0RheXNMZWZ0ID0gaW5mby5zbGFjaztcclxuICAgICAgICBsZXQgcGVuYWx0eSA9IGluZm8uZmFjdG9yO1xyXG4gICAgICAgIF8uZWFjaChjaGVja2JveGVzLCAoY2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgaWYoY2hlY2tib3guY2hlY2ttYXJrID09PSBDaGVja21hcmsuTmVnYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmKHNsYWNrRGF5c0xlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xhY2tEYXlzTGVmdC0tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dCA9IGV4cGVjdGVkUGF5b3V0IC8gcGVuYWx0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGluZm8uZXhwZWN0ZWRQYXlvdXQgPSB0aGlzLmZvcm1hdE1vbmV5KGV4cGVjdGVkUGF5b3V0KTtcclxuICAgICAgICBpZiAoaW5mby5leHBlY3RlZFBheW91dCAhPT0gb2xkUGF5b3V0ICYmIGluZm8uZXhwZWN0ZWRQYXlvdXRVcGRhdGVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpbmZvLmV4cGVjdGVkUGF5b3V0VXBkYXRlQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VQdXJjaGFzZShuYW1lOiBzdHJpbmcsIGNvc3Q6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBNb21lbnQoKS51bml4KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1B1cmNoYXNlOiBQdXJjaGFzZVJvdyA9IHtcclxuICAgICAgICAgICAgcm93VHlwZTogQnVkZ2V0VGFiUm93VHlwZS5QdXJjaGFzZSxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgY29zdDogdGhpcy5mb3JtYXRNb25leShjb3N0KSxcclxuICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgZGF0ZVN0cmluZzogTW9tZW50LnVuaXgoZGF0ZSkuY2FsZW5kYXIoKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmJ1ZGdldFRhYlJvd3MudW5zaGlmdChuZXdQdXJjaGFzZSk7XHJcbiAgICAgICAgaWYodGhpcy5idWRnZXRUYWJSb3dzLmxlbmd0aCA+IE1BWF9QVVJDSEFTRV9MSVNUX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZGdldFRhYlJvd3MucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSB0aGlzLnRvdGFsQW1vdW50IC0gY29zdDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2F2ZVB1cmNoYXNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQdXJjaGFzZXMoKTogQnVkZ2V0VGFiUm93W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZGdldFRhYlJvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvcnJlY3RQdXJjaGFzZShkYXRlOiBudW1iZXIsIG5ld05hbWU6IHN0cmluZywgbmV3Q29zdDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcHVyY2hhc2U6IFB1cmNoYXNlUm93ID0gXy5maW5kKHRoaXMuYnVkZ2V0VGFiUm93cywgKHJvdykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcm93LmRhdGUgPT09IGRhdGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbmV3Q29zdE51bWJlciA9IF8udG9OdW1iZXIobmV3Q29zdCk7XHJcbiAgICAgICAgY29uc3Qgb2xkQ29zdE51bWJlciA9IF8udG9OdW1iZXIocHVyY2hhc2UuY29zdC5zdWJzdHJpbmcoMSkpO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ICs9IG9sZENvc3ROdW1iZXIgLSBuZXdDb3N0TnVtYmVyO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgcHVyY2hhc2UubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgICAgcHVyY2hhc2UuY29zdCA9IHRoaXMuZm9ybWF0TW9uZXkobmV3Q29zdE51bWJlcik7XHJcblxyXG4gICAgICAgIGlmIChwdXJjaGFzZS5jb3N0ID09PSAnJDAuMDAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVkZ2V0VGFiUm93cyA9IF8uZmlsdGVyKHRoaXMuYnVkZ2V0VGFiUm93cywgKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdy5kYXRlICE9PSBkYXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlUHVyY2hhc2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXRNb25leShtb25leU51bWJlcjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAobW9uZXlOdW1iZXIgPj0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyQnICsgbW9uZXlOdW1iZXIudG9GaXhlZCgyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJy0kJyArICgtMSAqIG1vbmV5TnVtYmVyKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnRTdHJpbmcudGV4dCA9IHRoaXMuZm9ybWF0TW9uZXkodGhpcy50b3RhbEFtb3VudCk7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVCdWRnZXQodGhpcy50b3RhbEFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1B1cmNoYXNlUm93KHJvdzogQnVkZ2V0VGFiUm93KTogcm93IGlzIFB1cmNoYXNlUm93IHtcclxuICAgICAgICByZXR1cm4gcm93LnJvd1R5cGUgPT09IEJ1ZGdldFRhYlJvd1R5cGUuUHVyY2hhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlUHVyY2hhc2VzKCkge1xyXG4gICAgICAgIHRoaXMucHVyY2hhc2VMZW5ndGhPYmplY3QubGVuZ3RoID0gdGhpcy5idWRnZXRUYWJSb3dzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZVB1cmNoYXNlcyhfLmZpbHRlcih0aGlzLmJ1ZGdldFRhYlJvd3MsIChyb3c6IEJ1ZGdldFRhYlJvdykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1B1cmNoYXNlUm93KHJvdyk7XHJcbiAgICAgICAgfSkgYXMgUHVyY2hhc2VSb3dbXSk7XHJcbiAgICB9XHJcbn1cclxuIl19