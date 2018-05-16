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
var habbajet_service_1 = require("./habbajet.service");
var _ = require("lodash");
var SavingService = /** @class */ (function () {
    function SavingService(habbajetService) {
        this.habbajetService = habbajetService;
    }
    SavingService.prototype.saveHabbajetList = function () {
        var _this = this;
        var habbajetList = this.habbajetService.habbajetList;
        _.each(habbajetList, function (habbajet, index) {
            if (habbajet !== undefined) {
                _this.saveHabbajet(habbajet, index);
            }
        });
    };
    SavingService.prototype.saveHabbajet = function (habbajet, index) {
        saveObject.setString("hName" + index, habbajet.name);
        saveObject.setNumber("hState" + index, habbajet.state);
        saveObject.setString("hColor" + index, habbajet.color);
    };
    SavingService.prototype.loadHabbajetList = function () {
        var habbajetList = [];
        var i;
        while (i < 6) {
            habbajetList.push(this.loadHabbajet(i));
            i++;
        }
        return habbajetList;
    };
    SavingService.prototype.loadHabbajet = function (index) {
        if (saveObject.hasKey("hName" + index) &&
            saveObject.hasKey("hState" + index) &&
            saveObject.hasKey("hColor" + index)) {
            var habbajet = new habbajet_service_1.Habbajet(saveObject.getString("hName" + index), saveObject.getNumber("hState" + index), saveObject.getString("hColor" + index));
        }
        else {
            return undefined;
        }
    };
    SavingService.prototype.deleteHabbajet = function (index) {
        if (saveObject.hasKey("hName" + index)) {
            saveObject.remove("hName" + index);
        }
        if (saveObject.hasKey("hState" + index)) {
            saveObject.remove("hState" + index);
        }
    };
    SavingService.prototype.moveHabbajet = function (habbajet, start, finish) {
        this.saveHabbajet(habbajet, finish);
        this.deleteHabbajet(start);
    };
    SavingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], SavingService);
    return SavingService;
}());
exports.SavingService = SavingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxpREFBbUQ7QUFDbkQsdURBQStEO0FBQy9ELDBCQUE0QjtBQUc1QjtJQUNJLHVCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRWpELHdDQUFnQixHQUF2QjtRQUFBLGlCQU9DO1FBTkcsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7UUFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBQyxRQUFRLEVBQUUsS0FBSztZQUNqQyxFQUFFLENBQUEsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLFFBQWtCLEVBQUUsS0FBYTtRQUNqRCxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVEsS0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRU0sd0NBQWdCLEdBQXZCO1FBQ0ksSUFBTSxZQUFZLEdBQWUsRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDVixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUUsQ0FBQztRQUNSLENBQUM7UUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxvQ0FBWSxHQUFuQixVQUFvQixLQUFhO1FBQzdCLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBUSxLQUFPLENBQUM7WUFDN0IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFTLEtBQU8sQ0FBQztZQUNuQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVMsS0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQU0sUUFBUSxHQUFHLElBQUksMkJBQVEsQ0FDekIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFRLEtBQU8sQ0FBQyxFQUNyQyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVMsS0FBTyxDQUFDLEVBQ3RDLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBUyxLQUFPLENBQUMsQ0FDekMsQ0FBQztRQUNOLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFTSxzQ0FBYyxHQUFyQixVQUFzQixLQUFhO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBUSxLQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFRLEtBQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVMsS0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBUyxLQUFPLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLFFBQWtCLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBeERRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FFNEIsa0NBQWU7T0FEM0MsYUFBYSxDQXlEekI7SUFBRCxvQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHNhdmVPYmplY3QgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBIYWJiYWpldCwgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSBcIi4vaGFiYmFqZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTYXZpbmdTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UpIHt9XHJcblxyXG4gICAgcHVibGljIHNhdmVIYWJiYWpldExpc3QoKSB7XHJcbiAgICAgICAgY29uc3QgaGFiYmFqZXRMaXN0ID0gdGhpcy5oYWJiYWpldFNlcnZpY2UuaGFiYmFqZXRMaXN0O1xyXG4gICAgICAgIF8uZWFjaChoYWJiYWpldExpc3QsIChoYWJiYWpldCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYoaGFiYmFqZXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlSGFiYmFqZXQoaGFiYmFqZXQsIGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlSGFiYmFqZXQoaGFiYmFqZXQ6IEhhYmJhamV0LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYGhOYW1lJHtpbmRleH1gLCBoYWJiYWpldC5uYW1lKTtcclxuICAgICAgICBzYXZlT2JqZWN0LnNldE51bWJlcihgaFN0YXRlJHtpbmRleH1gLCBoYWJiYWpldC5zdGF0ZSk7XHJcbiAgICAgICAgc2F2ZU9iamVjdC5zZXRTdHJpbmcoYGhDb2xvciR7aW5kZXh9YCwgaGFiYmFqZXQuY29sb3IpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRIYWJiYWpldExpc3QoKTogSGFiYmFqZXRbXSB7XHJcbiAgICAgICAgY29uc3QgaGFiYmFqZXRMaXN0OiBIYWJiYWpldFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIHdoaWxlKGkgPCA2KSB7XHJcbiAgICAgICAgICAgIGhhYmJhamV0TGlzdC5wdXNoKHRoaXMubG9hZEhhYmJhamV0KGkpKTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhhYmJhamV0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEhhYmJhamV0KGluZGV4OiBudW1iZXIpOiBIYWJiYWpldCB7XHJcbiAgICAgICAgaWYoc2F2ZU9iamVjdC5oYXNLZXkoYGhOYW1lJHtpbmRleH1gKSAmJlxyXG4gICAgICAgICAgICAgICAgc2F2ZU9iamVjdC5oYXNLZXkoYGhTdGF0ZSR7aW5kZXh9YCkgJiZcclxuICAgICAgICAgICAgICAgIHNhdmVPYmplY3QuaGFzS2V5KGBoQ29sb3Ike2luZGV4fWApKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhYmJhamV0ID0gbmV3IEhhYmJhamV0KFxyXG4gICAgICAgICAgICAgICAgc2F2ZU9iamVjdC5nZXRTdHJpbmcoYGhOYW1lJHtpbmRleH1gKSxcclxuICAgICAgICAgICAgICAgIHNhdmVPYmplY3QuZ2V0TnVtYmVyKGBoU3RhdGUke2luZGV4fWApLFxyXG4gICAgICAgICAgICAgICAgc2F2ZU9iamVjdC5nZXRTdHJpbmcoYGhDb2xvciR7aW5kZXh9YClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlSGFiYmFqZXQoaW5kZXg6IG51bWJlcil7XHJcbiAgICAgICAgaWYoc2F2ZU9iamVjdC5oYXNLZXkoYGhOYW1lJHtpbmRleH1gKSkge1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaE5hbWUke2luZGV4fWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzYXZlT2JqZWN0Lmhhc0tleShgaFN0YXRlJHtpbmRleH1gKSkge1xyXG4gICAgICAgICAgICBzYXZlT2JqZWN0LnJlbW92ZShgaFN0YXRlJHtpbmRleH1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVIYWJiYWpldChoYWJiYWpldDogSGFiYmFqZXQsIHN0YXJ0OiBudW1iZXIsIGZpbmlzaDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlSGFiYmFqZXQoaGFiYmFqZXQsIGZpbmlzaCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVIYWJiYWpldChzdGFydCk7XHJcbiAgICB9XHJcbn0iXX0=