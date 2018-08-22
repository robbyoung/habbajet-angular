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
        this.numDeleted = 0;
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
        habbajetIndex -= this.numDeleted;
        if (this.habbajetExists(habbajetIndex)) {
            this.numDeleted++;
            this.habbajetList.splice(habbajetIndex, 1);
            this.savingService.saveHabbajetList(this.habbajetList);
            this.tabService.removeHabbajetTab(habbajetIndex + 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsbURBQTREO0FBQzVELHVEQUF1RjtBQUN2RiwwQkFBNEI7QUFDNUIsNkNBQTJDO0FBQzNDLG1EQUFpRDtBQUNqRCxtREFBaUQ7QUFFakQsSUFBWSxZQU9YO0FBUEQsV0FBWSxZQUFZO0lBQ3BCLDJEQUEyQyxDQUFBO0lBQzNDLDJEQUEyQyxDQUFBO0lBQzNDLG1FQUFtRCxDQUFBO0lBQ25ELG1FQUFtRCxDQUFBO0lBQ25ELGtFQUFrRCxDQUFBO0lBQ2xELGtFQUFrRCxDQUFBO0FBQ3RELENBQUMsRUFQVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU92QjtBQWlCRDtJQUlJLGtCQUFtQixJQUFZLEVBQVMsS0FBYSxFQUFTLEtBQWEsRUFBUyxJQUFrQixFQUFTLFVBQThCO1FBQTFILFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQWM7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQUN6SSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksMkJBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLFdBQVcsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUNsQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDbEMsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQTtJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFHRDtJQUlJLHlCQUFvQixZQUEwQixFQUFVLGVBQWdDLEVBQ3hFLFVBQXNCLEVBQVUsYUFBNEIsRUFBVSxhQUE0QjtRQUQ5RixpQkFB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SUFFTSx3Q0FBYyxHQUFyQixVQUFzQixhQUFxQjtRQUN2QyxhQUFhLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNqQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFDTCxDQUFDO0lBOU1RLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FLeUIsNkJBQVksRUFBMkIsa0NBQWU7WUFDNUQsd0JBQVUsRUFBeUIsOEJBQWEsRUFBeUIsOEJBQWE7T0FMekcsZUFBZSxDQStNM0I7SUFBRCxzQkFBQztDQUFBLEFBL01ELElBK01DO0FBL01ZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEltYWdlU3RhdGUsIEltYWdlU2VydmljZSB9IGZyb20gXCIuL2ltYWdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0Q2hlY2tib3gsIENoZWNrYm94U2VydmljZSwgRGF5LCBDaGVja21hcmsgfSBmcm9tIFwiLi9jaGVja2JveC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgVGFiU2VydmljZSB9IGZyb20gXCIuL3RhYi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tIFwiLi9idWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTYXZpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vc2F2aW5nLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEJ1dHRvbkltYWdlcyB7XHJcbiAgICBQb3NpdGl2ZSA9IFwifi9pbWFnZXMvY2hlY2tib3hlcy8xZmFsc2UucG5nXCIsXHJcbiAgICBOZWdhdGl2ZSA9IFwifi9pbWFnZXMvY2hlY2tib3hlcy8yZmFsc2UucG5nXCIsXHJcbiAgICBQb3NpdGl2ZVNlbGVjdGVkID0gXCJ+L2ltYWdlcy9jaGVja2JveGVzLzFmYWxzZS5wbmdcIixcclxuICAgIE5lZ2F0aXZlU2VsZWN0ZWQgPSBcIn4vaW1hZ2VzL2NoZWNrYm94ZXMvMmZhbHNlLnBuZ1wiLFxyXG4gICAgUG9zaXRpdmVJZ25vcmVkID0gXCJ+L2ltYWdlcy9jaGVja2JveGVzLzBmYWxzZS5wbmdcIixcclxuICAgIE5lZ2F0aXZlSWdub3JlZCA9IFwifi9pbWFnZXMvY2hlY2tib3hlcy8wZmFsc2UucG5nXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFiYmFqZXRJbmZvICB7XHJcbiAgICBleHBlY3RlZFBheW91dDogc3RyaW5nO1xyXG4gICAgc3RyZWFrOiBudW1iZXI7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgZmFjdG9yOiBudW1iZXI7XHJcbiAgICBzbGFjazogbnVtYmVyO1xyXG4gICAgZXhwZWN0ZWRQYXlvdXRVcGRhdGVDYWxsYmFjaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFiYmFqZXRCdXR0b25zIHtcclxuICAgIHBvc2l0aXZlU3JjOiBzdHJpbmc7XHJcbiAgICBuZWdhdGl2ZVNyYzogc3RyaW5nO1xyXG4gICAgbG9ja2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBIYWJiYWpldCB7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IEltYWdlU3RhdGU7XHJcbiAgICBwdWJsaWMgYnV0dG9uczogSGFiYmFqZXRCdXR0b25zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBzdGF0ZTogbnVtYmVyLCBwdWJsaWMgY29sb3I6IHN0cmluZywgcHVibGljIGluZm86IEhhYmJhamV0SW5mbywgcHVibGljIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2VTdGF0ZShzdGF0ZSwgY29sb3IpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IHtcclxuICAgICAgICAgICAgcG9zaXRpdmVTcmM6IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZSxcclxuICAgICAgICAgICAgbmVnYXRpdmVTcmM6IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZSxcclxuICAgICAgICAgICAgbG9ja2VkOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhhYmJhamV0U2VydmljZSB7XHJcbiAgICBwdWJsaWMgaGFiYmFqZXRMaXN0OiBIYWJiYWpldFtdO1xyXG4gICAgcHJpdmF0ZSBudW1EZWxldGVkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSwgcHJpdmF0ZSBjaGVja2JveFNlcnZpY2U6IENoZWNrYm94U2VydmljZSxcclxuICAgICAgICAgICAgcHJpdmF0ZSB0YWJTZXJ2aWNlOiBUYWJTZXJ2aWNlLCBwcml2YXRlIGJ1ZGdldFNlcnZpY2U6IEJ1ZGdldFNlcnZpY2UsIHByaXZhdGUgc2F2aW5nU2VydmljZTogU2F2aW5nU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLmxvYWRIYWJiYWpldExpc3QodGhpcyk7XHJcbiAgICAgICAgdGhpcy50YWJTZXJ2aWNlLmluaXRpYWxpc2VUYWJzKHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgICAgIHRoaXMubnVtRGVsZXRlZCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhYmJhamV0RXhpc3RzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoID4gaW5kZXggJiYgdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldE5hbWUoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0ubmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1RvIFJlbW92ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldEltYWdlKGluZGV4OiBudW1iZXIpOiBJbWFnZVN0YXRlIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpbmRleCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XS5pbWFnZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRJbmZvKGluZGV4OiBudW1iZXIpOiBIYWJiYWpldEluZm8ge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYWJiYWpldExpc3RbaW5kZXhdLmluZm87XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0Q29sb3IoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0uY29sb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0Q2hlY2tib3hlcyhpbmRleDogbnVtYmVyKTogSGFiYmFqZXRDaGVja2JveFtdIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpbmRleCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0W2luZGV4XS5jaGVja2JveGVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldEJ1dHRvbnMoaW5kZXg6IG51bWJlcik6IEhhYmJhamV0QnV0dG9ucyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdFtpbmRleF0uYnV0dG9ucztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXZvbHZlKGhhYmJhamV0SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMuaGFiYmFqZXRFeGlzdHMoaGFiYmFqZXRJbmRleCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZXZvbHZlKHRoaXMuaGFiYmFqZXRMaXN0W2hhYmJhamV0SW5kZXhdLmltYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0SW1hZ2VTdGF0ZShoYWJiYWpldDogSGFiYmFqZXQpIHtcclxuICAgICAgICBpZihoYWJiYWpldCAmJiBoYWJiYWpldC5pbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5yZXNldChoYWJiYWpldC5pbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3Rpb24oaGFiYmFqZXRJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy5oYWJiYWpldEV4aXN0cyhoYWJiYWpldEluZGV4KSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5hY3Rpb24odGhpcy5oYWJiYWpldExpc3RbaGFiYmFqZXRJbmRleF0uaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0Q2hlY2tib3goaGFiYmFqZXRJbmRleDogbnVtYmVyLCBkYXk6IERheSkge1xyXG4gICAgICAgIGlmKHRoaXMuaGFiYmFqZXRFeGlzdHMoaGFiYmFqZXRJbmRleCkpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFiYmFqZXQgPSB0aGlzLmhhYmJhamV0TGlzdFtoYWJiYWpldEluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5zZXRCdXR0b25JbWFnZXMoaGFiYmFqZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q2hlY2ttYXJrKGhhYmJhamV0SW5kZXg6IG51bWJlciwgY2hlY2ttYXJrOiBDaGVja21hcmspOiBib29sZWFuIHtcclxuICAgICAgICBpZih0aGlzLmhhYmJhamV0RXhpc3RzKGhhYmJhamV0SW5kZXgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhYmJhamV0ID0gdGhpcy5oYWJiYWpldExpc3RbaGFiYmFqZXRJbmRleF07XHJcbiAgICAgICAgICAgIGlmKGhhYmJhamV0LmltYWdlLmFjdGlvbiAhPT0gJ3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVDaGVja2JveCA9IF8uZmluZChoYWJiYWpldC5jaGVja2JveGVzLCAoYzogSGFiYmFqZXRDaGVja2JveCkgPT4gYy5hY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlQ2hlY2tib3ggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoZWNrYm94LmNoZWNrbWFyayA9IGNoZWNrbWFyaztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2Uuc2V0RXhwZWN0ZWRQYXlvdXQoaGFiYmFqZXQuaW5mbywgaGFiYmFqZXQuY2hlY2tib3hlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCdWRnZXRJZk5lY2Vzc2FyeShoYWJiYWpldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJ1ZGdldElmTmVjZXNzYXJ5KGhhYmJhamV0OiBIYWJiYWpldCkge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBoYWJiYWpldC5jaGVja2JveGVzO1xyXG4gICAgICAgIGlmKF8uZXZlcnkoY2hlY2tib3hlcywgKGM6IEhhYmJhamV0Q2hlY2tib3gpID0+IGMuY2hlY2ttYXJrICE9PSBDaGVja21hcmsuTm9uZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEltYWdlU3RhdGUoaGFiYmFqZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2UuYWRkVG9CdWRnZXRXaXRoSGFiYmFqZXQoaGFiYmFqZXQuaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdIYWJiYWpldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIGZhY3RvcjogbnVtYmVyLCBzbGFjazogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0aGlzLmNoZWNrYm94U2VydmljZS5nZXRDdXJyZW50V2VlaygpO1xyXG5cclxuICAgICAgICBjb25zdCBpbmZvOiBIYWJiYWpldEluZm8gPSB7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0OiAnJyxcclxuICAgICAgICAgICAgc3RyZWFrOiAwLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgZmFjdG9yLFxyXG4gICAgICAgICAgICBzbGFjayxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5zZXRFeHBlY3RlZFBheW91dChpbmZvLCBjaGVja2JveGVzKTtcclxuICAgICAgICBjb25zdCBoYWJiYWpldCA9IG5ldyBIYWJiYWpldChuYW1lLCAwLCBjb2xvciwgaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChoYWJiYWpldCk7XHJcbiAgICAgICAgdGhpcy50YWJTZXJ2aWNlLmFkZEhhYmJhamV0VGFiKCk7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdIYWJiYWpldEZyb21TYXZlKG5hbWU6IHN0cmluZywgc3RhdGU6IG51bWJlciwgdmFsdWU6IG51bWJlciwgZmFjdG9yOiBudW1iZXIsIHNsYWNrOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHN0cmVhazogbnVtYmVyLCBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10sIHN0YXJ0T2ZXZWVrOiBzdHJpbmcpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbmZvOiBIYWJiYWpldEluZm8gPSB7XHJcbiAgICAgICAgICAgIHN0cmVhayxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGZhY3RvcixcclxuICAgICAgICAgICAgc2xhY2ssXHJcbiAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0OiAnJyxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZVRvVXNlID0gc3RhdGU7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94ZXNUb1VzZTogSGFiYmFqZXRDaGVja2JveFtdO1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tib3hTZXJ2aWNlLmlzQ3VycmVudFdlZWsoc3RhcnRPZldlZWspKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNUb1VzZSA9IGNoZWNrYm94ZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoXy5zb21lKGNoZWNrYm94ZXMsIChjaGVja2JveDogSGFiYmFqZXRDaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2ttYXJrID09PSBDaGVja21hcmsuTm9uZTtcclxuICAgICAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5hZGRUb0J1ZGdldFdpdGhIYWJiYWpldChpbmZvLCBjaGVja2JveGVzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2hlY2tib3hlc1RvVXNlID0gdGhpcy5jaGVja2JveFNlcnZpY2UuZ2V0Q3VycmVudFdlZWsoKTtcclxuICAgICAgICAgICAgc3RhdGVUb1VzZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5zZXRFeHBlY3RlZFBheW91dChpbmZvLCBjaGVja2JveGVzVG9Vc2UpO1xyXG4gICAgICAgIGNvbnN0IGhhYmJhamV0ID0gbmV3IEhhYmJhamV0KG5hbWUsIHN0YXRlVG9Vc2UsIGNvbG9yLCBpbmZvLCBjaGVja2JveGVzVG9Vc2UpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2goaGFiYmFqZXQpO1xyXG4gICAgICAgIHRoaXMuc2V0QnV0dG9uSW1hZ2VzKGhhYmJhamV0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQnV0dG9uSW1hZ2VzKGhhYmJhamV0SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0QnV0dG9uSW1hZ2VzKHRoaXMuaGFiYmFqZXRMaXN0W2hhYmJhamV0SW5kZXhdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEJ1dHRvbkltYWdlcyhoYWJiYWpldDogSGFiYmFqZXQpIHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gaGFiYmFqZXQuYnV0dG9ucztcclxuICAgICAgICBjb25zdCBzZWxlY3RlZENoZWNrYm94ID0gXy5maW5kKGhhYmJhamV0LmNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjLmFjdGl2ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYnV0dG9ucy5sb2NrZWQgPSBzZWxlY3RlZENoZWNrYm94LmNoZWNrbWFyayAhPT0gQ2hlY2ttYXJrLk5vbmU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRDaGVja2JveC5jaGVja21hcmspIHtcclxuICAgICAgICAgICAgY2FzZSBDaGVja21hcmsuUG9zaXRpdmU6IFxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wb3NpdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZVNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5uZWdhdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZUlnbm9yZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDaGVja21hcmsuTmVnYXRpdmU6IFxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wb3NpdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZUlnbm9yZWQ7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zLm5lZ2F0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLk5lZ2F0aXZlU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICBidXR0b25zLnBvc2l0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLlBvc2l0aXZlO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9ucy5uZWdhdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZUhhYmJhamV0KGhhYmJhamV0SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGhhYmJhamV0SW5kZXggLT0gdGhpcy5udW1EZWxldGVkO1xyXG4gICAgICAgIGlmKHRoaXMuaGFiYmFqZXRFeGlzdHMoaGFiYmFqZXRJbmRleCkpIHtcclxuICAgICAgICAgICAgdGhpcy5udW1EZWxldGVkKys7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnNwbGljZShoYWJiYWpldEluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYlNlcnZpY2UucmVtb3ZlSGFiYmFqZXRUYWIoaGFiYmFqZXRJbmRleCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=