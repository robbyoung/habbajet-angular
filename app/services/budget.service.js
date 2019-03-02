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
            absoluteDateString: date !== 0 ? Moment.unix(date).format(exports.ABSOLUTE_DATE_FORMAT) : '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQywwQkFBNEI7QUFDNUIsK0JBQWlDO0FBQ2pDLHVEQUFpRTtBQUVqRSxtREFBaUQ7QUFFakQsSUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUM7QUFDckMsSUFBTSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7QUFDdkIsUUFBQSxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztBQUszRCxJQUFZLGdCQUVYO0FBRkQsV0FBWSxnQkFBZ0I7SUFDeEIseUNBQXFCLENBQUE7QUFDekIsQ0FBQyxFQUZXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRTNCO0FBWUQ7SUFTSSx1QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUNyQixJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVNLDRDQUFvQixHQUEzQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7SUFFTSwrQ0FBdUIsR0FBOUIsVUFBK0IsSUFBa0IsRUFBRSxVQUE4QjtRQUM3RSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLFFBQVE7WUFDeEIsSUFBSSxRQUFRLENBQUMsU0FBUyxLQUFLLDRCQUFTLENBQUMsUUFBUSxFQUFFO2dCQUMzQyxJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLGFBQWEsRUFBRSxDQUFDO2lCQUNuQjtxQkFBTTtvQkFDSCxXQUFXLEdBQUcsV0FBVyxHQUFHLE9BQU8sQ0FBQztpQkFDdkM7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUN0QixXQUFXLElBQUksd0JBQXdCLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ2xELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEIsVUFBeUIsSUFBa0IsRUFBRSxVQUE4QjtRQUN2RSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDdEMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsUUFBUTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxTQUFTLEtBQUssNEJBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzNDLElBQUksYUFBYSxHQUFHLENBQUMsRUFBRTtvQkFDbkIsYUFBYSxFQUFFLENBQUM7aUJBQ25CO3FCQUFNO29CQUNILGNBQWMsR0FBRyxjQUFjLEdBQUcsT0FBTyxDQUFDO2lCQUM3QzthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLGNBQWMsSUFBSSx3QkFBd0IsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsNEJBQTRCLEVBQUU7WUFDeEUsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBRU0sb0NBQVksR0FBbkIsVUFBb0IsSUFBWSxFQUFFLElBQVk7UUFDMUMsSUFBTSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFN0IsSUFBTSxXQUFXLEdBQWdCO1lBQzdCLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRO1lBQ2xDLElBQUksTUFBQTtZQUNKLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLE1BQUE7WUFDSixrQkFBa0IsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNoRCxrQkFBa0IsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyw0QkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ3ZGLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLHdCQUF3QixFQUFFO1lBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sb0NBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVNLHVDQUFlLEdBQXRCLFVBQXVCLElBQVksRUFBRSxPQUFlLEVBQUUsT0FBZTtRQUNqRSxJQUFNLFFBQVEsR0FBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQUMsR0FBRztZQUN6RCxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLFdBQVcsSUFBSSxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ2xELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRS9CLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVoRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQUMsR0FBRztnQkFDbEQsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxtQ0FBVyxHQUFuQixVQUFvQixXQUFtQjtRQUNuQyxJQUFJLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDbEIsT0FBTyxHQUFHLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0gsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBRU8sK0NBQXVCLEdBQS9CO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLHFDQUFhLEdBQXJCLFVBQXNCLEdBQWlCO1FBQ25DLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFDckQsQ0FBQztJQUVPLHFDQUFhLEdBQXJCO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsVUFBQyxHQUFpQjtZQUM1RSxPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFrQixDQUFDLENBQUM7SUFDekIsQ0FBQztJQS9JUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBVTBCLDhCQUFhO09BVHZDLGFBQWEsQ0FnSnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhKRCxJQWdKQztBQWhKWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgKiBhcyBNb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQ2hlY2ttYXJrLCBIYWJiYWpldENoZWNrYm94IH0gZnJvbSAnLi9jaGVja2JveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGFiYmFqZXRJbmZvIH0gZnJvbSAnLi9oYWJiYWpldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2F2aW5nU2VydmljZSB9IGZyb20gJy4vc2F2aW5nLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgTkVHQVRJVkVfQlVER0VUX01PRElGSUVSID0gMC45O1xyXG5jb25zdCBNQVhfUFVSQ0hBU0VfTElTVF9MRU5HVEggPSAyMDtcclxuZXhwb3J0IGNvbnN0IEFCU09MVVRFX0RBVEVfRk9STUFUID0gJ0RvIE1NTU0gWVlZWSwgaDptbSBhJztcclxuXHJcbi8vIFRPRE86IE1ha2UgYSAnc2hvdyBtb3JlJyByb3c7XHJcbmV4cG9ydCB0eXBlIEJ1ZGdldFRhYlJvdyA9IFB1cmNoYXNlUm93O1xyXG5cclxuZXhwb3J0IGVudW0gQnVkZ2V0VGFiUm93VHlwZSB7XHJcbiAgICBQdXJjaGFzZSA9ICdwdXJjaGFzZScsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VSb3cge1xyXG4gICAgcm93VHlwZTogQnVkZ2V0VGFiUm93VHlwZS5QdXJjaGFzZTtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvc3Q6IHN0cmluZztcclxuICAgIGRhdGU6IG51bWJlcjtcclxuICAgIHJlbGF0aXZlRGF0ZVN0cmluZzogc3RyaW5nO1xyXG4gICAgYWJzb2x1dGVEYXRlU3RyaW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJ1ZGdldFNlcnZpY2Uge1xyXG4gICAgcHVibGljIG9uUHVyY2hhc2VDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50U3RyaW5nOiB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgYnVkZ2V0VGFiUm93czogQnVkZ2V0VGFiUm93W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYXZpbmdTZXJ2aWNlOiBTYXZpbmdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMuc2F2aW5nU2VydmljZS5sb2FkQnVkZ2V0KCk7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudFN0cmluZyA9IHtcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJ1ZGdldFRhYlJvd3MgPSB0aGlzLnNhdmluZ1NlcnZpY2UubG9hZFB1cmNoYXNlcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLm9uUHVyY2hhc2VDYWxsYmFjayA9IF8ubm9vcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VG90YWxBbW91bnRTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxBbW91bnRTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRvQnVkZ2V0V2l0aEhhYmJhamV0KGluZm86IEhhYmJhamV0SW5mbywgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdKSB7XHJcbiAgICAgICAgbGV0IGFtb3VudFRvQWRkID0gaW5mby52YWx1ZTtcclxuICAgICAgICBsZXQgc2xhY2tEYXlzTGVmdCA9IGluZm8uc2xhY2s7XHJcbiAgICAgICAgY29uc3QgcGVuYWx0eSA9IGluZm8uZmFjdG9yO1xyXG4gICAgICAgIF8uZWFjaChjaGVja2JveGVzLCAoY2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrbWFyayAhPT0gQ2hlY2ttYXJrLlBvc2l0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xhY2tEYXlzTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGFja0RheXNMZWZ0LS07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudFRvQWRkID0gYW1vdW50VG9BZGQgLyBwZW5hbHR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxBbW91bnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGFtb3VudFRvQWRkICo9IE5FR0FUSVZFX0JVREdFVF9NT0RJRklFUjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRoaXMudG90YWxBbW91bnQgKyBhbW91bnRUb0FkZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsQW1vdW50U3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5vblB1cmNoYXNlQ2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RXhwZWN0ZWRQYXlvdXQoaW5mbzogSGFiYmFqZXRJbmZvLCBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10pIHtcclxuICAgICAgICBsZXQgZXhwZWN0ZWRQYXlvdXQgPSBpbmZvLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG9sZFBheW91dCA9IGluZm8uZXhwZWN0ZWRQYXlvdXQ7XHJcbiAgICAgICAgbGV0IHNsYWNrRGF5c0xlZnQgPSBpbmZvLnNsYWNrO1xyXG4gICAgICAgIGNvbnN0IHBlbmFsdHkgPSBpbmZvLmZhY3RvcjtcclxuICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGNoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja21hcmsgPT09IENoZWNrbWFyay5OZWdhdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsYWNrRGF5c0xlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xhY2tEYXlzTGVmdC0tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZFBheW91dCA9IGV4cGVjdGVkUGF5b3V0IC8gcGVuYWx0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnRvdGFsQW1vdW50IDwgMCkge1xyXG4gICAgICAgICAgICBleHBlY3RlZFBheW91dCAqPSBORUdBVElWRV9CVURHRVRfTU9ESUZJRVI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZm8uZXhwZWN0ZWRQYXlvdXQgPSB0aGlzLmZvcm1hdE1vbmV5KGV4cGVjdGVkUGF5b3V0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxBbW91bnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGluZm8uZXhwZWN0ZWRQYXlvdXQgKz0gJyAoLTEwJSknO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZm8uZXhwZWN0ZWRQYXlvdXQgIT09IG9sZFBheW91dCAmJiBpbmZvLmV4cGVjdGVkUGF5b3V0VXBkYXRlQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaW5mby5leHBlY3RlZFBheW91dFVwZGF0ZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYWtlUHVyY2hhc2UobmFtZTogc3RyaW5nLCBjb3N0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gTW9tZW50KCkudW5peCgpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdQdXJjaGFzZTogUHVyY2hhc2VSb3cgPSB7XHJcbiAgICAgICAgICAgIHJvd1R5cGU6IEJ1ZGdldFRhYlJvd1R5cGUuUHVyY2hhc2UsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGNvc3Q6IHRoaXMuZm9ybWF0TW9uZXkoY29zdCksXHJcbiAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgIHJlbGF0aXZlRGF0ZVN0cmluZzogTW9tZW50LnVuaXgoZGF0ZSkuY2FsZW5kYXIoKSxcclxuICAgICAgICAgICAgYWJzb2x1dGVEYXRlU3RyaW5nOiBkYXRlICE9PSAwID8gTW9tZW50LnVuaXgoZGF0ZSkuZm9ybWF0KEFCU09MVVRFX0RBVEVfRk9STUFUKSA6ICcnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYnVkZ2V0VGFiUm93cy51bnNoaWZ0KG5ld1B1cmNoYXNlKTtcclxuICAgICAgICBpZiAodGhpcy5idWRnZXRUYWJSb3dzLmxlbmd0aCA+IE1BWF9QVVJDSEFTRV9MSVNUX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZGdldFRhYlJvd3MucG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdGhpcy50b3RhbEFtb3VudCAtIGNvc3Q7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbEFtb3VudFN0cmluZygpO1xyXG5cclxuICAgICAgICB0aGlzLm9uUHVyY2hhc2VDYWxsYmFjaygpO1xyXG4gICAgICAgIHRoaXMuc2F2ZVB1cmNoYXNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQdXJjaGFzZXMoKTogQnVkZ2V0VGFiUm93W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZGdldFRhYlJvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvcnJlY3RQdXJjaGFzZShkYXRlOiBudW1iZXIsIG5ld05hbWU6IHN0cmluZywgbmV3Q29zdDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcHVyY2hhc2U6IFB1cmNoYXNlUm93ID0gXy5maW5kKHRoaXMuYnVkZ2V0VGFiUm93cywgKHJvdykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcm93LmRhdGUgPT09IGRhdGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbmV3Q29zdE51bWJlciA9IF8udG9OdW1iZXIobmV3Q29zdCk7XHJcbiAgICAgICAgY29uc3Qgb2xkQ29zdE51bWJlciA9IF8udG9OdW1iZXIocHVyY2hhc2UuY29zdC5zdWJzdHJpbmcoMSkpO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ICs9IG9sZENvc3ROdW1iZXIgLSBuZXdDb3N0TnVtYmVyO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgcHVyY2hhc2UubmFtZSA9IG5ld05hbWU7XHJcbiAgICAgICAgcHVyY2hhc2UuY29zdCA9IHRoaXMuZm9ybWF0TW9uZXkobmV3Q29zdE51bWJlcik7XHJcblxyXG4gICAgICAgIGlmIChwdXJjaGFzZS5jb3N0ID09PSAnJDAuMDAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVkZ2V0VGFiUm93cyA9IF8uZmlsdGVyKHRoaXMuYnVkZ2V0VGFiUm93cywgKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdy5kYXRlICE9PSBkYXRlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vblB1cmNoYXNlQ2FsbGJhY2soKTtcclxuICAgICAgICB0aGlzLnNhdmVQdXJjaGFzZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcm1hdE1vbmV5KG1vbmV5TnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChtb25leU51bWJlciA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJCcgKyBtb25leU51bWJlci50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnLSQnICsgKC0xICogbW9uZXlOdW1iZXIpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVG90YWxBbW91bnRTdHJpbmcoKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudFN0cmluZy50ZXh0ID0gdGhpcy5mb3JtYXRNb25leSh0aGlzLnRvdGFsQW1vdW50KTtcclxuICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZUJ1ZGdldCh0aGlzLnRvdGFsQW1vdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUHVyY2hhc2VSb3cocm93OiBCdWRnZXRUYWJSb3cpOiByb3cgaXMgUHVyY2hhc2VSb3cge1xyXG4gICAgICAgIHJldHVybiByb3cucm93VHlwZSA9PT0gQnVkZ2V0VGFiUm93VHlwZS5QdXJjaGFzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVQdXJjaGFzZXMoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVQdXJjaGFzZXMoXy5maWx0ZXIodGhpcy5idWRnZXRUYWJSb3dzLCAocm93OiBCdWRnZXRUYWJSb3cpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNQdXJjaGFzZVJvdyhyb3cpO1xyXG4gICAgICAgIH0pIGFzIFB1cmNoYXNlUm93W10pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==