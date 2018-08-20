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
var saveObject = require("application-settings");
var _ = require("lodash");
var checkbox_service_1 = require("./checkbox.service");
var budget_service_1 = require("./budget.service");
var Moment = require("moment");
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
    SavingService.prototype.saveHabbajetInfo = function (info, index) {
        saveObject.setNumber("hStreak" + index, info.streak);
        saveObject.setNumber("hValue" + index, info.value);
        saveObject.setNumber("hFactor" + index, info.factor);
        saveObject.setNumber("hSlack" + index, info.slack);
    };
    SavingService.prototype.saveHabbajetCheckboxes = function (checkboxes, index) {
        _.each(checkboxes, function (c, i) {
            saveObject.setNumber("hCheckbox" + i + index, c.checkmark);
        });
        saveObject.setString("hWeekStart" + index, checkboxes[0].moment.format('dddd Do MMM'));
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
            var checkboxes = this.checkboxService.getCurrentWeek();
            _.each(checkboxes, function (c, i) {
                c.checkmark = saveObject.getNumber("hCheckbox" + i + index);
            });
            var startOfWeek = saveObject.getString("hWeekStart" + index);
            habbajetService.newHabbajetFromSave(name_1, state, value, factor, slack, color, streak, checkboxes, startOfWeek);
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
                dateString: date !== 0 ? Moment.unix(date).calendar() : '',
            });
            index++;
        }
        return purchases;
    };
    SavingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [checkbox_service_1.CheckboxService])
    ], SavingService);
    return SavingService;
}());
exports.SavingService = SavingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxpREFBbUQ7QUFFbkQsMEJBQTRCO0FBRTVCLHVEQUF1RTtBQUN2RSxtREFBaUU7QUFDakUsK0JBQWlDO0FBR2pDO0lBQ0ksdUJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFakQsd0NBQWdCLEdBQXZCLFVBQXdCLFlBQW1CO1FBQTNDLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBQyxRQUFRLEVBQUUsS0FBSztZQUNqQyxFQUFFLENBQUEsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hHLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxvQ0FBWSxHQUFuQixVQUFvQixJQUFZLEVBQUUsSUFBa0IsRUFBRSxLQUFpQixFQUFFLFVBQThCLEVBQUUsS0FBYTtRQUNsSCxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVEsS0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBUyxLQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBUyxLQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVB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QUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQWpIUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBRTRCLGtDQUFlO09BRDNDLGFBQWEsQ0FtSHpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5IRCxJQW1IQztBQW5IWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBzYXZlT2JqZWN0IGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlLCBIYWJiYWpldEluZm8gfSBmcm9tIFwiLi9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSW1hZ2VTdGF0ZSB9IGZyb20gXCIuL2ltYWdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0Q2hlY2tib3gsIENoZWNrYm94U2VydmljZSB9IGZyb20gXCIuL2NoZWNrYm94LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHVyY2hhc2VSb3csIEJ1ZGdldFRhYlJvd1R5cGUgfSBmcm9tIFwiLi9idWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2F2aW5nU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoZWNrYm94U2VydmljZTogQ2hlY2tib3hTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzYXZlSGFiYmFqZXRMaXN0KGhhYmJhamV0TGlzdDogYW55W10pIHtcclxuICAgICAgICB0aGlzLmNsZWFySGFiYmFqZXREYXRhKCk7XHJcbiAgICAgICAgXy5lYWNoKGhhYmJhamV0TGlzdCwgKGhhYmJhamV0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZihoYWJiYWpldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVIYWJiYWpldChoYWJiYWpldC5uYW1lLCBoYWJiYWpldC5pbmZvLCBoYWJiYWpldC5pbWFnZSwgaGFiYmFqZXQuY2hlY2tib3hlcywgaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVIYWJiYWpldChuYW1lOiBzdHJpbmcsIGluZm86IEhhYmJhamV0SW5mbywgaW1hZ2U6IEltYWdlU3RhdGUsIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBoTmFtZSR7aW5kZXh9YCwgbmFtZSk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhTdGF0ZSR7aW5kZXh9YCwgaW1hZ2Uuc3RhdGUpO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBoQ29sb3Ike2luZGV4fWAsIGltYWdlLmNvbG9yKTtcclxuICAgICAgICB0aGlzLnNhdmVIYWJiYWpldEluZm8oaW5mbywgaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZUhhYmJhamV0Q2hlY2tib3hlcyhjaGVja2JveGVzLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlSGFiYmFqZXRJbmZvKGluZm86IEhhYmJhamV0SW5mbywgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoU3RyZWFrJHtpbmRleH1gLCBpbmZvLnN0cmVhayk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhWYWx1ZSR7aW5kZXh9YCwgaW5mby52YWx1ZSk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhGYWN0b3Ike2luZGV4fWAsIGluZm8uZmFjdG9yKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaFNsYWNrJHtpbmRleH1gLCBpbmZvLnNsYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVIYWJiYWpldENoZWNrYm94ZXMoY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgXy5lYWNoKGNoZWNrYm94ZXMsIChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoQ2hlY2tib3gke2l9JHtpbmRleH1gLCBjLmNoZWNrbWFyayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYGhXZWVrU3RhcnQke2luZGV4fWAsIGNoZWNrYm94ZXNbMF0ubW9tZW50LmZvcm1hdCgnZGRkZCBEbyBNTU0nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRIYWJiYWpldExpc3QoaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlKHNhdmVPYmplY3QuaGFzS2V5KGBoTmFtZSR7aW5kZXh9YCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHNhdmVPYmplY3QuZ2V0U3RyaW5nKGBoTmFtZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhTdGF0ZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc2F2ZU9iamVjdC5nZXRTdHJpbmcoYGhDb2xvciR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhayA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoU3RyZWFrJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaFZhbHVlJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3QgZmFjdG9yID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhGYWN0b3Ike2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBzbGFjayA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoU2xhY2ske2luZGV4fWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IHRoaXMuY2hlY2tib3hTZXJ2aWNlLmdldEN1cnJlbnRXZWVrKCk7XHJcbiAgICAgICAgICAgIF8uZWFjaChjaGVja2JveGVzLCAoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYy5jaGVja21hcmsgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaENoZWNrYm94JHtpfSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydE9mV2VlayA9IHNhdmVPYmplY3QuZ2V0U3RyaW5nKGBoV2Vla1N0YXJ0JHtpbmRleH1gKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhhYmJhamV0U2VydmljZS5uZXdIYWJiYWpldEZyb21TYXZlKG5hbWUsIHN0YXRlLCB2YWx1ZSwgZmFjdG9yLCBzbGFjaywgY29sb3IsIHN0cmVhaywgY2hlY2tib3hlcywgc3RhcnRPZldlZWspO1xyXG5cclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFySGFiYmFqZXREYXRhKCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgd2hpbGUoc2F2ZU9iamVjdC5oYXNLZXkoYGhOYW1lJHtpbmRleH1gKSkge1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaE5hbWUke2luZGV4fWApO1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaFN0YXRlJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5yZW1vdmUoYGhDb2xvciR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBoU3RyZWFrJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5yZW1vdmUoYGhWYWx1ZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBoRmFjdG9yJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5yZW1vdmUoYGhTbGFjayR7aW5kZXh9YCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveGVzID0gdGhpcy5jaGVja2JveFNlcnZpY2UuZ2V0Q3VycmVudFdlZWsoKTtcclxuICAgICAgICAgICAgXy5lYWNoKGNoZWNrYm94ZXMsIChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaENoZWNrYm94JHtpfSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaFdlZWtTdGFydCR7aW5kZXh9YCk7XHJcblxyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUJ1ZGdldChidWRnZXQ6IG51bWJlcikge1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKCdidWRnZXQnLCBidWRnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQnVkZ2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYoc2F2ZU9iamVjdC5oYXNLZXkoJ2J1ZGdldCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzYXZlT2JqZWN0LmdldE51bWJlcignYnVkZ2V0Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlUHVyY2hhc2VzKHB1cmNoYXNlczogUHVyY2hhc2VSb3dbXSkge1xyXG4gICAgICAgIF8uZWFjaChwdXJjaGFzZXMsIChwdXJjaGFzZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYHBOYW1lJHtpbmRleH1gLCBwdXJjaGFzZS5uYW1lKTtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYHBDb3N0JHtpbmRleH1gLCBwdXJjaGFzZS5jb3N0KTtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYHBEYXRlJHtpbmRleH1gLCBwdXJjaGFzZS5kYXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFB1cmNoYXNlcygpOiBQdXJjaGFzZVJvd1tdIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGNvbnN0IHB1cmNoYXNlczogUHVyY2hhc2VSb3dbXSA9IFtdO1xyXG4gICAgICAgIHdoaWxlKHNhdmVPYmplY3QuaGFzS2V5KGBwTmFtZSR7aW5kZXh9YCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHNhdmVPYmplY3QuaGFzS2V5KGBwRGF0ZSR7aW5kZXh9YCkgPyBzYXZlT2JqZWN0LmdldE51bWJlcihgcERhdGUke2luZGV4fWApIDogMDtcclxuICAgICAgICAgICAgcHVyY2hhc2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcm93VHlwZTogQnVkZ2V0VGFiUm93VHlwZS5QdXJjaGFzZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHNhdmVPYmplY3QuZ2V0U3RyaW5nKGBwTmFtZSR7aW5kZXh9YCksXHJcbiAgICAgICAgICAgICAgICBjb3N0OiBzYXZlT2JqZWN0LmdldFN0cmluZyhgcENvc3Qke2luZGV4fWApLFxyXG4gICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgIGRhdGVTdHJpbmc6IGRhdGUgIT09IDAgPyBNb21lbnQudW5peChkYXRlKS5jYWxlbmRhcigpIDogJycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHVyY2hhc2VzO1xyXG4gICAgfVxyXG5cclxufSJdfQ==