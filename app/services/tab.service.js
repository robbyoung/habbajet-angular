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
})(TabType = exports.TabType || (exports.TabType = {}));
var TabService = /** @class */ (function () {
    function TabService() {
    }
    TabService.prototype.initialiseTabs = function (numHabbajets) {
        this.tabList = [];
        this.budgetTabAtIndex(0);
        for (var i = 0; i < numHabbajets; i++) {
            this.habbajetTabAtIndex(i + 1);
        }
        if (numHabbajets < MAX_HABBAJETS) {
            this.addTabAtIndex(numHabbajets + 1);
        }
    };
    TabService.prototype.addHabbajetTab = function () {
        var newHabbajetIndex = this.tabList.length - 1;
        this.habbajetTabAtIndex(newHabbajetIndex);
    };
    TabService.prototype.budgetTabAtIndex = function (index) {
        if (this.tabList.length <= index) {
            this.tabList.push({
                title: 'Budget',
                type: TabType.Budget,
                habbajetIndex: undefined,
            });
        }
        else {
            this.tabList[index].title = 'Budget';
            this.tabList[index].type = TabType.Budget;
            this.tabList[index].habbajetIndex = undefined;
        }
    };
    TabService.prototype.habbajetTabAtIndex = function (index) {
        if (this.tabList.length <= index) {
            this.tabList.push({
                title: 'Habbajet ' + index,
                type: TabType.Habbajet,
                habbajetIndex: index - 1,
            });
        }
        else {
            this.tabList[index].title = 'Habbajet ' + index;
            this.tabList[index].type = TabType.Habbajet;
            this.tabList[index].habbajetIndex = index - 1;
        }
    };
    TabService.prototype.addTabAtIndex = function (index) {
        if (this.tabList.length <= index) {
            this.tabList.push({
                title: 'New Habbajet',
                type: TabType.Add,
                habbajetIndex: undefined,
            });
        }
        else {
            this.tabList[index].title = 'New Habbajet';
            this.tabList[index].type = TabType.Add;
            this.tabList[index].habbajetIndex = undefined;
        }
    };
    TabService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TabService);
    return TabService;
}());
exports.TabService = TabService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQyxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFFeEIsSUFBWSxPQUlYO0FBSkQsV0FBWSxPQUFPO0lBQ2YsNkNBQVEsQ0FBQTtJQUNSLHlDQUFNLENBQUE7SUFDTixtQ0FBRyxDQUFBO0FBQ1AsQ0FBQyxFQUpXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUlsQjtBQVNEO0lBSUk7SUFBZSxDQUFDO0lBRVQsbUNBQWMsR0FBckIsVUFBc0IsWUFBb0I7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNMLENBQUM7SUFFTSxtQ0FBYyxHQUFyQjtRQUNJLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxxQ0FBZ0IsR0FBdkIsVUFBd0IsS0FBYTtRQUNqQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNkLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDcEIsYUFBYSxFQUFFLFNBQVM7YUFDM0IsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBRU0sdUNBQWtCLEdBQXpCLFVBQTBCLEtBQWE7UUFDbkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDZCxLQUFLLEVBQUUsV0FBVyxHQUFHLEtBQUs7Z0JBQzFCLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtnQkFDdEIsYUFBYSxFQUFFLEtBQUssR0FBRyxDQUFDO2FBQzNCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBRU0sa0NBQWEsR0FBcEIsVUFBcUIsS0FBYTtRQUM5QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNkLEtBQUssRUFBRSxjQUFjO2dCQUNyQixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUc7Z0JBQ2pCLGFBQWEsRUFBRSxTQUFTO2FBQzNCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQztJQS9EUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7O09BQ0EsVUFBVSxDQWdFdEI7SUFBRCxpQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5jb25zdCBNQVhfSEFCQkFKRVRTID0gNTtcclxuXHJcbmV4cG9ydCBlbnVtIFRhYlR5cGUge1xyXG4gICAgSGFiYmFqZXQsXHJcbiAgICBCdWRnZXQsXHJcbiAgICBBZGQsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFiQmluZGluZyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdHlwZTogVGFiVHlwZTtcclxuICAgIGhhYmJhamV0SW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGFiU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHRhYkxpc3Q6IFRhYkJpbmRpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpc2VUYWJzKG51bUhhYmJhamV0czogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50YWJMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5idWRnZXRUYWJBdEluZGV4KDApO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1IYWJiYWpldHM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0VGFiQXRJbmRleChpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudW1IYWJiYWpldHMgPCBNQVhfSEFCQkFKRVRTKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVGFiQXRJbmRleChudW1IYWJiYWpldHMgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEhhYmJhamV0VGFiKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld0hhYmJhamV0SW5kZXggPSB0aGlzLnRhYkxpc3QubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5oYWJiYWpldFRhYkF0SW5kZXgobmV3SGFiYmFqZXRJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJ1ZGdldFRhYkF0SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMudGFiTGlzdC5sZW5ndGggPD0gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCdWRnZXQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogVGFiVHlwZS5CdWRnZXQsXHJcbiAgICAgICAgICAgICAgICBoYWJiYWpldEluZGV4OiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udGl0bGUgPSAnQnVkZ2V0JztcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS50eXBlID0gVGFiVHlwZS5CdWRnZXQ7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0uaGFiYmFqZXRJbmRleCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhYmJhamV0VGFiQXRJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy50YWJMaXN0Lmxlbmd0aCA8PSBpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0hhYmJhamV0ICcgKyBpbmRleCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFRhYlR5cGUuSGFiYmFqZXQsXHJcbiAgICAgICAgICAgICAgICBoYWJiYWpldEluZGV4OiBpbmRleCAtIDEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udGl0bGUgPSAnSGFiYmFqZXQgJyArIGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnR5cGUgPSBUYWJUeXBlLkhhYmJhamV0O1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmhhYmJhamV0SW5kZXggPSBpbmRleCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUYWJBdEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLnRhYkxpc3QubGVuZ3RoIDw9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTmV3IEhhYmJhamV0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFRhYlR5cGUuQWRkLFxyXG4gICAgICAgICAgICAgICAgaGFiYmFqZXRJbmRleDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnRpdGxlID0gJ05ldyBIYWJiYWpldCc7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udHlwZSA9IFRhYlR5cGUuQWRkO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmhhYmJhamV0SW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19