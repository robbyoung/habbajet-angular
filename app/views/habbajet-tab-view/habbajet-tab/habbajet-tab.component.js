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
var habbajet_service_1 = require("../../../services/habbajet.service");
var HabbajetTabComponent = /** @class */ (function () {
    function HabbajetTabComponent(habbajetService) {
        this.habbajetService = habbajetService;
    }
    HabbajetTabComponent.prototype.ngOnInit = function () {
        this.name = this.habbajetService.getHabbajetName(this.habbajetId);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HabbajetTabComponent.prototype, "habbajetId", void 0);
    HabbajetTabComponent = __decorate([
        core_1.Component({
            selector: 'habbajet-tab',
            templateUrl: 'views/habbajet-tab-view/habbajet-tab/habbajet-tab.html',
            styleUrls: ['views/habbajet-tab-view/habbajet-tab/habbajet-tab.css'],
        }),
        __metadata("design:paramtypes", [habbajet_service_1.HabbajetService])
    ], HabbajetTabComponent);
    return HabbajetTabComponent;
}());
exports.HabbajetTabComponent = HabbajetTabComponent;
