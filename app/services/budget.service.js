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
        var _this = this;
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
        this.savingService.savePurchases(_.filter(this.budgetTabRows, function (row) {
            return _this.isPurchaseRow(row);
        }));
    };
    BudgetService.prototype.getPurchases = function () {
        return this.budgetTabRows;
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
    BudgetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [saving_service_1.SavingService])
    ], BudgetService);
    return BudgetService;
}());
exports.BudgetService = BudgetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQywwQkFBNEI7QUFDNUIsdURBQWlFO0FBQ2pFLG1EQUFpRDtBQUNqRCwrQkFBaUM7QUFFakMsSUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUM7QUFDckMsSUFBTSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7QUFLcEMsSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLHlDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFGVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUUzQjtBQVdEO0lBT0ksdUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDckIsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFBO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTSw0Q0FBb0IsR0FBM0I7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7SUFFTSwrQ0FBdUIsR0FBOUIsVUFBK0IsSUFBa0IsRUFBRSxVQUE4QjtRQUM3RSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxV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QUMsYUFBYSxFQUFFLFVBQUMsR0FBaUI7WUFDNUUsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFrQixDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLG9DQUFZLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLFdBQW1CO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDTCxDQUFDO0lBRU8sK0NBQXVCLEdBQS9CO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLHFDQUFhLEdBQXJCLFVBQXNCLEdBQWlCO1FBQ25DLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxLQUFLLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNyRCxDQUFDO0lBdkdRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FRMEIsOEJBQWE7T0FQdkMsYUFBYSxDQXlHekI7SUFBRCxvQkFBQztDQUFBLEFBekdELElBeUdDO0FBekdZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0SW5mbyB9IGZyb20gXCIuL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBIYWJiYWpldENoZWNrYm94LCBDaGVja21hcmsgfSBmcm9tIFwiLi9jaGVja2JveC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNhdmluZ1NlcnZpY2UgfSBmcm9tIFwiLi9zYXZpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuY29uc3QgTkVHQVRJVkVfQlVER0VUX01PRElGSUVSID0gMC45O1xyXG5jb25zdCBNQVhfUFVSQ0hBU0VfTElTVF9MRU5HVEggPSAyMDtcclxuXHJcbi8vIFRPRE86IE1ha2UgYSAnc2hvdyBtb3JlJyByb3c7XHJcbmV4cG9ydCB0eXBlIEJ1ZGdldFRhYlJvdyA9IFB1cmNoYXNlUm93O1xyXG5cclxuZXhwb3J0IGVudW0gQnVkZ2V0VGFiUm93VHlwZSB7XHJcbiAgICBQdXJjaGFzZSA9ICdwdXJjaGFzZScsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VSb3cge1xyXG4gICAgcm93VHlwZTogQnVkZ2V0VGFiUm93VHlwZS5QdXJjaGFzZTtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvc3Q6IHN0cmluZztcclxuICAgIGRhdGU6IG51bWJlcjtcclxuICAgIGRhdGVTdHJpbmc6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnVkZ2V0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50U3RyaW5nOiB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgYnVkZ2V0VGFiUm93czogQnVkZ2V0VGFiUm93W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYXZpbmdTZXJ2aWNlOiBTYXZpbmdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMuc2F2aW5nU2VydmljZS5sb2FkQnVkZ2V0KCk7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudFN0cmluZyA9IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnVkZ2V0VGFiUm93cyA9IHRoaXMuc2F2aW5nU2VydmljZS5sb2FkUHVyY2hhc2VzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbEFtb3VudFN0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3RhbEFtb3VudFN0cmluZygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsQW1vdW50U3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUb0J1ZGdldFdpdGhIYWJiYWpldChpbmZvOiBIYWJiYWpldEluZm8sIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSkge1xyXG4gICAgICAgIGxldCBhbW91bnRUb0FkZCA9IGluZm8udmFsdWU7XHJcbiAgICAgICAgbGV0IHNsYWNrRGF5c0xlZnQgPSBpbmZvLnNsYWNrO1xyXG4gICAgICAgIGxldCBwZW5hbHR5ID0gaW5mby5mYWN0b3I7XHJcbiAgICAgICAgXy5lYWNoKGNoZWNrYm94ZXMsIChjaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjaGVja2JveC5jaGVja21hcmsgIT09IENoZWNrbWFyay5Qb3NpdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoc2xhY2tEYXlzTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGFja0RheXNMZWZ0LS07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudFRvQWRkID0gYW1vdW50VG9BZGQgLyBwZW5hbHR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxBbW91bnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGFtb3VudFRvQWRkICo9IE5FR0FUSVZFX0JVREdFVF9NT0RJRklFUjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMudG90YWxBbW91bnQgKyBhbW91bnRUb0FkZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEV4cGVjdGVkUGF5b3V0KGluZm86IEhhYmJhamV0SW5mbywgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdKSB7XHJcbiAgICAgICAgbGV0IGV4cGVjdGVkUGF5b3V0ID0gaW5mby52YWx1ZTtcclxuICAgICAgICBsZXQgb2xkUGF5b3V0ID0gaW5mby5leHBlY3RlZFBheW91dDtcclxuICAgICAgICBsZXQgc2xhY2tEYXlzTGVmdCA9IGluZm8uc2xhY2s7XHJcbiAgICAgICAgbGV0IHBlbmFsdHkgPSBpbmZvLmZhY3RvcjtcclxuICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGNoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrYm94LmNoZWNrbWFyayA9PT0gQ2hlY2ttYXJrLk5lZ2F0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzbGFja0RheXNMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsYWNrRGF5c0xlZnQtLTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXQgPSBleHBlY3RlZFBheW91dCAvIHBlbmFsdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpbmZvLmV4cGVjdGVkUGF5b3V0ID0gdGhpcy5mb3JtYXRNb25leShleHBlY3RlZFBheW91dCk7XHJcbiAgICAgICAgaWYgKGluZm8uZXhwZWN0ZWRQYXlvdXQgIT09IG9sZFBheW91dCAmJiBpbmZvLmV4cGVjdGVkUGF5b3V0VXBkYXRlQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaW5mby5leHBlY3RlZFBheW91dFVwZGF0ZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYWtlUHVyY2hhc2UobmFtZTogc3RyaW5nLCBjb3N0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gTW9tZW50KCkudW5peCgpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdQdXJjaGFzZTogUHVyY2hhc2VSb3cgPSB7XHJcbiAgICAgICAgICAgIHJvd1R5cGU6IEJ1ZGdldFRhYlJvd1R5cGUuUHVyY2hhc2UsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGNvc3Q6IHRoaXMuZm9ybWF0TW9uZXkoY29zdCksXHJcbiAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgIGRhdGVTdHJpbmc6IE1vbWVudC51bml4KGRhdGUpLmNhbGVuZGFyKCksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5idWRnZXRUYWJSb3dzLnVuc2hpZnQobmV3UHVyY2hhc2UpO1xyXG4gICAgICAgIGlmKHRoaXMuYnVkZ2V0VGFiUm93cy5sZW5ndGggPiBNQVhfUFVSQ0hBU0VfTElTVF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhpcy5idWRnZXRUYWJSb3dzLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdGhpcy50b3RhbEFtb3VudCAtIGNvc3Q7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbEFtb3VudFN0cmluZygpO1xyXG5cclxuICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZVB1cmNoYXNlcyhfLmZpbHRlcih0aGlzLmJ1ZGdldFRhYlJvd3MsIChyb3c6IEJ1ZGdldFRhYlJvdykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1B1cmNoYXNlUm93KHJvdyk7XHJcbiAgICAgICAgfSkgYXMgUHVyY2hhc2VSb3dbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFB1cmNoYXNlcygpOiBCdWRnZXRUYWJSb3dbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVkZ2V0VGFiUm93cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdE1vbmV5KG1vbmV5TnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChtb25leU51bWJlciA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJCcgKyBtb25leU51bWJlci50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnLSQnICsgKC0xICogbW9uZXlOdW1iZXIpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudFN0cmluZy50ZXh0ID0gdGhpcy5mb3JtYXRNb25leSh0aGlzLnRvdGFsQW1vdW50KTtcclxuICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZUJ1ZGdldCh0aGlzLnRvdGFsQW1vdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUHVyY2hhc2VSb3cocm93OiBCdWRnZXRUYWJSb3cpOiByb3cgaXMgUHVyY2hhc2VSb3cge1xyXG4gICAgICAgIHJldHVybiByb3cucm93VHlwZSA9PT0gQnVkZ2V0VGFiUm93VHlwZS5QdXJjaGFzZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19