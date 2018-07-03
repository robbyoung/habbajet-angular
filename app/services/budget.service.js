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
var BudgetService = /** @class */ (function () {
    function BudgetService(savingService) {
        this.savingService = savingService;
        this.totalAmount = this.savingService.loadBudget();
        this.totalAmountString = {
            text: '',
        };
        this.purchases = this.savingService.loadPurchases();
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
        if (!this.validateCost(cost)) {
            return;
        }
        var date = Moment().unix();
        this.purchases.unshift({
            name: name,
            cost: this.formatMoney(cost),
            date: date,
            dateString: Moment.unix(date).calendar(),
        });
        this.totalAmount = this.totalAmount - cost;
        this.updateTotalAmountString();
        this.savingService.savePurchases(this.purchases);
    };
    BudgetService.prototype.validateCost = function (cost) {
        return isFinite(cost) && cost > 0;
    };
    BudgetService.prototype.getPurchases = function () {
        return this.purchases;
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
    BudgetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [saving_service_1.SavingService])
    ], BudgetService);
    return BudgetService;
}());
exports.BudgetService = BudgetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQywwQkFBNEI7QUFDNUIsdURBQWlFO0FBQ2pFLG1EQUFpRDtBQUNqRCwrQkFBaUM7QUFFakMsSUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUM7QUFVckM7SUFPSSx1QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUNyQixJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUE7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVNLDRDQUFvQixHQUEzQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVNLCtDQUF1QixHQUE5QixVQUErQixJQUFrQixFQUFFLFVBQThCO1FBQzdFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsUUFBUTtZQUN4QixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsU0FBUyxLQUFLLDRCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsRUFBRSxDQUFBLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLGFBQWEsRUFBRSxDQUFDO2dCQUNwQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLFdBQVcsR0FBRyxXQUFXLEdBQUcsT0FBTyxDQUFDO2dCQUN4QyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFdBQVcsSUFBSSx3QkFBd0IsQ0FBQztRQUM1QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU0sb0NBQVksR0FBbkIsVUFBb0IsSUFBWSxFQUFFLElBQVk7UUFDMUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBTSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDbkIsSUFBSSxNQUFBO1lBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksTUFBQTtZQUNKLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtTQUMzQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sb0NBQVksR0FBcEIsVUFBcUIsSUFBWTtRQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLG9DQUFZLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLFdBQW1CO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDTCxDQUFDO0lBRU8sK0NBQXVCLEdBQS9CO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQTVFUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBUTBCLDhCQUFhO09BUHZDLGFBQWEsQ0E4RXpCO0lBQUQsb0JBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldEluZm8gfSBmcm9tIFwiLi9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSGFiYmFqZXRDaGVja2JveCwgQ2hlY2ttYXJrIH0gZnJvbSBcIi4vY2hlY2tib3guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTYXZpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vc2F2aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmNvbnN0IE5FR0FUSVZFX0JVREdFVF9NT0RJRklFUiA9IDAuOTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VSZWNvcmQge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY29zdDogc3RyaW5nO1xyXG4gICAgZGF0ZTogbnVtYmVyO1xyXG4gICAgZGF0ZVN0cmluZzogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCdWRnZXRTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdG90YWxBbW91bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdG90YWxBbW91bnRTdHJpbmc6IHtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBwdXJjaGFzZXM6IFB1cmNoYXNlUmVjb3JkW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYXZpbmdTZXJ2aWNlOiBTYXZpbmdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMuc2F2aW5nU2VydmljZS5sb2FkQnVkZ2V0KCk7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudFN0cmluZyA9IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVyY2hhc2VzID0gdGhpcy5zYXZpbmdTZXJ2aWNlLmxvYWRQdXJjaGFzZXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRvdGFsQW1vdW50U3RyaW5nKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxBbW91bnRTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRvQnVkZ2V0V2l0aEhhYmJhamV0KGluZm86IEhhYmJhamV0SW5mbywgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdKSB7XHJcbiAgICAgICAgbGV0IGFtb3VudFRvQWRkID0gaW5mby52YWx1ZTtcclxuICAgICAgICBsZXQgc2xhY2tEYXlzTGVmdCA9IGluZm8uc2xhY2s7XHJcbiAgICAgICAgbGV0IHBlbmFsdHkgPSBpbmZvLmZhY3RvcjtcclxuICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGNoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrYm94LmNoZWNrbWFyayAhPT0gQ2hlY2ttYXJrLlBvc2l0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzbGFja0RheXNMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsYWNrRGF5c0xlZnQtLTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50VG9BZGQgPSBhbW91bnRUb0FkZCAvIHBlbmFsdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy50b3RhbEFtb3VudCA8IDApIHtcclxuICAgICAgICAgICAgYW1vdW50VG9BZGQgKj0gTkVHQVRJVkVfQlVER0VUX01PRElGSUVSO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdGhpcy50b3RhbEFtb3VudCArIGFtb3VudFRvQWRkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFrZVB1cmNoYXNlKG5hbWU6IHN0cmluZywgY29zdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYoIXRoaXMudmFsaWRhdGVDb3N0KGNvc3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBNb21lbnQoKS51bml4KCk7XHJcbiAgICAgICAgdGhpcy5wdXJjaGFzZXMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGNvc3Q6IHRoaXMuZm9ybWF0TW9uZXkoY29zdCksXHJcbiAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgIGRhdGVTdHJpbmc6IE1vbWVudC51bml4KGRhdGUpLmNhbGVuZGFyKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMudG90YWxBbW91bnQgLSBjb3N0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZVB1cmNoYXNlcyh0aGlzLnB1cmNoYXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUNvc3QoY29zdDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGlzRmluaXRlKGNvc3QpICYmIGNvc3QgPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQdXJjaGFzZXMoKTogUHVyY2hhc2VSZWNvcmRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVyY2hhc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0TW9uZXkobW9uZXlOdW1iZXI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKG1vbmV5TnVtYmVyID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICckJyArIG1vbmV5TnVtYmVyLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICctJCcgKyAoLTEgKiBtb25leU51bWJlcikudG9GaXhlZCgyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUb3RhbEFtb3VudFN0cmluZygpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50U3RyaW5nLnRleHQgPSB0aGlzLmZvcm1hdE1vbmV5KHRoaXMudG90YWxBbW91bnQpO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlQnVkZ2V0KHRoaXMudG90YWxBbW91bnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=