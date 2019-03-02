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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRpb24tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVsZXRpb24tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE4RTtBQUM5RSxtRUFBZ0Y7QUFDaEYsdUVBQXFFO0FBU3JFO0lBU0ksZ0NBQW9CLGFBQTRCLEVBQVUsYUFBNEIsRUFDbEUsZUFBZ0M7UUFEaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNsRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssOEJBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLDRDQUE0QyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBQ2pDO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLDRDQUE0QyxDQUFDO1lBQ2pFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDMUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDakQsQ0FBQztJQUVNLDZDQUFZLEdBQW5CO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLDhCQUFhLENBQUMsUUFBUSxFQUFFO1lBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sNENBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUF2Q1Esc0JBQXNCO1FBUGxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxnREFBZ0Q7WUFDN0QsU0FBUyxFQUFFLENBQUMsK0NBQStDO2dCQUMvQyxTQUFTLENBQUM7U0FDekIsQ0FBQzt5Q0FXcUMsOEJBQWEsRUFBeUIsOEJBQWE7WUFDakQsa0NBQWU7T0FWM0Msc0JBQXNCLENBd0NsQztJQUFELDZCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UsIFB1cmNoYXNlUm93IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWxldGlvblR5cGVzLCBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkZWxldGlvbi1tb2RhbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21vZGFsL2RlbGV0aW9uLW1vZGFsL2RlbGV0aW9uLW1vZGFsLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3ZpZXdzL21vZGFsL2RlbGV0aW9uLW1vZGFsL2RlbGV0aW9uLW1vZGFsLmNzcycsXHJcbiAgICAgICAgICAgICAgICAnYXBwLmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERlbGV0aW9uTW9kYWxDb21wb25lbnQge1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGVsZXRpb25UZXh0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYnV0dG9uQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBoZWFkaW5nQ2xhc3M6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHVyY2hhc2U6IFB1cmNoYXNlUm93O1xyXG4gICAgcHJpdmF0ZSBoYWJiYWpldElkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGRlbGV0ZVR5cGU6IERlbGV0aW9uVHlwZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIGJ1ZGdldFNlcnZpY2U6IEJ1ZGdldFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGhhYmJhamV0U2VydmljZTogSGFiYmFqZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVUeXBlID0gdGhpcy5kaWFsb2dTZXJ2aWNlLnR5cGVPZkRlbGV0aW9uO1xyXG4gICAgICAgIGlmICh0aGlzLmRlbGV0ZVR5cGUgPT09IERlbGV0aW9uVHlwZXMuUHVyY2hhc2UpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9ICdEZWxldGUgUHVyY2hhc2UnO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0aW9uVGV4dCA9ICdUaGlzIHdpbGwgcGVybWFuZW50bHkgZGVsZXRlIHRoZSBwdXJjaGFzZS4nO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzID0gJ2J1dHRvbiByZWQnO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRpbmdDbGFzcyA9ICdoZWFkaW5nJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gJ0RlbGV0ZSBIYWJiYWpldCc7XHJcbiAgICAgICAgICAgIHRoaXMuaGFiYmFqZXRJZCA9IHRoaXMuZGlhbG9nU2VydmljZS5hY3RpdmVIYWJiYWpldElkO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0aW9uVGV4dCA9ICdUaGlzIHdpbGwgcGVybWFuZW50bHkgZGVsZXRlIHRoZSBoYWJiYWpldC4nO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuaGFiYmFqZXRTZXJ2aWNlLmdldEhhYmJhamV0Q29sb3IodGhpcy5oYWJiYWpldElkKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25DbGFzcyA9ICdidXR0b24gJyArIGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRpbmdDbGFzcyA9ICdoZWFkaW5nICcgKyBjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wdXJjaGFzZSA9IGRpYWxvZ1NlcnZpY2UuYWN0aXZlUHVyY2hhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ29uZmlybVRhcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWxldGVUeXBlID09PSBEZWxldGlvblR5cGVzLlB1cmNoYXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVkZ2V0U2VydmljZS5jb3JyZWN0UHVyY2hhc2UodGhpcy5wdXJjaGFzZS5kYXRlLCAnJywgJzAnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhYmJhamV0U2VydmljZS5kZWxldGVIYWJiYWpldCh0aGlzLmhhYmJhamV0SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuZmFkZU91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNhbmNlbFRhcCgpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuZmFkZU91dCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==