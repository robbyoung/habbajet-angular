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
var budget_service_1 = require("./budget.service");
var saving_service_1 = require("./saving.service");
var ButtonImages;
(function (ButtonImages) {
    ButtonImages["Positive"] = "~/images/checkboxes/1false.png";
    ButtonImages["Negative"] = "~/images/checkboxes/2false.png";
    ButtonImages["PositiveSelected"] = "~/images/checkboxes/1false.png";
    ButtonImages["NegativeSelected"] = "~/images/checkboxes/2false.png";
    ButtonImages["PositiveIgnored"] = "~/images/checkboxes/0false.png";
    ButtonImages["NegativeIgnored"] = "~/images/checkboxes/0false.png";
})(ButtonImages = exports.ButtonImages || (exports.ButtonImages = {}));
var Habbajet = /** @class */ (function () {
    function Habbajet(name, state, color, info, checkboxes) {
        this.name = name;
        this.state = state;
        this.color = color;
        this.info = info;
        this.checkboxes = checkboxes;
        this.image = new images_service_1.ImageState(state, color);
        this.buttons = {
            positiveSrc: ButtonImages.Positive,
            negativeSrc: ButtonImages.Negative,
            locked: false,
        };
    }
    return Habbajet;
}());
var HabbajetService = /** @class */ (function () {
    function HabbajetService(imageService, checkboxService, tabService, budgetService, savingService) {
        this.imageService = imageService;
        this.checkboxService = checkboxService;
        this.tabService = tabService;
        this.budgetService = budgetService;
        this.savingService = savingService;
        this.habbajetList = [];
        this.savingService.loadHabbajetList(this);
        this.tabService.initialiseTabs(this.habbajetList.length);
        this.savingService.saveHabbajetList(this.habbajetList);
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
    HabbajetService.prototype.getHabbajetColor = function (index) {
        if (this.habbajetExists(index)) {
            return this.habbajetList[index].color;
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
            this.savingService.saveHabbajetList(this.habbajetList);
        }
    };
    HabbajetService.prototype.resetImageState = function (habbajet) {
        if (habbajet && habbajet.image) {
            this.imageService.reset(habbajet.image);
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
            this.setButtonImages(habbajet);
        }
    };
    HabbajetService.prototype.setCheckmark = function (habbajetIndex, checkmark) {
        if (this.habbajetExists(habbajetIndex)) {
            var habbajet = this.habbajetList[habbajetIndex];
            if (habbajet.image.action !== 't') {
                var activeCheckbox = _.find(habbajet.checkboxes, function (c) { return c.active; });
                if (activeCheckbox !== undefined) {
                    activeCheckbox.checkmark = checkmark;
                    this.budgetService.setExpectedPayout(habbajet.info, habbajet.checkboxes);
                    this.updateBudgetIfNecessary(habbajet);
                    this.savingService.saveHabbajetList(this.habbajetList);
                    return true;
                }
            }
        }
        return false;
    };
    HabbajetService.prototype.updateBudgetIfNecessary = function (habbajet) {
        var checkboxes = habbajet.checkboxes;
        if (_.every(checkboxes, function (c) { return c.checkmark !== checkbox_service_1.Checkmark.None; })) {
            this.resetImageState(habbajet);
            this.budgetService.addToBudgetWithHabbajet(habbajet.info, checkboxes);
        }
    };
    HabbajetService.prototype.newHabbajet = function (name, value, factor, slack, color) {
        var checkboxes = this.checkboxService.getCurrentWeek();
        var info = {
            expectedPayout: '',
            streak: 0,
            value: value,
            factor: factor,
            slack: slack,
        };
        this.budgetService.setExpectedPayout(info, checkboxes);
        var habbajet = new Habbajet(name, 0, color, info, checkboxes);
        this.habbajetList.push(habbajet);
        this.tabService.addHabbajetTab();
        this.savingService.saveHabbajetList(this.habbajetList);
    };
    HabbajetService.prototype.newHabbajetFromSave = function (name, state, value, factor, slack, color, streak, checkboxes, startOfWeek) {
        var info = {
            streak: streak,
            value: value,
            factor: factor,
            slack: slack,
            expectedPayout: '',
        };
        var stateToUse = state;
        var checkboxesToUse;
        if (this.checkboxService.isCurrentWeek(startOfWeek)) {
            checkboxesToUse = checkboxes;
        }
        else {
            if (_.some(checkboxes, function (checkbox) {
                checkbox.checkmark === checkbox_service_1.Checkmark.None;
            })) {
                this.budgetService.addToBudgetWithHabbajet(info, checkboxes);
            }
            ;
            checkboxesToUse = this.checkboxService.getCurrentWeek();
            stateToUse = 0;
        }
        this.budgetService.setExpectedPayout(info, checkboxesToUse);
        var habbajet = new Habbajet(name, stateToUse, color, info, checkboxesToUse);
        this.habbajetList.push(habbajet);
        this.setButtonImages(habbajet);
    };
    HabbajetService.prototype.updateButtonImages = function (habbajetIndex) {
        this.setButtonImages(this.habbajetList[habbajetIndex]);
    };
    HabbajetService.prototype.setButtonImages = function (habbajet) {
        var buttons = habbajet.buttons;
        var selectedCheckbox = _.find(habbajet.checkboxes, function (c) {
            return c.active;
        });
        buttons.locked = selectedCheckbox.checkmark !== checkbox_service_1.Checkmark.None;
        switch (selectedCheckbox.checkmark) {
            case checkbox_service_1.Checkmark.Positive:
                buttons.positiveSrc = ButtonImages.PositiveSelected;
                buttons.negativeSrc = ButtonImages.NegativeIgnored;
                break;
            case checkbox_service_1.Checkmark.Negative:
                buttons.positiveSrc = ButtonImages.PositiveIgnored;
                buttons.negativeSrc = ButtonImages.NegativeSelected;
                break;
            default:
                buttons.positiveSrc = ButtonImages.Positive;
                buttons.negativeSrc = ButtonImages.Negative;
        }
    };
    HabbajetService.prototype.deleteHabbajet = function (habbajetIndex) {
        if (this.habbajetExists(habbajetIndex)) {
            this.habbajetList.splice(habbajetIndex, 1);
            this.savingService.saveHabbajetList(this.habbajetList);
        }
    };
    HabbajetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [images_service_1.ImageService, checkbox_service_1.CheckboxService,
            tab_service_1.TabService, budget_service_1.BudgetService, saving_service_1.SavingService])
    ], HabbajetService);
    return HabbajetService;
}());
exports.HabbajetService = HabbajetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsbURBQTREO0FBQzVELHVEQUF1RjtBQUN2RiwwQkFBNEI7QUFDNUIsNkNBQTJDO0FBQzNDLG1EQUFpRDtBQUNqRCxtREFBaUQ7QUFFakQsSUFBWSxZQU9YO0FBUEQsV0FBWSxZQUFZO0lBQ3BCLDJEQUEyQyxDQUFBO0lBQzNDLDJEQUEyQyxDQUFBO0lBQzNDLG1FQUFtRCxDQUFBO0lBQ25ELG1FQUFtRCxDQUFBO0lBQ25ELGtFQUFrRCxDQUFBO0lBQ2xELGtFQUFrRCxDQUFBO0FBQ3RELENBQUMsRUFQVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU92QjtBQWlCRDtJQUlJLGtCQUFtQixJQUFZLEVBQVMsS0FBYSxFQUFTLEtBQWEsRUFBUyxJQUFrQixFQUFTLFVBQThCO1FBQTFILFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQWM7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQUN6SSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksMkJBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLFdBQVcsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUNsQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDbEMsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQTtJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFHRDtJQUdJLHlCQUFvQixZQUEwQixFQUFVLGVBQWdDLEVBQ3hFLFVBQXNCLEVBQVUsYUFBNEIsRUFBVSxhQUE0QjtRQUQ5RixpQkFB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QUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0QsQ0FBQztJQUNMLENBQUM7SUF6TVEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUl5Qiw2QkFBWSxFQUEyQixrQ0FBZTtZQUM1RCx3QkFBVSxFQUF5Qiw4QkFBYSxFQUF5Qiw4QkFBYTtPQUp6RyxlQUFlLENBME0zQjtJQUFELHNCQUFDO0NBQUEsQUExTUQsSUEwTUM7QUExTVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSW1hZ2VTdGF0ZSwgSW1hZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vaW1hZ2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRDaGVja2JveCwgQ2hlY2tib3hTZXJ2aWNlLCBEYXksIENoZWNrbWFyayB9IGZyb20gXCIuL2NoZWNrYm94LnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBUYWJTZXJ2aWNlIH0gZnJvbSBcIi4vdGFiLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQnVkZ2V0U2VydmljZSB9IGZyb20gXCIuL2J1ZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNhdmluZ1NlcnZpY2UgfSBmcm9tIFwiLi9zYXZpbmcuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gQnV0dG9uSW1hZ2VzIHtcclxuICAgIFBvc2l0aXZlID0gXCJ+L2ltYWdlcy9jaGVja2JveGVzLzFmYWxzZS5wbmdcIixcclxuICAgIE5lZ2F0aXZlID0gXCJ+L2ltYWdlcy9jaGVja2JveGVzLzJmYWxzZS5wbmdcIixcclxuICAgIFBvc2l0aXZlU2VsZWN0ZWQgPSBcIn4vaW1hZ2VzL2NoZWNrYm94ZXMvMWZhbHNlLnBuZ1wiLFxyXG4gICAgTmVnYXRpdmVTZWxlY3RlZCA9IFwifi9pbWFnZXMvY2hlY2tib3hlcy8yZmFsc2UucG5nXCIsXHJcbiAgICBQb3NpdGl2ZUlnbm9yZWQgPSBcIn4vaW1hZ2VzL2NoZWNrYm94ZXMvMGZhbHNlLnBuZ1wiLFxyXG4gICAgTmVnYXRpdmVJZ25vcmVkID0gXCJ+L2ltYWdlcy9jaGVja2JveGVzLzBmYWxzZS5wbmdcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIYWJiYWpldEluZm8gIHtcclxuICAgIGV4cGVjdGVkUGF5b3V0OiBzdHJpbmc7XHJcbiAgICBzdHJlYWs6IG51bWJlcjtcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBmYWN0b3I6IG51bWJlcjtcclxuICAgIHNsYWNrOiBudW1iZXI7XHJcbiAgICBleHBlY3RlZFBheW91dFVwZGF0ZUNhbGxiYWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIYWJiYWpldEJ1dHRvbnMge1xyXG4gICAgcG9zaXRpdmVTcmM6IHN0cmluZztcclxuICAgIG5lZ2F0aXZlU3JjOiBzdHJpbmc7XHJcbiAgICBsb2NrZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIEhhYmJhamV0IHtcclxuICAgIHB1YmxpYyBpbWFnZTogSW1hZ2VTdGF0ZTtcclxuICAgIHB1YmxpYyBidXR0b25zOiBIYWJiYWpldEJ1dHRvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHN0YXRlOiBudW1iZXIsIHB1YmxpYyBjb2xvcjogc3RyaW5nLCBwdWJsaWMgaW5mbzogSGFiYmFqZXRJbmZvLCBwdWJsaWMgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZVN0YXRlKHN0YXRlLCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5idXR0b25zID0ge1xyXG4gICAgICAgICAgICBwb3NpdGl2ZVNyYzogQnV0dG9uSW1hZ2VzLlBvc2l0aXZlLFxyXG4gICAgICAgICAgICBuZWdhdGl2ZVNyYzogQnV0dG9uSW1hZ2VzLk5lZ2F0aXZlLFxyXG4gICAgICAgICAgICBsb2NrZWQ6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSwgcHJpdmF0ZSBjaGVja2JveFNlcnZpY2U6IENoZWNrYm94U2VydmljZSxcclxuICAgICAgICAgICAgcHJpdmF0ZSB0YWJTZXJ2aWNlOiBUYWJTZXJ2aWNlLCBwcml2YXRlIGJ1ZGdldFNlcnZpY2U6IEJ1ZGdldFNlcnZpY2UsIHByaXZhdGUgc2F2aW5nU2VydmljZTogU2F2aW5nU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLmxvYWRIYWJiYWpldExpc3QodGhpcyk7XHJcbiAgICAgICAgdGhpcy50YWJTZXJ2aWNlLmluaXRpYWxpc2VUYWJzKHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYWJiYWpldEV4aXN0cyhpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCA+IGluZGV4ICYmIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXROYW1lKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICdUbyBSZW1vdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRJbWFnZShpbmRleDogbnVtYmVyKTogSW1hZ2VTdGF0ZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0uaW1hZ2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0SW5mbyhpbmRleDogbnVtYmVyKTogSGFiYmFqZXRJbmZvIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpbmRleCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XS5pbmZvO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldENvbG9yKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdLmNvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldENoZWNrYm94ZXMoaW5kZXg6IG51bWJlcik6IEhhYmJhamV0Q2hlY2tib3hbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0uY2hlY2tib3hlcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRCdXR0b25zKGluZGV4OiBudW1iZXIpOiBIYWJiYWpldEJ1dHRvbnMge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdLmJ1dHRvbnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2b2x2ZShoYWJiYWpldEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLmhhYmJhamV0RXhpc3RzKGhhYmJhamV0SW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmV2b2x2ZSh0aGlzLmhhYmJhamV0TGlzdFtoYWJiYWpldEluZGV4XS5pbWFnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlSGFiYmFqZXRMaXN0KHRoaXMuaGFiYmFqZXRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEltYWdlU3RhdGUoaGFiYmFqZXQ6IEhhYmJhamV0KSB7XHJcbiAgICAgICAgaWYoaGFiYmFqZXQgJiYgaGFiYmFqZXQuaW1hZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UucmVzZXQoaGFiYmFqZXQuaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aW9uKGhhYmJhamV0SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMuaGFiYmFqZXRFeGlzdHMoaGFiYmFqZXRJbmRleCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuYWN0aW9uKHRoaXMuaGFiYmFqZXRMaXN0W2hhYmJhamV0SW5kZXhdLmltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdENoZWNrYm94KGhhYmJhamV0SW5kZXg6IG51bWJlciwgZGF5OiBEYXkpIHtcclxuICAgICAgICBpZih0aGlzLmhhYmJhamV0RXhpc3RzKGhhYmJhamV0SW5kZXgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbaGFiYmFqZXRJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uSW1hZ2VzKGhhYmJhamV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENoZWNrbWFyayhoYWJiYWpldEluZGV4OiBudW1iZXIsIGNoZWNrbWFyazogQ2hlY2ttYXJrKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5oYWJiYWpldEV4aXN0cyhoYWJiYWpldEluZGV4KSkge1xyXG4gICAgICAgICAgICBjb25zdCBoYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W2hhYmJhamV0SW5kZXhdO1xyXG4gICAgICAgICAgICBpZihoYWJiYWpldC5pbWFnZS5hY3Rpb24gIT09ICd0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlQ2hlY2tib3ggPSBfLmZpbmQoaGFiYmFqZXQuY2hlY2tib3hlcywgKGM6IEhhYmJhamV0Q2hlY2tib3gpID0+IGMuYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgIGlmKGFjdGl2ZUNoZWNrYm94ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGVja2JveC5jaGVja21hcmsgPSBjaGVja21hcms7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLnNldEV4cGVjdGVkUGF5b3V0KGhhYmJhamV0LmluZm8sIGhhYmJhamV0LmNoZWNrYm94ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnVkZ2V0SWZOZWNlc3NhcnkoaGFiYmFqZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlSGFiYmFqZXRMaXN0KHRoaXMuaGFiYmFqZXRMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCdWRnZXRJZk5lY2Vzc2FyeShoYWJiYWpldDogSGFiYmFqZXQpIHtcclxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gaGFiYmFqZXQuY2hlY2tib3hlcztcclxuICAgICAgICBpZihfLmV2ZXJ5KGNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiBjLmNoZWNrbWFyayAhPT0gQ2hlY2ttYXJrLk5vbmUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRJbWFnZVN0YXRlKGhhYmJhamV0KTtcclxuICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLmFkZFRvQnVkZ2V0V2l0aEhhYmJhamV0KGhhYmJhamV0LmluZm8sIGNoZWNrYm94ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3SGFiYmFqZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBmYWN0b3I6IG51bWJlciwgc2xhY2s6IG51bWJlciwgY29sb3I6IHN0cmluZykge1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gdGhpcy5jaGVja2JveFNlcnZpY2UuZ2V0Q3VycmVudFdlZWsoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5mbzogSGFiYmFqZXRJbmZvID0ge1xyXG4gICAgICAgICAgICBleHBlY3RlZFBheW91dDogJycsXHJcbiAgICAgICAgICAgIHN0cmVhazogMCxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGZhY3RvcixcclxuICAgICAgICAgICAgc2xhY2ssXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2Uuc2V0RXhwZWN0ZWRQYXlvdXQoaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgY29uc3QgaGFiYmFqZXQgPSBuZXcgSGFiYmFqZXQobmFtZSwgMCwgY29sb3IsIGluZm8sIGNoZWNrYm94ZXMpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2goaGFiYmFqZXQpO1xyXG4gICAgICAgIHRoaXMudGFiU2VydmljZS5hZGRIYWJiYWpldFRhYigpO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlSGFiYmFqZXRMaXN0KHRoaXMuaGFiYmFqZXRMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3SGFiYmFqZXRGcm9tU2F2ZShuYW1lOiBzdHJpbmcsIHN0YXRlOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIGZhY3RvcjogbnVtYmVyLCBzbGFjazogbnVtYmVyLCBjb2xvcjogc3RyaW5nLFxyXG4gICAgICAgICAgICBzdHJlYWs6IG51bWJlciwgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdLCBzdGFydE9mV2Vlazogc3RyaW5nKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW5mbzogSGFiYmFqZXRJbmZvID0ge1xyXG4gICAgICAgICAgICBzdHJlYWssXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBmYWN0b3IsXHJcbiAgICAgICAgICAgIHNsYWNrLFxyXG4gICAgICAgICAgICBleHBlY3RlZFBheW91dDogJycsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RhdGVUb1VzZSA9IHN0YXRlO1xyXG4gICAgICAgIGxldCBjaGVja2JveGVzVG9Vc2U6IEhhYmJhamV0Q2hlY2tib3hbXTtcclxuICAgICAgICBpZih0aGlzLmNoZWNrYm94U2VydmljZS5pc0N1cnJlbnRXZWVrKHN0YXJ0T2ZXZWVrKSkge1xyXG4gICAgICAgICAgICBjaGVja2JveGVzVG9Vc2UgPSBjaGVja2JveGVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKF8uc29tZShjaGVja2JveGVzLCAoY2hlY2tib3g6IEhhYmJhamV0Q2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrbWFyayA9PT0gQ2hlY2ttYXJrLk5vbmU7XHJcbiAgICAgICAgICAgIH0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2UuYWRkVG9CdWRnZXRXaXRoSGFiYmFqZXQoaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNUb1VzZSA9IHRoaXMuY2hlY2tib3hTZXJ2aWNlLmdldEN1cnJlbnRXZWVrKCk7XHJcbiAgICAgICAgICAgIHN0YXRlVG9Vc2UgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2Uuc2V0RXhwZWN0ZWRQYXlvdXQoaW5mbywgY2hlY2tib3hlc1RvVXNlKTtcclxuICAgICAgICBjb25zdCBoYWJiYWpldCA9IG5ldyBIYWJiYWpldChuYW1lLCBzdGF0ZVRvVXNlLCBjb2xvciwgaW5mbywgY2hlY2tib3hlc1RvVXNlKTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKGhhYmJhamV0KTtcclxuICAgICAgICB0aGlzLnNldEJ1dHRvbkltYWdlcyhoYWJiYWpldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUJ1dHRvbkltYWdlcyhoYWJiYWpldEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldEJ1dHRvbkltYWdlcyh0aGlzLmhhYmJhamV0TGlzdFtoYWJiYWpldEluZGV4XSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRCdXR0b25JbWFnZXMoaGFiYmFqZXQ6IEhhYmJhamV0KSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGhhYmJhamV0LmJ1dHRvbnM7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGVja2JveCA9IF8uZmluZChoYWJiYWpldC5jaGVja2JveGVzLCAoYzogSGFiYmFqZXRDaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYy5hY3RpdmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJ1dHRvbnMubG9ja2VkID0gc2VsZWN0ZWRDaGVja2JveC5jaGVja21hcmsgIT09IENoZWNrbWFyay5Ob25lO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkQ2hlY2tib3guY2hlY2ttYXJrKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ2hlY2ttYXJrLlBvc2l0aXZlOiBcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMucG9zaXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuUG9zaXRpdmVTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMubmVnYXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuTmVnYXRpdmVJZ25vcmVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2hlY2ttYXJrLk5lZ2F0aXZlOiBcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMucG9zaXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuUG9zaXRpdmVJZ25vcmVkO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5uZWdhdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZVNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wb3NpdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMubmVnYXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuTmVnYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVIYWJiYWpldChoYWJiYWpldEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLmhhYmJhamV0RXhpc3RzKGhhYmJhamV0SW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnNwbGljZShoYWJiYWpldEluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=