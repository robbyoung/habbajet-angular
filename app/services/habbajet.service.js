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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFiYmFqZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhYmJhamV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsMEJBQTRCO0FBQzVCLG1EQUFpRDtBQUNqRCx1REFBdUY7QUFDdkYsbURBQTREO0FBQzVELG1EQUFpRDtBQUNqRCw2Q0FBMkM7QUFFM0MsSUFBWSxZQU9YO0FBUEQsV0FBWSxZQUFZO0lBQ3BCLDJEQUEyQyxDQUFBO0lBQzNDLDJEQUEyQyxDQUFBO0lBQzNDLG1FQUFtRCxDQUFBO0lBQ25ELG1FQUFtRCxDQUFBO0lBQ25ELGtFQUFrRCxDQUFBO0lBQ2xELGtFQUFrRCxDQUFBO0FBQ3RELENBQUMsRUFQVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU92QjtBQW9CRDtJQUtJLGtCQUFtQixJQUFZLEVBQVMsS0FBYSxFQUFTLEtBQWEsRUFDeEQsSUFBa0IsRUFBUyxVQUE4QjtRQUR6RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDeEQsU0FBSSxHQUFKLElBQUksQ0FBYztRQUFTLGVBQVUsR0FBVixVQUFVLENBQW9CO1FBQ3hFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSwyQkFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxXQUFXLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDbEMsV0FBVyxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUM7SUFDTixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlks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QUNMLENBQUM7SUEzUVEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUt5Qiw2QkFBWSxFQUEyQixrQ0FBZTtZQUN4RCx3QkFBVSxFQUF5Qiw4QkFBYTtZQUM3Qyw4QkFBYTtPQU52QyxlQUFlLENBNFEzQjtJQUFELHNCQUFDO0NBQUEsQUE1UUQsSUE0UUM7QUE1UVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQnVkZ2V0U2VydmljZSB9IGZyb20gJy4vYnVkZ2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDaGVja2JveFNlcnZpY2UsIENoZWNrbWFyaywgRGF5LCBIYWJiYWpldENoZWNrYm94IH0gZnJvbSAnLi9jaGVja2JveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlLCBJbWFnZVN0YXRlIH0gZnJvbSAnLi9pbWFnZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IFNhdmluZ1NlcnZpY2UgfSBmcm9tICcuL3NhdmluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFiU2VydmljZSB9IGZyb20gJy4vdGFiLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGVudW0gQnV0dG9uSW1hZ2VzIHtcclxuICAgIFBvc2l0aXZlID0gJ34vaW1hZ2VzL2NoZWNrYm94ZXMvMWZhbHNlLnBuZycsXHJcbiAgICBOZWdhdGl2ZSA9ICd+L2ltYWdlcy9jaGVja2JveGVzLzJmYWxzZS5wbmcnLFxyXG4gICAgUG9zaXRpdmVTZWxlY3RlZCA9ICd+L2ltYWdlcy9jaGVja2JveGVzLzFmYWxzZS5wbmcnLFxyXG4gICAgTmVnYXRpdmVTZWxlY3RlZCA9ICd+L2ltYWdlcy9jaGVja2JveGVzLzJmYWxzZS5wbmcnLFxyXG4gICAgUG9zaXRpdmVJZ25vcmVkID0gJ34vaW1hZ2VzL2NoZWNrYm94ZXMvMGZhbHNlLnBuZycsXHJcbiAgICBOZWdhdGl2ZUlnbm9yZWQgPSAnfi9pbWFnZXMvY2hlY2tib3hlcy8wZmFsc2UucG5nJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIYWJiYWpldEluZm8gIHtcclxuICAgIGV4cGVjdGVkUGF5b3V0OiBzdHJpbmc7XHJcbiAgICBzdHJlYWs6IG51bWJlcjtcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBmYWN0b3I6IG51bWJlcjtcclxuICAgIHNsYWNrOiBudW1iZXI7XHJcbiAgICBiZXN0OiBudW1iZXI7XHJcbiAgICBudW1TdWNjZXNzZXM6IG51bWJlcjtcclxuICAgIG51bUZhaWx1cmVzOiBudW1iZXI7XHJcbiAgICBleHBlY3RlZFBheW91dFVwZGF0ZUNhbGxiYWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIYWJiYWpldEJ1dHRvbnMge1xyXG4gICAgcG9zaXRpdmVTcmM6IHN0cmluZztcclxuICAgIG5lZ2F0aXZlU3JjOiBzdHJpbmc7XHJcbiAgICBsb2NrZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldCB7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZTogSW1hZ2VTdGF0ZTtcclxuICAgIHB1YmxpYyBidXR0b25zOiBIYWJiYWpldEJ1dHRvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHN0YXRlOiBudW1iZXIsIHB1YmxpYyBjb2xvcjogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGluZm86IEhhYmJhamV0SW5mbywgcHVibGljIGNoZWNrYm94ZXM6IEhhYmJhamV0Q2hlY2tib3hbXSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2VTdGF0ZShzdGF0ZSwgY29sb3IpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpICogMTAwMDAwMCArICcnO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IHtcclxuICAgICAgICAgICAgcG9zaXRpdmVTcmM6IEJ1dHRvbkltYWdlcy5Qb3NpdGl2ZSxcclxuICAgICAgICAgICAgbmVnYXRpdmVTcmM6IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZSxcclxuICAgICAgICAgICAgbG9ja2VkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIYWJiYWpldFNlcnZpY2Uge1xyXG4gICAgcHVibGljIGhhYmJhamV0TGlzdDogSGFiYmFqZXRbXTtcclxuICAgIHByaXZhdGUgbnVtRGVsZXRlZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsIHByaXZhdGUgY2hlY2tib3hTZXJ2aWNlOiBDaGVja2JveFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRhYlNlcnZpY2U6IFRhYlNlcnZpY2UsIHByaXZhdGUgYnVkZ2V0U2VydmljZTogQnVkZ2V0U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgc2F2aW5nU2VydmljZTogU2F2aW5nU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaGFiYmFqZXRMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLmxvYWRIYWJiYWpldExpc3QodGhpcyk7XHJcbiAgICAgICAgdGhpcy50YWJTZXJ2aWNlLmluaXRpYWxpc2VUYWJzKF8ubWFwKHRoaXMuaGFiYmFqZXRMaXN0LCAoaGFiYmFqZXQ6IEhhYmJhamV0KSA9PiBoYWJiYWpldC5pZCkpO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlSGFiYmFqZXRMaXN0KHRoaXMuaGFiYmFqZXRMaXN0KTtcclxuICAgICAgICB0aGlzLm51bURlbGV0ZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5vblB1cmNoYXNlQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIF8uZWFjaCh0aGlzLmhhYmJhamV0TGlzdCwgKGhhYmJhamV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2Uuc2V0RXhwZWN0ZWRQYXlvdXQoaGFiYmFqZXQuaW5mbywgaGFiYmFqZXQuY2hlY2tib3hlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhYmJhamV0RXhpc3RzKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IF8uZmluZCh0aGlzLmhhYmJhamV0TGlzdCwgKGhhYmJhamV0OiBIYWJiYWpldCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaGFiYmFqZXQuaWQgPT09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBtYXRjaCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFiYmFqZXRMaXN0Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGFiYmFqZXROYW1lKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRIYWJiYWpldChpZCkubmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1RvIFJlbW92ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldEltYWdlKGlkOiBzdHJpbmcpOiBJbWFnZVN0YXRlIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGFiYmFqZXQoaWQpLmltYWdlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldEluZm8oaWQ6IHN0cmluZyk6IEhhYmJhamV0SW5mbyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEhhYmJhamV0KGlkKS5pbmZvO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIYWJiYWpldENvbG9yKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRIYWJiYWpldChpZCkuY29sb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0Q2hlY2tib3hlcyhpZDogc3RyaW5nKTogSGFiYmFqZXRDaGVja2JveFtdIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGFiYmFqZXQoaWQpLmNoZWNrYm94ZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhhYmJhamV0QnV0dG9ucyhpZDogc3RyaW5nKTogSGFiYmFqZXRCdXR0b25zIHtcclxuICAgICAgICBpZiAodGhpcy5oYWJiYWpldEV4aXN0cyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGFiYmFqZXQoaWQpLmJ1dHRvbnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2b2x2ZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmV2b2x2ZSh0aGlzLmdldEhhYmJhamV0KGlkKS5pbWFnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nU2VydmljZS5zYXZlSGFiYmFqZXRMaXN0KHRoaXMuaGFiYmFqZXRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmFjdGlvbih0aGlzLmdldEhhYmJhamV0KGlkKS5pbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RDaGVja2JveChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhYmJhamV0ID0gdGhpcy5nZXRIYWJiYWpldChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uSW1hZ2VzKGhhYmJhamV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENoZWNrbWFyayhpZDogc3RyaW5nLCBjaGVja21hcms6IENoZWNrbWFyayk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmhhYmJhamV0RXhpc3RzKGlkKSkge1xyXG4gICAgICAgICAgICBjb25zdCBoYWJiYWpldCA9IHRoaXMuZ2V0SGFiYmFqZXQoaWQpO1xyXG4gICAgICAgICAgICBpZiAoaGFiYmFqZXQuaW1hZ2UuYWN0aW9uICE9PSAndCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUNoZWNrYm94ID0gXy5maW5kKGhhYmJhamV0LmNoZWNrYm94ZXMsIChjOiBIYWJiYWpldENoZWNrYm94KSA9PiBjLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlQ2hlY2tib3ggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoZWNrYm94LmNoZWNrbWFyayA9IGNoZWNrbWFyaztcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGVja2JveC5jaGVja21hcmsgPT09IENoZWNrbWFyay5Qb3NpdGl2ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Qb3NpdGl2ZVRhcChoYWJiYWpldC5pbmZvKSA6IHRoaXMub25OZWdhdGl2ZVRhcChoYWJiYWpldC5pbmZvLCBoYWJiYWpldC5jaGVja2JveGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2Uuc2V0RXhwZWN0ZWRQYXlvdXQoaGFiYmFqZXQuaW5mbywgaGFiYmFqZXQuY2hlY2tib3hlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCdWRnZXRJZk5lY2Vzc2FyeShoYWJiYWpldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZpbmdTZXJ2aWNlLnNhdmVIYWJiYWpldExpc3QodGhpcy5oYWJiYWpldExpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3SGFiYmFqZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBmYWN0b3I6IG51bWJlciwgc2xhY2s6IG51bWJlciwgY29sb3I6IHN0cmluZykge1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gdGhpcy5jaGVja2JveFNlcnZpY2UuZ2V0Q3VycmVudFdlZWsoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5mbzogSGFiYmFqZXRJbmZvID0ge1xyXG4gICAgICAgICAgICBleHBlY3RlZFBheW91dDogJycsXHJcbiAgICAgICAgICAgIHN0cmVhazogMCxcclxuICAgICAgICAgICAgYmVzdDogMCxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGZhY3RvcixcclxuICAgICAgICAgICAgc2xhY2ssXHJcbiAgICAgICAgICAgIG51bVN1Y2Nlc3NlczogMCxcclxuICAgICAgICAgICAgbnVtRmFpbHVyZXM6IDAsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLnNldEV4cGVjdGVkUGF5b3V0KGluZm8sIGNoZWNrYm94ZXMpO1xyXG4gICAgICAgIGNvbnN0IGhhYmJhamV0ID0gbmV3IEhhYmJhamV0KG5hbWUsIDAsIGNvbG9yLCBpbmZvLCBjaGVja2JveGVzKTtcclxuICAgICAgICB0aGlzLnNldEJ1dHRvbkltYWdlcyhoYWJiYWpldCk7XHJcbiAgICAgICAgdGhpcy5oYWJiYWpldExpc3QucHVzaChoYWJiYWpldCk7XHJcbiAgICAgICAgdGhpcy50YWJTZXJ2aWNlLmFkZEhhYmJhamV0VGFiKGhhYmJhamV0LmlkKTtcclxuICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZUhhYmJhamV0TGlzdCh0aGlzLmhhYmJhamV0TGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld0hhYmJhamV0RnJvbVNhdmUobmFtZTogc3RyaW5nLCBzdGF0ZTogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBmYWN0b3I6IG51bWJlciwgc2xhY2s6IG51bWJlciwgY29sb3I6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhazogbnVtYmVyLCBjaGVja2JveGVzOiBIYWJiYWpldENoZWNrYm94W10sIHN0YXJ0T2ZXZWVrOiBzdHJpbmcsIGJlc3Q6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVN1Y2Nlc3NlczogbnVtYmVyLCBudW1GYWlsdXJlczogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZm86IEhhYmJhamV0SW5mbyA9IHtcclxuICAgICAgICAgICAgc3RyZWFrLFxyXG4gICAgICAgICAgICBiZXN0LFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgZmFjdG9yLFxyXG4gICAgICAgICAgICBzbGFjayxcclxuICAgICAgICAgICAgZXhwZWN0ZWRQYXlvdXQ6ICcnLFxyXG4gICAgICAgICAgICBudW1TdWNjZXNzZXMsXHJcbiAgICAgICAgICAgIG51bUZhaWx1cmVzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZVRvVXNlID0gc3RhdGU7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94ZXNUb1VzZTogSGFiYmFqZXRDaGVja2JveFtdO1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrYm94U2VydmljZS5pc0N1cnJlbnRXZWVrKHN0YXJ0T2ZXZWVrKSkge1xyXG4gICAgICAgICAgICBjaGVja2JveGVzVG9Vc2UgPSBjaGVja2JveGVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bVVubWFya2VkID0gXy5maWx0ZXIoY2hlY2tib3hlcywgKGNoZWNrYm94OiBIYWJiYWpldENoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tib3guY2hlY2ttYXJrID09PSBDaGVja21hcmsuTm9uZTtcclxuICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobnVtVW5tYXJrZWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2UuYWRkVG9CdWRnZXRXaXRoSGFiYmFqZXQoaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVW5maW5pc2hlZFdlZWsoaW5mbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hlY2tib3hlc1RvVXNlID0gdGhpcy5jaGVja2JveFNlcnZpY2UuZ2V0Q3VycmVudFdlZWsoKTtcclxuICAgICAgICAgICAgc3RhdGVUb1VzZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2Uuc2V0RXhwZWN0ZWRQYXlvdXQoaW5mbywgY2hlY2tib3hlc1RvVXNlKTtcclxuICAgICAgICBjb25zdCBoYWJiYWpldCA9IG5ldyBIYWJiYWpldChuYW1lLCBzdGF0ZVRvVXNlLCBjb2xvciwgaW5mbywgY2hlY2tib3hlc1RvVXNlKTtcclxuICAgICAgICB0aGlzLmhhYmJhamV0TGlzdC5wdXNoKGhhYmJhamV0KTtcclxuICAgICAgICB0aGlzLnNldEJ1dHRvbkltYWdlcyhoYWJiYWpldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUJ1dHRvbkltYWdlcyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRCdXR0b25JbWFnZXModGhpcy5nZXRIYWJiYWpldChpZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVIYWJiYWpldChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFiYmFqZXRFeGlzdHMoaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhYmJhamV0SW5kZXggPSBfLmZpbmRJbmRleCh0aGlzLmhhYmJhamV0TGlzdCwgKGhhYmJhamV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFiYmFqZXQuaWQgPT09IGlkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldExpc3Quc3BsaWNlKGhhYmJhamV0SW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmluZ1NlcnZpY2Uuc2F2ZUhhYmJhamV0TGlzdCh0aGlzLmhhYmJhamV0TGlzdCk7XHJcbiAgICAgICAgICAgIHRoaXMudGFiU2VydmljZS5yZW1vdmVIYWJiYWpldFRhYihoYWJiYWpldEluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblBvc2l0aXZlVGFwKGluZm86IEhhYmJhamV0SW5mbykge1xyXG4gICAgICAgIGluZm8uc3RyZWFrKys7XHJcbiAgICAgICAgaWYgKGluZm8uYmVzdCA8IGluZm8uc3RyZWFrKSB7XHJcbiAgICAgICAgICAgIGluZm8uYmVzdCA9IGluZm8uc3RyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbmZvLm51bVN1Y2Nlc3NlcysrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk5lZ2F0aXZlVGFwKGluZm86IEhhYmJhamV0SW5mbywgY2hlY2tib3hlczogSGFiYmFqZXRDaGVja2JveFtdKSB7XHJcbiAgICAgICAgY29uc3QgbnVtQ3Jvc3NlcyA9IF8uY291bnRCeShjaGVja2JveGVzLCAoY2hlY2tib3g6IEhhYmJhamV0Q2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrbWFyayA9PT0gQ2hlY2ttYXJrLk5lZ2F0aXZlO1xyXG4gICAgICAgIH0pLnRydWUgfHwgMDtcclxuICAgICAgICBpZiAobnVtQ3Jvc3NlcyA+IGluZm8uc2xhY2spIHtcclxuICAgICAgICAgICAgaW5mby5zdHJlYWsgPSAwO1xyXG4gICAgICAgICAgICBpbmZvLm51bUZhaWx1cmVzKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vblBvc2l0aXZlVGFwKGluZm8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25VbmZpbmlzaGVkV2VlayhpbmZvOiBIYWJiYWpldEluZm8pIHtcclxuICAgICAgICBpbmZvLnN0cmVhayA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRIYWJiYWpldChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLmhhYmJhamV0TGlzdCwgKGhhYmJhamV0OiBIYWJiYWpldCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaGFiYmFqZXQuaWQgPT09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRJbWFnZVN0YXRlKGhhYmJhamV0OiBIYWJiYWpldCkge1xyXG4gICAgICAgIGlmIChoYWJiYWpldCAmJiBoYWJiYWpldC5pbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5yZXNldChoYWJiYWpldC5pbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQnVkZ2V0SWZOZWNlc3NhcnkoaGFiYmFqZXQ6IEhhYmJhamV0KSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGhhYmJhamV0LmNoZWNrYm94ZXM7XHJcbiAgICAgICAgaWYgKF8uZXZlcnkoY2hlY2tib3hlcywgKGM6IEhhYmJhamV0Q2hlY2tib3gpID0+IGMuY2hlY2ttYXJrICE9PSBDaGVja21hcmsuTm9uZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEltYWdlU3RhdGUoaGFiYmFqZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2UuYWRkVG9CdWRnZXRXaXRoSGFiYmFqZXQoaGFiYmFqZXQuaW5mbywgY2hlY2tib3hlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QnV0dG9uSW1hZ2VzKGhhYmJhamV0OiBIYWJiYWpldCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBoYWJiYWpldC5idXR0b25zO1xyXG4gICAgICAgIGxldCBhY3RpdmVJbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2hlY2tib3ggPSBfLmZpbmQoaGFiYmFqZXQuY2hlY2tib3hlcywgKGM6IEhhYmJhamV0Q2hlY2tib3gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYy5hY3RpdmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA+IDAgJiYgaGFiYmFqZXQuY2hlY2tib3hlc1thY3RpdmVJbmRleCAtIDFdLmNoZWNrbWFyayA9PT0gQ2hlY2ttYXJrLk5vbmUpIHtcclxuICAgICAgICAgICAgYnV0dG9ucy5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBidXR0b25zLnBvc2l0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLlBvc2l0aXZlSWdub3JlZDtcclxuICAgICAgICAgICAgYnV0dG9ucy5uZWdhdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZUlnbm9yZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9ucy5sb2NrZWQgPSBzZWxlY3RlZENoZWNrYm94LmNoZWNrbWFyayAhPT0gQ2hlY2ttYXJrLk5vbmU7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkQ2hlY2tib3guY2hlY2ttYXJrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIENoZWNrbWFyay5Qb3NpdGl2ZTpcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zLnBvc2l0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLlBvc2l0aXZlU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy5uZWdhdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZUlnbm9yZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIENoZWNrbWFyay5OZWdhdGl2ZTpcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zLnBvc2l0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLlBvc2l0aXZlSWdub3JlZDtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zLm5lZ2F0aXZlU3JjID0gQnV0dG9uSW1hZ2VzLk5lZ2F0aXZlU2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMucG9zaXRpdmVTcmMgPSBCdXR0b25JbWFnZXMuUG9zaXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy5uZWdhdGl2ZVNyYyA9IEJ1dHRvbkltYWdlcy5OZWdhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=