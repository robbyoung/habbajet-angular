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
var empty_tab_component_1 = require("./views/habbajet-tab-view/empty-tab/empty-tab.component");
var modal_component_1 = require("./views/modal/modal.component");
var new_purchase_modal_component_1 = require("./views/modal/new-purchase-modal/new-purchase-modal.component");
var about_purchase_modal_component_1 = require("./views/modal/about-purchase-modal/about-purchase-modal.component");
var delete_purchase_modal_component_1 = require("./views/modal/delete-purchase-modal/delete-purchase-modal.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLGlEQUErQztBQUMvQyxxR0FBaUc7QUFDakcsd0dBQXFHO0FBQ3JHLGtHQUErRjtBQUMvRix5RkFBc0Y7QUFDdEYsMkhBQXdIO0FBQ3hILHdIQUFxSDtBQUNySCxpSUFBOEg7QUFDOUgsb0lBQWlJO0FBQ2pJLDREQUF5RDtBQUN6RCxnRUFBOEQ7QUFDOUQsNERBQTBEO0FBQzFELGdFQUE4RDtBQUM5RCxvRUFBa0U7QUFDbEUsMklBQXVJO0FBQ3ZJLGtJQUE4SDtBQUM5SCw4SUFBMEk7QUFDMUksc0RBQW9EO0FBQ3BELDREQUEwRDtBQUMxRCxzSEFBbUg7QUFDbkgsbUhBQWdIO0FBQ2hILG1IQUFnSDtBQUNoSCw0REFBMEQ7QUFDMUQsK0ZBQTRGO0FBQzVGLGlFQUErRDtBQUMvRCw4R0FBMEc7QUFDMUcsb0hBQWdIO0FBQ2hILHVIQUFtSDtBQXVDbkg7SUFBQTtJQUVBLENBQUM7SUFGWSxTQUFTO1FBckNyQixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1osc0RBQXdCO2dCQUN4Qiw2Q0FBb0I7Z0JBQ3BCLHlDQUFrQjtnQkFDbEIsbUNBQWU7Z0JBQ2YsaURBQXNCO2dCQUN0QiwrQ0FBcUI7Z0JBQ3JCLHFEQUF3QjtnQkFDeEIsdURBQXlCO2dCQUN6Qiw4REFBNEI7Z0JBQzVCLHdEQUF5QjtnQkFDekIsZ0VBQTZCO2dCQUM3QiwrQ0FBcUI7Z0JBQ3JCLDZDQUFvQjtnQkFDcEIsNkNBQW9CO2dCQUNwQix1Q0FBaUI7Z0JBQ2pCLGdDQUFjO2dCQUNkLHdEQUF5QjtnQkFDekIsNERBQTJCO2dCQUMzQiw4REFBNEI7YUFDN0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsa0NBQWU7Z0JBQ2YsOEJBQWE7Z0JBQ2IsNkJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2Ysc0NBQWlCO2dCQUNqQix3QkFBVTtnQkFDViw4QkFBYTthQUNkO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csU0FBUyxDQUVyQjtJQUFELGdCQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0VGFiVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC10YWIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJ1ZGdldFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvYnVkZ2V0LXRhYi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWRkVGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9hZGQtdGFiLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldEltYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWltYWdlL2hhYmJhamV0LWltYWdlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldEluZm9Db21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW5mby9oYWJiYWpldC1pbmZvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldEJ1dHRvbnNDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtYnV0dG9ucy9oYWJiYWpldC1idXR0b25zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWNoZWNrYm94L2hhYmJhamV0LWNoZWNrYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9pbWFnZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBIYWJiYWpldFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNhdmluZ1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zYXZpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDaGVja2JveFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jaGVja2JveC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0Q29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2hhYmJhamV0LWNvbG9yLXBpY2tlci9oYWJiYWpldC1jb2xvci1waWNrZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0SW5wdXRCb3hDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2hhYmJhamV0LWlucHV0LWJveC9oYWJiYWpldC1pbnB1dC1ib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0U3VibWl0QnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9oYWJiYWpldC1zdWJtaXQtYnV0dG9uL2hhYmJhamV0LXN1Ym1pdC1idXR0b24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRhYlNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy90YWIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCdWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYnVkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTW9uZXlEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9tb25leS1kaXNwbGF5L21vbmV5LWRpc3BsYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5ld1B1cmNoYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9uZXctcHVyY2hhc2UvbmV3LXB1cmNoYXNlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBPbGRQdXJjaGFzZUNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvb2xkLXB1cmNoYXNlL29sZC1wdXJjaGFzZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVtcHR5VGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvZW1wdHktdGFiL2VtcHR5LXRhYi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9tb2RhbC9tb2RhbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmV3UHVyY2hhc2VNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL21vZGFsL25ldy1wdXJjaGFzZS1tb2RhbC9uZXctcHVyY2hhc2UtbW9kYWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFib3V0UHVyY2hhc2VNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL21vZGFsL2Fib3V0LXB1cmNoYXNlLW1vZGFsL2Fib3V0LXB1cmNoYXNlLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEZWxldGVQdXJjaGFzZU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvbW9kYWwvZGVsZXRlLXB1cmNoYXNlLW1vZGFsL2RlbGV0ZS1wdXJjaGFzZS1tb2RhbC5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldFRhYlZpZXdDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldFRhYkNvbXBvbmVudCxcclxuICAgIEJ1ZGdldFRhYkNvbXBvbmVudCxcclxuICAgIEFkZFRhYkNvbXBvbmVudCxcclxuICAgIEhhYmJhamV0SW1hZ2VDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldEluZm9Db21wb25lbnQsXHJcbiAgICBIYWJiYWpldEJ1dHRvbnNDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldENoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRDb2xvclBpY2tlckNvbXBvbmVudCxcclxuICAgIEhhYmJhamV0SW5wdXRCb3hDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldFN1Ym1pdEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIE1vbmV5RGlzcGxheUNvbXBvbmVudCxcclxuICAgIE5ld1B1cmNoYXNlQ29tcG9uZW50LFxyXG4gICAgT2xkUHVyY2hhc2VDb21wb25lbnQsXHJcbiAgICBFbXB0eVRhYkNvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgTmV3UHVyY2hhc2VNb2RhbENvbXBvbmVudCxcclxuICAgIEFib3V0UHVyY2hhc2VNb2RhbENvbXBvbmVudCxcclxuICAgIERlbGV0ZVB1cmNoYXNlTW9kYWxDb21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEhhYmJhamV0U2VydmljZSxcclxuICAgIEJ1ZGdldFNlcnZpY2UsXHJcbiAgICBJbWFnZVNlcnZpY2UsXHJcbiAgICBTYXZpbmdTZXJ2aWNlLFxyXG4gICAgQ2hlY2tib3hTZXJ2aWNlLFxyXG4gICAgVmFsaWRhdGlvblNlcnZpY2UsXHJcbiAgICBUYWJTZXJ2aWNlLFxyXG4gICAgRGlhbG9nU2VydmljZSxcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZV0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuXHJcbn1cclxuIl19