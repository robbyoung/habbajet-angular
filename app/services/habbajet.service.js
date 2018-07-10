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
    ButtonImages["Positive"] = "~/images/checkboxes/checkboxButton1.png";
    ButtonImages["Negative"] = "~/images/checkboxes/checkboxButton2.png";
    ButtonImages["PositiveSelected"] = "~/images/checkboxes/checkbox1.png";
    ButtonImages["NegativeSelected"] = "~/images/checkboxes/checkbox2.png";
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
    HabbajetService.prototype.setButtonImages = function (habbajet) {
        var buttons = habbajet.buttons;
        var selectedCheckbox = _.find(habbajet.checkboxes, function (c) {
            return c.active;
        });
        buttons.locked = selectedCheckbox.checkmark !== checkbox_service_1.Checkmark.None;
        switch (selectedCheckbox.checkmark) {
            case checkbox_service_1.Checkmark.Positive:
                buttons.positiveSrc = ButtonImages.PositiveSelected;
                buttons.negativeSrc = ButtonImages.Negative;
                break;
            case checkbox_service_1.Checkmark.Negative:
                buttons.positiveSrc = ButtonImages.Positive;
                buttons.negativeSrc = ButtonImages.NegativeSelected;
                break;
            default:
                buttons.positiveSrc = ButtonImages.Positive;
                buttons.negativeSrc = ButtonImages.Negative;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsbURBQTREO0FBQzVELHVEQUF1RjtBQUN2RiwwQkFBNEI7QUFDNUIsNkNBQTJDO0FBQzNDLG1EQUFpRDtBQUNqRCxtREFBaUQ7QUFFakQsSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBQ3BCLG9FQUFvRCxDQUFBO0lBQ3BELG9FQUFvRCxDQUFBO0lBQ3BELHNFQUFzRCxDQUFBO0lBQ3RELHNFQUFzRCxDQUFBO0FBQzFELENBQUMsRUFMVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUt2QjtBQWlCRDtJQUlJLGtCQUFtQixJQUFZLEVBQVMsS0FBYSxFQUFTLEtBQWEsRUFBUyxJQUFrQixFQUFTLFVBQThCO1FBQTFILFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQWM7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQUN6SSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksMkJBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLFdBQVcsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUNsQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDbEMsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQTtJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFHRDtJQUdJLHlCQUFvQixZQUEwQixFQUFVLGVBQWdDLEVBQ3hFLFVBQXNCLEVBQVUsYUFBNEIsRUFBVSxhQUE0QjtRQUQ5RixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLG9CQUFlLEdBQWYsZUFB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Z0JBQzVDLEtBQUssQ0FBQztZQUNWLEtBQUssNEJBQVMsQ0FBQyxRQUFRO2dCQUNuQixPQUFPLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzVDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDO2dCQUNwRCxLQUFLLENBQUM7WUFDVjtnQkFDSSxPQUFPLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzVDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQztJQS9LUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBSXlCLDZCQUFZLEVBQTJCLGtDQUFlO1lBQzVELHdCQUFVLEVBQXlCLDhCQUFhLEVBQXlCLDhCQUFhO09BSnpHLGVBQWUsQ0FnTDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhMRCxJQWdMQztBQWhMWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJbWFnZVN0YXRlLCBJbWFnZVNlcnZpY2UgfSBmcm9tIFwiLi9pbWFnZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldENoZWNrYm94LCBDaGVja2JveFNlcnZpY2UsIERheSwgQ2hlY2ttYXJrIH0gZnJvbSBcIi4vY2hlY2tib3guc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFRhYlNlcnZpY2UgfSBmcm9tIFwiLi90YWIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4vYnVkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2F2aW5nU2VydmljZSB9IGZyb20gXCIuL3NhdmluZy5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZW51bSBCdXR0b25JbWFnZXMge1xyXG4gICAgUG9zaXRpdmUgPSBcIn4vaW1hZ2VzL2NoZWNrYm94ZXMvY2hlY2tib3hCdXR0b24xLnBuZ1wiLFxyXG4gICAgTmVnYXRpdmUgPSBcIn4vaW1hZ2VzL2NoZWNrYm94ZXMvY2hlY2tib3hCdXR0b24yLnBuZ1wiLFxyXG4gICAgUG9zaXRpdmVTZWxlY3RlZCA9IFwifi9pbWFnZXMvY2hlY2tib3hlcy9jaGVja2JveDEucG5nXCIsXHJcbiAgICBOZWdhdGl2ZVNlbGVjdGVkID0gXCJ+L2ltYWdlcy9jaGVja2JveGVzL2NoZWNrYm94Mi5wbmdcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIYWJiYWpldEluZm8gIHtcclxuICAgIGV4cGVjdGVkUGF5b3V0OiBzdHJpbmc7XHJcbiAgICBzdHJlYWs6IG51bWJlcjtcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBmYWN0b3I6IG51bWJlcjtcclxuICAgIHNsYWNrOiBudW1iZXI7XHJcbiAgICBleHBlY3RlZFBheW91dFVwZGF0ZUNhbGxiYWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIYWJiYWpldEJ1dHRvbnMge1xyXG4gICAgcG9zaXRpdmVTcmM6IHN0cmluZztcclxuICAgIG5lZ2F0aXZlU3JjOiBzdHJpbmc7XHJcbiAgICBsb2NrZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNsYXNzIEhhYmJhamV0IHtcclxuICAgIHB1YmxpYyBpbWFnZTogSW1hZ2VTdGF0ZTtcclxuICAgIHB1YmxpYyBidXR0b25zOiBIYWJiYWpldEJ1dHRvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHN0YXRlOiBudW1iZXIsIHB1YmxpYyBjb2xvcjogc3RyaW5nLCBwdWJsaWMgaW5mbzogSGFiYmFqZXRJbmZvLCBwdWJsaWMgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZVN0YXRlKHN0YXRlLCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5idXR0b25zID0ge1xyXG4gICAgICAgICAgICBwb3NpdGl2ZVNyYzogQnV0dG9uSW1hZ2VzLlBvc2l0aXZlLFxyXG4gICAgICAgICAgICBuZWdhdGl2ZVNyYzogQnV0dG9uSW1hZ2VzLk5lZ2F0aXZlLFxyXG4gICAgICAgICAgICBsb2NrZWQ6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSwgcHJpdmF0ZSBjaGVja2JveFNlcnZpY2U6IENoZWNrYm94U2VydmljZSxcclxuICAgICAgICAgICAgcHJpdmF0ZSB0YWJTZXJ2aWNlOiBUYWJTZXJ2aWNlLCBwcml2YXRlIGJ1ZGdldFNlcnZpY2U6IEJ1ZGdldFNlcnZpY2UsIHByaXZhdGUgc2F2aW5nU2VydmljZTogU2F2aW5nU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLmxvYWRIYWJiYWpldExpc3QodGhpcyk7XHJcbiAgICAgICAgdGhpcy50YWJTZXJ2aWNlLmluaXRpYWxpc2VUYWJzKHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYWJiYWpldEV4aXN0cyhpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCA+IGluZGV4ICYmIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXROYW1lKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICdUbyBSZW1vdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRJbWFnZShpbmRleDogbnVtYmVyKTogSW1hZ2VTdGF0ZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0uaW1hZ2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0SW5mbyhpbmRleDogbnVtYmVyKTogSGFiYmFqZXRJbmZvIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpbmRleCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XS5pbmZvO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldENoZWNrYm94ZXMoaW5kZXg6IG51bWJlcik6IEhhYmJhamV0Q2hlY2tib3hbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0uY2hlY2tib3hlcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRCdXR0b25zKGluZGV4OiBudW1iZXIpOiBIYWJiYWpldEJ1dHRvbnMge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdLmJ1dHRvbnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2b2x2ZShoYWJiYWpldEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLmhhYmJhamV0RXhpc3RzKGhhYmJhamV0SW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmV2b2x2ZSh0aGlzLmhhYmJhamV0TGlzdFtoYWJiYWpldEluZGV4XS5pbWFnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlSGFiYmFqZXRMaXN0KHRoaXMuaGFiYmFqZXRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGlvbihoYWJiYWpldEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLmhhYmJhamV0RXhpc3RzKGhhYmJhamV0SW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmFjdGlvbih0aGlzLmhhYmJhamV0TGlzdFtoYWJiYWpldEluZGV4XS5pbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RDaGVja2JveChoYWJiYWpldEluZGV4OiBudW1iZXIsIGRheTogRGF5KSB7XHJcbiAgICAgICAgaWYodGhpcy5oYWJiYWpldEV4aXN0cyhoYWJiYWpldEluZGV4KSkge1xyXG4gICAgICAgICAgICBjb25zdCBoYWJiYWpldCA9IHRoaXMuaGFiYmFqZXRMaXN0W2hhYmJhamV0SW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbkltYWdlcyhoYWJiYWpldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDaGVja21hcmsoaGFiYmFqZXRJbmRleDogbnVtYmVyLCBjaGVja21hcms6IENoZWNrbWFyayk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKHRoaXMuaGFiYmFqZXRFeGlzdHMoaGFiYmFqZXRJbmRleCkpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFtoYWJiYWpldEluZGV4XTtcclxuICAgICAgICAgICAgaWYoaGFiYmFqZXQuaW1hZ2UuYWN0aW9uICE9PSAndCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUNoZWNrYm94ID0gXy5maW5kKGhhYmJhamV0LmNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiBjLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICBpZihhY3RpdmVDaGVja2JveCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hlY2tib3guY2hlY2ttYXJrID0gY2hlY2ttYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5zZXRFeHBlY3RlZFBheW91dChoYWJiYWpldC5pbmZvLCBoYWJiYWpldC5jaGVja2JveGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1ZGdldElmTmVjZXNzYXJ5KGhhYmJhamV0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZUhhYmJhamV0TGlzdCh0aGlzLmhhYmJhamV0TGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQnVkZ2V0SWZOZWNlc3NhcnkoaGFiYmFqZXQ6IEhhYmJhamV0KSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGhhYmJhamV0LmNoZWNrYm94ZXM7XHJcbiAgICAgICAgaWYoXy5ldmVyeShjaGVja2JveGVzLCAoYzogSGFiYmFqZXRDaGVja2JveCkgPT4gYy5jaGVja21hcmsgIT09IENoZWNrbWFyay5Ob25lKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2UuYWRkVG9CdWRnZXRXaXRoSGFiYmFqZXQoaGFiYmFqZXQuaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdIYWJiYWpldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIGZhY3RvcjogbnVtYmVyLCBzbGFjazogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0aGlzLmNoZWNrYm94U2VydmljZS5nZXRDdXJyZW50V2VlaygpO1xyXG5cclxuICAgICAgICBjb25zdCBpbmZvOiBIYWJiYWpldEluZm8gPSB7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0OiAnJyxcclxuICAgICAgICAgICAgc3RyZWFrOiAwLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgZmFjdG9yLFxyXG4gICAgICAgICAgICBzbGFjayxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5zZXRFeHBlY3RlZFBheW91dChpbmZvLCBjaGVja2JveGVzKTtcclxuICAgICAgICBjb25zdCBoYWJiYWpldCA9IG5ldyBIYWJiYWpldChuYW1lLCAwLCBjb2xvciwgaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChoYWJiYWpldCk7XHJcbiAgICAgICAgdGhpcy50YWJTZXJ2aWNlLmFkZEhhYmJhamV0VGFiKCk7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdIYWJiYWpldEZyb21TYXZlKG5hbWU6IHN0cmluZywgc3RhdGU6IG51bWJlciwgdmFsdWU6IG51bWJlciwgZmFjdG9yOiBudW1iZXIsIHNsYWNrOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHN0cmVhazogbnVtYmVyLCBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10sIHN0YXJ0T2ZXZWVrOiBzdHJpbmcpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbmZvOiBIYWJiYWpldEluZm8gPSB7XHJcbiAgICAgICAgICAgIHN0cmVhayxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGZhY3RvcixcclxuICAgICAgICAgICAgc2xhY2ssXHJcbiAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0OiAnJyxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZVRvVXNlID0gc3RhdGU7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94ZXNUb1VzZTogSGFiYmFqZXRDaGVja2JveFtdO1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tib3hTZXJ2aWNlLmlzQ3VycmVudFdlZWsoc3RhcnRPZldlZWspKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNUb1VzZSA9IGNoZWNrYm94ZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoXy5zb21lKGNoZWNrYm94ZXMsIChjaGVja2JveDogSGFiYmFqZXRDaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2ttYXJrID09PSBDaGVja21hcmsuTm9uZTtcclxuICAgICAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5hZGRUb0J1ZGdldFdpdGhIYWJiYWpldChpbmZvLCBjaGVja2JveGVzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2hlY2tib3hlc1RvVXNlID0gdGhpcy5jaGVja2JveFNlcnZpY2UuZ2V0Q3VycmVudFdlZWsoKTtcclxuICAgICAgICAgICAgc3RhdGVUb1VzZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5zZXRFeHBlY3RlZFBheW91dChpbmZvLCBjaGVja2JveGVzVG9Vc2UpO1xyXG4gICAgICAgIGNvbnN0IGhhYmJhamV0ID0gbmV3IEhhYmJhamV0KG5hbWUsIHN0YXRlVG9Vc2UsIGNvbG9yLCBpbmZvLCBjaGVja2JveGVzVG9Vc2UpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2goaGFiYmFqZXQpO1xyXG4gICAgICAgIHRoaXMuc2V0QnV0dG9uSW1hZ2VzKGhhYmJhamV0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QnV0dG9uSW1hZ2VzKGhhYmJhamV0OiBIYWJiYWpldCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBoYWJiYWpldC5idXR0b25zO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2hlY2tib3ggPSBfLmZpbmQoaGFiYmFqZXQuY2hlY2tib3hlcywgKGM6IEhhYmJhamV0Q2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuYWN0aXZlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBidXR0b25zLmxvY2tlZCA9IHNlbGVjdGVkQ2hlY2tib3guY2hlY2ttYXJrICE9PSBDaGVja21hcmsuTm9uZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZENoZWNrYm94LmNoZWNrbWFyaykge1xyXG4gICAgICAgICAgICBjYXNlIENoZWNrbWFyay5Qb3NpdGl2ZTogXHJcbiAgICAgICAgICAgICAgICBidXR0b25zLnBvc2l0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLlBvc2l0aXZlU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zLm5lZ2F0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLk5lZ2F0aXZlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2hlY2ttYXJrLk5lZ2F0aXZlOiBcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMucG9zaXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuUG9zaXRpdmU7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zLm5lZ2F0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLk5lZ2F0aXZlU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICBidXR0b25zLnBvc2l0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLlBvc2l0aXZlO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5uZWdhdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19