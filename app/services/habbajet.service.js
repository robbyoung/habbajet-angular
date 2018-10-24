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
var _ = require("lodash");
var budget_service_1 = require("./budget.service");
var checkbox_service_1 = require("./checkbox.service");
var images_service_1 = require("./images.service");
var saving_service_1 = require("./saving.service");
var tab_service_1 = require("./tab.service");
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
        this.id = Math.random() * 1000000 + '';
        this.buttons = {
            positiveSrc: ButtonImages.Positive,
            negativeSrc: ButtonImages.Negative,
            locked: false,
        };
    }
    return Habbajet;
}());
exports.Habbajet = Habbajet;
var HabbajetService = /** @class */ (function () {
    function HabbajetService(imageService, checkboxService, tabService, budgetService, savingService) {
        var _this = this;
        this.imageService = imageService;
        this.checkboxService = checkboxService;
        this.tabService = tabService;
        this.budgetService = budgetService;
        this.savingService = savingService;
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
    HabbajetService.prototype.newHabbajet = function (name, value, factor, slack, color) {
        var checkboxes = this.checkboxService.getCurrentWeek();
        var info = {
            expectedPayout: '',
            streak: 0,
            best: 0,
            value: value,
            factor: factor,
            slack: slack,
        };
        this.budgetService.setExpectedPayout(info, checkboxes);
        var habbajet = new Habbajet(name, 0, color, info, checkboxes);
        this.setButtonImages(habbajet);
        this.habbajetList.push(habbajet);
        this.tabService.addHabbajetTab(habbajet.id);
        this.savingService.saveHabbajetList(this.habbajetList);
    };
    HabbajetService.prototype.newHabbajetFromSave = function (name, state, value, factor, slack, color, streak, checkboxes, startOfWeek, best) {
        var info = {
            streak: streak,
            best: best,
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
            if (info.best < info.streak) {
                info.best = info.streak;
            }
        }
    };
    HabbajetService.prototype.getHabbajet = function (id) {
        return _.find(this.habbajetList, function (habbajet) {
            return habbajet.id === id;
        });
    };
    HabbajetService.prototype.resetImageState = function (habbajet) {
        if (habbajet && habbajet.image) {
            this.imageService.reset(habbajet.image);
        }
    };
    HabbajetService.prototype.updateBudgetIfNecessary = function (habbajet) {
        var checkboxes = habbajet.checkboxes;
        if (_.every(checkboxes, function (c) { return c.checkmark !== checkbox_service_1.Checkmark.None; })) {
            this.resetImageState(habbajet);
            this.budgetService.addToBudgetWithHabbajet(habbajet.info, checkboxes);
        }
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
    HabbajetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [images_service_1.ImageService, checkbox_service_1.CheckboxService,
            tab_service_1.TabService, budget_service_1.BudgetService,
            saving_service_1.SavingService])
    ], HabbajetService);
    return HabbajetService;
}());
exports.HabbajetService = HabbajetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsMEJBQTRCO0FBQzVCLG1EQUFpRDtBQUNqRCx1REFBdUY7QUFDdkYsbURBQTREO0FBQzVELG1EQUFpRDtBQUNqRCw2Q0FBMkM7QUFFM0MsSUFBWSxZQU9YO0FBUEQsV0FBWSxZQUFZO0lBQ3BCLDJEQUEyQyxDQUFBO0lBQzNDLDJEQUEyQyxDQUFBO0lBQzNDLG1FQUFtRCxDQUFBO0lBQ25ELG1FQUFtRCxDQUFBO0lBQ25ELGtFQUFrRCxDQUFBO0lBQ2xELGtFQUFrRCxDQUFBO0FBQ3RELENBQUMsRUFQVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU92QjtBQWtCRDtJQUtJLGtCQUFtQixJQUFZLEVBQVMsS0FBYSxFQUFTLEtBQWEsRUFDeEQsSUFBa0IsRUFBUyxVQUE4QjtRQUR6RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDeEQsU0FBSSxHQUFKLElBQUksQ0FBYztRQUFTLGVBQVUsR0FBVixVQUFVLENBQW9CO1FBQ3hFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSwyQkFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDbEMsV0FBVyxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUM7SUFDTixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlks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LEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDO29CQUNwRCxLQUFLLENBQUM7Z0JBQ1Y7b0JBQ0ksT0FBTyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO29CQUM1QyxPQUFPLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDcEQsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBalJRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FLeUIsNkJBQVksRUFBMkIsa0NBQWU7WUFDeEQsd0JBQVUsRUFBeUIsOEJBQWE7WUFDN0MsOEJBQWE7T0FOdkMsZUFBZSxDQWtSM0I7SUFBRCxzQkFBQztDQUFBLEFBbFJELElBa1JDO0FBbFJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tICcuL2J1ZGdldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2hlY2tib3hTZXJ2aWNlLCBDaGVja21hcmssIERheSwgSGFiYmFqZXRDaGVja2JveCB9IGZyb20gJy4vY2hlY2tib3guc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSwgSW1hZ2VTdGF0ZSB9IGZyb20gJy4vaW1hZ2VzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTYXZpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zYXZpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFRhYlNlcnZpY2UgfSBmcm9tICcuL3RhYi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBlbnVtIEJ1dHRvbkltYWdlcyB7XHJcbiAgICBQb3NpdGl2ZSA9ICd+L2ltYWdlcy9jaGVja2JveGVzLzFmYWxzZS5wbmcnLFxyXG4gICAgTmVnYXRpdmUgPSAnfi9pbWFnZXMvY2hlY2tib3hlcy8yZmFsc2UucG5nJyxcclxuICAgIFBvc2l0aXZlU2VsZWN0ZWQgPSAnfi9pbWFnZXMvY2hlY2tib3hlcy8xZmFsc2UucG5nJyxcclxuICAgIE5lZ2F0aXZlU2VsZWN0ZWQgPSAnfi9pbWFnZXMvY2hlY2tib3hlcy8yZmFsc2UucG5nJyxcclxuICAgIFBvc2l0aXZlSWdub3JlZCA9ICd+L2ltYWdlcy9jaGVja2JveGVzLzBmYWxzZS5wbmcnLFxyXG4gICAgTmVnYXRpdmVJZ25vcmVkID0gJ34vaW1hZ2VzL2NoZWNrYm94ZXMvMGZhbHNlLnBuZycsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFiYmFqZXRJbmZvICB7XHJcbiAgICBleHBlY3RlZFBheW91dDogc3RyaW5nO1xyXG4gICAgc3RyZWFrOiBudW1iZXI7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgZmFjdG9yOiBudW1iZXI7XHJcbiAgICBzbGFjazogbnVtYmVyO1xyXG4gICAgYmVzdDogbnVtYmVyO1xyXG4gICAgZXhwZWN0ZWRQYXlvdXRVcGRhdGVDYWxsYmFjaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFiYmFqZXRCdXR0b25zIHtcclxuICAgIHBvc2l0aXZlU3JjOiBzdHJpbmc7XHJcbiAgICBuZWdhdGl2ZVNyYzogc3RyaW5nO1xyXG4gICAgbG9ja2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXQge1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IEltYWdlU3RhdGU7XHJcbiAgICBwdWJsaWMgYnV0dG9uczogSGFiYmFqZXRCdXR0b25zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBzdGF0ZTogbnVtYmVyLCBwdWJsaWMgY29sb3I6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBpbmZvOiBIYWJiYWpldEluZm8sIHB1YmxpYyBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10pIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlU3RhdGUoc3RhdGUsIGNvbG9yKTtcclxuICAgICAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAgKyAnJztcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aXZlU3JjOiBCdXR0b25JbWFnZXMuUG9zaXRpdmUsXHJcbiAgICAgICAgICAgIG5lZ2F0aXZlU3JjOiBCdXR0b25JbWFnZXMuTmVnYXRpdmUsXHJcbiAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0W107XHJcbiAgICBwcml2YXRlIG51bURlbGV0ZWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLCBwcml2YXRlIGNoZWNrYm94U2VydmljZTogQ2hlY2tib3hTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0YWJTZXJ2aWNlOiBUYWJTZXJ2aWNlLCBwcml2YXRlIGJ1ZGdldFNlcnZpY2U6IEJ1ZGdldFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNhdmluZ1NlcnZpY2U6IFNhdmluZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5sb2FkSGFiYmFqZXRMaXN0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGFiU2VydmljZS5pbml0aWFsaXNlVGFicyhfLm1hcCh0aGlzLmhhYmJhamV0TGlzdCwgKGhhYmJhamV0OiBIYWJiYWpldCkgPT4gaGFiYmFqZXQuaWQpKTtcclxuICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZUhhYmJhamV0TGlzdCh0aGlzLmhhYmJhamV0TGlzdCk7XHJcbiAgICAgICAgdGhpcy5udW1EZWxldGVkID0gMDtcclxuICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2Uub25QdXJjaGFzZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBfLmVhY2godGhpcy5oYWJiYWpldExpc3QsIChoYWJiYWpldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLnNldEV4cGVjdGVkUGF5b3V0KGhhYmJhamV0LmluZm8sIGhhYmJhamV0LmNoZWNrYm94ZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYWJiYWpldEV4aXN0cyhpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBfLmZpbmQodGhpcy5oYWJiYWpldExpc3QsIChoYWJiYWpldDogSGFiYmFqZXQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGhhYmJhamV0LmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbWF0Y2ggIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0TmFtZShpZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGFiYmFqZXQoaWQpLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICdUbyBSZW1vdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRJbWFnZShpZDogc3RyaW5nKTogSW1hZ2VTdGF0ZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhhYmJhamV0KGlkKS5pbWFnZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRJbmZvKGlkOiBzdHJpbmcpOiBIYWJiYWpldEluZm8ge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRIYWJiYWpldChpZCkuaW5mbztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRDb2xvcihpZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGFiYmFqZXQoaWQpLmNvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldENoZWNrYm94ZXMoaWQ6IHN0cmluZyk6IEhhYmJhamV0Q2hlY2tib3hbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhhYmJhamV0KGlkKS5jaGVja2JveGVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldEJ1dHRvbnMoaWQ6IHN0cmluZyk6IEhhYmJhamV0QnV0dG9ucyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhhYmJhamV0KGlkKS5idXR0b25zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBldm9sdmUoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5ldm9sdmUodGhpcy5nZXRIYWJiYWpldChpZCkuaW1hZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZUhhYmJhamV0TGlzdCh0aGlzLmhhYmJhamV0TGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5hY3Rpb24odGhpcy5nZXRIYWJiYWpldChpZCkuaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0Q2hlY2tib3goaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICBjb25zdCBoYWJiYWpldCA9IHRoaXMuZ2V0SGFiYmFqZXQoaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbkltYWdlcyhoYWJiYWpldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDaGVja21hcmsoaWQ6IHN0cmluZywgY2hlY2ttYXJrOiBDaGVja21hcmspOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFiYmFqZXQgPSB0aGlzLmdldEhhYmJhamV0KGlkKTtcclxuICAgICAgICAgICAgaWYgKGhhYmJhamV0LmltYWdlLmFjdGlvbiAhPT0gJ3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVDaGVja2JveCA9IF8uZmluZChoYWJiYWpldC5jaGVja2JveGVzLCAoYzogSGFiYmFqZXRDaGVja2JveCkgPT4gYy5hY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUNoZWNrYm94ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGVja2JveC5jaGVja21hcmsgPSBjaGVja21hcms7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLnNldEV4cGVjdGVkUGF5b3V0KGhhYmJhamV0LmluZm8sIGhhYmJhamV0LmNoZWNrYm94ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnVkZ2V0SWZOZWNlc3NhcnkoaGFiYmFqZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RyZWFrKGhhYmJhamV0LmluZm8sIGhhYmJhamV0LmNoZWNrYm94ZXMsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZUhhYmJhamV0TGlzdCh0aGlzLmhhYmJhamV0TGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdIYWJiYWpldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIGZhY3RvcjogbnVtYmVyLCBzbGFjazogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0aGlzLmNoZWNrYm94U2VydmljZS5nZXRDdXJyZW50V2VlaygpO1xyXG5cclxuICAgICAgICBjb25zdCBpbmZvOiBIYWJiYWpldEluZm8gPSB7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0OiAnJyxcclxuICAgICAgICAgICAgc3RyZWFrOiAwLFxyXG4gICAgICAgICAgICBiZXN0OiAwLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgZmFjdG9yLFxyXG4gICAgICAgICAgICBzbGFjayxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2Uuc2V0RXhwZWN0ZWRQYXlvdXQoaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgY29uc3QgaGFiYmFqZXQgPSBuZXcgSGFiYmFqZXQobmFtZSwgMCwgY29sb3IsIGluZm8sIGNoZWNrYm94ZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QnV0dG9uSW1hZ2VzKGhhYmJhamV0KTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKGhhYmJhamV0KTtcclxuICAgICAgICB0aGlzLnRhYlNlcnZpY2UuYWRkSGFiYmFqZXRUYWIoaGFiYmFqZXQuaWQpO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlSGFiYmFqZXRMaXN0KHRoaXMuaGFiYmFqZXRMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3SGFiYmFqZXRGcm9tU2F2ZShuYW1lOiBzdHJpbmcsIHN0YXRlOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIGZhY3RvcjogbnVtYmVyLCBzbGFjazogbnVtYmVyLCBjb2xvcjogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFrOiBudW1iZXIsIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSwgc3RhcnRPZldlZWs6IHN0cmluZywgYmVzdDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZm86IEhhYmJhamV0SW5mbyA9IHtcclxuICAgICAgICAgICAgc3RyZWFrLFxyXG4gICAgICAgICAgICBiZXN0LFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgZmFjdG9yLFxyXG4gICAgICAgICAgICBzbGFjayxcclxuICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXQ6ICcnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZVRvVXNlID0gc3RhdGU7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94ZXNUb1VzZTogSGFiYmFqZXRDaGVja2JveFtdO1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrYm94U2VydmljZS5pc0N1cnJlbnRXZWVrKHN0YXJ0T2ZXZWVrKSkge1xyXG4gICAgICAgICAgICBjaGVja2JveGVzVG9Vc2UgPSBjaGVja2JveGVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bVVubWFya2VkID0gXy5maWx0ZXIoY2hlY2tib3hlcywgKGNoZWNrYm94OiBIYWJiYWpldENoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tib3guY2hlY2ttYXJrID09PSBDaGVja21hcmsuTm9uZTtcclxuICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobnVtVW5tYXJrZWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2UuYWRkVG9CdWRnZXRXaXRoSGFiYmFqZXQoaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJlYWsoaW5mbywgY2hlY2tib3hlcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNUb1VzZSA9IHRoaXMuY2hlY2tib3hTZXJ2aWNlLmdldEN1cnJlbnRXZWVrKCk7XHJcbiAgICAgICAgICAgIHN0YXRlVG9Vc2UgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLnNldEV4cGVjdGVkUGF5b3V0KGluZm8sIGNoZWNrYm94ZXNUb1VzZSk7XHJcbiAgICAgICAgY29uc3QgaGFiYmFqZXQgPSBuZXcgSGFiYmFqZXQobmFtZSwgc3RhdGVUb1VzZSwgY29sb3IsIGluZm8sIGNoZWNrYm94ZXNUb1VzZSk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChoYWJiYWpldCk7XHJcbiAgICAgICAgdGhpcy5zZXRCdXR0b25JbWFnZXMoaGFiYmFqZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25JbWFnZXMoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2V0QnV0dG9uSW1hZ2VzKHRoaXMuZ2V0SGFiYmFqZXQoaWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlSGFiYmFqZXQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICBjb25zdCBoYWJiYWpldEluZGV4ID0gXy5maW5kSW5kZXgodGhpcy5oYWJiYWpldExpc3QsIChoYWJiYWpldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhYmJhamV0LmlkID09PSBpZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnNwbGljZShoYWJiYWpldEluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYlNlcnZpY2UucmVtb3ZlSGFiYmFqZXRUYWIoaGFiYmFqZXRJbmRleCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU3RyZWFrKGluZm86IEhhYmJhamV0SW5mbywgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdLCBpbmNsdWRlVW5tYXJrZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgc2xhY2tMZWZ0ID0gaW5mby5zbGFjaztcclxuICAgICAgICBsZXQgaW5jcmVtZW50U3RyZWFrOiBib29sZWFuO1xyXG4gICAgICAgIGxldCBzdHJlYWtSZXNldDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIF8uZWFjaCAoY2hlY2tib3hlcywgKGNoZWNrYm94OiBIYWJiYWpldENoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja21hcmsgPT09IENoZWNrbWFyay5Qb3NpdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cmVha1Jlc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mby5zdHJlYWsrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50U3RyZWFrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGVja2JveC5jaGVja21hcmsgPT09IENoZWNrbWFyay5OZWdhdGl2ZSB8fCBpbmNsdWRlVW5tYXJrZWQpIHtcclxuICAgICAgICAgICAgICAgIHNsYWNrTGVmdC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsYWNrTGVmdCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnRTdHJlYWsgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpbmZvLnN0cmVhayA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFrUmVzZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyZWFrUmVzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5zdHJlYWsrKztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnRTdHJlYWsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaW5jcmVtZW50U3RyZWFrKSB7XHJcbiAgICAgICAgICAgIGluZm8uc3RyZWFrKys7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5mby5iZXN0IDwgaW5mby5zdHJlYWspIHtcclxuICAgICAgICAgICAgICAgIGluZm8uYmVzdCA9IGluZm8uc3RyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SGFiYmFqZXQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBfLmZpbmQodGhpcy5oYWJiYWpldExpc3QsIChoYWJiYWpldDogSGFiYmFqZXQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGhhYmJhamV0LmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0SW1hZ2VTdGF0ZShoYWJiYWpldDogSGFiYmFqZXQpIHtcclxuICAgICAgICBpZiAoaGFiYmFqZXQgJiYgaGFiYmFqZXQuaW1hZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UucmVzZXQoaGFiYmFqZXQuaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJ1ZGdldElmTmVjZXNzYXJ5KGhhYmJhamV0OiBIYWJiYWpldCkge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBoYWJiYWpldC5jaGVja2JveGVzO1xyXG4gICAgICAgIGlmIChfLmV2ZXJ5KGNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiBjLmNoZWNrbWFyayAhPT0gQ2hlY2ttYXJrLk5vbmUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRJbWFnZVN0YXRlKGhhYmJhamV0KTtcclxuICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLmFkZFRvQnVkZ2V0V2l0aEhhYmJhamV0KGhhYmJhamV0LmluZm8sIGNoZWNrYm94ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEJ1dHRvbkltYWdlcyhoYWJiYWpldDogSGFiYmFqZXQpIHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gaGFiYmFqZXQuYnV0dG9ucztcclxuICAgICAgICBsZXQgYWN0aXZlSW5kZXg6IG51bWJlcjtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZENoZWNrYm94ID0gXy5maW5kKGhhYmJhamV0LmNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGMuYWN0aXZlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlSW5kZXggPiAwICYmIGhhYmJhamV0LmNoZWNrYm94ZXNbYWN0aXZlSW5kZXggLSAxXS5jaGVja21hcmsgPT09IENoZWNrbWFyay5Ob25lKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wb3NpdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZUlnbm9yZWQ7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMubmVnYXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuTmVnYXRpdmVJZ25vcmVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMubG9ja2VkID0gc2VsZWN0ZWRDaGVja2JveC5jaGVja21hcmsgIT09IENoZWNrbWFyay5Ob25lO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChzZWxlY3RlZENoZWNrYm94LmNoZWNrbWFyaykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDaGVja21hcmsuUG9zaXRpdmU6XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy5wb3NpdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZVNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMubmVnYXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuTmVnYXRpdmVJZ25vcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDaGVja21hcmsuTmVnYXRpdmU6XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy5wb3NpdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZUlnbm9yZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy5uZWdhdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZVNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zLnBvc2l0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLlBvc2l0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMubmVnYXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuTmVnYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19