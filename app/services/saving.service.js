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
        saveObject.setNumber("hWeekStart" + index, checkboxes[0].moment.valueOf());
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
            var startOfWeek = saveObject.getNumber("hWeekStart" + index);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxpREFBbUQ7QUFFbkQsMEJBQTRCO0FBRTVCLHVEQUF1RTtBQUl2RTtJQUNJLHVCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRWpELHdDQUFnQixHQUF2QixVQUF3QixZQUFtQjtRQUEzQyxpQkFNQztRQUxHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQUMsUUFBUSxFQUFFLEtBQUs7WUFDakMsRUFBRSxDQUFBLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoRyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sb0NBQVksR0FBbkIsVUFBb0IsSUFBWSxFQUFFLElBQWtCLEVBQUUsS0FBaUIsRUFBRSxVQUE4QixFQUFFLEtBQWE7UUFDbEgsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFRLEtBQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsS0FB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QyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDO0lBQ0wsQ0FBQztJQUVNLHFDQUFhLEdBQXBCLFVBQXFCLFNBQTJCO1FBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUMsUUFBUSxFQUFFLEtBQUs7WUFDOUIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFRLEtBQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFRLEtBQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scUNBQWEsR0FBcEI7UUFDSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFNLFNBQVMsR0FBcUIsRUFBRSxDQUFDO1FBQ3ZDLE9BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFRLEtBQU8sQ0FBQyxFQUFFLENBQUM7WUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDWCxJQUFJLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFRLEtBQU8sQ0FBQztnQkFDM0MsSUFBSSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBUSxLQUFPLENBQUM7YUFDOUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxFQUFFLENBQUM7UUFDWixDQUFDO1FBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBdEZRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FFNEIsa0NBQWU7T0FEM0MsYUFBYSxDQXdGekI7SUFBRCxvQkFBQztDQUFBLEFBeEZELElBd0ZDO0FBeEZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHNhdmVPYmplY3QgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UsIEhhYmJhamV0SW5mbyB9IGZyb20gXCIuL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRlIH0gZnJvbSBcIi4vaW1hZ2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRDaGVja2JveCwgQ2hlY2tib3hTZXJ2aWNlIH0gZnJvbSBcIi4vY2hlY2tib3guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQdXJjaGFzZVJlY29yZCB9IGZyb20gXCIuL2J1ZGdldC5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTYXZpbmdTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hlY2tib3hTZXJ2aWNlOiBDaGVja2JveFNlcnZpY2UpIHt9XHJcblxyXG4gICAgcHVibGljIHNhdmVIYWJiYWpldExpc3QoaGFiYmFqZXRMaXN0OiBhbnlbXSkge1xyXG4gICAgICAgIF8uZWFjaChoYWJiYWpldExpc3QsIChoYWJiYWpldCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYoaGFiYmFqZXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlSGFiYmFqZXQoaGFiYmFqZXQubmFtZSwgaGFiYmFqZXQuaW5mbywgaGFiYmFqZXQuaW1hZ2UsIGhhYmJhamV0LmNoZWNrYm94ZXMsIGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlSGFiYmFqZXQobmFtZTogc3RyaW5nLCBpbmZvOiBIYWJiYWpldEluZm8sIGltYWdlOiBJbWFnZVN0YXRlLCBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldFN0cmluZyhgaE5hbWUke2luZGV4fWAsIG5hbWUpO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoU3RhdGUke2luZGV4fWAsIGltYWdlLnN0YXRlKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldFN0cmluZyhgaENvbG9yJHtpbmRleH1gLCBpbWFnZS5jb2xvcik7XHJcbiAgICAgICAgdGhpcy5zYXZlSGFiYmFqZXRJbmZvKGluZm8sIGluZGV4KTtcclxuICAgICAgICB0aGlzLnNhdmVIYWJiYWpldENoZWNrYm94ZXMoY2hlY2tib3hlcywgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZUhhYmJhamV0SW5mbyhpbmZvOiBIYWJiYWpldEluZm8sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaFN0cmVhayR7aW5kZXh9YCwgaW5mby5zdHJlYWspO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoVmFsdWUke2luZGV4fWAsIGluZm8udmFsdWUpO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoRmFjdG9yJHtpbmRleH1gLCBpbmZvLmZhY3Rvcik7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhTbGFjayR7aW5kZXh9YCwgaW5mby5zbGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlSGFiYmFqZXRDaGVja2JveGVzKGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIF8uZWFjaChjaGVja2JveGVzLCAoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaENoZWNrYm94JHtpfSR7aW5kZXh9YCwgYy5jaGVja21hcmspO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoV2Vla1N0YXJ0JHtpbmRleH1gLCBjaGVja2JveGVzWzBdLm1vbWVudC52YWx1ZU9mKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkSGFiYmFqZXRMaXN0KGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICB3aGlsZShzYXZlT2JqZWN0Lmhhc0tleShgaE5hbWUke2luZGV4fWApKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzYXZlT2JqZWN0LmdldFN0cmluZyhgaE5hbWUke2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoU3RhdGUke2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHNhdmVPYmplY3QuZ2V0U3RyaW5nKGBoQ29sb3Ike2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJlYWsgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaFN0cmVhayR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhWYWx1ZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvciA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoRmFjdG9yJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3Qgc2xhY2sgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaFNsYWNrJHtpbmRleH1gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0aGlzLmNoZWNrYm94U2VydmljZS5nZXRDdXJyZW50V2VlaygpO1xyXG4gICAgICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGMuY2hlY2ttYXJrID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhDaGVja2JveCR7aX0ke2luZGV4fWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRPZldlZWsgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaFdlZWtTdGFydCR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoYWJiYWpldFNlcnZpY2UubmV3SGFiYmFqZXRGcm9tU2F2ZShuYW1lLCBzdGF0ZSwgdmFsdWUsIGZhY3Rvciwgc2xhY2ssIGNvbG9yLCBzdHJlYWssIGNoZWNrYm94ZXMsIHN0YXJ0T2ZXZWVrKTtcclxuXHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlQnVkZ2V0KGJ1ZGdldDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoJ2J1ZGdldCcsIGJ1ZGdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRCdWRnZXQoKTogbnVtYmVyIHtcclxuICAgICAgICBpZihzYXZlT2JqZWN0Lmhhc0tleSgnYnVkZ2V0JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNhdmVPYmplY3QuZ2V0TnVtYmVyKCdidWRnZXQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVQdXJjaGFzZXMocHVyY2hhc2VzOiBQdXJjaGFzZVJlY29yZFtdKSB7XHJcbiAgICAgICAgXy5lYWNoKHB1cmNoYXNlcywgKHB1cmNoYXNlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnNldFN0cmluZyhgcE5hbWUke2luZGV4fWAsIHB1cmNoYXNlLm5hbWUpO1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnNldFN0cmluZyhgcENvc3Qke2luZGV4fWAsIHB1cmNoYXNlLmNvc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkUHVyY2hhc2VzKCk6IFB1cmNoYXNlUmVjb3JkW10ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgcHVyY2hhc2VzOiBQdXJjaGFzZVJlY29yZFtdID0gW107XHJcbiAgICAgICAgd2hpbGUoc2F2ZU9iamVjdC5oYXNLZXkoYHBOYW1lJHtpbmRleH1gKSkge1xyXG4gICAgICAgICAgICBwdXJjaGFzZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzYXZlT2JqZWN0LmdldFN0cmluZyhgcE5hbWUke2luZGV4fWApLFxyXG4gICAgICAgICAgICAgICAgY29zdDogc2F2ZU9iamVjdC5nZXRTdHJpbmcoYHBDb3N0JHtpbmRleH1gKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwdXJjaGFzZXM7XHJcbiAgICB9XHJcblxyXG59Il19