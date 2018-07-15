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
exports.checkboxImagePrefix = "~/images/checkboxes/";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnREFBOEM7QUFFakMsUUFBQSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQztBQUUxRDtJQUtJLG9CQUFtQixLQUFhLEVBQVMsS0FBYTtRQUFuQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sb0NBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7SUFDcEgsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxnQ0FBVTtBQWtCdkI7SUFHSTtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixVQUFzQjtRQUNuQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBTSxTQUFTLEdBQUcsMEJBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwRSxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDckIsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsQ0FBQztRQUVELFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLFVBQXNCO1FBQ2hDLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzQixVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUN4QixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxVQUFzQjtRQUNoQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEUsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsS0FBSyxDQUFDO2dCQUFFLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQzVCLEtBQUssQ0FBQztnQkFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUFDLEtBQUssQ0FBQztRQUNoQyxDQUFDO1FBRUQsRUFBRSxDQUFBLENBQUMsMEJBQVcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekUsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDM0IsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDO0lBQ0wsQ0FBQztJQXZDUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQXdDeEI7SUFBRCxtQkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGZyYW1lQ291bnRzIH0gZnJvbSAnLi4vZnJhbWUtY291bnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja2JveEltYWdlUHJlZml4ID0gXCJ+L2ltYWdlcy9jaGVja2JveGVzL1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlU3RhdGUge1xyXG4gICAgcHVibGljIGZyYW1lOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYWN0aW9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW1hZ2VVcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGU6IG51bWJlciwgcHVibGljIGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnaSc7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoSW1hZ2VVcmwoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHJlZnJlc2hJbWFnZVVybCgpIHtcclxuICAgICAgICB0aGlzLmltYWdlVXJsID0gJ34vaW1hZ2VzL2hhYmJhamV0cy8nICsgdGhpcy5jb2xvciArICcvJyArIHRoaXMuYWN0aW9uICsgdGhpcy5zdGF0ZSArICctJyArIHRoaXMuZnJhbWUgKyAnLnBuZyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEltYWdlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG51bUFjdGlvblR5cGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubnVtQWN0aW9uVHlwZXMgPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXh0U3RhdGUoaW1hZ2VTdGF0ZTogSW1hZ2VTdGF0ZSkge1xyXG4gICAgICAgIGltYWdlU3RhdGUuZnJhbWUrKztcclxuICAgICAgICBjb25zdCBudW1GcmFtZXMgPSBmcmFtZUNvdW50cyhpbWFnZVN0YXRlLmFjdGlvbiArIGltYWdlU3RhdGUuc3RhdGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChudW1GcmFtZXMgPD0gaW1hZ2VTdGF0ZS5mcmFtZSkge1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmZyYW1lID0gMDtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5hY3Rpb24gPSAnaSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWFnZVN0YXRlLnJlZnJlc2hJbWFnZVVybCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBldm9sdmUoaW1hZ2VTdGF0ZTogSW1hZ2VTdGF0ZSkge1xyXG4gICAgICAgIGlmKGltYWdlU3RhdGUuYWN0aW9uICE9PSAndCcpIHtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5hY3Rpb24gPSAndCc7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuZnJhbWUgPSAtMTtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5zdGF0ZSA9IChpbWFnZVN0YXRlLnN0YXRlICsgMSkgJSA3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aW9uKGltYWdlU3RhdGU6IEltYWdlU3RhdGUpIHtcclxuICAgICAgICBsZXQgcmFuZEFjdGlvbk51bSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMubnVtQWN0aW9uVHlwZXMpO1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSAnYSc7XHJcbiAgICAgICAgc3dpdGNoKHJhbmRBY3Rpb25OdW0pIHtcclxuICAgICAgICAgICAgY2FzZSAwOiBhY3Rpb24gPSAnYSc7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IGFjdGlvbiA9ICdiJzsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihmcmFtZUNvdW50cyhhY3Rpb24gKyBpbWFnZVN0YXRlLnN0YXRlKSA+IDAgJiYgaW1hZ2VTdGF0ZS5hY3Rpb24gIT09ICd0Jykge1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmFjdGlvbiA9IGFjdGlvbjtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5mcmFtZSA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==