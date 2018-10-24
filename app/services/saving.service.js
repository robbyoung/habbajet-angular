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
var saveObject = require("tns-core-modules/application-settings/application-settings");
var budget_service_1 = require("./budget.service");
var checkbox_service_1 = require("./checkbox.service");
var SavingService = /** @class */ (function () {
    function SavingService(checkboxService) {
        this.checkboxService = checkboxService;
    }
    SavingService.prototype.saveHabbajetList = function (habbajetList) {
        var _this = this;
        this.clearHabbajetData();
        _.each(habbajetList, function (habbajet, index) {
            if (habbajet !== undefined) {
                _this.saveHabbajet(habbajet.name, habbajet.info, habbajet.image, habbajet.checkboxes, index);
            }
        });
    };
    SavingService.prototype.saveHabbajet = function (name, info, image, checkboxes, index) {
        saveObject.setString("hName" + index, name);
        saveObject.setNumber("hState" + index, image.state);
        saveObject.setString("hColor" + index, image.color);
        this.saveHabbajetInfo(info, index);
        this.saveHabbajetCheckboxes(checkboxes, index);
    };
    SavingService.prototype.loadHabbajetList = function (habbajetService) {
        var index = 0;
        while (saveObject.hasKey("hName" + index)) {
            var name_1 = saveObject.getString("hName" + index);
            var state = saveObject.getNumber("hState" + index);
            var color = saveObject.getString("hColor" + index);
            var streak = saveObject.getNumber("hStreak" + index);
            var value = saveObject.getNumber("hValue" + index);
            var factor = saveObject.getNumber("hFactor" + index);
            var slack = saveObject.getNumber("hSlack" + index);
            var best = saveObject.getNumber("hBest" + index, 0);
            var checkboxes = this.checkboxService.getCurrentWeek();
            _.each(checkboxes, function (c, i) {
                c.checkmark = saveObject.getNumber("hCheckbox" + i + index);
            });
            var startOfWeek = saveObject.getString("hWeekStart" + index);
            habbajetService.newHabbajetFromSave(name_1, state, value, factor, slack, color, streak, checkboxes, startOfWeek, best);
            index++;
        }
    };
    SavingService.prototype.clearHabbajetData = function () {
        var index = 0;
        while (saveObject.hasKey("hName" + index)) {
            saveObject.remove("hName" + index);
            saveObject.remove("hState" + index);
            saveObject.remove("hColor" + index);
            saveObject.remove("hStreak" + index);
            saveObject.remove("hValue" + index);
            saveObject.remove("hFactor" + index);
            saveObject.remove("hSlack" + index);
            var checkboxes = this.checkboxService.getCurrentWeek();
            _.each(checkboxes, function (c, i) {
                saveObject.remove("hCheckbox" + i + index);
            });
            saveObject.remove("hWeekStart" + index);
            index++;
        }
    };
    SavingService.prototype.clearPurchaseData = function () {
        var index = 0;
        while (saveObject.hasKey("pName" + index)) {
            saveObject.remove("pName" + index);
            saveObject.remove("pCost" + index);
            saveObject.remove("pDate" + index);
            index++;
        }
    };
    SavingService.prototype.saveBudget = function (budget) {
        saveObject.setNumber('budget', budget);
    };
    SavingService.prototype.loadBudget = function () {
        if (saveObject.hasKey('budget')) {
            return saveObject.getNumber('budget');
        }
        else {
            return 0;
        }
    };
    SavingService.prototype.savePurchases = function (purchases) {
        this.clearPurchaseData();
        _.each(purchases, function (purchase, index) {
            saveObject.setString("pName" + index, purchase.name);
            saveObject.setString("pCost" + index, purchase.cost);
            saveObject.setNumber("pDate" + index, purchase.date);
        });
    };
    SavingService.prototype.loadPurchases = function () {
        var index = 0;
        var purchases = [];
        while (saveObject.hasKey("pName" + index)) {
            var date = saveObject.hasKey("pDate" + index) ? saveObject.getNumber("pDate" + index) : 0;
            purchases.push({
                rowType: budget_service_1.BudgetTabRowType.Purchase,
                name: saveObject.getString("pName" + index),
                cost: saveObject.getString("pCost" + index),
                date: date,
                relativeDateString: date !== 0 ? Moment.unix(date).calendar() : '',
                absoluteDateString: date !== 0 ? Moment.unix(date).format(budget_service_1.ABSOLUTE_DATE_FORMAT) : '',
            });
            index++;
        }
        return purchases;
    };
    SavingService.prototype.saveHabbajetInfo = function (info, index) {
        saveObject.setNumber("hStreak" + index, info.streak);
        saveObject.setNumber("hValue" + index, info.value);
        saveObject.setNumber("hFactor" + index, info.factor);
        saveObject.setNumber("hSlack" + index, info.slack);
        saveObject.setNumber("hStreak" + index, info.streak);
        saveObject.setNumber("hBest" + index, info.best);
    };
    SavingService.prototype.saveHabbajetCheckboxes = function (checkboxes, index) {
        _.each(checkboxes, function (c, i) {
            saveObject.setNumber("hCheckbox" + i + index, c.checkmark);
        });
        saveObject.setString("hWeekStart" + index, checkboxes[0].moment.format('dddd Do MMM'));
    };
    SavingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [checkbox_service_1.CheckboxService])
    ], SavingService);
    return SavingService;
}());
exports.SavingService = SavingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQywwQkFBNEI7QUFDNUIsK0JBQWlDO0FBQ2pDLHVGQUF5RjtBQUN6RixtREFBdUY7QUFDdkYsdURBQXVFO0FBS3ZFO0lBQ0ksdUJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFakQsd0NBQWdCLEdBQXZCLFVBQXdCLFlBQXdCO1FBQWhELGlCQU9DO1FBTkcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBQyxRQUFRLEVBQUUsS0FBSztZQUNqQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDekIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hHLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxvQ0FBWSxHQUFuQixVQUFvQixJQUFZLEVBQUUsSUFBa0IsRUFBRSxLQUFpQixFQUNuRCxVQUE4QixFQUFFLEtBQWE7UUFDN0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFRLEtBQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxF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QUMsWUFBVSxLQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBUyxLQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELFVBQVUsQ0FBQyxTQUFTLENBQUMsWUFBVSxLQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBUyxLQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELFVBQVUsQ0FBQyxTQUFTLENBQUMsWUFBVSxLQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBUSxLQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTyw4Q0FBc0IsR0FBOUIsVUFBK0IsVUFBOEIsRUFBRSxLQUFhO1FBQ3hFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDcEIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxjQUFZLENBQUMsR0FBRyxLQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFhLEtBQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFsSVEsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUU0QixrQ0FBZTtPQUQzQyxhQUFhLENBb0l6QjtJQUFELG9CQUFDO0NBQUEsQUFwSUQsSUFvSUM7QUFwSVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICogYXMgTW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAqIGFzIHNhdmVPYmplY3QgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcbmltcG9ydCB7IEFCU09MVVRFX0RBVEVfRk9STUFULCBCdWRnZXRUYWJSb3dUeXBlLCBQdXJjaGFzZVJvdyB9IGZyb20gJy4vYnVkZ2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDaGVja2JveFNlcnZpY2UsIEhhYmJhamV0Q2hlY2tib3ggfSBmcm9tICcuL2NoZWNrYm94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIYWJiYWpldCwgSGFiYmFqZXRJbmZvLCBIYWJiYWpldFNlcnZpY2UgfSBmcm9tICcuL2hhYmJhamV0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRlIH0gZnJvbSAnLi9pbWFnZXMuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTYXZpbmdTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hlY2tib3hTZXJ2aWNlOiBDaGVja2JveFNlcnZpY2UpIHt9XHJcblxyXG4gICAgcHVibGljIHNhdmVIYWJiYWpldExpc3QoaGFiYmFqZXRMaXN0OiBIYWJiYWpldFtdKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckhhYmJhamV0RGF0YSgpO1xyXG4gICAgICAgIF8uZWFjaChoYWJiYWpldExpc3QsIChoYWJiYWpldCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhYmJhamV0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUhhYmJhamV0KGhhYmJhamV0Lm5hbWUsIGhhYmJhamV0LmluZm8sIGhhYmJhamV0LmltYWdlLCBoYWJiYWpldC5jaGVja2JveGVzLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUhhYmJhamV0KG5hbWU6IHN0cmluZywgaW5mbzogSGFiYmFqZXRJbmZvLCBpbWFnZTogSW1hZ2VTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYGhOYW1lJHtpbmRleH1gLCBuYW1lKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaFN0YXRlJHtpbmRleH1gLCBpbWFnZS5zdGF0ZSk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYGhDb2xvciR7aW5kZXh9YCwgaW1hZ2UuY29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2F2ZUhhYmJhamV0SW5mbyhpbmZvLCBpbmRleCk7XHJcbiAgICAgICAgdGhpcy5zYXZlSGFiYmFqZXRDaGVja2JveGVzKGNoZWNrYm94ZXMsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEhhYmJhamV0TGlzdChoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKHNhdmVPYmplY3QuaGFzS2V5KGBoTmFtZSR7aW5kZXh9YCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHNhdmVPYmplY3QuZ2V0U3RyaW5nKGBoTmFtZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhTdGF0ZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc2F2ZU9iamVjdC5nZXRTdHJpbmcoYGhDb2xvciR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhayA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoU3RyZWFrJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaFZhbHVlJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3QgZmFjdG9yID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhGYWN0b3Ike2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBzbGFjayA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoU2xhY2ske2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBiZXN0ID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhCZXN0JHtpbmRleH1gLCAwKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0aGlzLmNoZWNrYm94U2VydmljZS5nZXRDdXJyZW50V2VlaygpO1xyXG4gICAgICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGMuY2hlY2ttYXJrID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhDaGVja2JveCR7aX0ke2luZGV4fWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRPZldlZWsgPSBzYXZlT2JqZWN0LmdldFN0cmluZyhgaFdlZWtTdGFydCR7aW5kZXh9YCk7XHJcblxyXG4gICAgICAgICAgICBoYWJiYWpldFNlcnZpY2UubmV3SGFiYmFqZXRGcm9tU2F2ZShuYW1lLCBzdGF0ZSwgdmFsdWUsIGZhY3Rvciwgc2xhY2ssIGNvbG9yLCBzdHJlYWssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94ZXMsIHN0YXJ0T2ZXZWVrLCBiZXN0KTtcclxuXHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckhhYmJhamV0RGF0YSgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlIChzYXZlT2JqZWN0Lmhhc0tleShgaE5hbWUke2luZGV4fWApKSB7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBoTmFtZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBoU3RhdGUke2luZGV4fWApO1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaENvbG9yJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5yZW1vdmUoYGhTdHJlYWske2luZGV4fWApO1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaFZhbHVlJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5yZW1vdmUoYGhGYWN0b3Ike2luZGV4fWApO1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaFNsYWNrJHtpbmRleH1gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0aGlzLmNoZWNrYm94U2VydmljZS5nZXRDdXJyZW50V2VlaygpO1xyXG4gICAgICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBoQ2hlY2tib3gke2l9JHtpbmRleH1gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBoV2Vla1N0YXJ0JHtpbmRleH1gKTtcclxuXHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhclB1cmNoYXNlRGF0YSgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlIChzYXZlT2JqZWN0Lmhhc0tleShgcE5hbWUke2luZGV4fWApKSB7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBwTmFtZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBwQ29zdCR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBwRGF0ZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlQnVkZ2V0KGJ1ZGdldDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoJ2J1ZGdldCcsIGJ1ZGdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRCdWRnZXQoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoc2F2ZU9iamVjdC5oYXNLZXkoJ2J1ZGdldCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzYXZlT2JqZWN0LmdldE51bWJlcignYnVkZ2V0Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlUHVyY2hhc2VzKHB1cmNoYXNlczogUHVyY2hhc2VSb3dbXSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJQdXJjaGFzZURhdGEoKTtcclxuICAgICAgICBfLmVhY2gocHVyY2hhc2VzLCAocHVyY2hhc2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBwTmFtZSR7aW5kZXh9YCwgcHVyY2hhc2UubmFtZSk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBwQ29zdCR7aW5kZXh9YCwgcHVyY2hhc2UuY29zdCk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBwRGF0ZSR7aW5kZXh9YCwgcHVyY2hhc2UuZGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRQdXJjaGFzZXMoKTogUHVyY2hhc2VSb3dbXSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBjb25zdCBwdXJjaGFzZXM6IFB1cmNoYXNlUm93W10gPSBbXTtcclxuICAgICAgICB3aGlsZSAoc2F2ZU9iamVjdC5oYXNLZXkoYHBOYW1lJHtpbmRleH1gKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gc2F2ZU9iamVjdC5oYXNLZXkoYHBEYXRlJHtpbmRleH1gKSA/IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBwRGF0ZSR7aW5kZXh9YCkgOiAwO1xyXG4gICAgICAgICAgICBwdXJjaGFzZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICByb3dUeXBlOiBCdWRnZXRUYWJSb3dUeXBlLlB1cmNoYXNlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogc2F2ZU9iamVjdC5nZXRTdHJpbmcoYHBOYW1lJHtpbmRleH1gKSxcclxuICAgICAgICAgICAgICAgIGNvc3Q6IHNhdmVPYmplY3QuZ2V0U3RyaW5nKGBwQ29zdCR7aW5kZXh9YCksXHJcbiAgICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgICAgcmVsYXRpdmVEYXRlU3RyaW5nOiBkYXRlICE9PSAwID8gTW9tZW50LnVuaXgoZGF0ZSkuY2FsZW5kYXIoKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVEYXRlU3RyaW5nOiBkYXRlICE9PSAwID8gTW9tZW50LnVuaXgoZGF0ZSkuZm9ybWF0KEFCU09MVVRFX0RBVEVfRk9STUFUKSA6ICcnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHB1cmNoYXNlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVIYWJiYWpldEluZm8oaW5mbzogSGFiYmFqZXRJbmZvLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhTdHJlYWske2luZGV4fWAsIGluZm8uc3RyZWFrKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaFZhbHVlJHtpbmRleH1gLCBpbmZvLnZhbHVlKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaEZhY3RvciR7aW5kZXh9YCwgaW5mby5mYWN0b3IpO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoU2xhY2ske2luZGV4fWAsIGluZm8uc2xhY2spO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoU3RyZWFrJHtpbmRleH1gLCBpbmZvLnN0cmVhayk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhCZXN0JHtpbmRleH1gLCBpbmZvLmJlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZUhhYmJhamV0Q2hlY2tib3hlcyhjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhDaGVja2JveCR7aX0ke2luZGV4fWAsIGMuY2hlY2ttYXJrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldFN0cmluZyhgaFdlZWtTdGFydCR7aW5kZXh9YCwgY2hlY2tib3hlc1swXS5tb21lbnQuZm9ybWF0KCdkZGRkIERvIE1NTScpKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19