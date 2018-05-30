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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUczQyxJQUFZLE9BSVg7QUFKRCxXQUFZLE9BQU87SUFDZiw2Q0FBUSxDQUFBO0lBQ1IseUNBQU0sQ0FBQTtJQUNOLG1DQUFHLENBQUE7QUFDUCxDQUFDLEVBSlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBSWxCO0FBU0Q7SUFJSTtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sbUNBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sbUNBQWMsR0FBckI7UUFDSSxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0scUNBQWdCLEdBQXZCLFVBQXdCLEtBQWE7UUFDakMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDZCxLQUFLLEVBQUUsUUFBUTtnQkFDZixJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU07Z0JBQ3BCLGFBQWEsRUFBRSxTQUFTO2FBQzNCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQztJQUVNLHVDQUFrQixHQUF6QixVQUEwQixLQUFhO1FBQ25DLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLFdBQVcsR0FBRyxLQUFLO2dCQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7Z0JBQ3RCLGFBQWEsRUFBRSxLQUFLLEdBQUcsQ0FBQzthQUMzQixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQztJQUVNLGtDQUFhLEdBQXBCLFVBQXFCLEtBQWE7UUFDOUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDZCxLQUFLLEVBQUUsY0FBYztnQkFDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHO2dCQUNqQixhQUFhLEVBQUUsU0FBUzthQUMzQixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUE1RFEsVUFBVTtRQUR0QixpQkFBVSxFQUFFOztPQUNBLFVBQVUsQ0E2RHRCO0lBQUQsaUJBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgZW51bSBUYWJUeXBlIHtcclxuICAgIEhhYmJhamV0LFxyXG4gICAgQnVkZ2V0LFxyXG4gICAgQWRkLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhYkJpbmRpbmcge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHR5cGU6IFRhYlR5cGU7XHJcbiAgICBoYWJiYWpldEluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRhYlNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyB0YWJMaXN0OiBUYWJCaW5kaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlVGFicygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0aWFsaXNlVGFicygpIHtcclxuICAgICAgICB0aGlzLnRhYkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmJ1ZGdldFRhYkF0SW5kZXgoMCk7XHJcbiAgICAgICAgdGhpcy5hZGRUYWJBdEluZGV4KDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRIYWJiYWpldFRhYigpIHtcclxuICAgICAgICBjb25zdCBuZXdIYWJiYWpldEluZGV4ID0gdGhpcy50YWJMaXN0Lmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRUYWJBdEluZGV4KG5ld0hhYmJhamV0SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBidWRnZXRUYWJBdEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLnRhYkxpc3QubGVuZ3RoIDw9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQnVkZ2V0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFRhYlR5cGUuQnVkZ2V0LFxyXG4gICAgICAgICAgICAgICAgaGFiYmFqZXRJbmRleDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnRpdGxlID0gJ0J1ZGdldCc7XHJcbiAgICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0udHlwZSA9IFRhYlR5cGUuQnVkZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmhhYmJhamV0SW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYWJiYWpldFRhYkF0SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMudGFiTGlzdC5sZW5ndGggPD0gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIYWJiYWpldCAnICsgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBUYWJUeXBlLkhhYmJhamV0LFxyXG4gICAgICAgICAgICAgICAgaGFiYmFqZXRJbmRleDogaW5kZXggLSAxLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnRpdGxlID0gJ0hhYmJhamV0ICcgKyBpbmRleDtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS50eXBlID0gVGFiVHlwZS5IYWJiYWpldDtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS5oYWJiYWpldEluZGV4ID0gaW5kZXggLSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVGFiQXRJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy50YWJMaXN0Lmxlbmd0aCA8PSBpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05ldyBIYWJiYWpldCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBUYWJUeXBlLkFkZCxcclxuICAgICAgICAgICAgICAgIGhhYmJhamV0SW5kZXg6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS50aXRsZSA9ICdOZXcgSGFiYmFqZXQnO1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLnR5cGUgPSBUYWJUeXBlLkFkZDtcclxuICAgICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS5oYWJiYWpldEluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==