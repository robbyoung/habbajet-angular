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
var TabType;
(function (TabType) {
    TabType[TabType["Habbajet"] = 0] = "Habbajet";
    TabType[TabType["Budget"] = 1] = "Budget";
    TabType[TabType["Add"] = 2] = "Add";
})(TabType = exports.TabType || (exports.TabType = {}));
var TabService = /** @class */ (function () {
    function TabService() {
        this.initialiseTabs();
    }
    TabService.prototype.initialiseTabs = function () {
        this.tabList = [];
        this.budgetTabAtIndex(0);
        this.addTabAtIndex(1);
    };
    TabService.prototype.addHabbajetTab = function () {
        var newHabbajetIndex = this.tabList.length;
        this.habbajetTabAtIndex(newHabbajetIndex);
        this.addTabAtIndex(newHabbajetIndex + 1);
        console.dir(this.tabList);
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
                habbajetIndex: index - 2,
            });
        }
        else {
            this.tabList[index].title = 'Habbajet ' + index;
            this.tabList[index].type = TabType.Habbajet;
            this.tabList[index].habbajetIndex = index - 2;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUczQyxJQUFZLE9BSVg7QUFKRCxXQUFZLE9BQU87SUFDZiw2Q0FBUSxDQUFBO0lBQ1IseUNBQU0sQ0FBQTtJQUNOLG1DQUFHLENBQUE7QUFDUCxDQUFDLEVBSlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBSWxCO0FBU0Q7SUFJSTtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sbUNBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sbUNBQWMsR0FBckI7UUFDSSxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRTdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLHFDQUFnQixHQUF2QixVQUF3QixLQUFhO1FBQ2pDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUNwQixhQUFhLEVBQUUsU0FBUzthQUMzQixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBa0IsR0FBekIsVUFBMEIsS0FBYTtRQUNuQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNkLEtBQUssRUFBRSxXQUFXLEdBQUcsS0FBSztnQkFDMUIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUN0QixhQUFhLEVBQUUsS0FBSyxHQUFHLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFFTSxrQ0FBYSxHQUFwQixVQUFxQixLQUFhO1FBQzlCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRztnQkFDakIsYUFBYSxFQUFFLFNBQVM7YUFDM0IsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBL0RRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTs7T0FDQSxVQUFVLENBZ0V0QjtJQUFELGlCQUFDO0NBQUEsQUFoRUQsSUFnRUM7QUFoRVksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGVudW0gVGFiVHlwZSB7XHJcbiAgICBIYWJiYWpldCxcclxuICAgIEJ1ZGdldCxcclxuICAgIEFkZCxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJCaW5kaW5nIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBUYWJUeXBlO1xyXG4gICAgaGFiYmFqZXRJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYWJTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgdGFiTGlzdDogVGFiQmluZGluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZVRhYnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGlzZVRhYnMoKSB7XHJcbiAgICAgICAgdGhpcy50YWJMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5idWRnZXRUYWJBdEluZGV4KDApO1xyXG4gICAgICAgIHRoaXMuYWRkVGFiQXRJbmRleCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSGFiYmFqZXRUYWIoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3SGFiYmFqZXRJbmRleCA9IHRoaXMudGFiTGlzdC5sZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRUYWJBdEluZGV4KG5ld0hhYmJhamV0SW5kZXgpO1xyXG4gICAgICAgIHRoaXMuYWRkVGFiQXRJbmRleChuZXdIYWJiYWpldEluZGV4ICsgMSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMudGFiTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJ1ZGdldFRhYkF0SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMudGFiTGlzdC5sZW5ndGggPD0gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCdWRnZXQnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogVGFiVHlwZS5CdWRnZXQsXHJcbiAgICAgICAgICAgICAgICBoYWJiYWpldEluZGV4OiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udGl0bGUgPSAnQnVkZ2V0JztcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS50eXBlID0gVGFiVHlwZS5CdWRnZXQ7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0uaGFiYmFqZXRJbmRleCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhYmJhamV0VGFiQXRJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy50YWJMaXN0Lmxlbmd0aCA8PSBpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0hhYmJhamV0ICcgKyBpbmRleCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFRhYlR5cGUuSGFiYmFqZXQsXHJcbiAgICAgICAgICAgICAgICBoYWJiYWpldEluZGV4OiBpbmRleCAtIDIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udGl0bGUgPSAnSGFiYmFqZXQgJyArIGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnR5cGUgPSBUYWJUeXBlLkhhYmJhamV0O1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmhhYmJhamV0SW5kZXggPSBpbmRleCAtIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUYWJBdEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLnRhYkxpc3QubGVuZ3RoIDw9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTmV3IEhhYmJhamV0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFRhYlR5cGUuQWRkLFxyXG4gICAgICAgICAgICAgICAgaGFiYmFqZXRJbmRleDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnRpdGxlID0gJ05ldyBIYWJiYWpldCc7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udHlwZSA9IFRhYlR5cGUuQWRkO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmhhYmJhamV0SW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19