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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQyxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFFeEIsSUFBWSxPQUtYO0FBTEQsV0FBWSxPQUFPO0lBQ2YsNkNBQVEsQ0FBQTtJQUNSLHlDQUFNLENBQUE7SUFDTixtQ0FBRyxDQUFBO0lBQ0gsdUNBQUssQ0FBQTtBQUNULENBQUMsRUFMVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFLbEI7QUFTRDtJQUFBO0lBMkVBLENBQUM7SUF2RVUsbUNBQWMsR0FBckIsVUFBc0IsV0FBcUI7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDeEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNMLENBQUM7SUFFTSxtQ0FBYyxHQUFyQixVQUFzQixFQUFVO1FBQzVCLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsZ0JBQWdC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RyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUExRVEsVUFBVTtRQUR0QixpQkFBVSxFQUFFO09BQ0EsVUFBVSxDQTJFdEI7SUFBRCxpQkFBQztDQUFBLEFBM0VELElBMkVDO0FBM0VZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuY29uc3QgTUFYX0hBQkJBSkVUUyA9IDU7XHJcblxyXG5leHBvcnQgZW51bSBUYWJUeXBlIHtcclxuICAgIEhhYmJhamV0LFxyXG4gICAgQnVkZ2V0LFxyXG4gICAgQWRkLFxyXG4gICAgRW1wdHksXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFiQmluZGluZyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdHlwZTogVGFiVHlwZTtcclxuICAgIGhhYmJhamV0SWQ6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGFiU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHRhYkxpc3Q6IFRhYkJpbmRpbmdbXTtcclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGlzZVRhYnMoaGFiYmFqZXRJZHM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy50YWJMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5idWRnZXRUYWJBdEluZGV4KDApO1xyXG4gICAgICAgIGNvbnN0IG51bUhhYmJhamV0cyA9IGhhYmJhamV0SWRzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUhhYmJhamV0czsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRUYWJBdEluZGV4KGhhYmJhamV0SWRzW2ldLCBpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudW1IYWJiYWpldHMgPCBNQVhfSEFCQkFKRVRTKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVGFiQXRJbmRleChudW1IYWJiYWpldHMgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEhhYmJhamV0VGFiKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBuZXdIYWJiYWpldEluZGV4ID0gdGhpcy50YWJMaXN0Lmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRUYWJBdEluZGV4KGlkLCBuZXdIYWJiYWpldEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYnVkZ2V0VGFiQXRJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFiTGlzdC5sZW5ndGggPD0gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCdWRnZXQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogVGFiVHlwZS5CdWRnZXQsXHJcbiAgICAgICAgICAgICAgICBoYWJiYWpldElkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udGl0bGUgPSAnQnVkZ2V0JztcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS50eXBlID0gVGFiVHlwZS5CdWRnZXQ7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0uaGFiYmFqZXRJZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhYmJhamV0VGFiQXRJbmRleChpZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFiTGlzdC5sZW5ndGggPD0gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIYWJiYWpldCAnICsgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBUYWJUeXBlLkhhYmJhamV0LFxyXG4gICAgICAgICAgICAgICAgaGFiYmFqZXRJZDogaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udGl0bGUgPSAnSGFiYmFqZXQgJyArIGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnR5cGUgPSBUYWJUeXBlLkhhYmJhamV0O1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmhhYmJhamV0SWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRhYkF0SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYkxpc3QubGVuZ3RoIDw9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTmV3IEhhYmJhamV0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFRhYlR5cGUuQWRkLFxyXG4gICAgICAgICAgICAgICAgaGFiYmFqZXRJZDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnRpdGxlID0gJ05ldyBIYWJiYWpldCc7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udHlwZSA9IFRhYlR5cGUuQWRkO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmhhYmJhamV0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVIYWJiYWpldFRhYihoYWJiYWpldEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFiSW5kZXggPSAtMTtcclxuICAgICAgICB3aGlsZSAoaGFiYmFqZXRJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGFiSW5kZXgrKztcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFiTGlzdFt0YWJJbmRleF0udHlwZSA9PT0gVGFiVHlwZS5IYWJiYWpldCkge1xyXG4gICAgICAgICAgICAgICAgaGFiYmFqZXRJbmRleC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGh0YWIgPSB0aGlzLnRhYkxpc3RbdGFiSW5kZXhdO1xyXG4gICAgICAgIGh0YWIudHlwZSA9IFRhYlR5cGUuRW1wdHk7XHJcbiAgICB9XHJcbn1cclxuIl19