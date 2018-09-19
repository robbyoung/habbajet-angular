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
        this.id = Math.random() * 100000 + '';
        console.log('ID: ' + this.id);
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
        var _this = this;
        this.imageService = imageService;
        this.checkboxService = checkboxService;
        this.tabService = tabService;
        this.budgetService = budgetService;
        this.savingService = savingService;
        this.uuidGen = require('nativescript-uuid');
        this.habbajetList = [];
        this.savingService.loadHabbajetList(this);
        this.tabService.initialiseTabs(_.map(this.habbajetList, function (habbajet) { return habbajet.id; }));
        this.savingService.saveHabbajetList(this.habbajetList);
        this.numDeleted = 0;
        this.budgetService.onPurchaseCallback = function () {
            _.each(_this.habbajetList, function (habbajet) {
                _this.budgetService.setExpectedPayout(habbajet.info, habbajet.checkboxes);
            });
        };
    }
    HabbajetService.prototype.habbajetExists = function (id) {
        var match = _.find(this.habbajetList, function (habbajet) {
            return habbajet.id === id;
        });
        return match !== undefined;
    };
    HabbajetService.prototype.getHabbajet = function (id) {
        return _.find(this.habbajetList, function (habbajet) {
            return habbajet.id === id;
        });
    };
    HabbajetService.prototype.getHabbajetCount = function () {
        return this.habbajetList.length;
    };
    HabbajetService.prototype.getHabbajetName = function (id) {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).name;
        }
        else {
            return 'To Remove';
        }
    };
    HabbajetService.prototype.getHabbajetImage = function (id) {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).image;
        }
        else {
            return undefined;
        }
    };
    HabbajetService.prototype.getHabbajetInfo = function (id) {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).info;
        }
        else {
            return undefined;
        }
    };
    HabbajetService.prototype.getHabbajetColor = function (id) {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).color;
        }
        else {
            return undefined;
        }
    };
    HabbajetService.prototype.getHabbajetCheckboxes = function (id) {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).checkboxes;
        }
        else {
            return undefined;
        }
    };
    HabbajetService.prototype.getHabbajetButtons = function (id) {
        if (this.habbajetExists(id)) {
            return this.getHabbajet(id).buttons;
        }
        else {
            return undefined;
        }
    };
    HabbajetService.prototype.evolve = function (id) {
        if (this.habbajetExists(id)) {
            this.imageService.evolve(this.getHabbajet(id).image);
            this.savingService.saveHabbajetList(this.habbajetList);
        }
    };
    HabbajetService.prototype.resetImageState = function (habbajet) {
        if (habbajet && habbajet.image) {
            this.imageService.reset(habbajet.image);
        }
    };
    HabbajetService.prototype.action = function (id) {
        if (this.habbajetExists(id)) {
            this.imageService.action(this.getHabbajet(id).image);
        }
    };
    HabbajetService.prototype.selectCheckbox = function (id) {
        if (this.habbajetExists(id)) {
            var habbajet = this.getHabbajet(id);
            this.setButtonImages(habbajet);
        }
    };
    HabbajetService.prototype.setCheckmark = function (id, checkmark) {
        if (this.habbajetExists(id)) {
            var habbajet = this.getHabbajet(id);
            if (habbajet.image.action !== 't') {
                var activeCheckbox = _.find(habbajet.checkboxes, function (c) { return c.active; });
                if (activeCheckbox !== undefined) {
                    activeCheckbox.checkmark = checkmark;
                    this.budgetService.setExpectedPayout(habbajet.info, habbajet.checkboxes);
                    this.updateBudgetIfNecessary(habbajet);
                    this.updateStreak(habbajet.info, habbajet.checkboxes, false);
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
        this.tabService.addHabbajetTab(habbajet.id);
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
            var numUnmarked = _.filter(checkboxes, function (checkbox) {
                return checkbox.checkmark === checkbox_service_1.Checkmark.None;
            }).length;
            if (numUnmarked > 0) {
                this.budgetService.addToBudgetWithHabbajet(info, checkboxes);
            }
            this.updateStreak(info, checkboxes, true);
            checkboxesToUse = this.checkboxService.getCurrentWeek();
            stateToUse = 0;
        }
        this.budgetService.setExpectedPayout(info, checkboxesToUse);
        var habbajet = new Habbajet(name, stateToUse, color, info, checkboxesToUse);
        this.habbajetList.push(habbajet);
        this.setButtonImages(habbajet);
    };
    HabbajetService.prototype.updateButtonImages = function (id) {
        this.setButtonImages(this.getHabbajet(id));
    };
    HabbajetService.prototype.setButtonImages = function (habbajet) {
        var buttons = habbajet.buttons;
        var activeIndex;
        var selectedCheckbox = _.find(habbajet.checkboxes, function (c, index) {
            if (c.active) {
                activeIndex = index;
            }
            return c.active;
        });
        if (activeIndex > 0 && habbajet.checkboxes[activeIndex - 1].checkmark === checkbox_service_1.Checkmark.None) {
            buttons.locked = true;
            buttons.positiveSrc = ButtonImages.PositiveIgnored;
            buttons.negativeSrc = ButtonImages.NegativeIgnored;
        }
        else {
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
        }
    };
    HabbajetService.prototype.deleteHabbajet = function (id) {
        if (this.habbajetExists(id)) {
            var habbajetIndex = _.findIndex(this.habbajetList, function (habbajet) {
                return habbajet.id === id;
            });
            this.habbajetList.splice(habbajetIndex, 1);
            this.savingService.saveHabbajetList(this.habbajetList);
            this.tabService.removeHabbajetTab(habbajetIndex + 1);
        }
    };
    HabbajetService.prototype.updateStreak = function (info, checkboxes, includeUnmarked) {
        var slackLeft = info.slack;
        var incrementStreak;
        var streakReset = false;
        _.each(checkboxes, function (checkbox) {
            if (checkbox.checkmark === checkbox_service_1.Checkmark.Positive) {
                if (streakReset) {
                    info.streak++;
                }
                else {
                    incrementStreak = true;
                }
            }
            else if (checkbox.checkmark === checkbox_service_1.Checkmark.Negative || includeUnmarked) {
                slackLeft--;
                if (slackLeft < 0) {
                    incrementStreak = false;
                    info.streak = 0;
                    streakReset = true;
                }
                else {
                    if (streakReset) {
                        info.streak++;
                    }
                    else {
                        incrementStreak = true;
                    }
                }
            }
        });
        if (incrementStreak) {
            info.streak++;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsbURBQTREO0FBQzVELHVEQUF1RjtBQUN2RiwwQkFBNEI7QUFDNUIsNkNBQTJDO0FBQzNDLG1EQUFpRDtBQUNqRCxtREFBaUQ7QUFFakQsSUFBWSxZQU9YO0FBUEQsV0FBWSxZQUFZO0lBQ3BCLDJEQUEyQyxDQUFBO0lBQzNDLDJEQUEyQyxDQUFBO0lBQzNDLG1FQUFtRCxDQUFBO0lBQ25ELG1FQUFtRCxDQUFBO0lBQ25ELGtFQUFrRCxDQUFBO0lBQ2xELGtFQUFrRCxDQUFBO0FBQ3RELENBQUMsRUFQVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU92QjtBQWlCRDtJQUtJLGtCQUFtQixJQUFZLEVBQVMsS0FBYSxFQUFTLEtBQWEsRUFBUyxJQUFrQixFQUFTLFVBQThCO1FBQTFILFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQWM7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQUN6SSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksMkJBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLFdBQVcsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUNsQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDbEMsTUFBTSxFQUFFLEtB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bEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBM1FRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FNeUIsNkJBQVksRUFBMkIsa0NBQWU7WUFDNUQsd0JBQVUsRUFBeUIsOEJBQWEsRUFBeUIsOEJBQWE7T0FOekcsZUFBZSxDQTRRM0I7SUFBRCxzQkFBQztDQUFBLEFBNVFELElBNFFDO0FBNVFZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEltYWdlU3RhdGUsIEltYWdlU2VydmljZSB9IGZyb20gXCIuL2ltYWdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0Q2hlY2tib3gsIENoZWNrYm94U2VydmljZSwgRGF5LCBDaGVja21hcmsgfSBmcm9tIFwiLi9jaGVja2JveC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgVGFiU2VydmljZSB9IGZyb20gXCIuL3RhYi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tIFwiLi9idWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTYXZpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vc2F2aW5nLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEJ1dHRvbkltYWdlcyB7XHJcbiAgICBQb3NpdGl2ZSA9IFwifi9pbWFnZXMvY2hlY2tib3hlcy8xZmFsc2UucG5nXCIsXHJcbiAgICBOZWdhdGl2ZSA9IFwifi9pbWFnZXMvY2hlY2tib3hlcy8yZmFsc2UucG5nXCIsXHJcbiAgICBQb3NpdGl2ZVNlbGVjdGVkID0gXCJ+L2ltYWdlcy9jaGVja2JveGVzLzFmYWxzZS5wbmdcIixcclxuICAgIE5lZ2F0aXZlU2VsZWN0ZWQgPSBcIn4vaW1hZ2VzL2NoZWNrYm94ZXMvMmZhbHNlLnBuZ1wiLFxyXG4gICAgUG9zaXRpdmVJZ25vcmVkID0gXCJ+L2ltYWdlcy9jaGVja2JveGVzLzBmYWxzZS5wbmdcIixcclxuICAgIE5lZ2F0aXZlSWdub3JlZCA9IFwifi9pbWFnZXMvY2hlY2tib3hlcy8wZmFsc2UucG5nXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFiYmFqZXRJbmZvICB7XHJcbiAgICBleHBlY3RlZFBheW91dDogc3RyaW5nO1xyXG4gICAgc3RyZWFrOiBudW1iZXI7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgZmFjdG9yOiBudW1iZXI7XHJcbiAgICBzbGFjazogbnVtYmVyO1xyXG4gICAgZXhwZWN0ZWRQYXlvdXRVcGRhdGVDYWxsYmFjaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFiYmFqZXRCdXR0b25zIHtcclxuICAgIHBvc2l0aXZlU3JjOiBzdHJpbmc7XHJcbiAgICBuZWdhdGl2ZVNyYzogc3RyaW5nO1xyXG4gICAgbG9ja2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5jbGFzcyBIYWJiYWpldCB7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZTogSW1hZ2VTdGF0ZTtcclxuICAgIHB1YmxpYyBidXR0b25zOiBIYWJiYWpldEJ1dHRvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHN0YXRlOiBudW1iZXIsIHB1YmxpYyBjb2xvcjogc3RyaW5nLCBwdWJsaWMgaW5mbzogSGFiYmFqZXRJbmZvLCBwdWJsaWMgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZVN0YXRlKHN0YXRlLCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkgKiAxMDAwMDAgKyAnJztcclxuICAgICAgICBjb25zb2xlLmxvZygnSUQ6ICcgKyB0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aXZlU3JjOiBCdXR0b25JbWFnZXMuUG9zaXRpdmUsXHJcbiAgICAgICAgICAgIG5lZ2F0aXZlU3JjOiBCdXR0b25JbWFnZXMuTmVnYXRpdmUsXHJcbiAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldFNlcnZpY2Uge1xyXG4gICAgcHVibGljIGhhYmJhamV0TGlzdDogSGFiYmFqZXRbXTtcclxuICAgIHByaXZhdGUgbnVtRGVsZXRlZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB1dWlkR2VuID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXV1aWQnKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLCBwcml2YXRlIGNoZWNrYm94U2VydmljZTogQ2hlY2tib3hTZXJ2aWNlLFxyXG4gICAgICAgICAgICBwcml2YXRlIHRhYlNlcnZpY2U6IFRhYlNlcnZpY2UsIHByaXZhdGUgYnVkZ2V0U2VydmljZTogQnVkZ2V0U2VydmljZSwgcHJpdmF0ZSBzYXZpbmdTZXJ2aWNlOiBTYXZpbmdTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2UubG9hZEhhYmJhamV0TGlzdCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRhYlNlcnZpY2UuaW5pdGlhbGlzZVRhYnMoXy5tYXAodGhpcy5oYWJiYWpldExpc3QsIChoYWJiYWpldDogSGFiYmFqZXQpID0+IGhhYmJhamV0LmlkKSk7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgICAgIHRoaXMubnVtRGVsZXRlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLm9uUHVyY2hhc2VDYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgXy5lYWNoKHRoaXMuaGFiYmFqZXRMaXN0LCAoaGFiYmFqZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5zZXRFeHBlY3RlZFBheW91dChoYWJiYWpldC5pbmZvLCBoYWJiYWpldC5jaGVja2JveGVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhYmJhamV0RXhpc3RzKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IF8uZmluZCh0aGlzLmhhYmJhamV0TGlzdCwgKGhhYmJhamV0OiBIYWJiYWpldCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaGFiYmFqZXQuaWQgPT09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBtYXRjaCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SGFiYmFqZXQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBfLmZpbmQodGhpcy5oYWJiYWpldExpc3QsIChoYWJiYWpldDogSGFiYmFqZXQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGhhYmJhamV0LmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0TmFtZShpZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGFiYmFqZXQoaWQpLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICdUbyBSZW1vdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRJbWFnZShpZDogc3RyaW5nKTogSW1hZ2VTdGF0ZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhhYmJhamV0KGlkKS5pbWFnZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRJbmZvKGlkOiBzdHJpbmcpOiBIYWJiYWpldEluZm8ge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRIYWJiYWpldChpZCkuaW5mbztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRDb2xvcihpZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGFiYmFqZXQoaWQpLmNvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldENoZWNrYm94ZXMoaWQ6IHN0cmluZyk6IEhhYmJhamV0Q2hlY2tib3hbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhhYmJhamV0KGlkKS5jaGVja2JveGVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldEJ1dHRvbnMoaWQ6IHN0cmluZyk6IEhhYmJhamV0QnV0dG9ucyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhhYmJhamV0KGlkKS5idXR0b25zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBldm9sdmUoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmV2b2x2ZSh0aGlzLmdldEhhYmJhamV0KGlkKS5pbWFnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlSGFiYmFqZXRMaXN0KHRoaXMuaGFiYmFqZXRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEltYWdlU3RhdGUoaGFiYmFqZXQ6IEhhYmJhamV0KSB7XHJcbiAgICAgICAgaWYoaGFiYmFqZXQgJiYgaGFiYmFqZXQuaW1hZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UucmVzZXQoaGFiYmFqZXQuaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aW9uKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZih0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5hY3Rpb24odGhpcy5nZXRIYWJiYWpldChpZCkuaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0Q2hlY2tib3goaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhYmJhamV0ID0gdGhpcy5nZXRIYWJiYWpldChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uSW1hZ2VzKGhhYmJhamV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENoZWNrbWFyayhpZDogc3RyaW5nLCBjaGVja21hcms6IENoZWNrbWFyayk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhYmJhamV0ID0gdGhpcy5nZXRIYWJiYWpldChpZCk7XHJcbiAgICAgICAgICAgIGlmKGhhYmJhamV0LmltYWdlLmFjdGlvbiAhPT0gJ3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVDaGVja2JveCA9IF8uZmluZChoYWJiYWpldC5jaGVja2JveGVzLCAoYzogSGFiYmFqZXRDaGVja2JveCkgPT4gYy5hY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlQ2hlY2tib3ggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoZWNrYm94LmNoZWNrbWFyayA9IGNoZWNrbWFyaztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2Uuc2V0RXhwZWN0ZWRQYXlvdXQoaGFiYmFqZXQuaW5mbywgaGFiYmFqZXQuY2hlY2tib3hlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCdWRnZXRJZk5lY2Vzc2FyeShoYWJiYWpldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJlYWsoaGFiYmFqZXQuaW5mbywgaGFiYmFqZXQuY2hlY2tib3hlcywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlSGFiYmFqZXRMaXN0KHRoaXMuaGFiYmFqZXRMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCdWRnZXRJZk5lY2Vzc2FyeShoYWJiYWpldDogSGFiYmFqZXQpIHtcclxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gaGFiYmFqZXQuY2hlY2tib3hlcztcclxuICAgICAgICBpZihfLmV2ZXJ5KGNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiBjLmNoZWNrbWFyayAhPT0gQ2hlY2ttYXJrLk5vbmUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRJbWFnZVN0YXRlKGhhYmJhamV0KTtcclxuICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLmFkZFRvQnVkZ2V0V2l0aEhhYmJhamV0KGhhYmJhamV0LmluZm8sIGNoZWNrYm94ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3SGFiYmFqZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBmYWN0b3I6IG51bWJlciwgc2xhY2s6IG51bWJlciwgY29sb3I6IHN0cmluZykge1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gdGhpcy5jaGVja2JveFNlcnZpY2UuZ2V0Q3VycmVudFdlZWsoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5mbzogSGFiYmFqZXRJbmZvID0ge1xyXG4gICAgICAgICAgICBleHBlY3RlZFBheW91dDogJycsXHJcbiAgICAgICAgICAgIHN0cmVhazogMCxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGZhY3RvcixcclxuICAgICAgICAgICAgc2xhY2ssXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2Uuc2V0RXhwZWN0ZWRQYXlvdXQoaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgY29uc3QgaGFiYmFqZXQgPSBuZXcgSGFiYmFqZXQobmFtZSwgMCwgY29sb3IsIGluZm8sIGNoZWNrYm94ZXMpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2goaGFiYmFqZXQpO1xyXG4gICAgICAgIHRoaXMudGFiU2VydmljZS5hZGRIYWJiYWpldFRhYihoYWJiYWpldC5pZCk7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdIYWJiYWpldEZyb21TYXZlKG5hbWU6IHN0cmluZywgc3RhdGU6IG51bWJlciwgdmFsdWU6IG51bWJlciwgZmFjdG9yOiBudW1iZXIsIHNsYWNrOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHN0cmVhazogbnVtYmVyLCBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10sIHN0YXJ0T2ZXZWVrOiBzdHJpbmcpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbmZvOiBIYWJiYWpldEluZm8gPSB7XHJcbiAgICAgICAgICAgIHN0cmVhayxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGZhY3RvcixcclxuICAgICAgICAgICAgc2xhY2ssXHJcbiAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0OiAnJyxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZVRvVXNlID0gc3RhdGU7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94ZXNUb1VzZTogSGFiYmFqZXRDaGVja2JveFtdO1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tib3hTZXJ2aWNlLmlzQ3VycmVudFdlZWsoc3RhcnRPZldlZWspKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNUb1VzZSA9IGNoZWNrYm94ZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbnVtVW5tYXJrZWQgPSBfLmZpbHRlcihjaGVja2JveGVzLCAoY2hlY2tib3g6IEhhYmJhamV0Q2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2JveC5jaGVja21hcmsgPT09IENoZWNrbWFyay5Ob25lO1xyXG4gICAgICAgICAgICB9KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChudW1Vbm1hcmtlZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5hZGRUb0J1ZGdldFdpdGhIYWJiYWpldChpbmZvLCBjaGVja2JveGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0cmVhayhpbmZvLCBjaGVja2JveGVzLCB0cnVlKTtcclxuICAgICAgICAgICAgY2hlY2tib3hlc1RvVXNlID0gdGhpcy5jaGVja2JveFNlcnZpY2UuZ2V0Q3VycmVudFdlZWsoKTtcclxuICAgICAgICAgICAgc3RhdGVUb1VzZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5zZXRFeHBlY3RlZFBheW91dChpbmZvLCBjaGVja2JveGVzVG9Vc2UpO1xyXG4gICAgICAgIGNvbnN0IGhhYmJhamV0ID0gbmV3IEhhYmJhamV0KG5hbWUsIHN0YXRlVG9Vc2UsIGNvbG9yLCBpbmZvLCBjaGVja2JveGVzVG9Vc2UpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2goaGFiYmFqZXQpO1xyXG4gICAgICAgIHRoaXMuc2V0QnV0dG9uSW1hZ2VzKGhhYmJhamV0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQnV0dG9uSW1hZ2VzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldEJ1dHRvbkltYWdlcyh0aGlzLmdldEhhYmJhamV0KGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRCdXR0b25JbWFnZXMoaGFiYmFqZXQ6IEhhYmJhamV0KSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGhhYmJhamV0LmJ1dHRvbnM7XHJcbiAgICAgICAgbGV0IGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGVja2JveCA9IF8uZmluZChoYWJiYWpldC5jaGVja2JveGVzLCAoYzogSGFiYmFqZXRDaGVja2JveCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjLmFjdGl2ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID4gMCAmJiBoYWJiYWpldC5jaGVja2JveGVzW2FjdGl2ZUluZGV4IC0gMV0uY2hlY2ttYXJrID09PSBDaGVja21hcmsuTm9uZSkge1xyXG4gICAgICAgICAgICBidXR0b25zLmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMucG9zaXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuUG9zaXRpdmVJZ25vcmVkO1xyXG4gICAgICAgICAgICBidXR0b25zLm5lZ2F0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLk5lZ2F0aXZlSWdub3JlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b25zLmxvY2tlZCA9IHNlbGVjdGVkQ2hlY2tib3guY2hlY2ttYXJrICE9PSBDaGVja21hcmsuTm9uZTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRDaGVja2JveC5jaGVja21hcmspIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgQ2hlY2ttYXJrLlBvc2l0aXZlOiBcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zLnBvc2l0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLlBvc2l0aXZlU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy5uZWdhdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZUlnbm9yZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIENoZWNrbWFyay5OZWdhdGl2ZTogXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy5wb3NpdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZUlnbm9yZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy5uZWdhdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZVNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy5wb3NpdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zLm5lZ2F0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLk5lZ2F0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVIYWJiYWpldChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFiYmFqZXRJbmRleCA9IF8uZmluZEluZGV4KHRoaXMuaGFiYmFqZXRMaXN0LCAoaGFiYmFqZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBoYWJiYWpldC5pZCA9PT0gaWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5zcGxpY2UoaGFiYmFqZXRJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlSGFiYmFqZXRMaXN0KHRoaXMuaGFiYmFqZXRMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy50YWJTZXJ2aWNlLnJlbW92ZUhhYmJhamV0VGFiKGhhYmJhamV0SW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVN0cmVhayhpbmZvOiBIYWJiYWpldEluZm8sIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSwgaW5jbHVkZVVubWFya2VkOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHNsYWNrTGVmdCA9IGluZm8uc2xhY2s7XHJcbiAgICAgICAgbGV0IGluY3JlbWVudFN0cmVhazogYm9vbGVhbjtcclxuICAgICAgICBsZXQgc3RyZWFrUmVzZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBfLmVhY2ggKGNoZWNrYm94ZXMsIChjaGVja2JveDogSGFiYmFqZXRDaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2ttYXJrID09PSBDaGVja21hcmsuUG9zaXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIGlmKHN0cmVha1Jlc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mby5zdHJlYWsrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50U3RyZWFrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGNoZWNrYm94LmNoZWNrbWFyayA9PT0gQ2hlY2ttYXJrLk5lZ2F0aXZlIHx8IGluY2x1ZGVVbm1hcmtlZCkge1xyXG4gICAgICAgICAgICAgICAgc2xhY2tMZWZ0LS07XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xhY2tMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudFN0cmVhayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8uc3RyZWFrID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBzdHJlYWtSZXNldCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHN0cmVha1Jlc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8uc3RyZWFrKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50U3RyZWFrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGluY3JlbWVudFN0cmVhaykge1xyXG4gICAgICAgICAgICBpbmZvLnN0cmVhaysrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=