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
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TabService);
    return TabService;
}());
exports.TabService = TabService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQyxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFFeEIsSUFBWSxPQUtYO0FBTEQsV0FBWSxPQUFPO0lBQ2YsNkNBQVEsQ0FBQTtJQUNSLHlDQUFNLENBQUE7SUFDTixtQ0FBRyxDQUFBO0lBQ0gsdUNBQUssQ0FBQTtBQUNULENBQUMsRUFMVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFLbEI7QUFTRDtJQUlJO0lBQWUsQ0FBQztJQUVULG1DQUFjLEdBQXJCLFVBQXNCLFdBQXFCO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3hDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBRU0sbUNBQWMsR0FBckIsVUFBc0IsRUFBVTtRQUM1QixJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLGdCQUFn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QUcsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBNUVRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTs7T0FDQSxVQUFVLENBNkV0QjtJQUFELGlCQUFDO0NBQUEsQUE3RUQsSUE2RUM7QUE3RVksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmNvbnN0IE1BWF9IQUJCQUpFVFMgPSA1O1xyXG5cclxuZXhwb3J0IGVudW0gVGFiVHlwZSB7XHJcbiAgICBIYWJiYWpldCxcclxuICAgIEJ1ZGdldCxcclxuICAgIEFkZCxcclxuICAgIEVtcHR5XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFiQmluZGluZyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdHlwZTogVGFiVHlwZTtcclxuICAgIGhhYmJhamV0SWQ6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGFiU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHRhYkxpc3Q6IFRhYkJpbmRpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpc2VUYWJzKGhhYmJhamV0SWRzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMudGFiTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYnVkZ2V0VGFiQXRJbmRleCgwKTtcclxuICAgICAgICBjb25zdCBudW1IYWJiYWpldHMgPSBoYWJiYWpldElkcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG51bUhhYmJhamV0czsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRUYWJBdEluZGV4KGhhYmJhamV0SWRzW2ldLCBpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudW1IYWJiYWpldHMgPCBNQVhfSEFCQkFKRVRTKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVGFiQXRJbmRleChudW1IYWJiYWpldHMgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEhhYmJhamV0VGFiKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBuZXdIYWJiYWpldEluZGV4ID0gdGhpcy50YWJMaXN0Lmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRUYWJBdEluZGV4KGlkLCBuZXdIYWJiYWpldEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYnVkZ2V0VGFiQXRJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy50YWJMaXN0Lmxlbmd0aCA8PSBpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0J1ZGdldCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBUYWJUeXBlLkJ1ZGdldCxcclxuICAgICAgICAgICAgICAgIGhhYmJhamV0SWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS50aXRsZSA9ICdCdWRnZXQnO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnR5cGUgPSBUYWJUeXBlLkJ1ZGdldDtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS5oYWJiYWpldElkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFiYmFqZXRUYWJBdEluZGV4KGlkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLnRhYkxpc3QubGVuZ3RoIDw9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSGFiYmFqZXQgJyArIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogVGFiVHlwZS5IYWJiYWpldCxcclxuICAgICAgICAgICAgICAgIGhhYmJhamV0SWQ6IGlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnRpdGxlID0gJ0hhYmJhamV0ICcgKyBpbmRleDtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS50eXBlID0gVGFiVHlwZS5IYWJiYWpldDtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS5oYWJiYWpldElkID0gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUYWJBdEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLnRhYkxpc3QubGVuZ3RoIDw9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTmV3IEhhYmJhamV0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFRhYlR5cGUuQWRkLFxyXG4gICAgICAgICAgICAgICAgaGFiYmFqZXRJZDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnRpdGxlID0gJ05ldyBIYWJiYWpldCc7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udHlwZSA9IFRhYlR5cGUuQWRkO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmhhYmJhamV0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVIYWJiYWpldFRhYihoYWJiYWpldEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFiSW5kZXggPSAtMTtcclxuICAgICAgICB3aGlsZSAoaGFiYmFqZXRJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgdGFiSW5kZXgrKztcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFiTGlzdFt0YWJJbmRleF0udHlwZSA9PT0gVGFiVHlwZS5IYWJiYWpldCkge1xyXG4gICAgICAgICAgICAgICAgaGFiYmFqZXRJbmRleC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGh0YWIgPSB0aGlzLnRhYkxpc3RbdGFiSW5kZXhdO1xyXG4gICAgICAgIGh0YWIudHlwZSA9IFRhYlR5cGUuRW1wdHk7XHJcbiAgICB9XHJcbn0iXX0=