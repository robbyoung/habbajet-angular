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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsMEJBQTRCO0FBQzVCLG1EQUFpRDtBQUNqRCx1REFBdUY7QUFDdkYsbURBQTREO0FBQzVELG1EQUFpRDtBQUNqRCw2Q0FBMkM7QUFFM0MsSUFBWSxZQU9YO0FBUEQsV0FBWSxZQUFZO0lBQ3BCLDJEQUEyQyxDQUFBO0lBQzNDLDJEQUEyQyxDQUFBO0lBQzNDLG1FQUFtRCxDQUFBO0lBQ25ELG1FQUFtRCxDQUFBO0lBQ25ELGtFQUFrRCxDQUFBO0lBQ2xELGtFQUFrRCxDQUFBO0FBQ3RELENBQUMsRUFQVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU92QjtBQW9CRDtJQUtJLGtCQUFtQixJQUFZLEVBQVMsS0FBYSxFQUFTLEtBQWEsRUFDeEQsSUFBa0IsRUFBUyxVQUE4QjtRQUR6RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDeEQsU0FBSSxHQUFKLElBQUksQ0FBYztRQUFTLGVBQVUsR0FBVixVQUFVLENBQW9CO1FBQ3hFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSwyQkFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDbEMsV0FBVyxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUM7SUFDTixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlks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NkJBQVksRUFBMkIsa0NBQWU7WUFDeEQsd0JBQVUsRUFBeUIsOEJBQWE7WUFDN0MsOEJBQWE7T0FOdkMsZUFBZSxDQTZRM0I7SUFBRCxzQkFBQztDQUFBLEFBN1FELElBNlFDO0FBN1FZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tICcuL2J1ZGdldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2hlY2tib3hTZXJ2aWNlLCBDaGVja21hcmssIERheSwgSGFiYmFqZXRDaGVja2JveCB9IGZyb20gJy4vY2hlY2tib3guc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSwgSW1hZ2VTdGF0ZSB9IGZyb20gJy4vaW1hZ2VzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTYXZpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zYXZpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFRhYlNlcnZpY2UgfSBmcm9tICcuL3RhYi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBlbnVtIEJ1dHRvbkltYWdlcyB7XHJcbiAgICBQb3NpdGl2ZSA9ICd+L2ltYWdlcy9jaGVja2JveGVzLzFmYWxzZS5wbmcnLFxyXG4gICAgTmVnYXRpdmUgPSAnfi9pbWFnZXMvY2hlY2tib3hlcy8yZmFsc2UucG5nJyxcclxuICAgIFBvc2l0aXZlU2VsZWN0ZWQgPSAnfi9pbWFnZXMvY2hlY2tib3hlcy8xZmFsc2UucG5nJyxcclxuICAgIE5lZ2F0aXZlU2VsZWN0ZWQgPSAnfi9pbWFnZXMvY2hlY2tib3hlcy8yZmFsc2UucG5nJyxcclxuICAgIFBvc2l0aXZlSWdub3JlZCA9ICd+L2ltYWdlcy9jaGVja2JveGVzLzBmYWxzZS5wbmcnLFxyXG4gICAgTmVnYXRpdmVJZ25vcmVkID0gJ34vaW1hZ2VzL2NoZWNrYm94ZXMvMGZhbHNlLnBuZycsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFiYmFqZXRJbmZvICB7XHJcbiAgICBleHBlY3RlZFBheW91dDogc3RyaW5nO1xyXG4gICAgc3RyZWFrOiBudW1iZXI7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgZmFjdG9yOiBudW1iZXI7XHJcbiAgICBzbGFjazogbnVtYmVyO1xyXG4gICAgYmVzdDogbnVtYmVyO1xyXG4gICAgbnVtU3VjY2Vzc2VzOiBudW1iZXI7XHJcbiAgICBudW1GYWlsdXJlczogbnVtYmVyO1xyXG4gICAgZXhwZWN0ZWRQYXlvdXRVcGRhdGVDYWxsYmFjaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFiYmFqZXRCdXR0b25zIHtcclxuICAgIHBvc2l0aXZlU3JjOiBzdHJpbmc7XHJcbiAgICBuZWdhdGl2ZVNyYzogc3RyaW5nO1xyXG4gICAgbG9ja2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXQge1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IEltYWdlU3RhdGU7XHJcbiAgICBwdWJsaWMgYnV0dG9uczogSGFiYmFqZXRCdXR0b25zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBzdGF0ZTogbnVtYmVyLCBwdWJsaWMgY29sb3I6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBpbmZvOiBIYWJiYWpldEluZm8sIHB1YmxpYyBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10pIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlU3RhdGUoc3RhdGUsIGNvbG9yKTtcclxuICAgICAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAgKyAnJztcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aXZlU3JjOiBCdXR0b25JbWFnZXMuUG9zaXRpdmUsXHJcbiAgICAgICAgICAgIG5lZ2F0aXZlU3JjOiBCdXR0b25JbWFnZXMuTmVnYXRpdmUsXHJcbiAgICAgICAgICAgIGxvY2tlZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGFiYmFqZXRTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBoYWJiYWpldExpc3Q6IEhhYmJhamV0W107XHJcbiAgICBwcml2YXRlIG51bURlbGV0ZWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLCBwcml2YXRlIGNoZWNrYm94U2VydmljZTogQ2hlY2tib3hTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0YWJTZXJ2aWNlOiBUYWJTZXJ2aWNlLCBwcml2YXRlIGJ1ZGdldFNlcnZpY2U6IEJ1ZGdldFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNhdmluZ1NlcnZpY2U6IFNhdmluZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5sb2FkSGFiYmFqZXRMaXN0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGFiU2VydmljZS5pbml0aWFsaXNlVGFicyhfLm1hcCh0aGlzLmhhYmJhamV0TGlzdCwgKGhhYmJhamV0OiBIYWJiYWpldCkgPT4gaGFiYmFqZXQuaWQpKTtcclxuICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZUhhYmJhamV0TGlzdCh0aGlzLmhhYmJhamV0TGlzdCk7XHJcbiAgICAgICAgdGhpcy5udW1EZWxldGVkID0gMDtcclxuICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2Uub25QdXJjaGFzZUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBfLmVhY2godGhpcy5oYWJiYWpldExpc3QsIChoYWJiYWpldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLnNldEV4cGVjdGVkUGF5b3V0KGhhYmJhamV0LmluZm8sIGhhYmJhamV0LmNoZWNrYm94ZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYWJiYWpldEV4aXN0cyhpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBfLmZpbmQodGhpcy5oYWJiYWpldExpc3QsIChoYWJiYWpldDogSGFiYmFqZXQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGhhYmJhamV0LmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbWF0Y2ggIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhYmJhamV0TGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0TmFtZShpZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGFiYmFqZXQoaWQpLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICdUbyBSZW1vdmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRJbWFnZShpZDogc3RyaW5nKTogSW1hZ2VTdGF0ZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhhYmJhamV0KGlkKS5pbWFnZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRJbmZvKGlkOiBzdHJpbmcpOiBIYWJiYWpldEluZm8ge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRIYWJiYWpldChpZCkuaW5mbztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXRDb2xvcihpZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGFiYmFqZXQoaWQpLmNvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldENoZWNrYm94ZXMoaWQ6IHN0cmluZyk6IEhhYmJhamV0Q2hlY2tib3hbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhhYmJhamV0KGlkKS5jaGVja2JveGVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldEJ1dHRvbnMoaWQ6IHN0cmluZyk6IEhhYmJhamV0QnV0dG9ucyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhhYmJhamV0KGlkKS5idXR0b25zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBldm9sdmUoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5ldm9sdmUodGhpcy5nZXRIYWJiYWpldChpZCkuaW1hZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZUhhYmJhamV0TGlzdCh0aGlzLmhhYmJhamV0TGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5hY3Rpb24odGhpcy5nZXRIYWJiYWpldChpZCkuaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0Q2hlY2tib3goaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICBjb25zdCBoYWJiYWpldCA9IHRoaXMuZ2V0SGFiYmFqZXQoaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbkltYWdlcyhoYWJiYWpldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDaGVja21hcmsoaWQ6IHN0cmluZywgY2hlY2ttYXJrOiBDaGVja21hcmspOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFiYmFqZXQgPSB0aGlzLmdldEhhYmJhamV0KGlkKTtcclxuICAgICAgICAgICAgaWYgKGhhYmJhamV0LmltYWdlLmFjdGlvbiAhPT0gJ3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVDaGVja2JveCA9IF8uZmluZChoYWJiYWpldC5jaGVja2JveGVzLCAoYzogSGFiYmFqZXRDaGVja2JveCkgPT4gYy5hY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUNoZWNrYm94ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGVja2JveC5jaGVja21hcmsgPSBjaGVja21hcms7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hlY2tib3guY2hlY2ttYXJrID09PSBDaGVja21hcmsuUG9zaXRpdmUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUG9zaXRpdmVUYXAoaGFiYmFqZXQuaW5mbykgOiB0aGlzLm9uTmVnYXRpdmVUYXAoaGFiYmFqZXQuaW5mbywgaGFiYmFqZXQuY2hlY2tib3hlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLnNldEV4cGVjdGVkUGF5b3V0KGhhYmJhamV0LmluZm8sIGhhYmJhamV0LmNoZWNrYm94ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnVkZ2V0SWZOZWNlc3NhcnkoaGFiYmFqZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlSGFiYmFqZXRMaXN0KHRoaXMuaGFiYmFqZXRMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld0hhYmJhamV0KG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlciwgZmFjdG9yOiBudW1iZXIsIHNsYWNrOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IHRoaXMuY2hlY2tib3hTZXJ2aWNlLmdldEN1cnJlbnRXZWVrKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZm86IEhhYmJhamV0SW5mbyA9IHtcclxuICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXQ6ICcnLFxyXG4gICAgICAgICAgICBzdHJlYWs6IDAsXHJcbiAgICAgICAgICAgIGJlc3Q6IDAsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBmYWN0b3IsXHJcbiAgICAgICAgICAgIHNsYWNrLFxyXG4gICAgICAgICAgICBudW1TdWNjZXNzZXM6IDAsXHJcbiAgICAgICAgICAgIG51bUZhaWx1cmVzOiAwLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5zZXRFeHBlY3RlZFBheW91dChpbmZvLCBjaGVja2JveGVzKTtcclxuICAgICAgICBjb25zdCBoYWJiYWpldCA9IG5ldyBIYWJiYWpldChuYW1lLCAwLCBjb2xvciwgaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRCdXR0b25JbWFnZXMoaGFiYmFqZXQpO1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnB1c2goaGFiYmFqZXQpO1xyXG4gICAgICAgIHRoaXMudGFiU2VydmljZS5hZGRIYWJiYWpldFRhYihoYWJiYWpldC5pZCk7XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXdIYWJiYWpldEZyb21TYXZlKG5hbWU6IHN0cmluZywgc3RhdGU6IG51bWJlciwgdmFsdWU6IG51bWJlciwgZmFjdG9yOiBudW1iZXIsIHNsYWNrOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlYWs6IG51bWJlciwgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdLCBzdGFydE9mV2Vlazogc3RyaW5nLCBiZXN0OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1TdWNjZXNzZXM6IG51bWJlciwgbnVtRmFpbHVyZXM6IG51bWJlcikge1xyXG5cclxuICAgICAgICBjb25zdCBpbmZvOiBIYWJiYWpldEluZm8gPSB7XHJcbiAgICAgICAgICAgIHN0cmVhayxcclxuICAgICAgICAgICAgYmVzdCxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGZhY3RvcixcclxuICAgICAgICAgICAgc2xhY2ssXHJcbiAgICAgICAgICAgIGV4cGVjdGVkUGF5b3V0OiAnJyxcclxuICAgICAgICAgICAgbnVtU3VjY2Vzc2VzLFxyXG4gICAgICAgICAgICBudW1GYWlsdXJlcyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgc3RhdGVUb1VzZSA9IHN0YXRlO1xyXG4gICAgICAgIGxldCBjaGVja2JveGVzVG9Vc2U6IEhhYmJhamV0Q2hlY2tib3hbXTtcclxuICAgICAgICBpZiAodGhpcy5jaGVja2JveFNlcnZpY2UuaXNDdXJyZW50V2VlayhzdGFydE9mV2VlaykpIHtcclxuICAgICAgICAgICAgY2hlY2tib3hlc1RvVXNlID0gY2hlY2tib3hlcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBudW1Vbm1hcmtlZCA9IF8uZmlsdGVyKGNoZWNrYm94ZXMsIChjaGVja2JveDogSGFiYmFqZXRDaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrbWFyayA9PT0gQ2hlY2ttYXJrLk5vbmU7XHJcbiAgICAgICAgICAgIH0pLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKG51bVVubWFya2VkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLmFkZFRvQnVkZ2V0V2l0aEhhYmJhamV0KGluZm8sIGNoZWNrYm94ZXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblVuZmluaXNoZWRXZWVrKGluZm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNUb1VzZSA9IHRoaXMuY2hlY2tib3hTZXJ2aWNlLmdldEN1cnJlbnRXZWVrKCk7XHJcbiAgICAgICAgICAgIHN0YXRlVG9Vc2UgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLnNldEV4cGVjdGVkUGF5b3V0KGluZm8sIGNoZWNrYm94ZXNUb1VzZSk7XHJcbiAgICAgICAgY29uc3QgaGFiYmFqZXQgPSBuZXcgSGFiYmFqZXQobmFtZSwgc3RhdGVUb1VzZSwgY29sb3IsIGluZm8sIGNoZWNrYm94ZXNUb1VzZSk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChoYWJiYWpldCk7XHJcbiAgICAgICAgdGhpcy5zZXRCdXR0b25JbWFnZXMoaGFiYmFqZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVCdXR0b25JbWFnZXMoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2V0QnV0dG9uSW1hZ2VzKHRoaXMuZ2V0SGFiYmFqZXQoaWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlSGFiYmFqZXQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICBjb25zdCBoYWJiYWpldEluZGV4ID0gXy5maW5kSW5kZXgodGhpcy5oYWJiYWpldExpc3QsIChoYWJiYWpldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhYmJhamV0LmlkID09PSBpZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0LnNwbGljZShoYWJiYWpldEluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYlNlcnZpY2UucmVtb3ZlSGFiYmFqZXRUYWIoaGFiYmFqZXRJbmRleCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Qb3NpdGl2ZVRhcChpbmZvOiBIYWJiYWpldEluZm8pIHtcclxuICAgICAgICBpbmZvLnN0cmVhaysrO1xyXG4gICAgICAgIGlmIChpbmZvLmJlc3QgPCBpbmZvLnN0cmVhaykge1xyXG4gICAgICAgICAgICBpbmZvLmJlc3QgPSBpbmZvLnN0cmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5mby5udW1TdWNjZXNzZXMrKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25OZWdhdGl2ZVRhcChpbmZvOiBIYWJiYWpldEluZm8sIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSkge1xyXG4gICAgICAgIGNvbnN0IG51bUNyb3NzZXMgPSBfLmNvdW50QnkoY2hlY2tib3hlcywgKGNoZWNrYm94OiBIYWJiYWpldENoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGVja2JveC5jaGVja21hcmsgPT09IENoZWNrbWFyay5OZWdhdGl2ZTtcclxuICAgICAgICB9KS50cnVlIHx8IDA7IFxyXG4gICAgICAgIGlmIChudW1Dcm9zc2VzID4gaW5mby5zbGFjaykge1xyXG4gICAgICAgICAgICBpbmZvLnN0cmVhayA9IDA7XHJcbiAgICAgICAgICAgIGluZm8ubnVtRmFpbHVyZXMrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uUG9zaXRpdmVUYXAoaW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblVuZmluaXNoZWRXZWVrKGluZm86IEhhYmJhamV0SW5mbykge1xyXG4gICAgICAgIGluZm8uc3RyZWFrID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEhhYmJhamV0KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gXy5maW5kKHRoaXMuaGFiYmFqZXRMaXN0LCAoaGFiYmFqZXQ6IEhhYmJhamV0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBoYWJiYWpldC5pZCA9PT0gaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEltYWdlU3RhdGUoaGFiYmFqZXQ6IEhhYmJhamV0KSB7XHJcbiAgICAgICAgaWYgKGhhYmJhamV0ICYmIGhhYmJhamV0LmltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLnJlc2V0KGhhYmJhamV0LmltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVCdWRnZXRJZk5lY2Vzc2FyeShoYWJiYWpldDogSGFiYmFqZXQpIHtcclxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gaGFiYmFqZXQuY2hlY2tib3hlcztcclxuICAgICAgICBpZiAoXy5ldmVyeShjaGVja2JveGVzLCAoYzogSGFiYmFqZXRDaGVja2JveCkgPT4gYy5jaGVja21hcmsgIT09IENoZWNrbWFyay5Ob25lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0SW1hZ2VTdGF0ZShoYWJiYWpldCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5hZGRUb0J1ZGdldFdpdGhIYWJiYWpldChoYWJiYWpldC5pbmZvLCBjaGVja2JveGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRCdXR0b25JbWFnZXMoaGFiYmFqZXQ6IEhhYmJhamV0KSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGhhYmJhamV0LmJ1dHRvbnM7XHJcbiAgICAgICAgbGV0IGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGVja2JveCA9IF8uZmluZChoYWJiYWpldC5jaGVja2JveGVzLCAoYzogSGFiYmFqZXRDaGVja2JveCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjLmFjdGl2ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID4gMCAmJiBoYWJiYWpldC5jaGVja2JveGVzW2FjdGl2ZUluZGV4IC0gMV0uY2hlY2ttYXJrID09PSBDaGVja21hcmsuTm9uZSkge1xyXG4gICAgICAgICAgICBidXR0b25zLmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMucG9zaXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuUG9zaXRpdmVJZ25vcmVkO1xyXG4gICAgICAgICAgICBidXR0b25zLm5lZ2F0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLk5lZ2F0aXZlSWdub3JlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b25zLmxvY2tlZCA9IHNlbGVjdGVkQ2hlY2tib3guY2hlY2ttYXJrICE9PSBDaGVja21hcmsuTm9uZTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRDaGVja2JveC5jaGVja21hcmspIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgQ2hlY2ttYXJrLlBvc2l0aXZlOlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMucG9zaXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuUG9zaXRpdmVTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zLm5lZ2F0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLk5lZ2F0aXZlSWdub3JlZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ2hlY2ttYXJrLk5lZ2F0aXZlOlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMucG9zaXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuUG9zaXRpdmVJZ25vcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMubmVnYXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuTmVnYXRpdmVTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy5wb3NpdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zLm5lZ2F0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLk5lZ2F0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==