"use strict";
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
var habbajet_tab_view_component_1 = require("./views/habbajet-tab-view/habbajet-tab-view.component");
var habbajet_tab_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-tab.component");
var budget_tab_component_1 = require("./views/habbajet-tab-view/budget-tab/budget-tab.component");
var add_tab_component_1 = require("./views/habbajet-tab-view/add-tab/add-tab.component");
var habbajet_image_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.component");
var habbajet_info_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.component");
var habbajet_buttons_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.component");
var habbajet_checkbox_component_1 = require("./views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.component");
var images_service_1 = require("./services/images.service");
var habbajet_service_1 = require("./services/habbajet.service");
var saving_service_1 = require("./services/saving.service");
var checkbox_service_1 = require("./services/checkbox.service");
var validation_service_1 = require("./services/validation.service");
var habbajet_color_picker_component_1 = require("./views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.component");
var habbajet_input_box_component_1 = require("./views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.component");
var habbajet_submit_button_component_1 = require("./views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.component");
var tab_service_1 = require("./services/tab.service");
var budget_service_1 = require("./services/budget.service");
var money_display_component_1 = require("./views/habbajet-tab-view/budget-tab/money-display/money-display.component");
var new_purchase_component_1 = require("./views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.component");
var old_purchase_component_1 = require("./views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.component");
var dialog_service_1 = require("./services/dialog.service");
var new_purchase_modal_component_1 = require("./views/modals/new-purchase-modal/new-purchase-modal.component");
var empty_tab_component_1 = require("./views/habbajet-tab-view/empty-tab/empty-tab.component");
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
                new_purchase_modal_component_1.NewPurchaseModalComponent,
                empty_tab_component_1.EmptyTabComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLGlEQUErQztBQUMvQyxxR0FBaUc7QUFDakcsd0dBQXFHO0FBQ3JHLGtHQUErRjtBQUMvRix5RkFBc0Y7QUFDdEYsMkhBQXdIO0FBQ3hILHdIQUFxSDtBQUNySCxpSUFBOEg7QUFDOUgsb0lBQWlJO0FBQ2pJLDREQUF5RDtBQUN6RCxnRUFBOEQ7QUFDOUQsNERBQTBEO0FBQzFELGdFQUE4RDtBQUM5RCxvRUFBa0U7QUFDbEUsMklBQXVJO0FBQ3ZJLGtJQUE4SDtBQUM5SCw4SUFBMEk7QUFDMUksc0RBQW9EO0FBQ3BELDREQUEwRDtBQUMxRCxzSEFBbUg7QUFDbkgsbUhBQWdIO0FBQ2hILG1IQUFnSDtBQUNoSCw0REFBMEQ7QUFDMUQsK0dBQTJHO0FBQzNHLCtGQUE0RjtBQW9DNUY7SUFBQTtJQUVBLENBQUM7SUFGWSxTQUFTO1FBbENyQixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1osc0RBQXdCO2dCQUN4Qiw2Q0FBb0I7Z0JBQ3BCLHlDQUFrQjtnQkFDbEIsbUNBQWU7Z0JBQ2YsaURBQXNCO2dCQUN0QiwrQ0FBcUI7Z0JBQ3JCLHFEQUF3QjtnQkFDeEIsdURBQXlCO2dCQUN6Qiw4REFBNEI7Z0JBQzVCLHdEQUF5QjtnQkFDekIsZ0VBQTZCO2dCQUM3QiwrQ0FBcUI7Z0JBQ3JCLDZDQUFvQjtnQkFDcEIsNkNBQW9CO2dCQUNwQix3REFBeUI7Z0JBQ3pCLHVDQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxrQ0FBZTtnQkFDZiw4QkFBYTtnQkFDYiw2QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixrQ0FBZTtnQkFDZixzQ0FBaUI7Z0JBQ2pCLHdCQUFVO2dCQUNWLDhCQUFhO2FBQ2Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxTQUFTLENBRXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRUYWJWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0VGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LXRhYi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnVkZ2V0VGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9idWRnZXQtdGFiLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRUYWJDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2FkZC10YWIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0SW1hZ2VDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW1hZ2UvaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0SW5mb0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbmZvL2hhYmJhamV0LWluZm8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0QnV0dG9uc0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1idXR0b25zL2hhYmJhamV0LWJ1dHRvbnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtY2hlY2tib3gvaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2ltYWdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2F2aW5nU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NhdmluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENoZWNrYm94U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2NoZWNrYm94LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtY29sb3ItcGlja2VyL2hhYmJhamV0LWNvbG9yLXBpY2tlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRJbnB1dEJveENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtaW5wdXQtYm94L2hhYmJhamV0LWlucHV0LWJveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRTdWJtaXRCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2hhYmJhamV0LXN1Ym1pdC1idXR0b24vaGFiYmFqZXQtc3VibWl0LWJ1dHRvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGFiU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3RhYi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9idWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNb25leURpc3BsYXlDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL21vbmV5LWRpc3BsYXkvbW9uZXktZGlzcGxheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmV3UHVyY2hhc2VDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL25ldy1wdXJjaGFzZS9uZXctcHVyY2hhc2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE9sZFB1cmNoYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9vbGQtcHVyY2hhc2Uvb2xkLXB1cmNoYXNlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTmV3UHVyY2hhc2VNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL21vZGFscy9uZXctcHVyY2hhc2UtbW9kYWwvbmV3LXB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbXB0eVRhYkNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2VtcHR5LXRhYi9lbXB0eS10YWIuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRUYWJWaWV3Q29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRUYWJDb21wb25lbnQsXHJcbiAgICBCdWRnZXRUYWJDb21wb25lbnQsXHJcbiAgICBBZGRUYWJDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldEltYWdlQ29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRJbmZvQ29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRCdXR0b25zQ29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRDaGVja2JveENvbXBvbmVudCxcclxuICAgIEhhYmJhamV0Q29sb3JQaWNrZXJDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldElucHV0Qm94Q29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRTdWJtaXRCdXR0b25Db21wb25lbnQsXHJcbiAgICBNb25leURpc3BsYXlDb21wb25lbnQsXHJcbiAgICBOZXdQdXJjaGFzZUNvbXBvbmVudCxcclxuICAgIE9sZFB1cmNoYXNlQ29tcG9uZW50LFxyXG4gICAgTmV3UHVyY2hhc2VNb2RhbENvbXBvbmVudCxcclxuICAgIEVtcHR5VGFiQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBIYWJiYWpldFNlcnZpY2UsXHJcbiAgICBCdWRnZXRTZXJ2aWNlLFxyXG4gICAgSW1hZ2VTZXJ2aWNlLFxyXG4gICAgU2F2aW5nU2VydmljZSxcclxuICAgIENoZWNrYm94U2VydmljZSxcclxuICAgIFZhbGlkYXRpb25TZXJ2aWNlLFxyXG4gICAgVGFiU2VydmljZSxcclxuICAgIERpYWxvZ1NlcnZpY2UsXHJcbiAgXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGVdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59XHJcbiJdfQ==