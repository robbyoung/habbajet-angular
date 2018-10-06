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
var budget_service_1 = require("../../../services/budget.service");
var dialog_service_1 = require("../../../services/dialog.service");
var habbajet_service_1 = require("../../../services/habbajet.service");
var DeletionModalComponent = /** @class */ (function () {
    function DeletionModalComponent(dialogService, budgetService, habbajetService) {
        this.dialogService = dialogService;
        this.budgetService = budgetService;
        this.habbajetService = habbajetService;
        this.deleteType = this.dialogService.typeOfDeletion;
        if (this.deleteType === dialog_service_1.DeletionTypes.Purchase) {
            this.deletionText = 'This will permanently delete the purchase.';
            this.buttonClass = 'button red';
        }
        else {
            this.habbajetId = this.dialogService.activeHabbajetId;
            this.deletionText = 'This will permanently delete the habbajet.';
            this.buttonClass = 'button ' + this.habbajetService.getHabbajetColor(this.habbajetId);
        }
        this.purchase = dialogService.activePurchase;
    }
    DeletionModalComponent.prototype.onConfirmTap = function () {
        if (this.deleteType === dialog_service_1.DeletionTypes.Purchase) {
            this.purchase.cost = '$0.00';
            this.budgetService.correctPurchase(this.purchase.date, '', '0');
        }
        else {
            this.habbajetService.deleteHabbajet(this.habbajetId);
        }
        this.dialogService.fadeOut();
    };
    DeletionModalComponent.prototype.onCancelTap = function () {
        this.dialogService.fadeOut();
    };
    DeletionModalComponent = __decorate([
        core_1.Component({
            selector: 'deletion-modal',
            templateUrl: 'views/modal/deletion-modal/deletion-modal.html',
            styleUrls: ['views/modal/deletion-modal/deletion-modal.css',
                'app.css'],
        }),
        __metadata("design:paramtypes", [dialog_service_1.DialogService, budget_service_1.BudgetService,
            habbajet_service_1.HabbajetService])
    ], DeletionModalComponent);
    return DeletionModalComponent;
}());
exports.DeletionModalComponent = DeletionModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRpb24tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVsZXRpb24tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE4RTtBQUM5RSxtRUFBZ0Y7QUFDaEYsdUVBQXFFO0FBU3JFO0lBT0ksZ0NBQW9CLGFBQTRCLEVBQVUsYUFBNEIsRUFDbEUsZUFBZ0M7UUFEaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNsRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLDhCQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLDRDQUE0QyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO1FBQ3BDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLDRDQUE0QyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFGLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDakQsQ0FBQztJQUVNLDZDQUFZLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyw4QkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLDRDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBakNRLHNCQUFzQjtRQVBsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsZ0RBQWdEO1lBQzdELFNBQVMsRUFBRSxDQUFDLCtDQUErQztnQkFDL0MsU0FBUyxDQUFDO1NBQ3pCLENBQUM7eUNBU3FDLDhCQUFhLEVBQXlCLDhCQUFhO1lBQ2pELGtDQUFlO09BUjNDLHNCQUFzQixDQWtDbEM7SUFBRCw2QkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlLCBQdXJjaGFzZVJvdyB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2J1ZGdldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVsZXRpb25UeXBlcywgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVsZXRpb24tbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tb2RhbC9kZWxldGlvbi1tb2RhbC9kZWxldGlvbi1tb2RhbC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9tb2RhbC9kZWxldGlvbi1tb2RhbC9kZWxldGlvbi1tb2RhbC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgJ2FwcC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxldGlvbk1vZGFsQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBkZWxldGlvblRleHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBidXR0b25DbGFzczogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwdXJjaGFzZTogUHVyY2hhc2VSb3c7XHJcbiAgICBwcml2YXRlIGhhYmJhamV0SWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgZGVsZXRlVHlwZTogRGVsZXRpb25UeXBlcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgYnVkZ2V0U2VydmljZTogQnVkZ2V0U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgaGFiYmFqZXRTZXJ2aWNlOiBIYWJiYWpldFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZVR5cGUgPSB0aGlzLmRpYWxvZ1NlcnZpY2UudHlwZU9mRGVsZXRpb247XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsZXRlVHlwZSA9PT0gRGVsZXRpb25UeXBlcy5QdXJjaGFzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0aW9uVGV4dCA9ICdUaGlzIHdpbGwgcGVybWFuZW50bHkgZGVsZXRlIHRoZSBwdXJjaGFzZS4nO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzID0gJ2J1dHRvbiByZWQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRJZCA9IHRoaXMuZGlhbG9nU2VydmljZS5hY3RpdmVIYWJiYWpldElkO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0aW9uVGV4dCA9ICdUaGlzIHdpbGwgcGVybWFuZW50bHkgZGVsZXRlIHRoZSBoYWJiYWpldC4nO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzID0gJ2J1dHRvbiAnICsgdGhpcy5oYWJiYWpldFNlcnZpY2UuZ2V0SGFiYmFqZXRDb2xvcih0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnB1cmNoYXNlID0gZGlhbG9nU2VydmljZS5hY3RpdmVQdXJjaGFzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Db25maXJtVGFwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlbGV0ZVR5cGUgPT09IERlbGV0aW9uVHlwZXMuUHVyY2hhc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZS5jb3N0ID0gJyQwLjAwJztcclxuICAgICAgICAgICAgdGhpcy5idWRnZXRTZXJ2aWNlLmNvcnJlY3RQdXJjaGFzZSh0aGlzLnB1cmNoYXNlLmRhdGUsICcnLCAnMCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmRlbGV0ZUhhYmJhamV0KHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5mYWRlT3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2FuY2VsVGFwKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5mYWRlT3V0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19