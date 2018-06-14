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
var frame_counts_1 = require("../frame-counts");
exports.checkboxImagePrefix = "~/images/checkboxes/checkbox";
var ImageState = /** @class */ (function () {
    function ImageState(state, color) {
        this.state = state;
        this.color = color;
        this.state = state;
        this.frame = 0;
        this.action = 'i';
        this.refreshImageUrl();
    }
    ImageState.prototype.refreshImageUrl = function () {
        this.imageUrl = '~/images/habbajets/' + this.color + '/' + this.action + this.state + '-' + this.frame + '.png';
    };
    return ImageState;
}());
exports.ImageState = ImageState;
var ImageService = /** @class */ (function () {
    function ImageService() {
        this.numActionTypes = 2;
    }
    ImageService.prototype.nextState = function (imageState) {
        imageState.frame++;
        var numFrames = frame_counts_1.frameCounts(imageState.action + imageState.state);
        if (numFrames <= imageState.frame) {
            imageState.frame = 0;
            imageState.action = 'i';
        }
        imageState.refreshImageUrl();
    };
    ImageService.prototype.evolve = function (imageState) {
        if (imageState.action !== 't') {
            imageState.action = 't';
            imageState.frame = -1;
            imageState.state = (imageState.state + 1) % 7;
        }
    };
    ImageService.prototype.action = function (imageState) {
        var randActionNum = Math.round(Math.random() * this.numActionTypes);
        var action = 'a';
        switch (randActionNum) {
            case 0:
                action = 'a';
                break;
            case 1:
                action = 'b';
                break;
        }
        if (frame_counts_1.frameCounts(action + imageState.state) > 0 && imageState.action !== 't') {
            imageState.action = action;
            imageState.frame = -1;
        }
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
