"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MAX_HABBAJETS = 5;
var TabType;
(function (TabType) {
    TabType[TabType["Habbajet"] = 0] = "Habbajet";
    TabType[TabType["Budget"] = 1] = "Budget";
    TabType[TabType["Add"] = 2] = "Add";
    TabType[TabType["Empty"] = 3] = "Empty";
})(TabType = exports.TabType || (exports.TabType = {}));
var TabService = /** @class */ (function () {
    function TabService() {
    }
    TabService.prototype.initialiseTabs = function (habbajetIds) {
        this.tabList = [];
        this.budgetTabAtIndex(0);
        var numHabbajets = habbajetIds.length;
        for (var i = 0; i < numHabbajets; i++) {
            this.habbajetTabAtIndex(habbajetIds[i], i + 1);
        }
        if (numHabbajets < MAX_HABBAJETS) {
            this.addTabAtIndex(numHabbajets + 1);
        }
    };
    TabService.prototype.addHabbajetTab = function (id) {
        var newHabbajetIndex = this.tabList.length - 1;
        this.habbajetTabAtIndex(id, newHabbajetIndex);
    };
    TabService.prototype.budgetTabAtIndex = function (index) {
        if (this.tabList.length <= index) {
            this.tabList.push({
                title: 'Budget',
                type: TabType.Budget,
                habbajetId: undefined,
            });
        }
        else {
            this.tabList[index].title = 'Budget';
            this.tabList[index].type = TabType.Budget;
            this.tabList[index].habbajetId = undefined;
        }
    };
    TabService.prototype.habbajetTabAtIndex = function (id, index) {
        if (this.tabList.length <= index) {
            this.tabList.push({
                title: 'Habbajet ' + index,
                type: TabType.Habbajet,
                habbajetId: id,
            });
        }
        else {
            this.tabList[index].title = 'Habbajet ' + index;
            this.tabList[index].type = TabType.Habbajet;
            this.tabList[index].habbajetId = id;
        }
    };
    TabService.prototype.addTabAtIndex = function (index) {
        if (this.tabList.length <= index) {
            this.tabList.push({
                title: 'New Habbajet',
                type: TabType.Add,
                habbajetId: undefined,
            });
        }
        else {
            this.tabList[index].title = 'New Habbajet';
            this.tabList[index].type = TabType.Add;
            this.tabList[index].habbajetId = undefined;
        }
    };
    TabService.prototype.removeHabbajetTab = function (habbajetIndex) {
        var tabIndex = -1;
        while (habbajetIndex > 0) {
            tabIndex++;
            if (this.tabList[tabIndex].type === TabType.Habbajet) {
                habbajetIndex--;
            }
        }
        var htab = this.tabList[tabIndex];
        htab.type = TabType.Empty;
    };
    TabService = __decorate([
        core_1.Injectable()
    ], TabService);
    return TabService;
}());
exports.TabService = TabService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQyxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFFeEIsSUFBWSxPQUtYO0FBTEQsV0FBWSxPQUFPO0lBQ2YsNkNBQVEsQ0FBQTtJQUNSLHlDQUFNLENBQUE7SUFDTixtQ0FBRyxDQUFBO0lBQ0gsdUNBQUssQ0FBQTtBQUNULENBQUMsRUFMVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFLbEI7QUFTRDtJQUFBO0lBMkVBLENBQUM7SUF2RVUsbUNBQWMsR0FBckIsVUFBc0IsV0FBcUI7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksWUFBWSxHQUFHLGFBQWEsRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUFFTSxtQ0FBYyxHQUFyQixVQUFzQixFQUFVO1FBQzVCLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0scUNBQWdCLEdBQXZCLFVBQXdCLEtBQWE7UUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUNwQixVQUFVLEVBQUUsU0FBUzthQUN4QixDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztJQUVNLHVDQUFrQixHQUF6QixVQUEwQixFQUFVLEVBQUUsS0FBYTtRQUMvQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDZCxLQUFLLEVBQUUsV0FBVyxHQUFHLEtBQUs7Z0JBQzFCLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtnQkFDdEIsVUFBVSxFQUFFLEVBQUU7YUFDakIsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBRU0sa0NBQWEsR0FBcEIsVUFBcUIsS0FBYTtRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDZCxLQUFLLEVBQUUsY0FBYztnQkFDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHO2dCQUNqQixVQUFVLEVBQUUsU0FBUzthQUN4QixDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztJQUVNLHNDQUFpQixHQUF4QixVQUF5QixhQUFxQjtRQUMxQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixPQUFPLGFBQWEsR0FBRyxDQUFDLEVBQUU7WUFDdEIsUUFBUSxFQUFFLENBQUM7WUFDWCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xELGFBQWEsRUFBRSxDQUFDO2FBQ25CO1NBQ0o7UUFDRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBMUVRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTtPQUNBLFVBQVUsQ0EyRXRCO0lBQUQsaUJBQUM7Q0FBQSxBQTNFRCxJQTJFQztBQTNFWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IE1BWF9IQUJCQUpFVFMgPSA1O1xyXG5cclxuZXhwb3J0IGVudW0gVGFiVHlwZSB7XHJcbiAgICBIYWJiYWpldCxcclxuICAgIEJ1ZGdldCxcclxuICAgIEFkZCxcclxuICAgIEVtcHR5LFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYkJpbmRpbmcge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHR5cGU6IFRhYlR5cGU7XHJcbiAgICBoYWJiYWpldElkOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRhYlNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyB0YWJMaXN0OiBUYWJCaW5kaW5nW107XHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpc2VUYWJzKGhhYmJhamV0SWRzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMudGFiTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYnVkZ2V0VGFiQXRJbmRleCgwKTtcclxuICAgICAgICBjb25zdCBudW1IYWJiYWpldHMgPSBoYWJiYWpldElkcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1IYWJiYWpldHM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0VGFiQXRJbmRleChoYWJiYWpldElkc1tpXSwgaSArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobnVtSGFiYmFqZXRzIDwgTUFYX0hBQkJBSkVUUykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRhYkF0SW5kZXgobnVtSGFiYmFqZXRzICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRIYWJiYWpldFRhYihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbmV3SGFiYmFqZXRJbmRleCA9IHRoaXMudGFiTGlzdC5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICB0aGlzLmhhYmJhamV0VGFiQXRJbmRleChpZCwgbmV3SGFiYmFqZXRJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJ1ZGdldFRhYkF0SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYkxpc3QubGVuZ3RoIDw9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQnVkZ2V0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFRhYlR5cGUuQnVkZ2V0LFxyXG4gICAgICAgICAgICAgICAgaGFiYmFqZXRJZDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnRpdGxlID0gJ0J1ZGdldCc7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udHlwZSA9IFRhYlR5cGUuQnVkZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmhhYmJhamV0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYWJiYWpldFRhYkF0SW5kZXgoaWQ6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYkxpc3QubGVuZ3RoIDw9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSGFiYmFqZXQgJyArIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogVGFiVHlwZS5IYWJiYWpldCxcclxuICAgICAgICAgICAgICAgIGhhYmJhamV0SWQ6IGlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnRpdGxlID0gJ0hhYmJhamV0ICcgKyBpbmRleDtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS50eXBlID0gVGFiVHlwZS5IYWJiYWpldDtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS5oYWJiYWpldElkID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUYWJBdEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy50YWJMaXN0Lmxlbmd0aCA8PSBpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05ldyBIYWJiYWpldCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBUYWJUeXBlLkFkZCxcclxuICAgICAgICAgICAgICAgIGhhYmJhamV0SWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS50aXRsZSA9ICdOZXcgSGFiYmFqZXQnO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnR5cGUgPSBUYWJUeXBlLkFkZDtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS5oYWJiYWpldElkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSGFiYmFqZXRUYWIoaGFiYmFqZXRJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgd2hpbGUgKGhhYmJhamV0SW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHRhYkluZGV4Kys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYkxpc3RbdGFiSW5kZXhdLnR5cGUgPT09IFRhYlR5cGUuSGFiYmFqZXQpIHtcclxuICAgICAgICAgICAgICAgIGhhYmJhamV0SW5kZXgtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBodGFiID0gdGhpcy50YWJMaXN0W3RhYkluZGV4XTtcclxuICAgICAgICBodGFiLnR5cGUgPSBUYWJUeXBlLkVtcHR5O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==