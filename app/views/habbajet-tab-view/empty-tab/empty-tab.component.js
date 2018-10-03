"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmptyTabComponent = /** @class */ (function () {
    function EmptyTabComponent() {
    }
    EmptyTabComponent = __decorate([
        core_1.Component({
            selector: 'empty-tab',
            templateUrl: 'views/habbajet-tab-view/empty-tab/empty-tab.html',
            styleUrls: ['views/habbajet-tab-view/empty-tab/empty-tab.css'],
        })
    ], EmptyTabComponent);
    return EmptyTabComponent;
}());
exports.EmptyTabComponent = EmptyTabComponent;
