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
                    activeCheckbox.checkmark === checkbox_service_1.Checkmark.Positive ?
                        this.onPositiveTap(habbajet.info) : this.onNegativeTap(habbajet.info, habbajet.checkboxes);
                    this.budgetService.setExpectedPayout(habbajet.info, habbajet.checkboxes);
                    this.updateBudgetIfNecessary(habbajet);
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
            numSuccesses: 0,
            numFailures: 0,
        };
        this.budgetService.setExpectedPayout(info, checkboxes);
        var habbajet = new Habbajet(name, 0, color, info, checkboxes);
        this.setButtonImages(habbajet);
        this.habbajetList.push(habbajet);
        this.tabService.addHabbajetTab(habbajet.id);
        this.savingService.saveHabbajetList(this.habbajetList);
    };
    HabbajetService.prototype.newHabbajetFromSave = function (name, state, value, factor, slack, color, streak, checkboxes, startOfWeek, best, numSuccesses, numFailures) {
        var info = {
            streak: streak,
            best: best,
            value: value,
            factor: factor,
            slack: slack,
            expectedPayout: '',
            numSuccesses: numSuccesses,
            numFailures: numFailures,
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
                this.onUnfinishedWeek(info);
            }
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
    HabbajetService.prototype.onPositiveTap = function (info) {
        info.streak++;
        if (info.best < info.streak) {
            info.best = info.streak;
        }
        info.numSuccesses++;
    };
    HabbajetService.prototype.onNegativeTap = function (info, checkboxes) {
        var numCrosses = _.countBy(checkboxes, function (checkbox) {
            return checkbox.checkmark === checkbox_service_1.Checkmark.Negative;
        }).true || 0;
        if (numCrosses > info.slack) {
            info.streak = 0;
            info.numFailures++;
        }
        else {
            this.onPositiveTap(info);
        }
    };
    HabbajetService.prototype.onUnfinishedWeek = function (info) {
        info.streak = 0;
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
