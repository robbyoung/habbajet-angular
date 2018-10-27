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
            this.title = 'Delete Purchase';
            this.deletionText = 'This will permanently delete the purchase.';
            this.buttonClass = 'button red';
            this.headingClass = 'heading';
        }
        else {
            this.title = 'Delete Habbajet';
            this.habbajetId = this.dialogService.activeHabbajetId;
            this.deletionText = 'This will permanently delete the habbajet.';
            var color = this.habbajetService.getHabbajetColor(this.habbajetId);
            this.buttonClass = 'button ' + color;
            this.headingClass = 'heading ' + color;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRpb24tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVsZXRpb24tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE4RTtBQUM5RSxtRUFBZ0Y7QUFDaEYsdUVBQXFFO0FBU3JFO0lBU0ksZ0NBQW9CLGFBQTRCLEVBQVUsYUFBNEIsRUFDbEUsZUFBZ0M7UUFEaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNsRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLDhCQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsNENBQTRDLENBQUM7WUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7WUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyw0Q0FBNEMsQ0FBQztZQUNqRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzNDLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDakQsQ0FBQztJQUVNLDZDQUFZLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyw4QkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLDRDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBeENRLHNCQUFzQjtRQVBsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsZ0RBQWdEO1lBQzdELFNBQVMsRUFBRSxDQUFDLCtDQUErQztnQkFDL0MsU0FBUyxDQUFDO1NBQ3pCLENBQUM7eUNBV3FDLDhCQUFhLEVBQXlCLDhCQUFhO1lBQ2pELGtDQUFlO09BVjNDLHNCQUFzQixDQXlDbEM7SUFBRCw2QkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlLCBQdXJjaGFzZVJvdyB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2J1ZGdldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVsZXRpb25UeXBlcywgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGVsZXRpb24tbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9tb2RhbC9kZWxldGlvbi1tb2RhbC9kZWxldGlvbi1tb2RhbC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyd2aWV3cy9tb2RhbC9kZWxldGlvbi1tb2RhbC9kZWxldGlvbi1tb2RhbC5jc3MnLFxyXG4gICAgICAgICAgICAgICAgJ2FwcC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxldGlvbk1vZGFsQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGRlbGV0aW9uVGV4dDogc3RyaW5nO1xyXG4gICAgcHVibGljIGJ1dHRvbkNsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaGVhZGluZ0NsYXNzOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHB1cmNoYXNlOiBQdXJjaGFzZVJvdztcclxuICAgIHByaXZhdGUgaGFiYmFqZXRJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBkZWxldGVUeXBlOiBEZWxldGlvblR5cGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBidWRnZXRTZXJ2aWNlOiBCdWRnZXRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBoYWJiYWpldFNlcnZpY2U6IEhhYmJhamV0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlVHlwZSA9IHRoaXMuZGlhbG9nU2VydmljZS50eXBlT2ZEZWxldGlvbjtcclxuICAgICAgICBpZiAodGhpcy5kZWxldGVUeXBlID09PSBEZWxldGlvblR5cGVzLlB1cmNoYXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSAnRGVsZXRlIFB1cmNoYXNlJztcclxuICAgICAgICAgICAgdGhpcy5kZWxldGlvblRleHQgPSAnVGhpcyB3aWxsIHBlcm1hbmVudGx5IGRlbGV0ZSB0aGUgcHVyY2hhc2UuJztcclxuICAgICAgICAgICAgdGhpcy5idXR0b25DbGFzcyA9ICdidXR0b24gcmVkJztcclxuICAgICAgICAgICAgdGhpcy5oZWFkaW5nQ2xhc3MgPSAnaGVhZGluZyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9ICdEZWxldGUgSGFiYmFqZXQnO1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0SWQgPSB0aGlzLmRpYWxvZ1NlcnZpY2UuYWN0aXZlSGFiYmFqZXRJZDtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGlvblRleHQgPSAnVGhpcyB3aWxsIHBlcm1hbmVudGx5IGRlbGV0ZSB0aGUgaGFiYmFqZXQuJztcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmhhYmJhamV0U2VydmljZS5nZXRIYWJiYWpldENvbG9yKHRoaXMuaGFiYmFqZXRJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xhc3MgPSAnYnV0dG9uICcgKyBjb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5oZWFkaW5nQ2xhc3MgPSAnaGVhZGluZyAnICsgY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVyY2hhc2UgPSBkaWFsb2dTZXJ2aWNlLmFjdGl2ZVB1cmNoYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNvbmZpcm1UYXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsZXRlVHlwZSA9PT0gRGVsZXRpb25UeXBlcy5QdXJjaGFzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlLmNvc3QgPSAnJDAuMDAnO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZGdldFNlcnZpY2UuY29ycmVjdFB1cmNoYXNlKHRoaXMucHVyY2hhc2UuZGF0ZSwgJycsICcwJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYWJiYWpldFNlcnZpY2UuZGVsZXRlSGFiYmFqZXQodGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmZhZGVPdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DYW5jZWxUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmZhZGVPdXQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=