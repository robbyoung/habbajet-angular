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
