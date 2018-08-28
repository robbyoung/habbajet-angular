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
var saveObject = require("tns-core-modules/application-settings/application-settings");
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
        saveObject.setNumber("hStreak" + index, info.streak);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyx1RkFBeUY7QUFFekYsMEJBQTRCO0FBRTVCLHVEQUF1RTtBQUN2RSxtREFBaUU7QUFDakUsK0JBQWlDO0FBR2pDO0lBQ0ksdUJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFakQsd0NBQWdCLEdBQXZCLFVBQXdCLFlBQW1CO1FBQTNDLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBQyxRQUFRLEVBQUUsS0FBSztZQUNqQyxFQUFFLENBQUEsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hHLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxvQ0FBWSxHQUFuQixVQUFvQixJQUFZLEVBQUUsSUFBa0IsRUFBRSxLQUFpQixFQUFFLFVBQThCLEVBQUUsS0FBYTtRQUNsSCxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVEsS0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBUyxLQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBUyxLQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVB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QUFDLENBQUMsQ0FBQyxFQUFFO2FBQzdELENBQUMsQ0FBQztZQUNILEtBQUssRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQWxIUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBRTRCLGtDQUFlO09BRDNDLGFBQWEsQ0FvSHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBIRCxJQW9IQztBQXBIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBzYXZlT2JqZWN0IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UsIEhhYmJhamV0SW5mbyB9IGZyb20gXCIuL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRlIH0gZnJvbSBcIi4vaW1hZ2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRDaGVja2JveCwgQ2hlY2tib3hTZXJ2aWNlIH0gZnJvbSBcIi4vY2hlY2tib3guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQdXJjaGFzZVJvdywgQnVkZ2V0VGFiUm93VHlwZSB9IGZyb20gXCIuL2J1ZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTYXZpbmdTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hlY2tib3hTZXJ2aWNlOiBDaGVja2JveFNlcnZpY2UpIHt9XHJcblxyXG4gICAgcHVibGljIHNhdmVIYWJiYWpldExpc3QoaGFiYmFqZXRMaXN0OiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJIYWJiYWpldERhdGEoKTtcclxuICAgICAgICBfLmVhY2goaGFiYmFqZXRMaXN0LCAoaGFiYmFqZXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGhhYmJhamV0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUhhYmJhamV0KGhhYmJhamV0Lm5hbWUsIGhhYmJhamV0LmluZm8sIGhhYmJhamV0LmltYWdlLCBoYWJiYWpldC5jaGVja2JveGVzLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUhhYmJhamV0KG5hbWU6IHN0cmluZywgaW5mbzogSGFiYmFqZXRJbmZvLCBpbWFnZTogSW1hZ2VTdGF0ZSwgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYGhOYW1lJHtpbmRleH1gLCBuYW1lKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaFN0YXRlJHtpbmRleH1gLCBpbWFnZS5zdGF0ZSk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYGhDb2xvciR7aW5kZXh9YCwgaW1hZ2UuY29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2F2ZUhhYmJhamV0SW5mbyhpbmZvLCBpbmRleCk7XHJcbiAgICAgICAgdGhpcy5zYXZlSGFiYmFqZXRDaGVja2JveGVzKGNoZWNrYm94ZXMsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVIYWJiYWpldEluZm8oaW5mbzogSGFiYmFqZXRJbmZvLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhTdHJlYWske2luZGV4fWAsIGluZm8uc3RyZWFrKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaFZhbHVlJHtpbmRleH1gLCBpbmZvLnZhbHVlKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaEZhY3RvciR7aW5kZXh9YCwgaW5mby5mYWN0b3IpO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoU2xhY2ske2luZGV4fWAsIGluZm8uc2xhY2spO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoU3RyZWFrJHtpbmRleH1gLCBpbmZvLnN0cmVhayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlSGFiYmFqZXRDaGVja2JveGVzKGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIF8uZWFjaChjaGVja2JveGVzLCAoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaENoZWNrYm94JHtpfSR7aW5kZXh9YCwgYy5jaGVja21hcmspO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBoV2Vla1N0YXJ0JHtpbmRleH1gLCBjaGVja2JveGVzWzBdLm1vbWVudC5mb3JtYXQoJ2RkZGQgRG8gTU1NJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkSGFiYmFqZXRMaXN0KGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICB3aGlsZShzYXZlT2JqZWN0Lmhhc0tleShgaE5hbWUke2luZGV4fWApKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzYXZlT2JqZWN0LmdldFN0cmluZyhgaE5hbWUke2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoU3RhdGUke2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHNhdmVPYmplY3QuZ2V0U3RyaW5nKGBoQ29sb3Ike2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJlYWsgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaFN0cmVhayR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhWYWx1ZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvciA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoRmFjdG9yJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3Qgc2xhY2sgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaFNsYWNrJHtpbmRleH1gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0aGlzLmNoZWNrYm94U2VydmljZS5nZXRDdXJyZW50V2VlaygpO1xyXG4gICAgICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGMuY2hlY2ttYXJrID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhDaGVja2JveCR7aX0ke2luZGV4fWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRPZldlZWsgPSBzYXZlT2JqZWN0LmdldFN0cmluZyhgaFdlZWtTdGFydCR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoYWJiYWpldFNlcnZpY2UubmV3SGFiYmFqZXRGcm9tU2F2ZShuYW1lLCBzdGF0ZSwgdmFsdWUsIGZhY3Rvciwgc2xhY2ssIGNvbG9yLCBzdHJlYWssIGNoZWNrYm94ZXMsIHN0YXJ0T2ZXZWVrKTtcclxuXHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckhhYmJhamV0RGF0YSgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlKHNhdmVPYmplY3QuaGFzS2V5KGBoTmFtZSR7aW5kZXh9YCkpIHtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5yZW1vdmUoYGhOYW1lJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5yZW1vdmUoYGhTdGF0ZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBoQ29sb3Ike2luZGV4fWApO1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaFN0cmVhayR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBoVmFsdWUke2luZGV4fWApO1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaEZhY3RvciR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3QucmVtb3ZlKGBoU2xhY2ske2luZGV4fWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IHRoaXMuY2hlY2tib3hTZXJ2aWNlLmdldEN1cnJlbnRXZWVrKCk7XHJcbiAgICAgICAgICAgIF8uZWFjaChjaGVja2JveGVzLCAoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2F2ZU9iamVjdC5yZW1vdmUoYGhDaGVja2JveCR7aX0ke2luZGV4fWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5yZW1vdmUoYGhXZWVrU3RhcnQke2luZGV4fWApO1xyXG5cclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVCdWRnZXQoYnVkZ2V0OiBudW1iZXIpIHtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcignYnVkZ2V0JywgYnVkZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEJ1ZGdldCgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmKHNhdmVPYmplY3QuaGFzS2V5KCdidWRnZXQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2F2ZU9iamVjdC5nZXROdW1iZXIoJ2J1ZGdldCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZVB1cmNoYXNlcyhwdXJjaGFzZXM6IFB1cmNoYXNlUm93W10pIHtcclxuICAgICAgICBfLmVhY2gocHVyY2hhc2VzLCAocHVyY2hhc2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBwTmFtZSR7aW5kZXh9YCwgcHVyY2hhc2UubmFtZSk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBwQ29zdCR7aW5kZXh9YCwgcHVyY2hhc2UuY29zdCk7XHJcbiAgICAgICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBwRGF0ZSR7aW5kZXh9YCwgcHVyY2hhc2UuZGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRQdXJjaGFzZXMoKTogUHVyY2hhc2VSb3dbXSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBjb25zdCBwdXJjaGFzZXM6IFB1cmNoYXNlUm93W10gPSBbXTtcclxuICAgICAgICB3aGlsZShzYXZlT2JqZWN0Lmhhc0tleShgcE5hbWUke2luZGV4fWApKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBzYXZlT2JqZWN0Lmhhc0tleShgcERhdGUke2luZGV4fWApID8gc2F2ZU9iamVjdC5nZXROdW1iZXIoYHBEYXRlJHtpbmRleH1gKSA6IDA7XHJcbiAgICAgICAgICAgIHB1cmNoYXNlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHJvd1R5cGU6IEJ1ZGdldFRhYlJvd1R5cGUuUHVyY2hhc2UsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzYXZlT2JqZWN0LmdldFN0cmluZyhgcE5hbWUke2luZGV4fWApLFxyXG4gICAgICAgICAgICAgICAgY29zdDogc2F2ZU9iamVjdC5nZXRTdHJpbmcoYHBDb3N0JHtpbmRleH1gKSxcclxuICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICBkYXRlU3RyaW5nOiBkYXRlICE9PSAwID8gTW9tZW50LnVuaXgoZGF0ZSkuY2FsZW5kYXIoKSA6ICcnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHB1cmNoYXNlcztcclxuICAgIH1cclxuXHJcbn0iXX0=