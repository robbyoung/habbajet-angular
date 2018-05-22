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
        this.tabList.push(TabType.Budget);
        this.tabList.push(TabType.Add);
    };
    TabService.prototype.addHabbajetTab = function () {
        var newHabbajetIndex = this.tabList.length - 1;
        this.tabList[newHabbajetIndex] = TabType.Habbajet;
        this.tabList.push(TabType.Add);
        console.dir(this.tabList);
    };
    TabService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TabService);
    return TabService;
}());
exports.TabService = TabService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUczQyxJQUFZLE9BSVg7QUFKRCxXQUFZLE9BQU87SUFDZiw2Q0FBUSxDQUFBO0lBQ1IseUNBQU0sQ0FBQTtJQUNOLG1DQUFHLENBQUE7QUFDUCxDQUFDLEVBSlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBSWxCO0FBR0Q7SUFJSTtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sbUNBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxtQ0FBYyxHQUFyQjtRQUNJLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBckJRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTs7T0FDQSxVQUFVLENBc0J0QjtJQUFELGlCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGVudW0gVGFiVHlwZSB7XHJcbiAgICBIYWJiYWpldCxcclxuICAgIEJ1ZGdldCxcclxuICAgIEFkZCxcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGFiU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHRhYkxpc3Q6IFRhYlR5cGVbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpc2VUYWJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpc2VUYWJzKCkge1xyXG4gICAgICAgIHRoaXMudGFiTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKFRhYlR5cGUuQnVkZ2V0KVxyXG4gICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKFRhYlR5cGUuQWRkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSGFiYmFqZXRUYWIoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3SGFiYmFqZXRJbmRleCA9IHRoaXMudGFiTGlzdC5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICB0aGlzLnRhYkxpc3RbbmV3SGFiYmFqZXRJbmRleF0gPSBUYWJUeXBlLkhhYmJhamV0O1xyXG4gICAgICAgIHRoaXMudGFiTGlzdC5wdXNoKFRhYlR5cGUuQWRkKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5kaXIodGhpcy50YWJMaXN0KTtcclxuICAgIH1cclxufSJdfQ==