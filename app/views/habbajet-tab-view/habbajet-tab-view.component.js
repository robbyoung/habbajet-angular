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
var frame = require("tns-core-modules/ui/frame/frame");
var habbajet_service_1 = require("../../services/habbajet.service");
var tab_service_1 = require("../../services/tab.service");
var HabbajetTabViewComponent = /** @class */ (function () {
    function HabbajetTabViewComponent(tabService, habbajetService) {
        this.tabService = tabService;
        this.habbajetService = habbajetService;
        var interval = setInterval(function () {
            var page = frame.topmost().currentPage;
            if (page) {
                page.getViewById('tabView').android.removeViewAt(1);
                page.actionBarHidden = true;
                clearInterval(interval);
            }
        }, 10);
    }
    HabbajetTabViewComponent.prototype.ngOnInit = function () {
        this.tabList = this.tabService.tabList;
    };
    HabbajetTabViewComponent = __decorate([
        core_1.Component({
            selector: 'habbajet-tab-view',
            templateUrl: 'views/habbajet-tab-view/habbajet-tab-view.html',
        }),
        __metadata("design:paramtypes", [tab_service_1.TabService, habbajet_service_1.HabbajetService])
    ], HabbajetTabViewComponent);
    return HabbajetTabViewComponent;
}());
exports.HabbajetTabViewComponent = HabbajetTabViewComponent;
