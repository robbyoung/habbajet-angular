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
var images_service_1 = require("./images.service");
var checkbox_service_1 = require("./checkbox.service");
var _ = require("lodash");
var tab_service_1 = require("./tab.service");
var Habbajet = /** @class */ (function () {
    function Habbajet(name, state, color) {
        this.name = name;
        this.state = state;
        this.color = color;
        this.image = new images_service_1.ImageState(state, color);
        this.buttons = {
            locked: false,
        };
    }
    return Habbajet;
}());
var HabbajetService = /** @class */ (function () {
    function HabbajetService(imageService, checkboxService, tabService) {
        this.imageService = imageService;
        this.checkboxService = checkboxService;
        this.tabService = tabService;
        this.habbajetList = [];
    }
    HabbajetService.prototype.habbajetExists = function (index) {
        return this.habbajetList.length > index && this.habbajetList[index] !== undefined;
    };
    HabbajetService.prototype.getHabbajetCount = function () {
        return this.habbajetList.length;
    };
    HabbajetService.prototype.getHabbajetName = function (index) {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].name;
        }
        else {
            return 'To Remove';
        }
    };
    HabbajetService.prototype.getHabbajetImage = function (index) {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].image;
        }
        else {
            return undefined;
        }
    };
    HabbajetService.prototype.getHabbajetInfo = function (index) {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].info;
        }
        else {
            return undefined;
        }
    };
    HabbajetService.prototype.getHabbajetCheckboxes = function (index) {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].checkboxes;
        }
        else {
            return undefined;
        }
    };
    HabbajetService.prototype.getHabbajetButtons = function (index) {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].buttons;
        }
        else {
            return undefined;
        }
    };
    HabbajetService.prototype.evolve = function (habbajetIndex) {
        if (this.habbajetExists(habbajetIndex)) {
            this.imageService.evolve(this.habbajetList[habbajetIndex].image);
        }
    };
    HabbajetService.prototype.action = function (habbajetIndex) {
        if (this.habbajetExists(habbajetIndex)) {
            this.imageService.action(this.habbajetList[habbajetIndex].image);
        }
    };
    HabbajetService.prototype.selectCheckbox = function (habbajetIndex, day) {
        if (this.habbajetExists(habbajetIndex)) {
            var habbajet = this.habbajetList[habbajetIndex];
            habbajet.buttons.locked = habbajet.checkboxes[day].checkmark !== checkbox_service_1.Checkmark.None;
        }
    };
    HabbajetService.prototype.setCheckmark = function (habbajetIndex, checkmark) {
        if (this.habbajetExists(habbajetIndex)) {
            var habbajet = this.habbajetList[habbajetIndex];
            if (habbajet.image.action !== 't') {
                var activeCheckbox = _.find(habbajet.checkboxes, function (c) { return c.active; });
                if (activeCheckbox !== undefined) {
                    activeCheckbox.checkmark = checkmark;
                    // this.resetCheckboxesIfNecessary(habbajet);
                    return true;
                }
            }
        }
        return false;
    };
    HabbajetService.prototype.resetCheckboxesIfNecessary = function (habbajet) {
        var checkboxes = habbajet.checkboxes;
        if (_.every(checkboxes, function (c) { return c.checkmark !== checkbox_service_1.Checkmark.None; })) {
            this.checkboxService.getNextWeek(checkboxes);
            habbajet.buttons.locked = false;
        }
    };
    HabbajetService.prototype.newHabbajet = function (name, value, factor, slack, color) {
        var habbajet = new Habbajet(name, 0, color);
        habbajet.checkboxes = this.checkboxService.getCurrentWeek();
        habbajet.info = {
            streak: 0,
            value: value,
            factor: factor,
            slack: slack,
        };
        this.habbajetList.push(habbajet);
        this.tabService.addHabbajetTab();
    };
    HabbajetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [images_service_1.ImageService, checkbox_service_1.CheckboxService, tab_service_1.TabService])
    ], HabbajetService);
    return HabbajetService;
}());
exports.HabbajetService = HabbajetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsbURBQTREO0FBQzVELHVEQUF1RjtBQUN2RiwwQkFBNEI7QUFDNUIsNkNBQTJDO0FBYTNDO0lBTUksa0JBQW1CLElBQVksRUFBUyxLQUFhLEVBQVMsS0FBYTtRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDJCQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxNQUFNLEVBQUUsS0FBSztTQUNoQixDQUFBO0lBQ0wsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQUdEO0lBR0kseUJBQW9CLFlBQTBCLEVBQVUsZUFBZ0MsRUFBVSxVQUFzQjtRQUFwRyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDcEgsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLHdDQUFjLEdBQXJCLFVBQXNCLEtBQWE7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUN0RixDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFFTSx5Q0FBZSxHQUF0QixVQUF1QixLQUFhO1FBQ2hDLEVBQUUsQ0FB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VUFBbUIsSUFBWSxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsS0FBYSxFQUFFLEtBQWE7UUFDeEYsSUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDNUQsUUFBUSxDQUFDLElBQUksR0FBRztZQUNaLE1BQU0sRUFBRSxDQUFDO1lBQ1QsS0FBSyxPQUFBO1lBQ0wsTUFBTSxRQUFBO1lBQ04sS0FBSyxPQUFBO1NBQ1IsQ0FBQTtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQTlHUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBSXlCLDZCQUFZLEVBQTJCLGtDQUFlLEVBQXNCLHdCQUFVO09BSC9HLGVBQWUsQ0ErRzNCO0lBQUQsc0JBQUM7Q0FBQSxBQS9HRCxJQStHQztBQS9HWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRlLCBJbWFnZVNlcnZpY2UgfSBmcm9tIFwiLi9pbWFnZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldENoZWNrYm94LCBDaGVja2JveFNlcnZpY2UsIERheSwgQ2hlY2ttYXJrIH0gZnJvbSBcIi4vY2hlY2tib3guc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFRhYlNlcnZpY2UgfSBmcm9tIFwiLi90YWIuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIYWJiYWpldEluZm8gIHtcclxuICAgIHN0cmVhazogbnVtYmVyO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIGZhY3RvcjogbnVtYmVyO1xyXG4gICAgc2xhY2s6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIYWJiYWpldEJ1dHRvbnMge1xyXG4gICAgbG9ja2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBIYWJiYWpldCB7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IEltYWdlU3RhdGU7XHJcbiAgICBwdWJsaWMgaW5mbzogSGFiYmFqZXRJbmZvO1xyXG4gICAgcHVibGljIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXTtcclxuICAgIHB1YmxpYyBidXR0b25zOiBIYWJiYWpldEJ1dHRvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHN0YXRlOiBudW1iZXIsIHB1YmxpYyBjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZVN0YXRlKHN0YXRlLCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5idXR0b25zID0ge1xyXG4gICAgICAgICAgICBsb2NrZWQ6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSwgcHJpdmF0ZSBjaGVja2JveFNlcnZpY2U6IENoZWNrYm94U2VydmljZSwgcHJpdmF0ZSB0YWJTZXJ2aWNlOiBUYWJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFiYmFqZXRFeGlzdHMoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGggPiBpbmRleCAmJiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0gIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0TmFtZShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpbmRleCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XS5uYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnVG8gUmVtb3ZlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0SW1hZ2UoaW5kZXg6IG51bWJlcik6IEltYWdlU3RhdGUge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdLmltYWdlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldEluZm8oaW5kZXg6IG51bWJlcik6IEhhYmJhamV0SW5mbyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0uaW5mbztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRDaGVja2JveGVzKGluZGV4OiBudW1iZXIpOiBIYWJiYWpldENoZWNrYm94W10ge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdLmNoZWNrYm94ZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0QnV0dG9ucyhpbmRleDogbnVtYmVyKTogSGFiYmFqZXRCdXR0b25zIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpbmRleCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XS5idXR0b25zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBldm9sdmUoaGFiYmFqZXRJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy5oYWJiYWpldEV4aXN0cyhoYWJiYWpldEluZGV4KSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5ldm9sdmUodGhpcy5oYWJiYWpldExpc3RbaGFiYmFqZXRJbmRleF0uaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aW9uKGhhYmJhamV0SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMuaGFiYmFqZXRFeGlzdHMoaGFiYmFqZXRJbmRleCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuYWN0aW9uKHRoaXMuaGFiYmFqZXRMaXN0W2hhYmJhamV0SW5kZXhdLmltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdENoZWNrYm94KGhhYmJhamV0SW5kZXg6IG51bWJlciwgZGF5OiBEYXkpIHtcclxuICAgICAgICBpZih0aGlzLmhhYmJhamV0RXhpc3RzKGhhYmJhamV0SW5kZXgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbaGFiYmFqZXRJbmRleF07XHJcbiAgICAgICAgICAgIGhhYmJhamV0LmJ1dHRvbnMubG9ja2VkID0gaGFiYmFqZXQuY2hlY2tib3hlc1tkYXldLmNoZWNrbWFyayAhPT0gQ2hlY2ttYXJrLk5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDaGVja21hcmsoaGFiYmFqZXRJbmRleDogbnVtYmVyLCBjaGVja21hcms6IENoZWNrbWFyayk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKHRoaXMuaGFiYmFqZXRFeGlzdHMoaGFiYmFqZXRJbmRleCkpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFtoYWJiYWpldEluZGV4XTtcclxuICAgICAgICAgICAgaWYoaGFiYmFqZXQuaW1hZ2UuYWN0aW9uICE9PSAndCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUNoZWNrYm94ID0gXy5maW5kKGhhYmJhamV0LmNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiBjLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICBpZihhY3RpdmVDaGVja2JveCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hlY2tib3guY2hlY2ttYXJrID0gY2hlY2ttYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVzZXRDaGVja2JveGVzSWZOZWNlc3NhcnkoaGFiYmFqZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0Q2hlY2tib3hlc0lmTmVjZXNzYXJ5KGhhYmJhamV0OiBIYWJiYWpldCkge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBoYWJiYWpldC5jaGVja2JveGVzO1xyXG4gICAgICAgIGlmKF8uZXZlcnkoY2hlY2tib3hlcywgKGM6IEhhYmJhamV0Q2hlY2tib3gpID0+IGMuY2hlY2ttYXJrICE9PSBDaGVja21hcmsuTm9uZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2JveFNlcnZpY2UuZ2V0TmV4dFdlZWsoY2hlY2tib3hlcyk7XHJcbiAgICAgICAgICAgIGhhYmJhamV0LmJ1dHRvbnMubG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdIYWJiYWpldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIGZhY3RvcjogbnVtYmVyLCBzbGFjazogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaGFiYmFqZXQgPSBuZXcgSGFiYmFqZXQobmFtZSwgMCwgY29sb3IpO1xyXG4gICAgICAgIGhhYmJhamV0LmNoZWNrYm94ZXMgPSB0aGlzLmNoZWNrYm94U2VydmljZS5nZXRDdXJyZW50V2VlaygpO1xyXG4gICAgICAgIGhhYmJhamV0LmluZm8gPSB7XHJcbiAgICAgICAgICAgIHN0cmVhazogMCxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGZhY3RvcixcclxuICAgICAgICAgICAgc2xhY2ssXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKGhhYmJhamV0KTtcclxuICAgICAgICB0aGlzLnRhYlNlcnZpY2UuYWRkSGFiYmFqZXRUYWIoKTtcclxuICAgIH1cclxufVxyXG4iXX0=