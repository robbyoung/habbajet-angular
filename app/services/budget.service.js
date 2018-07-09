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
        if (!this.validateCost(cost)) {
            return;
        }
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
    BudgetService.prototype.validateCost = function (cost) {
        return isFinite(cost) && cost > 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQywwQkFBNEI7QUFDNUIsdURBQWlFO0FBQ2pFLG1EQUFpRDtBQUNqRCwrQkFBaUM7QUFFakMsSUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUM7QUFDckMsSUFBTSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7QUFLcEMsSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLHlDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFGVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUUzQjtBQVdEO0lBT0ksdUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDckIsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFBO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTSw0Q0FBb0IsR0FBM0I7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7SUFFTSwrQ0FBdUIsR0FBOUIsVUFBK0IsSUFBa0IsRUFBRSxVQUE4QjtRQUM3RSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxV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SUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTyxxQ0FBYSxHQUFyQixVQUFzQixHQUFpQjtRQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFDckQsQ0FBQztJQTNGUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBUTBCLDhCQUFhO09BUHZDLGFBQWEsQ0E2RnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdGRCxJQTZGQztBQTdGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldEluZm8gfSBmcm9tIFwiLi9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSGFiYmFqZXRDaGVja2JveCwgQ2hlY2ttYXJrIH0gZnJvbSBcIi4vY2hlY2tib3guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTYXZpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vc2F2aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmNvbnN0IE5FR0FUSVZFX0JVREdFVF9NT0RJRklFUiA9IDAuOTtcclxuY29uc3QgTUFYX1BVUkNIQVNFX0xJU1RfTEVOR1RIID0gMjA7XHJcblxyXG4vLyBUT0RPOiBNYWtlIGEgJ3Nob3cgbW9yZScgcm93O1xyXG5leHBvcnQgdHlwZSBCdWRnZXRUYWJSb3cgPSBQdXJjaGFzZVJvdztcclxuXHJcbmV4cG9ydCBlbnVtIEJ1ZGdldFRhYlJvd1R5cGUge1xyXG4gICAgUHVyY2hhc2UgPSAncHVyY2hhc2UnLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFB1cmNoYXNlUm93IHtcclxuICAgIHJvd1R5cGU6IEJ1ZGdldFRhYlJvd1R5cGUuUHVyY2hhc2U7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjb3N0OiBzdHJpbmc7XHJcbiAgICBkYXRlOiBudW1iZXI7XHJcbiAgICBkYXRlU3RyaW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJ1ZGdldFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB0b3RhbEFtb3VudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0b3RhbEFtb3VudFN0cmluZzoge1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBwcml2YXRlIGJ1ZGdldFRhYlJvd3M6IEJ1ZGdldFRhYlJvd1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2F2aW5nU2VydmljZTogU2F2aW5nU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSB0aGlzLnNhdmluZ1NlcnZpY2UubG9hZEJ1ZGdldCgpO1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnRTdHJpbmcgPSB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJ1ZGdldFRhYlJvd3MgPSB0aGlzLnNhdmluZ1NlcnZpY2UubG9hZFB1cmNoYXNlcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VG90YWxBbW91bnRTdHJpbmcoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3RhbEFtb3VudFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVG9CdWRnZXRXaXRoSGFiYmFqZXQoaW5mbzogSGFiYmFqZXRJbmZvLCBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10pIHtcclxuICAgICAgICBsZXQgYW1vdW50VG9BZGQgPSBpbmZvLnZhbHVlO1xyXG4gICAgICAgIGxldCBzbGFja0RheXNMZWZ0ID0gaW5mby5zbGFjaztcclxuICAgICAgICBsZXQgcGVuYWx0eSA9IGluZm8uZmFjdG9yO1xyXG4gICAgICAgIF8uZWFjaChjaGVja2JveGVzLCAoY2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgaWYoY2hlY2tib3guY2hlY2ttYXJrICE9PSBDaGVja21hcmsuUG9zaXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmKHNsYWNrRGF5c0xlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xhY2tEYXlzTGVmdC0tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRUb0FkZCA9IGFtb3VudFRvQWRkIC8gcGVuYWx0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnRvdGFsQW1vdW50IDwgMCkge1xyXG4gICAgICAgICAgICBhbW91bnRUb0FkZCAqPSBORUdBVElWRV9CVURHRVRfTU9ESUZJRVI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSB0aGlzLnRvdGFsQW1vdW50ICsgYW1vdW50VG9BZGQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbEFtb3VudFN0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYWtlUHVyY2hhc2UobmFtZTogc3RyaW5nLCBjb3N0OiBudW1iZXIpIHtcclxuICAgICAgICBpZighdGhpcy52YWxpZGF0ZUNvc3QoY29zdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IE1vbWVudCgpLnVuaXgoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3UHVyY2hhc2U6IFB1cmNoYXNlUm93ID0ge1xyXG4gICAgICAgICAgICByb3dUeXBlOiBCdWRnZXRUYWJSb3dUeXBlLlB1cmNoYXNlLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBjb3N0OiB0aGlzLmZvcm1hdE1vbmV5KGNvc3QpLFxyXG4gICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICBkYXRlU3RyaW5nOiBNb21lbnQudW5peChkYXRlKS5jYWxlbmRhcigpLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYnVkZ2V0VGFiUm93cy51bnNoaWZ0KG5ld1B1cmNoYXNlKTtcclxuICAgICAgICBpZih0aGlzLmJ1ZGdldFRhYlJvd3MubGVuZ3RoID4gTUFYX1BVUkNIQVNFX0xJU1RfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVkZ2V0VGFiUm93cy5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMudG90YWxBbW91bnQgLSBjb3N0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVQdXJjaGFzZXMoXy5maWx0ZXIodGhpcy5idWRnZXRUYWJSb3dzLCAocm93OiBCdWRnZXRUYWJSb3cpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNQdXJjaGFzZVJvdyhyb3cpO1xyXG4gICAgICAgIH0pIGFzIFB1cmNoYXNlUm93W10pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVDb3N0KGNvc3Q6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBpc0Zpbml0ZShjb3N0KSAmJiBjb3N0ID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UHVyY2hhc2VzKCk6IEJ1ZGdldFRhYlJvd1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5idWRnZXRUYWJSb3dzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0TW9uZXkobW9uZXlOdW1iZXI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKG1vbmV5TnVtYmVyID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICckJyArIG1vbmV5TnVtYmVyLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICctJCcgKyAoLTEgKiBtb25leU51bWJlcikudG9GaXhlZCgyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUb3RhbEFtb3VudFN0cmluZygpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50U3RyaW5nLnRleHQgPSB0aGlzLmZvcm1hdE1vbmV5KHRoaXMudG90YWxBbW91bnQpO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlQnVkZ2V0KHRoaXMudG90YWxBbW91bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNQdXJjaGFzZVJvdyhyb3c6IEJ1ZGdldFRhYlJvdyk6IHJvdyBpcyBQdXJjaGFzZVJvdyB7XHJcbiAgICAgICAgcmV0dXJuIHJvdy5yb3dUeXBlID09PSBCdWRnZXRUYWJSb3dUeXBlLlB1cmNoYXNlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=