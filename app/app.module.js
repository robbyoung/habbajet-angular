"use strict";
/* tslint:disable max-line-length*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var budget_service_1 = require("./services/budget.service");
var checkbox_service_1 = require("./services/checkbox.service");
var dialog_service_1 = require("./services/dialog.service");
var habbajet_service_1 = require("./services/habbajet.service");
var images_service_1 = require("./services/images.service");
var saving_service_1 = require("./services/saving.service");
var tab_service_1 = require("./services/tab.service");
var validation_service_1 = require("./services/validation.service");
var add_tab_component_1 = require("./views/habbajet-tab-view/add-tab/add-tab.component");
var habbajet_color_picker_component_1 = require("./views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.component");
var habbajet_input_box_component_1 = require("./views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.component");
var habbajet_submit_button_component_1 = require("./views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.component");
var budget_tab_component_1 = require("./views/habbajet-tab-view/budget-tab/budget-tab.component");
var money_display_component_1 = require("./views/habbajet-tab-view/budget-tab/money-display/money-display.component");
var new_purchase_component_1 = require("./views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.component");
var old_purchase_component_1 = require("./views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.component");
var empty_tab_component_1 = require("./views/habbajet-tab-view/empty-tab/empty-tab.component");
var habbajet_tab_view_component_1 = require("./views/habbajet-tab-view/habbajet-tab-view.component");
var habbajet_buttons_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.component");
var habbajet_checkbox_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.component");
var habbajet_image_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.component");
var habbajet_info_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.component");
var habbajet_tab_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-tab.component");
var about_purchase_modal_component_1 = require("./views/modal/about-purchase-modal/about-purchase-modal.component");
var delete_purchase_modal_component_1 = require("./views/modal/delete-purchase-modal/delete-purchase-modal.component");
var edit_purchase_modal_component_1 = require("./views/modal/edit-purchase-modal/edit-purchase-modal.component");
var modal_component_1 = require("./views/modal/modal.component");
var new_purchase_modal_component_1 = require("./views/modal/new-purchase-modal/new-purchase-modal.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                habbajet_tab_view_component_1.HabbajetTabViewComponent,
                habbajet_tab_component_1.HabbajetTabComponent,
                budget_tab_component_1.BudgetTabComponent,
                add_tab_component_1.AddTabComponent,
                habbajet_image_component_1.HabbajetImageComponent,
                habbajet_info_component_1.HabbajetInfoComponent,
                habbajet_buttons_component_1.HabbajetButtonsComponent,
                habbajet_checkbox_component_1.HabbajetCheckboxComponent,
                habbajet_color_picker_component_1.HabbajetColorPickerComponent,
                habbajet_input_box_component_1.HabbajetInputBoxComponent,
                habbajet_submit_button_component_1.HabbajetSubmitButtonComponent,
                money_display_component_1.MoneyDisplayComponent,
                new_purchase_component_1.NewPurchaseComponent,
                old_purchase_component_1.OldPurchaseComponent,
                empty_tab_component_1.EmptyTabComponent,
                modal_component_1.ModalComponent,
                new_purchase_modal_component_1.NewPurchaseModalComponent,
                about_purchase_modal_component_1.AboutPurchaseModalComponent,
                delete_purchase_modal_component_1.DeletePurchaseModalComponent,
                edit_purchase_modal_component_1.EditPurchaseModalComponent,
            ],
            providers: [
                habbajet_service_1.HabbajetService,
                budget_service_1.BudgetService,
                images_service_1.ImageService,
                saving_service_1.SavingService,
                checkbox_service_1.CheckboxService,
                validation_service_1.ValidationService,
                tab_service_1.TabService,
                dialog_service_1.DialogService,
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1DQUFtQzs7Ozs7Ozs7QUFFbkMsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUU5RSxpREFBK0M7QUFDL0MsNERBQTBEO0FBQzFELGdFQUE4RDtBQUM5RCw0REFBMEQ7QUFDMUQsZ0VBQThEO0FBQzlELDREQUF5RDtBQUN6RCw0REFBMEQ7QUFDMUQsc0RBQW9EO0FBQ3BELG9FQUFrRTtBQUNsRSx5RkFBc0Y7QUFDdEYsMklBQXVJO0FBQ3ZJLGtJQUE4SDtBQUM5SCw4SUFBMEk7QUFDMUksa0dBQStGO0FBQy9GLHNIQUFtSDtBQUNuSCxtSEFBZ0g7QUFDaEgsbUhBQWdIO0FBQ2hILCtGQUE0RjtBQUM1RixxR0FBaUc7QUFDakcsaUlBQThIO0FBQzlILG9JQUFpSTtBQUNqSSwySEFBd0g7QUFDeEgsd0hBQXFIO0FBQ3JILHdHQUFxRztBQUNyRyxvSEFBZ0g7QUFDaEgsdUhBQW1IO0FBQ25ILGlIQUE2RztBQUM3RyxpRUFBK0Q7QUFDL0QsOEdBQTBHO0FBd0MxRztJQUFBO0lBRUEsQ0FBQztJQUZZLFNBQVM7UUF0Q3JCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWixzREFBd0I7Z0JBQ3hCLDZDQUFvQjtnQkFDcEIseUNBQWtCO2dCQUNsQixtQ0FBZTtnQkFDZixpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIscURBQXdCO2dCQUN4Qix1REFBeUI7Z0JBQ3pCLDhEQUE0QjtnQkFDNUIsd0RBQXlCO2dCQUN6QixnRUFBNkI7Z0JBQzdCLCtDQUFxQjtnQkFDckIsNkNBQW9CO2dCQUNwQiw2Q0FBb0I7Z0JBQ3BCLHVDQUFpQjtnQkFDakIsZ0NBQWM7Z0JBQ2Qsd0RBQXlCO2dCQUN6Qiw0REFBMkI7Z0JBQzNCLDhEQUE0QjtnQkFDNUIsMERBQTBCO2FBQzNCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGtDQUFlO2dCQUNmLDhCQUFhO2dCQUNiLDZCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGtDQUFlO2dCQUNmLHNDQUFpQjtnQkFDakIsd0JBQVU7Z0JBQ1YsOEJBQWE7YUFDZDtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsd0NBQWtCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLFNBQVMsQ0FFckI7SUFBRCxnQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoKi9cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnVkZ2V0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDaGVja2JveFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NoZWNrYm94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kaWFsb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW1hZ2VzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTYXZpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zYXZpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFRhYlNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RhYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEFkZFRhYkNvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9hZGQtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhhYmJhamV0Q29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtY29sb3ItcGlja2VyL2hhYmJhamV0LWNvbG9yLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIYWJiYWpldElucHV0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2hhYmJhamV0LWlucHV0LWJveC9oYWJiYWpldC1pbnB1dC1ib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGFiYmFqZXRTdWJtaXRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtc3VibWl0LWJ1dHRvbi9oYWJiYWpldC1zdWJtaXQtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1ZGdldFRhYkNvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9idWRnZXQtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vbmV5RGlzcGxheUNvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9tb25leS1kaXNwbGF5L21vbmV5LWRpc3BsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmV3UHVyY2hhc2VDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvbmV3LXB1cmNoYXNlL25ldy1wdXJjaGFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPbGRQdXJjaGFzZUNvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9vbGQtcHVyY2hhc2Uvb2xkLXB1cmNoYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtcHR5VGFiQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9lbXB0eS10YWIvZW1wdHktdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhhYmJhamV0VGFiVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGFiYmFqZXRCdXR0b25zQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtYnV0dG9ucy9oYWJiYWpldC1idXR0b25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhhYmJhamV0Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1jaGVja2JveC9oYWJiYWpldC1jaGVja2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIYWJiYWpldEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW1hZ2UvaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGFiYmFqZXRJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW5mby9oYWJiYWpldC1pbmZvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhhYmJhamV0VGFiQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFib3V0UHVyY2hhc2VNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvbW9kYWwvYWJvdXQtcHVyY2hhc2UtbW9kYWwvYWJvdXQtcHVyY2hhc2UtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVsZXRlUHVyY2hhc2VNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvbW9kYWwvZGVsZXRlLXB1cmNoYXNlLW1vZGFsL2RlbGV0ZS1wdXJjaGFzZS1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0UHVyY2hhc2VNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvbW9kYWwvZWRpdC1wdXJjaGFzZS1tb2RhbC9lZGl0LXB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZXdQdXJjaGFzZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9tb2RhbC9uZXctcHVyY2hhc2UtbW9kYWwvbmV3LXB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRUYWJWaWV3Q29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRUYWJDb21wb25lbnQsXHJcbiAgICBCdWRnZXRUYWJDb21wb25lbnQsXHJcbiAgICBBZGRUYWJDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldEltYWdlQ29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRJbmZvQ29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRCdXR0b25zQ29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRDaGVja2JveENvbXBvbmVudCxcclxuICAgIEhhYmJhamV0Q29sb3JQaWNrZXJDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldElucHV0Qm94Q29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRTdWJtaXRCdXR0b25Db21wb25lbnQsXHJcbiAgICBNb25leURpc3BsYXlDb21wb25lbnQsXHJcbiAgICBOZXdQdXJjaGFzZUNvbXBvbmVudCxcclxuICAgIE9sZFB1cmNoYXNlQ29tcG9uZW50LFxyXG4gICAgRW1wdHlUYWJDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIE5ld1B1cmNoYXNlTW9kYWxDb21wb25lbnQsXHJcbiAgICBBYm91dFB1cmNoYXNlTW9kYWxDb21wb25lbnQsXHJcbiAgICBEZWxldGVQdXJjaGFzZU1vZGFsQ29tcG9uZW50LFxyXG4gICAgRWRpdFB1cmNoYXNlTW9kYWxDb21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEhhYmJhamV0U2VydmljZSxcclxuICAgIEJ1ZGdldFNlcnZpY2UsXHJcbiAgICBJbWFnZVNlcnZpY2UsXHJcbiAgICBTYXZpbmdTZXJ2aWNlLFxyXG4gICAgQ2hlY2tib3hTZXJ2aWNlLFxyXG4gICAgVmFsaWRhdGlvblNlcnZpY2UsXHJcbiAgICBUYWJTZXJ2aWNlLFxyXG4gICAgRGlhbG9nU2VydmljZSxcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZV0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuXHJcbn1cclxuIl19