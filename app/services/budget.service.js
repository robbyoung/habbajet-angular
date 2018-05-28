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
var BudgetService = /** @class */ (function () {
    function BudgetService() {
        this.totalAmount = 0;
        this.totalAmountString = {
            text: '',
        };
        this.purchases = [{
                name: 'test',
                cost: '100',
            }];
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
        this.totalAmount = this.totalAmount + amountToAdd;
        this.updateTotalAmountString();
    };
    BudgetService.prototype.makePurchase = function (name, cost) {
        if (!this.validateCost(cost)) {
            return;
        }
        this.purchases.push({
            name: name,
            cost: this.formatMoney(cost),
        });
        this.totalAmount = this.totalAmount - cost;
        this.updateTotalAmountString();
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
    };
    BudgetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BudgetService);
    return BudgetService;
}());
exports.BudgetService = BudgetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUczQywwQkFBNEI7QUFDNUIsdURBQWlFO0FBUWpFO0lBT0k7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDckIsSUFBSSxFQUFFLEVBQUU7U0FDWCxDQUFBO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDO2dCQUNkLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxLQUFLO2FBQ2QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVNLDRDQUFvQixHQUEzQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVNLCtDQUF1QixHQUE5QixVQUErQixJQUFrQixFQUFFLFVBQThCO1FBQzdFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsUUFBUTtZQUN4QixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsU0FBUyxLQUFLLDRCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsRUFBRSxDQUFBLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLGFBQWEsRUFBRSxDQUFDO2dCQUNwQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLFdBQVcsR0FBRyxXQUFXLEdBQUcsT0FBTyxDQUFDO2dCQUN4QyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU0sb0NBQVksR0FBbkIsVUFBb0IsSUFBWSxFQUFFLElBQVk7UUFDMUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxNQUFBO1lBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1NBQy9CLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVPLG9DQUFZLEdBQXBCLFVBQXFCLElBQVk7UUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxvQ0FBWSxHQUFuQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTyxtQ0FBVyxHQUFuQixVQUFvQixXQUFtQjtRQUNuQyxFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0wsQ0FBQztJQUVPLCtDQUF1QixHQUEvQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQXRFUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQXdFekI7SUFBRCxvQkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHNhdmVPYmplY3QgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UsIEhhYmJhamV0SW5mbyB9IGZyb20gXCIuL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBIYWJiYWpldENoZWNrYm94LCBDaGVja21hcmsgfSBmcm9tIFwiLi9jaGVja2JveC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFB1cmNoYXNlUmVjb3JkIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvc3Q6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnVkZ2V0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50U3RyaW5nOiB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgcHVyY2hhc2VzOiBQdXJjaGFzZVJlY29yZFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnRTdHJpbmcgPSB7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnB1cmNoYXNlcyA9IFt7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0ZXN0JyxcclxuICAgICAgICAgICAgY29zdDogJzEwMCcsXHJcbiAgICAgICAgfV07XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbEFtb3VudFN0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb3RhbEFtb3VudFN0cmluZygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsQW1vdW50U3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUb0J1ZGdldFdpdGhIYWJiYWpldChpbmZvOiBIYWJiYWpldEluZm8sIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSkge1xyXG4gICAgICAgIGxldCBhbW91bnRUb0FkZCA9IGluZm8udmFsdWU7XHJcbiAgICAgICAgbGV0IHNsYWNrRGF5c0xlZnQgPSBpbmZvLnNsYWNrO1xyXG4gICAgICAgIGxldCBwZW5hbHR5ID0gaW5mby5mYWN0b3I7XHJcbiAgICAgICAgXy5lYWNoKGNoZWNrYm94ZXMsIChjaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjaGVja2JveC5jaGVja21hcmsgIT09IENoZWNrbWFyay5Qb3NpdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoc2xhY2tEYXlzTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGFja0RheXNMZWZ0LS07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudFRvQWRkID0gYW1vdW50VG9BZGQgLyBwZW5hbHR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMudG90YWxBbW91bnQgKyBhbW91bnRUb0FkZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VQdXJjaGFzZShuYW1lOiBzdHJpbmcsIGNvc3Q6IG51bWJlcikge1xyXG4gICAgICAgIGlmKCF0aGlzLnZhbGlkYXRlQ29zdChjb3N0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVyY2hhc2VzLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBjb3N0OiB0aGlzLmZvcm1hdE1vbmV5KGNvc3QpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSB0aGlzLnRvdGFsQW1vdW50IC0gY29zdDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUNvc3QoY29zdDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGlzRmluaXRlKGNvc3QpICYmIGNvc3QgPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQdXJjaGFzZXMoKTogUHVyY2hhc2VSZWNvcmRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVyY2hhc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0TW9uZXkobW9uZXlOdW1iZXI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKG1vbmV5TnVtYmVyID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICckJyArIG1vbmV5TnVtYmVyLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICctJCcgKyAoLTEgKiBtb25leU51bWJlcikudG9GaXhlZCgyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUb3RhbEFtb3VudFN0cmluZygpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50U3RyaW5nLnRleHQgPSB0aGlzLmZvcm1hdE1vbmV5KHRoaXMudG90YWxBbW91bnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=