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
var Moment = require("moment");
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
            saveObject.setNumber("pDate" + index, purchase.date);
        });
    };
    SavingService.prototype.loadPurchases = function () {
        var index = 0;
        var purchases = [];
        while (saveObject.hasKey("pName" + index)) {
            var date = saveObject.hasKey("pDate" + index) ? saveObject.getNumber("pDate" + index) : 0;
            purchases.push({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxpREFBbUQ7QUFFbkQsMEJBQTRCO0FBRTVCLHVEQUF1RTtBQUV2RSwrQkFBaUM7QUFHakM7SUFDSSx1QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQUVqRCx3Q0FBZ0IsR0FBdkIsVUFBd0IsWUFBbUI7UUFBM0MsaUJBTUM7UUFMRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFDLFFBQVEsRUFBRSxLQUFLO1lBQ2pDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDaEcsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLElBQVksRUFBRSxJQUFrQixFQUFFLEtBQWlCLEVBQUUsVUFBOEIsRUFBRSxLQUFhO1FBQ2xILFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBUSxLQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFTLEtBQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFTLEtBQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsc0JBQXNCLENBQUMs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QyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDN0QsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxFQUFFLENBQUM7UUFDWixDQUFDO1FBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBMUZRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FFNEIsa0NBQWU7T0FEM0MsYUFBYSxDQTRGekI7SUFBRCxvQkFBQztDQUFBLEFBNUZELElBNEZDO0FBNUZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHNhdmVPYmplY3QgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UsIEhhYmJhamV0SW5mbyB9IGZyb20gXCIuL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRlIH0gZnJvbSBcIi4vaW1hZ2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRDaGVja2JveCwgQ2hlY2tib3hTZXJ2aWNlIH0gZnJvbSBcIi4vY2hlY2tib3guc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQdXJjaGFzZVJlY29yZCB9IGZyb20gXCIuL2J1ZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTYXZpbmdTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hlY2tib3hTZXJ2aWNlOiBDaGVja2JveFNlcnZpY2UpIHt9XHJcblxyXG4gICAgcHVibGljIHNhdmVIYWJiYWpldExpc3QoaGFiYmFqZXRMaXN0OiBhbnlbXSkge1xyXG4gICAgICAgIF8uZWFjaChoYWJiYWpldExpc3QsIChoYWJiYWpldCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYoaGFiYmFqZXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlSGFiYmFqZXQoaGFiYmFqZXQubmFtZSwgaGFiYmFqZXQuaW5mbywgaGFiYmFqZXQuaW1hZ2UsIGhhYmJhamV0LmNoZWNrYm94ZXMsIGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlSGFiYmFqZXQobmFtZTogc3RyaW5nLCBpbmZvOiBIYWJiYWpldEluZm8sIGltYWdlOiBJbWFnZVN0YXRlLCBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldFN0cmluZyhgaE5hbWUke2luZGV4fWAsIG5hbWUpO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoU3RhdGUke2luZGV4fWAsIGltYWdlLnN0YXRlKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldFN0cmluZyhgaENvbG9yJHtpbmRleH1gLCBpbWFnZS5jb2xvcik7XHJcbiAgICAgICAgdGhpcy5zYXZlSGFiYmFqZXRJbmZvKGluZm8sIGluZGV4KTtcclxuICAgICAgICB0aGlzLnNhdmVIYWJiYWpldENoZWNrYm94ZXMoY2hlY2tib3hlcywgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZUhhYmJhamV0SW5mbyhpbmZvOiBIYWJiYWpldEluZm8sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaFN0cmVhayR7aW5kZXh9YCwgaW5mby5zdHJlYWspO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoVmFsdWUke2luZGV4fWAsIGluZm8udmFsdWUpO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0TnVtYmVyKGBoRmFjdG9yJHtpbmRleH1gLCBpbmZvLmZhY3Rvcik7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoYGhTbGFjayR7aW5kZXh9YCwgaW5mby5zbGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlSGFiYmFqZXRDaGVja2JveGVzKGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIF8uZWFjaChjaGVja2JveGVzLCAoYywgaSkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaENoZWNrYm94JHtpfSR7aW5kZXh9YCwgYy5jaGVja21hcmspO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNhdmVPYmplY3Quc2V0U3RyaW5nKGBoV2Vla1N0YXJ0JHtpbmRleH1gLCBjaGVja2JveGVzWzBdLm1vbWVudC5mb3JtYXQoJ2RkZGQgRG8gTU1NJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkSGFiYmFqZXRMaXN0KGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICB3aGlsZShzYXZlT2JqZWN0Lmhhc0tleShgaE5hbWUke2luZGV4fWApKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzYXZlT2JqZWN0LmdldFN0cmluZyhgaE5hbWUke2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoU3RhdGUke2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHNhdmVPYmplY3QuZ2V0U3RyaW5nKGBoQ29sb3Ike2luZGV4fWApO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJlYWsgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaFN0cmVhayR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhWYWx1ZSR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvciA9IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoRmFjdG9yJHtpbmRleH1gKTtcclxuICAgICAgICAgICAgY29uc3Qgc2xhY2sgPSBzYXZlT2JqZWN0LmdldE51bWJlcihgaFNsYWNrJHtpbmRleH1gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0aGlzLmNoZWNrYm94U2VydmljZS5nZXRDdXJyZW50V2VlaygpO1xyXG4gICAgICAgICAgICBfLmVhY2goY2hlY2tib3hlcywgKGMsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGMuY2hlY2ttYXJrID0gc2F2ZU9iamVjdC5nZXROdW1iZXIoYGhDaGVja2JveCR7aX0ke2luZGV4fWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRPZldlZWsgPSBzYXZlT2JqZWN0LmdldFN0cmluZyhgaFdlZWtTdGFydCR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoYWJiYWpldFNlcnZpY2UubmV3SGFiYmFqZXRGcm9tU2F2ZShuYW1lLCBzdGF0ZSwgdmFsdWUsIGZhY3Rvciwgc2xhY2ssIGNvbG9yLCBzdHJlYWssIGNoZWNrYm94ZXMsIHN0YXJ0T2ZXZWVrKTtcclxuXHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlQnVkZ2V0KGJ1ZGdldDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXROdW1iZXIoJ2J1ZGdldCcsIGJ1ZGdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRCdWRnZXQoKTogbnVtYmVyIHtcclxuICAgICAgICBpZihzYXZlT2JqZWN0Lmhhc0tleSgnYnVkZ2V0JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNhdmVPYmplY3QuZ2V0TnVtYmVyKCdidWRnZXQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVQdXJjaGFzZXMocHVyY2hhc2VzOiBQdXJjaGFzZVJlY29yZFtdKSB7XHJcbiAgICAgICAgXy5lYWNoKHB1cmNoYXNlcywgKHB1cmNoYXNlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnNldFN0cmluZyhgcE5hbWUke2luZGV4fWAsIHB1cmNoYXNlLm5hbWUpO1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnNldFN0cmluZyhgcENvc3Qke2luZGV4fWAsIHB1cmNoYXNlLmNvc3QpO1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgcERhdGUke2luZGV4fWAsIHB1cmNoYXNlLmRhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkUHVyY2hhc2VzKCk6IFB1cmNoYXNlUmVjb3JkW10ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgcHVyY2hhc2VzOiBQdXJjaGFzZVJlY29yZFtdID0gW107XHJcbiAgICAgICAgd2hpbGUoc2F2ZU9iamVjdC5oYXNLZXkoYHBOYW1lJHtpbmRleH1gKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gc2F2ZU9iamVjdC5oYXNLZXkoYHBEYXRlJHtpbmRleH1gKSA/IHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBwRGF0ZSR7aW5kZXh9YCkgOiAwO1xyXG4gICAgICAgICAgICBwdXJjaGFzZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzYXZlT2JqZWN0LmdldFN0cmluZyhgcE5hbWUke2luZGV4fWApLFxyXG4gICAgICAgICAgICAgICAgY29zdDogc2F2ZU9iamVjdC5nZXRTdHJpbmcoYHBDb3N0JHtpbmRleH1gKSxcclxuICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICBkYXRlU3RyaW5nOiBkYXRlICE9PSAwID8gTW9tZW50LnVuaXgoZGF0ZSkuY2FsZW5kYXIoKSA6ICcnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHB1cmNoYXNlcztcclxuICAgIH1cclxuXHJcbn0iXX0=