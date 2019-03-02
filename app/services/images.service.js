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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var frame_counts_1 = require("../frame-counts");
var frame_rates_1 = require("../frame-rates");
exports.checkboxImagePrefix = '~/images/checkboxes/';
var ONE_SECOND = 1000;
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
    ImageService.prototype.animate = function (imageState) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.nextState(imageState);
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                setTimeout(function () {
                                    _this.nextState(imageState);
                                    resolve();
                                }, ONE_SECOND / imageState.rate);
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ImageService.prototype.nextState = function (imageState) {
        imageState.frame++;
        var numFrames = frame_counts_1.frameCounts(imageState.action + imageState.state);
        if (numFrames <= imageState.frame) {
            imageState.frame = 0;
            imageState.action = 'i';
            imageState.rate = frame_rates_1.frameRates(imageState.action + imageState.state);
        }
        imageState.refreshImageUrl();
    };
    ImageService.prototype.evolve = function (imageState) {
        if (imageState.action !== 't') {
            imageState.action = 't';
            imageState.frame = -1;
            imageState.state = (imageState.state + 1) % 7;
            imageState.rate = frame_rates_1.frameRates(imageState.action + imageState.state);
        }
    };
    ImageService.prototype.reset = function (imageState) {
        if (imageState.action !== 't') {
            imageState.action = 't';
            imageState.frame = -1;
            imageState.state = 0;
            imageState.rate = frame_rates_1.frameRates(imageState.action + imageState.state);
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
            imageState.rate = frame_rates_1.frameRates(imageState.action + imageState.state);
        }
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLGdEQUE4QztBQUM5Qyw4Q0FBNEM7QUFFL0IsUUFBQSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQztBQUMxRCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFFeEI7SUFNSSxvQkFBbUIsS0FBYSxFQUFTLEtBQWE7UUFBbkMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLG9DQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ3BILENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksZ0NBQVU7QUFtQnZCO0lBR0k7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRVksOEJBQU8sR0FBcEIsVUFBcUIsVUFBc0I7Ozs7Ozt3QkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7OzZCQUNwQixJQUFJO3dCQUNQLHFCQUFNLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxF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Q0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJhbWVDb3VudHMgfSBmcm9tICcuLi9mcmFtZS1jb3VudHMnO1xyXG5pbXBvcnQgeyBmcmFtZVJhdGVzIH0gZnJvbSAnLi4vZnJhbWUtcmF0ZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrYm94SW1hZ2VQcmVmaXggPSAnfi9pbWFnZXMvY2hlY2tib3hlcy8nO1xyXG5jb25zdCBPTkVfU0VDT05EID0gMTAwMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVN0YXRlIHtcclxuICAgIHB1YmxpYyBmcmFtZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGFjdGlvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmF0ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogbnVtYmVyLCBwdWJsaWMgY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9ICdpJztcclxuICAgICAgICB0aGlzLnJlZnJlc2hJbWFnZVVybCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWZyZXNoSW1hZ2VVcmwoKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9ICd+L2ltYWdlcy9oYWJiYWpldHMvJyArIHRoaXMuY29sb3IgKyAnLycgKyB0aGlzLmFjdGlvbiArIHRoaXMuc3RhdGUgKyAnLScgKyB0aGlzLmZyYW1lICsgJy5wbmcnO1xyXG4gICAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBudW1BY3Rpb25UeXBlcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm51bUFjdGlvblR5cGVzID0gMjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYW5pbWF0ZShpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0U3RhdGUoaW1hZ2VTdGF0ZSk7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0U3RhdGUoaW1hZ2VTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgT05FX1NFQ09ORCAvIGltYWdlU3RhdGUucmF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5leHRTdGF0ZShpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgaW1hZ2VTdGF0ZS5mcmFtZSsrO1xyXG4gICAgICAgIGNvbnN0IG51bUZyYW1lcyA9IGZyYW1lQ291bnRzKGltYWdlU3RhdGUuYWN0aW9uICsgaW1hZ2VTdGF0ZS5zdGF0ZSk7XHJcblxyXG4gICAgICAgIGlmIChudW1GcmFtZXMgPD0gaW1hZ2VTdGF0ZS5mcmFtZSkge1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmZyYW1lID0gMDtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5hY3Rpb24gPSAnaSc7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUucmF0ZSA9IGZyYW1lUmF0ZXMoaW1hZ2VTdGF0ZS5hY3Rpb24gKyBpbWFnZVN0YXRlLnN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltYWdlU3RhdGUucmVmcmVzaEltYWdlVXJsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2b2x2ZShpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgaWYgKGltYWdlU3RhdGUuYWN0aW9uICE9PSAndCcpIHtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5hY3Rpb24gPSAndCc7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuZnJhbWUgPSAtMTtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5zdGF0ZSA9IChpbWFnZVN0YXRlLnN0YXRlICsgMSkgJSA3O1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLnJhdGUgPSBmcmFtZVJhdGVzKGltYWdlU3RhdGUuYWN0aW9uICsgaW1hZ2VTdGF0ZS5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldChpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgaWYgKGltYWdlU3RhdGUuYWN0aW9uICE9PSAndCcpIHtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5hY3Rpb24gPSAndCc7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuZnJhbWUgPSAtMTtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5zdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUucmF0ZSA9IGZyYW1lUmF0ZXMoaW1hZ2VTdGF0ZS5hY3Rpb24gKyBpbWFnZVN0YXRlLnN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGlvbihpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgY29uc3QgcmFuZEFjdGlvbk51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMubnVtQWN0aW9uVHlwZXMpO1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSAnYSc7XHJcbiAgICAgICAgc3dpdGNoIChyYW5kQWN0aW9uTnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogYWN0aW9uID0gJ2EnOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOiBhY3Rpb24gPSAnYic7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZyYW1lQ291bnRzKGFjdGlvbiArIGltYWdlU3RhdGUuc3RhdGUpID4gMCAmJiBpbWFnZVN0YXRlLmFjdGlvbiAhPT0gJ3QnKSB7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuYWN0aW9uID0gYWN0aW9uO1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmZyYW1lID0gLTE7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUucmF0ZSA9IGZyYW1lUmF0ZXMoaW1hZ2VTdGF0ZS5hY3Rpb24gKyBpbWFnZVN0YXRlLnN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19