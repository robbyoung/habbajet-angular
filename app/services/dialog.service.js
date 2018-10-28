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
var application = require("application");
var frame = require("ui/frame");
var ModalTypes;
(function (ModalTypes) {
    ModalTypes["None"] = "none";
    ModalTypes["NewPurchase"] = "newPurchase";
    ModalTypes["AboutPurchase"] = "aboutPurchase";
    ModalTypes["EditPurchase"] = "editPurchase";
    ModalTypes["Alert"] = "alert";
    ModalTypes["HabbajetInfo"] = "habbajetInfo";
    ModalTypes["Deletion"] = "deletion";
})(ModalTypes = exports.ModalTypes || (exports.ModalTypes = {}));
var DeletionTypes;
(function (DeletionTypes) {
    DeletionTypes["Habbajet"] = "habbajet";
    DeletionTypes["Purchase"] = "purchase";
})(DeletionTypes = exports.DeletionTypes || (exports.DeletionTypes = {}));
var DialogService = /** @class */ (function () {
    function DialogService() {
        var _this = this;
        var modalFindingInterval = setInterval(function () {
            if (frame.topmost().currentPage && frame.topmost().currentPage.getViewById('modalForeground')) {
                _this.modalForeground = frame.topmost().currentPage.getViewById('modalForeground');
                _this.modalBackground = frame.topmost().currentPage.getViewById('modalBackground');
                _this.modalBackground.backgroundColor = '#757575';
                _this.modalBackground.width = 1000;
                _this.modalBackground.height = 1000;
                _this.modalBackground.on('tap', function () { _this.fadeOut(); });
                clearInterval(modalFindingInterval);
            }
        }, 0);
        this.fadeLock = false;
        this.modalStateObject = { type: ModalTypes.None };
        this.prayToAngular();
    }
    DialogService.prototype.newPurchaseDialog = function () {
        this.modalStateObject.type = ModalTypes.NewPurchase;
        this.fadeIn();
    };
    DialogService.prototype.aboutPurchaseDialog = function (purchase) {
        this.activePurchase = purchase;
        this.modalStateObject.type = ModalTypes.AboutPurchase;
        this.fadeIn();
    };
    DialogService.prototype.deletePurchaseDialog = function () {
        this.typeOfDeletion = DeletionTypes.Purchase;
        this.modalStateObject.type = ModalTypes.Deletion;
    };
    DialogService.prototype.deleteHabbajetDialog = function () {
        this.typeOfDeletion = DeletionTypes.Habbajet;
        this.modalStateObject.type = ModalTypes.Deletion;
    };
    DialogService.prototype.editPurchaseDialog = function () {
        this.modalStateObject.type = ModalTypes.EditPurchase;
    };
    DialogService.prototype.alertDialog = function (title, text, okButtonText) {
        this.alertContents = {
            title: title,
            text: text,
            okButtonText: okButtonText,
        };
        this.modalStateObject.type = ModalTypes.Alert;
        this.fadeIn();
    };
    DialogService.prototype.habbajetInfoDialog = function (habbajetId) {
        this.activeHabbajetId = habbajetId;
        this.modalStateObject.type = ModalTypes.HabbajetInfo;
        this.fadeIn();
    };
    DialogService.prototype.fadeIn = function () {
        var _this = this;
        if (this.fadeLock) {
            return;
        }
        this.fadeLock = true;
        this.setBackButtonCallback();
        this.modalBackground.opacity = 0;
        this.modalForeground.opacity = 0;
        this.modalBackground.visibility = 'visible';
        this.modalForeground.visibility = 'visible';
        var fadeInterval = setInterval(function () {
            _this.modalForeground.opacity += 0.10;
            _this.modalBackground.opacity += 0.05;
            if (_this.modalForeground.opacity >= 1) {
                _this.fadeLock = false;
                clearInterval(fadeInterval);
            }
        }, 1);
    };
    DialogService.prototype.fadeOut = function () {
        var _this = this;
        if (this.fadeLock) {
            return;
        }
        this.fadeLock = true;
        this.removeBackButtonCallback();
        this.modalBackground.opacity = 0.5;
        this.modalForeground.opacity = 1;
        var fadeInterval = setInterval(function () {
            _this.modalForeground.opacity -= 0.10;
            _this.modalBackground.opacity -= 0.05;
            if (_this.modalForeground.opacity <= 0) {
                _this.modalStateObject.type = ModalTypes.None;
                _this.modalBackground.visibility = 'collapse';
                _this.modalForeground.visibility = 'collapse';
                _this.fadeLock = false;
                clearInterval(fadeInterval);
            }
        }, 1);
    };
    DialogService.prototype.setBackButtonCallback = function () {
        var _this = this;
        application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
            args.cancel = true;
            _this.fadeOut();
        });
    };
    DialogService.prototype.removeBackButtonCallback = function () {
        application.android.removeEventListener(application.AndroidApplication.activityBackPressedEvent);
    };
    DialogService.prototype.prayToAngular = function () {
        var _this = this;
        setInterval(function () {
            _this.modalStateObject.type = _this.modalStateObject.type;
        }, 10);
    };
    DialogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;
