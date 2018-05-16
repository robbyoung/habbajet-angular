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
            ],
            providers: [
                habbajet_service_1.HabbajetService,
                images_service_1.ImageService,
                saving_service_1.SavingService,
                checkbox_service_1.CheckboxService,
                validation_service_1.ValidationService,
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLGlEQUErQztBQUMvQyxxR0FBaUc7QUFDakcsd0dBQXFHO0FBQ3JHLGtHQUErRjtBQUMvRix5RkFBc0Y7QUFDdEYsMkhBQXdIO0FBQ3hILHdIQUFxSDtBQUNySCxpSUFBOEg7QUFDOUgsb0lBQWlJO0FBQ2pJLDREQUF5RDtBQUN6RCxnRUFBOEQ7QUFDOUQsNERBQTBEO0FBQzFELGdFQUE4RDtBQUM5RCxvRUFBa0U7QUFDbEUsMklBQXVJO0FBQ3ZJLGtJQUE4SDtBQUM5SCw4SUFBMEk7QUE0QjFJO0lBQUE7SUFFQSxDQUFDO0lBRlksU0FBUztRQTFCckIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLHNEQUF3QjtnQkFDeEIsNkNBQW9CO2dCQUNwQix5Q0FBa0I7Z0JBQ2xCLG1DQUFlO2dCQUNmLGlEQUFzQjtnQkFDdEIsK0NBQXFCO2dCQUNyQixxREFBd0I7Z0JBQ3hCLHVEQUF5QjtnQkFDekIsOERBQTRCO2dCQUM1Qix3REFBeUI7Z0JBQ3pCLGdFQUE2QjthQUM5QjtZQUNELFNBQVMsRUFBRTtnQkFDVCxrQ0FBZTtnQkFDZiw2QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixrQ0FBZTtnQkFDZixzQ0FBaUI7YUFDbEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxTQUFTLENBRXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRUYWJWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiLXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0VGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LXRhYi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnVkZ2V0VGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9idWRnZXQtdGFiLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRUYWJDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2FkZC10YWIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0SW1hZ2VDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW1hZ2UvaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0SW5mb0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbmZvL2hhYmJhamV0LWluZm8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0QnV0dG9uc0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1idXR0b25zL2hhYmJhamV0LWJ1dHRvbnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhhYmJhamV0Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtY2hlY2tib3gvaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2ltYWdlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhhYmJhamV0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2hhYmJhamV0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2F2aW5nU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NhdmluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENoZWNrYm94U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2NoZWNrYm94LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtY29sb3ItcGlja2VyL2hhYmJhamV0LWNvbG9yLXBpY2tlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRJbnB1dEJveENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtaW5wdXQtYm94L2hhYmJhamV0LWlucHV0LWJveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSGFiYmFqZXRTdWJtaXRCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2hhYmJhamV0LXN1Ym1pdC1idXR0b24vaGFiYmFqZXQtc3VibWl0LWJ1dHRvbi5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldFRhYlZpZXdDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldFRhYkNvbXBvbmVudCxcclxuICAgIEJ1ZGdldFRhYkNvbXBvbmVudCxcclxuICAgIEFkZFRhYkNvbXBvbmVudCxcclxuICAgIEhhYmJhamV0SW1hZ2VDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldEluZm9Db21wb25lbnQsXHJcbiAgICBIYWJiYWpldEJ1dHRvbnNDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldENoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRDb2xvclBpY2tlckNvbXBvbmVudCxcclxuICAgIEhhYmJhamV0SW5wdXRCb3hDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldFN1Ym1pdEJ1dHRvbkNvbXBvbmVudCxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgSGFiYmFqZXRTZXJ2aWNlLFxyXG4gICAgSW1hZ2VTZXJ2aWNlLFxyXG4gICAgU2F2aW5nU2VydmljZSxcclxuICAgIENoZWNrYm94U2VydmljZSxcclxuICAgIFZhbGlkYXRpb25TZXJ2aWNlLFxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlXSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufVxyXG4iXX0=