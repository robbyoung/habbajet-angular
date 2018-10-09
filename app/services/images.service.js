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
exports.checkboxImagePrefix = '~/images/checkboxes/';
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
    ImageService.prototype.reset = function (imageState) {
        if (imageState.action !== 't') {
            imageState.action = 't';
            imageState.frame = -1;
            imageState.state = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnREFBOEM7QUFFakMsUUFBQSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQztBQUUxRDtJQUtJLG9CQUFtQixLQUFhLEVBQVMsS0FBYTtRQUFuQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sb0NBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7SUFDcEgsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxnQ0FBVTtBQWtCdkI7SUFHSTtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixVQUFzQjtRQUNuQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBTSxTQUFTLEdBQUcsMEJBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwRSxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDckIsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsQ0FBQztRQUVELFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLFVBQXNCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QixVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUN4QixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQztJQUVNLDRCQUFLLEdBQVosVUFBYSxVQUFzQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDeEIsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxVQUFzQjtRQUNoQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEUsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxDQUFDO2dCQUFFLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQzVCLEtBQUssQ0FBQztnQkFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUFDLEtBQUssQ0FBQztRQUNoQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsMEJBQVcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUUsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDM0IsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDO0lBQ0wsQ0FBQztJQS9DUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQWdEeEI7SUFBRCxtQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcmFtZUNvdW50cyB9IGZyb20gJy4uL2ZyYW1lLWNvdW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tib3hJbWFnZVByZWZpeCA9ICd+L2ltYWdlcy9jaGVja2JveGVzLyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTdGF0ZSB7XHJcbiAgICBwdWJsaWMgZnJhbWU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhY3Rpb246IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogbnVtYmVyLCBwdWJsaWMgY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9ICdpJztcclxuICAgICAgICB0aGlzLnJlZnJlc2hJbWFnZVVybCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWZyZXNoSW1hZ2VVcmwoKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9ICd+L2ltYWdlcy9oYWJiYWpldHMvJyArIHRoaXMuY29sb3IgKyAnLycgKyB0aGlzLmFjdGlvbiArIHRoaXMuc3RhdGUgKyAnLScgKyB0aGlzLmZyYW1lICsgJy5wbmcnO1xyXG4gICAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBudW1BY3Rpb25UeXBlcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm51bUFjdGlvblR5cGVzID0gMjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV4dFN0YXRlKGltYWdlU3RhdGU6IEltYWdlU3RhdGUpIHtcclxuICAgICAgICBpbWFnZVN0YXRlLmZyYW1lKys7XHJcbiAgICAgICAgY29uc3QgbnVtRnJhbWVzID0gZnJhbWVDb3VudHMoaW1hZ2VTdGF0ZS5hY3Rpb24gKyBpbWFnZVN0YXRlLnN0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKG51bUZyYW1lcyA8PSBpbWFnZVN0YXRlLmZyYW1lKSB7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuZnJhbWUgPSAwO1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmFjdGlvbiA9ICdpJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltYWdlU3RhdGUucmVmcmVzaEltYWdlVXJsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2b2x2ZShpbWFnZVN0YXRlOiBJbWFnZVN0YXRlKSB7XHJcbiAgICAgICAgaWYgKGltYWdlU3RhdGUuYWN0aW9uICE9PSAndCcpIHtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5hY3Rpb24gPSAndCc7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuZnJhbWUgPSAtMTtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5zdGF0ZSA9IChpbWFnZVN0YXRlLnN0YXRlICsgMSkgJSA3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoaW1hZ2VTdGF0ZTogSW1hZ2VTdGF0ZSkge1xyXG4gICAgICAgIGlmIChpbWFnZVN0YXRlLmFjdGlvbiAhPT0gJ3QnKSB7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuYWN0aW9uID0gJ3QnO1xyXG4gICAgICAgICAgICBpbWFnZVN0YXRlLmZyYW1lID0gLTE7XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuc3RhdGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aW9uKGltYWdlU3RhdGU6IEltYWdlU3RhdGUpIHtcclxuICAgICAgICBjb25zdCByYW5kQWN0aW9uTnVtID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogdGhpcy5udW1BY3Rpb25UeXBlcyk7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9ICdhJztcclxuICAgICAgICBzd2l0Y2ggKHJhbmRBY3Rpb25OdW0pIHtcclxuICAgICAgICAgICAgY2FzZSAwOiBhY3Rpb24gPSAnYSc7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IGFjdGlvbiA9ICdiJzsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZnJhbWVDb3VudHMoYWN0aW9uICsgaW1hZ2VTdGF0ZS5zdGF0ZSkgPiAwICYmIGltYWdlU3RhdGUuYWN0aW9uICE9PSAndCcpIHtcclxuICAgICAgICAgICAgaW1hZ2VTdGF0ZS5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgICAgIGltYWdlU3RhdGUuZnJhbWUgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19