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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQywwQkFBNEI7QUFDNUIsdURBQWlFO0FBQ2pFLG1EQUFpRDtBQUNqRCwrQkFBaUM7QUFFakMsSUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUM7QUFDckMsSUFBTSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7QUFLcEMsSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLHlDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFGVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUUzQjtBQVdEO0lBT0ksdUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDckIsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFBO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTSw0Q0FBb0IsR0FBM0I7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7SUFFTSwrQ0FBdUIsR0FBOUIsVUFBK0IsSUFBa0IsRUFBRSxVQUE4QjtRQUM3RSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxV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QVEsQ0FBQztJQUNyRCxDQUFDO0lBbkZRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FRMEIsOEJBQWE7T0FQdkMsYUFBYSxDQXFGekI7SUFBRCxvQkFBQztDQUFBLEFBckZELElBcUZDO0FBckZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0SW5mbyB9IGZyb20gXCIuL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBIYWJiYWpldENoZWNrYm94LCBDaGVja21hcmsgfSBmcm9tIFwiLi9jaGVja2JveC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNhdmluZ1NlcnZpY2UgfSBmcm9tIFwiLi9zYXZpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuY29uc3QgTkVHQVRJVkVfQlVER0VUX01PRElGSUVSID0gMC45O1xyXG5jb25zdCBNQVhfUFVSQ0hBU0VfTElTVF9MRU5HVEggPSAyMDtcclxuXHJcbi8vIFRPRE86IE1ha2UgYSAnc2hvdyBtb3JlJyByb3c7XHJcbmV4cG9ydCB0eXBlIEJ1ZGdldFRhYlJvdyA9IFB1cmNoYXNlUm93O1xyXG5cclxuZXhwb3J0IGVudW0gQnVkZ2V0VGFiUm93VHlwZSB7XHJcbiAgICBQdXJjaGFzZSA9ICdwdXJjaGFzZScsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VSb3cge1xyXG4gICAgcm93VHlwZTogQnVkZ2V0VGFiUm93VHlwZS5QdXJjaGFzZTtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvc3Q6IHN0cmluZztcclxuICAgIGRhdGU6IG51bWJlcjtcclxuICAgIGRhdGVTdHJpbmc6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnVkZ2V0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50U3RyaW5nOiB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgYnVkZ2V0VGFiUm93czogQnVkZ2V0VGFiUm93W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYXZpbmdTZXJ2aWNlOiBTYXZpbmdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMuc2F2aW5nU2VydmljZS5sb2FkQnVkZ2V0KCk7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudFN0cmluZyA9IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnVkZ2V0VGFiUm93cyA9IHRoaXMuc2F2aW5nU2VydmljZS5sb2FkUHVyY2hhc2VzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbEFtb3VudFN0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3RhbEFtb3VudFN0cmluZygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsQW1vdW50U3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUb0J1ZGdldFdpdGhIYWJiYWpldChpbmZvOiBIYWJiYWpldEluZm8sIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSkge1xyXG4gICAgICAgIGxldCBhbW91bnRUb0FkZCA9IGluZm8udmFsdWU7XHJcbiAgICAgICAgbGV0IHNsYWNrRGF5c0xlZnQgPSBpbmZvLnNsYWNrO1xyXG4gICAgICAgIGxldCBwZW5hbHR5ID0gaW5mby5mYWN0b3I7XHJcbiAgICAgICAgXy5lYWNoKGNoZWNrYm94ZXMsIChjaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjaGVja2JveC5jaGVja21hcmsgIT09IENoZWNrbWFyay5Qb3NpdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoc2xhY2tEYXlzTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGFja0RheXNMZWZ0LS07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudFRvQWRkID0gYW1vdW50VG9BZGQgLyBwZW5hbHR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxBbW91bnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGFtb3VudFRvQWRkICo9IE5FR0FUSVZFX0JVREdFVF9NT0RJRklFUjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMudG90YWxBbW91bnQgKyBhbW91bnRUb0FkZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VQdXJjaGFzZShuYW1lOiBzdHJpbmcsIGNvc3Q6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBNb21lbnQoKS51bml4KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1B1cmNoYXNlOiBQdXJjaGFzZVJvdyA9IHtcclxuICAgICAgICAgICAgcm93VHlwZTogQnVkZ2V0VGFiUm93VHlwZS5QdXJjaGFzZSxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgY29zdDogdGhpcy5mb3JtYXRNb25leShjb3N0KSxcclxuICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgZGF0ZVN0cmluZzogTW9tZW50LnVuaXgoZGF0ZSkuY2FsZW5kYXIoKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmJ1ZGdldFRhYlJvd3MudW5zaGlmdChuZXdQdXJjaGFzZSk7XHJcbiAgICAgICAgaWYodGhpcy5idWRnZXRUYWJSb3dzLmxlbmd0aCA+IE1BWF9QVVJDSEFTRV9MSVNUX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZGdldFRhYlJvd3MucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSB0aGlzLnRvdGFsQW1vdW50IC0gY29zdDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlUHVyY2hhc2VzKF8uZmlsdGVyKHRoaXMuYnVkZ2V0VGFiUm93cywgKHJvdzogQnVkZ2V0VGFiUm93KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUHVyY2hhc2VSb3cocm93KTtcclxuICAgICAgICB9KSBhcyBQdXJjaGFzZVJvd1tdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UHVyY2hhc2VzKCk6IEJ1ZGdldFRhYlJvd1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5idWRnZXRUYWJSb3dzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0TW9uZXkobW9uZXlOdW1iZXI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKG1vbmV5TnVtYmVyID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICckJyArIG1vbmV5TnVtYmVyLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICctJCcgKyAoLTEgKiBtb25leU51bWJlcikudG9GaXhlZCgyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUb3RhbEFtb3VudFN0cmluZygpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50U3RyaW5nLnRleHQgPSB0aGlzLmZvcm1hdE1vbmV5KHRoaXMudG90YWxBbW91bnQpO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlQnVkZ2V0KHRoaXMudG90YWxBbW91bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNQdXJjaGFzZVJvdyhyb3c6IEJ1ZGdldFRhYlJvdyk6IHJvdyBpcyBQdXJjaGFzZVJvdyB7XHJcbiAgICAgICAgcmV0dXJuIHJvdy5yb3dUeXBlID09PSBCdWRnZXRUYWJSb3dUeXBlLlB1cmNoYXNlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=