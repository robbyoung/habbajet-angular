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
            relativeDateString: Moment.unix(date).calendar(),
            absoluteDateString: Moment.unix(date).format("DD/MM/YY"),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQywwQkFBNEI7QUFDNUIsdURBQWlFO0FBQ2pFLG1EQUFpRDtBQUNqRCwrQkFBaUM7QUFFakMsSUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUM7QUFDckMsSUFBTSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7QUFDdkIsUUFBQSxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztBQUszRCxJQUFZLGdCQUVYO0FBRkQsV0FBWSxnQkFBZ0I7SUFDeEIseUNBQXFCLENBQUE7QUFDekIsQ0FBQyxFQUZXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRTNCO0FBWUQ7SUFPSSx1QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUNyQixJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUE7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVNLDRDQUFvQixHQUEzQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVNLCtDQUF1QixHQUE5QixVQUErQixJQUFrQixFQUFFLFVBQThCO1FBQzdFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FB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IFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldEluZm8gfSBmcm9tIFwiLi9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSGFiYmFqZXRDaGVja2JveCwgQ2hlY2ttYXJrIH0gZnJvbSBcIi4vY2hlY2tib3guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTYXZpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vc2F2aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmNvbnN0IE5FR0FUSVZFX0JVREdFVF9NT0RJRklFUiA9IDAuOTtcclxuY29uc3QgTUFYX1BVUkNIQVNFX0xJU1RfTEVOR1RIID0gMjA7XHJcbmV4cG9ydCBjb25zdCBBQlNPTFVURV9EQVRFX0ZPUk1BVCA9ICdEbyBNTU1NIFlZWVksIGg6bW0gYSc7XHJcblxyXG4vLyBUT0RPOiBNYWtlIGEgJ3Nob3cgbW9yZScgcm93O1xyXG5leHBvcnQgdHlwZSBCdWRnZXRUYWJSb3cgPSBQdXJjaGFzZVJvdztcclxuXHJcbmV4cG9ydCBlbnVtIEJ1ZGdldFRhYlJvd1R5cGUge1xyXG4gICAgUHVyY2hhc2UgPSAncHVyY2hhc2UnLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFB1cmNoYXNlUm93IHtcclxuICAgIHJvd1R5cGU6IEJ1ZGdldFRhYlJvd1R5cGUuUHVyY2hhc2U7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjb3N0OiBzdHJpbmc7XHJcbiAgICBkYXRlOiBudW1iZXI7XHJcbiAgICByZWxhdGl2ZURhdGVTdHJpbmc6IHN0cmluZztcclxuICAgIGFic29sdXRlRGF0ZVN0cmluZzogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCdWRnZXRTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdG90YWxBbW91bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdG90YWxBbW91bnRTdHJpbmc6IHtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBidWRnZXRUYWJSb3dzOiBCdWRnZXRUYWJSb3dbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhdmluZ1NlcnZpY2U6IFNhdmluZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdGhpcy5zYXZpbmdTZXJ2aWNlLmxvYWRCdWRnZXQoKTtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50U3RyaW5nID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idWRnZXRUYWJSb3dzID0gdGhpcy5zYXZpbmdTZXJ2aWNlLmxvYWRQdXJjaGFzZXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRvdGFsQW1vdW50U3RyaW5nKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxBbW91bnRTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRvQnVkZ2V0V2l0aEhhYmJhamV0KGluZm86IEhhYmJhamV0SW5mbywgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdKSB7XHJcbiAgICAgICAgbGV0IGFtb3VudFRvQWRkID0gaW5mby52YWx1ZTtcclxuICAgICAgICBsZXQgc2xhY2tEYXlzTGVmdCA9IGluZm8uc2xhY2s7XHJcbiAgICAgICAgbGV0IHBlbmFsdHkgPSBpbmZvLmZhY3RvcjtcclxuICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGNoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrYm94LmNoZWNrbWFyayAhPT0gQ2hlY2ttYXJrLlBvc2l0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzbGFja0RheXNMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsYWNrRGF5c0xlZnQtLTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50VG9BZGQgPSBhbW91bnRUb0FkZCAvIHBlbmFsdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy50b3RhbEFtb3VudCA8IDApIHtcclxuICAgICAgICAgICAgYW1vdW50VG9BZGQgKj0gTkVHQVRJVkVfQlVER0VUX01PRElGSUVSO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdGhpcy50b3RhbEFtb3VudCArIGFtb3VudFRvQWRkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RXhwZWN0ZWRQYXlvdXQoaW5mbzogSGFiYmFqZXRJbmZvLCBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10pIHtcclxuICAgICAgICBsZXQgZXhwZWN0ZWRQYXlvdXQgPSBpbmZvLnZhbHVlO1xyXG4gICAgICAgIGxldCBvbGRQYXlvdXQgPSBpbmZvLmV4cGVjdGVkUGF5b3V0O1xyXG4gICAgICAgIGxldCBzbGFja0RheXNMZWZ0ID0gaW5mby5zbGFjaztcclxuICAgICAgICBsZXQgcGVuYWx0eSA9IGluZm8uZmFjdG9yO1xyXG4gICAgICAgIF8uZWFjaChjaGVja2JveGVzLCAoY2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgaWYoY2hlY2tib3guY2hlY2ttYXJrID09PSBDaGVja21hcmsuTmVnYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmKHNsYWNrRGF5c0xlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xhY2tEYXlzTGVmdC0tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dCA9IGV4cGVjdGVkUGF5b3V0IC8gcGVuYWx0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGluZm8uZXhwZWN0ZWRQYXlvdXQgPSB0aGlzLmZvcm1hdE1vbmV5KGV4cGVjdGVkUGF5b3V0KTtcclxuICAgICAgICBpZiAoaW5mby5leHBlY3RlZFBheW91dCAhPT0gb2xkUGF5b3V0ICYmIGluZm8uZXhwZWN0ZWRQYXlvdXRVcGRhdGVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpbmZvLmV4cGVjdGVkUGF5b3V0VXBkYXRlQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VQdXJjaGFzZShuYW1lOiBzdHJpbmcsIGNvc3Q6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBNb21lbnQoKS51bml4KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1B1cmNoYXNlOiBQdXJjaGFzZVJvdyA9IHtcclxuICAgICAgICAgICAgcm93VHlwZTogQnVkZ2V0VGFiUm93VHlwZS5QdXJjaGFzZSxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgY29zdDogdGhpcy5mb3JtYXRNb25leShjb3N0KSxcclxuICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgcmVsYXRpdmVEYXRlU3RyaW5nOiBNb21lbnQudW5peChkYXRlKS5jYWxlbmRhcigpLFxyXG4gICAgICAgICAgICBhYnNvbHV0ZURhdGVTdHJpbmc6IE1vbWVudC51bml4KGRhdGUpLmZvcm1hdChcIkREL01NL1lZXCIpLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYnVkZ2V0VGFiUm93cy51bnNoaWZ0KG5ld1B1cmNoYXNlKTtcclxuICAgICAgICBpZih0aGlzLmJ1ZGdldFRhYlJvd3MubGVuZ3RoID4gTUFYX1BVUkNIQVNFX0xJU1RfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVkZ2V0VGFiUm93cy5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMudG90YWxBbW91bnQgLSBjb3N0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zYXZlUHVyY2hhc2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFB1cmNoYXNlcygpOiBCdWRnZXRUYWJSb3dbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVkZ2V0VGFiUm93cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29ycmVjdFB1cmNoYXNlKGRhdGU6IG51bWJlciwgbmV3TmFtZTogc3RyaW5nLCBuZXdDb3N0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBwdXJjaGFzZTogUHVyY2hhc2VSb3cgPSBfLmZpbmQodGhpcy5idWRnZXRUYWJSb3dzLCAocm93KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByb3cuZGF0ZSA9PT0gZGF0ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBuZXdDb3N0TnVtYmVyID0gXy50b051bWJlcihuZXdDb3N0KTtcclxuICAgICAgICBjb25zdCBvbGRDb3N0TnVtYmVyID0gXy50b051bWJlcihwdXJjaGFzZS5jb3N0LnN1YnN0cmluZygxKSk7XHJcblxyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgKz0gb2xkQ29zdE51bWJlciAtIG5ld0Nvc3ROdW1iZXI7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbEFtb3VudFN0cmluZygpO1xyXG5cclxuICAgICAgICBwdXJjaGFzZS5uYW1lID0gbmV3TmFtZTtcclxuICAgICAgICBwdXJjaGFzZS5jb3N0ID0gdGhpcy5mb3JtYXRNb25leShuZXdDb3N0TnVtYmVyKTtcclxuXHJcbiAgICAgICAgaWYgKHB1cmNoYXNlLmNvc3QgPT09ICckMC4wMCcpIHtcclxuICAgICAgICAgICAgdGhpcy5idWRnZXRUYWJSb3dzID0gXy5maWx0ZXIodGhpcy5idWRnZXRUYWJSb3dzLCAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93LmRhdGUgIT09IGRhdGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmVQdXJjaGFzZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdE1vbmV5KG1vbmV5TnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChtb25leU51bWJlciA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJCcgKyBtb25leU51bWJlci50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnLSQnICsgKC0xICogbW9uZXlOdW1iZXIpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudFN0cmluZy50ZXh0ID0gdGhpcy5mb3JtYXRNb25leSh0aGlzLnRvdGFsQW1vdW50KTtcclxuICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZUJ1ZGdldCh0aGlzLnRvdGFsQW1vdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUHVyY2hhc2VSb3cocm93OiBCdWRnZXRUYWJSb3cpOiByb3cgaXMgUHVyY2hhc2VSb3cge1xyXG4gICAgICAgIHJldHVybiByb3cucm93VHlwZSA9PT0gQnVkZ2V0VGFiUm93VHlwZS5QdXJjaGFzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVQdXJjaGFzZXMoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVQdXJjaGFzZXMoXy5maWx0ZXIodGhpcy5idWRnZXRUYWJSb3dzLCAocm93OiBCdWRnZXRUYWJSb3cpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNQdXJjaGFzZVJvdyhyb3cpO1xyXG4gICAgICAgIH0pIGFzIFB1cmNoYXNlUm93W10pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==