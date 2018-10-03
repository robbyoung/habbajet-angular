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
            ],
            providers: [
                habbajet_service_1.HabbajetService,
                budget_service_1.BudgetService,
                images_service_1.ImageService,
                saving_service_1.SavingService,
                checkbox_service_1.CheckboxService,
                validation_service_1.ValidationService,
                tab_service_1.TabService,
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1DQUFtQzs7Ozs7Ozs7QUFFbkMsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUU5RSxpREFBK0M7QUFDL0MsNERBQTBEO0FBQzFELGdFQUE4RDtBQUM5RCxnRUFBOEQ7QUFDOUQsNERBQXlEO0FBQ3pELDREQUEwRDtBQUMxRCxzREFBb0Q7QUFDcEQsb0VBQWtFO0FBQ2xFLHlGQUFzRjtBQUN0RiwySUFBdUk7QUFDdkksa0lBQThIO0FBQzlILDhJQUEwSTtBQUMxSSxrR0FBK0Y7QUFDL0Ysc0hBQW1IO0FBQ25ILG1IQUFnSDtBQUNoSCxtSEFBZ0g7QUFDaEgsK0ZBQTRGO0FBQzVGLHFHQUFpRztBQUNqRyxpSUFBOEg7QUFDOUgsb0lBQWlJO0FBQ2pJLDJIQUF3SDtBQUN4SCx3SEFBcUg7QUFDckgsd0dBQXFHO0FBa0NyRztJQUFBO0lBRUEsQ0FBQztJQUZZLFNBQVM7UUFoQ3JCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWixzREFBd0I7Z0JBQ3hCLDZDQUFvQjtnQkFDcEIseUNBQWtCO2dCQUNsQixtQ0FBZTtnQkFDZixpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIscURBQXdCO2dCQUN4Qix1REFBeUI7Z0JBQ3pCLDhEQUE0QjtnQkFDNUIsd0RBQXlCO2dCQUN6QixnRUFBNkI7Z0JBQzdCLCtDQUFxQjtnQkFDckIsNkNBQW9CO2dCQUNwQiw2Q0FBb0I7Z0JBQ3BCLHVDQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxrQ0FBZTtnQkFDZiw4QkFBYTtnQkFDYiw2QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixrQ0FBZTtnQkFDZixzQ0FBaUI7Z0JBQ2pCLHdCQUFVO2FBQ1g7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxTQUFTLENBRXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aCovXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1ZGdldFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2J1ZGdldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2hlY2tib3hTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jaGVja2JveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9oYWJiYWpldC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbWFnZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IFNhdmluZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NhdmluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFiU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGFiLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWRkVGFiQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9hZGQtdGFiL2FkZC10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGFiYmFqZXRDb2xvclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9oYWJiYWpldC1jb2xvci1waWNrZXIvaGFiYmFqZXQtY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhhYmJhamV0SW5wdXRCb3hDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvaGFiYmFqZXQtaW5wdXQtYm94L2hhYmJhamV0LWlucHV0LWJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIYWJiYWpldFN1Ym1pdEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYWRkLXRhYi9oYWJiYWpldC1zdWJtaXQtYnV0dG9uL2hhYmJhamV0LXN1Ym1pdC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnVkZ2V0VGFiQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL2J1ZGdldC10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9uZXlEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL21vbmV5LWRpc3BsYXkvbW9uZXktZGlzcGxheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZXdQdXJjaGFzZUNvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvYnVkZ2V0LXRhYi9uZXctcHVyY2hhc2UvbmV3LXB1cmNoYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9sZFB1cmNoYXNlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9idWRnZXQtdGFiL29sZC1wdXJjaGFzZS9vbGQtcHVyY2hhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW1wdHlUYWJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2VtcHR5LXRhYi9lbXB0eS10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGFiYmFqZXRUYWJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIYWJiYWpldEJ1dHRvbnNDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1idXR0b25zL2hhYmJhamV0LWJ1dHRvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGFiYmFqZXRDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWNoZWNrYm94L2hhYmJhamV0LWNoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhhYmJhamV0SW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbWFnZS9oYWJiYWpldC1pbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIYWJiYWpldEluZm9Db21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC1pbmZvL2hhYmJhamV0LWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGFiYmFqZXRUYWJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2hhYmJhamV0LXRhYi9oYWJiYWpldC10YWIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldFRhYlZpZXdDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldFRhYkNvbXBvbmVudCxcclxuICAgIEJ1ZGdldFRhYkNvbXBvbmVudCxcclxuICAgIEFkZFRhYkNvbXBvbmVudCxcclxuICAgIEhhYmJhamV0SW1hZ2VDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldEluZm9Db21wb25lbnQsXHJcbiAgICBIYWJiYWpldEJ1dHRvbnNDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldENoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgSGFiYmFqZXRDb2xvclBpY2tlckNvbXBvbmVudCxcclxuICAgIEhhYmJhamV0SW5wdXRCb3hDb21wb25lbnQsXHJcbiAgICBIYWJiYWpldFN1Ym1pdEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIE1vbmV5RGlzcGxheUNvbXBvbmVudCxcclxuICAgIE5ld1B1cmNoYXNlQ29tcG9uZW50LFxyXG4gICAgT2xkUHVyY2hhc2VDb21wb25lbnQsXHJcbiAgICBFbXB0eVRhYkNvbXBvbmVudCxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgSGFiYmFqZXRTZXJ2aWNlLFxyXG4gICAgQnVkZ2V0U2VydmljZSxcclxuICAgIEltYWdlU2VydmljZSxcclxuICAgIFNhdmluZ1NlcnZpY2UsXHJcbiAgICBDaGVja2JveFNlcnZpY2UsXHJcbiAgICBWYWxpZGF0aW9uU2VydmljZSxcclxuICAgIFRhYlNlcnZpY2UsXHJcbiAgXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGVdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59XHJcbiJdfQ==