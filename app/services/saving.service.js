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
var SavingService = /** @class */ (function () {
    function SavingService(checkboxService) {
        this.checkboxService = checkboxService;
    }
    SavingService.prototype.saveHabbajetList = function (habbajetList) {
        var _this = this;
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
        });
    };
    SavingService.prototype.loadPurchases = function () {
        var index = 0;
        var purchases = [];
        while (saveObject.hasKey("pName" + index)) {
            purchases.push({
                name: saveObject.getString("pName" + index),
                cost: saveObject.getString("pCost" + index),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxpREFBbUQ7QUFFbkQsMEJBQTRCO0FBRTVCLHVEQUF1RTtBQUl2RTtJQUNJLHVCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRWpELHdDQUFnQixHQUF2QixVQUF3QixZQUFtQjtRQUEzQyxpQkFNQztRQUxHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQUMsUUFBUSxFQUFFLEtBQUs7WUFDakMsRUFBRSxDQUFBLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoRyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sb0NBQVksR0FBbkIsVUFBb0IsSUFBWSxFQUFFLElBQWtCLEVBQUUsS0FBaUIsRUFBRSxVQUE4QixFQUFFLEtBQWE7UUFDbEgsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFRLEtBQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsS0FB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QixNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2IsQ0FBQztJQUNMLENBQUM7SUFFTSxxQ0FBYSxHQUFwQixVQUFxQixTQUEyQjtRQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFDLFFBQVEsRUFBRSxLQUFLO1lBQzlCLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBUSxLQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBUSxLQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHFDQUFhLEdBQXBCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBTSxTQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUN2QyxPQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBUSxLQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBUSxLQUFPLENBQUM7Z0JBQzNDLElBQUksRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVEsS0FBTyxDQUFDO2FBQzlDLENBQUMsQ0FBQztZQUNILEtBQUssRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQXRGUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBRTRCLGtDQUFlO09BRDNDLGFBQWEsQ0F3RnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhGRCxJQXdGQztBQXhGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBzYXZlT2JqZWN0IGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlLCBIYWJiYWpldEluZm8gfSBmcm9tIFwiLi9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSW1hZ2VTdGF0ZSB9IGZyb20gXCIuL2ltYWdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0Q2hlY2tib3gsIENoZWNrYm94U2VydmljZSB9IGZyb20gXCIuL2NoZWNrYm94LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHVyY2hhc2VSZWNvcmQgfSBmcm9tIFwiLi9idWRnZXQuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2F2aW5nU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoZWNrYm94U2VydmljZTogQ2hlY2tib3hTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzYXZlSGFiYmFqZXRMaXN0KGhhYmJhamV0TGlzdDogYW55W10pIHtcclxuICAgICAgICBfLmVhY2goaGFiYmFqZXRMaXN0LCAoaGFiYmFqZXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGhhYmJhamV0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUhhYmJhamV0KGhhYmJhamV0Lm5hbWUsIGhhYmJhamV0LmluZm8sIGhhYmJhamV0LmltYWdlLCBoYWJiYWpldC5jaGVja2JveGVzLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUhhYmJhamV0KG5hbWU6IHN0cmluZywgaW5mbzogSGFiYmFqZXRJbmZvLCBpbWFnZTogSW1hZ2VTdGF0ZSwgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYGhOYW1lJHtpbmRleH1gLCBuYW1lKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaFN0YXRlJHtpbmRleH1gLCBpbWFnZS5zdGF0ZSk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYGhDb2xvciR7aW5kZXh9YCwgaW1hZ2UuY29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2F2ZUhhYmJhamV0SW5mbyhpbmZvLCBpbmRleCk7XHJcbiAgICAgICAgdGhpcy5zYXZlSGFiYmFqZXRDaGVja2JveGVzKGNoZWNrYm94ZXMsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVIYWJiYWpldEluZm8oaW5mbzogSGFiYmFqZXRJbmZvLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhTdHJlYWske2luZGV4fWAsIGluZm8uc3RyZWFrKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaFZhbHVlJHtpbmRleH1gLCBpbmZvLnZhbHVlKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaEZhY3RvciR7aW5kZXh9YCwgaW5mby5mYWN0b3IpO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoU2xhY2ske2luZGV4fWAsIGluZm8uc2xhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZUhhYmJhamV0Q2hlY2tib3hlcyhjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhDaGVja2JveCR7aX0ke2luZGV4fWAsIGMuY2hlY2ttYXJrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldFN0cmluZyhgaFdlZWtTdGFydCR7aW5kZXh9YCwgY2hlY2tib3hlc1swXS5tb21lbnQuZm9ybWF0KCdkZGRkIERvIE1NTScpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEhhYmJhamV0TGlzdChoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgd2hpbGUoc2F2ZU9iamVjdC5oYXNLZXkoYGhOYW1lJHtpbmRleH1gKSkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gc2F2ZU9iamVjdC5nZXRTdHJpbmcoYGhOYW1lJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaFN0YXRlJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzYXZlT2JqZWN0LmdldFN0cmluZyhgaENvbG9yJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RyZWFrID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhTdHJlYWske2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoVmFsdWUke2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBmYWN0b3IgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaEZhY3RvciR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsYWNrID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhTbGFjayR7aW5kZXh9YCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveGVzID0gdGhpcy5jaGVja2JveFNlcnZpY2UuZ2V0Q3VycmVudFdlZWsoKTtcclxuICAgICAgICAgICAgXy5lYWNoKGNoZWNrYm94ZXMsIChjLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjLmNoZWNrbWFyayA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoQ2hlY2tib3gke2l9JHtpbmRleH1gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0T2ZXZWVrID0gc2F2ZU9iamVjdC5nZXRTdHJpbmcoYGhXZWVrU3RhcnQke2luZGV4fWApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGFiYmFqZXRTZXJ2aWNlLm5ld0hhYmJhamV0RnJvbVNhdmUobmFtZSwgc3RhdGUsIHZhbHVlLCBmYWN0b3IsIHNsYWNrLCBjb2xvciwgc3RyZWFrLCBjaGVja2JveGVzLCBzdGFydE9mV2Vlayk7XHJcblxyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUJ1ZGdldChidWRnZXQ6IG51bWJlcikge1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKCdidWRnZXQnLCBidWRnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQnVkZ2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYoc2F2ZU9iamVjdC5oYXNLZXkoJ2J1ZGdldCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzYXZlT2JqZWN0LmdldE51bWJlcignYnVkZ2V0Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlUHVyY2hhc2VzKHB1cmNoYXNlczogUHVyY2hhc2VSZWNvcmRbXSkge1xyXG4gICAgICAgIF8uZWFjaChwdXJjaGFzZXMsIChwdXJjaGFzZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYHBOYW1lJHtpbmRleH1gLCBwdXJjaGFzZS5uYW1lKTtcclxuICAgICAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYHBDb3N0JHtpbmRleH1gLCBwdXJjaGFzZS5jb3N0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFB1cmNoYXNlcygpOiBQdXJjaGFzZVJlY29yZFtdIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGNvbnN0IHB1cmNoYXNlczogUHVyY2hhc2VSZWNvcmRbXSA9IFtdO1xyXG4gICAgICAgIHdoaWxlKHNhdmVPYmplY3QuaGFzS2V5KGBwTmFtZSR7aW5kZXh9YCkpIHtcclxuICAgICAgICAgICAgcHVyY2hhc2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogc2F2ZU9iamVjdC5nZXRTdHJpbmcoYHBOYW1lJHtpbmRleH1gKSxcclxuICAgICAgICAgICAgICAgIGNvc3Q6IHNhdmVPYmplY3QuZ2V0U3RyaW5nKGBwQ29zdCR7aW5kZXh9YCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHVyY2hhc2VzO1xyXG4gICAgfVxyXG5cclxufSJdfQ==