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
                habbajet_checkbox_component_1.HabbajetCheckboxComponent
            ],
            providers: [
                habbajet_service_1.HabbajetService,
                images_service_1.ImageService,
                saving_service_1.SavingService,
                checkbox_service_1.CheckboxService
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLGlEQUErQztBQUMvQyxxR0FBaUc7QUFDakcsd0dBQXFHO0FBQ3JHLGtHQUErRjtBQUMvRix5RkFBc0Y7QUFDdEYsMkhBQXdIO0FBQ3hILHdIQUFxSDtBQUNySCxpSUFBOEg7QUFDOUgsb0lBQWlJO0FBQ2pJLDREQUF5RDtBQUN6RCxnRUFBOEQ7QUFDOUQsNERBQTBEO0FBQzFELGdFQUE4RDtBQXdCOUQ7SUFBQTtJQUVBLENBQUM7SUFGWSxTQUFTO1FBdEJyQixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1osc0RBQXdCO2dCQUN4Qiw2Q0FBb0I7Z0JBQ3BCLHlDQUFrQjtnQkFDbEIsbUNBQWU7Z0JBQ2YsaURBQXNCO2dCQUN0QiwrQ0FBcUI7Z0JBQ3JCLHFEQUF3QjtnQkFDeEIsdURBQXlCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGtDQUFlO2dCQUNmLDZCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGtDQUFlO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csU0FBUyxDQUVyQjtJQUFELGdCQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIYWJiYWpldFRhYlZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWItdmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhhYmJhamV0VGFiQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LXRhYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJ1ZGdldFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2J1ZGdldC10YWIvYnVkZ2V0LXRhYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2hhYmJhamV0LXRhYi12aWV3L2FkZC10YWIvYWRkLXRhYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhhYmJhamV0SW1hZ2VDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW1hZ2UvaGFiYmFqZXQtaW1hZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIYWJiYWpldEluZm9Db21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtaW5mby9oYWJiYWpldC1pbmZvLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGFiYmFqZXRCdXR0b25zQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaGFiYmFqZXQtdGFiLXZpZXcvaGFiYmFqZXQtdGFiL2hhYmJhamV0LWJ1dHRvbnMvaGFiYmFqZXQtYnV0dG9ucy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhhYmJhamV0Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy9oYWJiYWpldC10YWItdmlldy9oYWJiYWpldC10YWIvaGFiYmFqZXQtY2hlY2tib3gvaGFiYmFqZXQtY2hlY2tib3guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9pbWFnZXMuc2VydmljZVwiO1xuaW1wb3J0IHsgSGFiYmFqZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvaGFiYmFqZXQuc2VydmljZVwiO1xuaW1wb3J0IHsgU2F2aW5nU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NhdmluZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDaGVja2JveFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jaGVja2JveC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBIYWJiYWpldFRhYlZpZXdDb21wb25lbnQsXG4gICAgSGFiYmFqZXRUYWJDb21wb25lbnQsXG4gICAgQnVkZ2V0VGFiQ29tcG9uZW50LFxuICAgIEFkZFRhYkNvbXBvbmVudCxcbiAgICBIYWJiYWpldEltYWdlQ29tcG9uZW50LFxuICAgIEhhYmJhamV0SW5mb0NvbXBvbmVudCxcbiAgICBIYWJiYWpldEJ1dHRvbnNDb21wb25lbnQsXG4gICAgSGFiYmFqZXRDaGVja2JveENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBIYWJiYWpldFNlcnZpY2UsXG4gICAgSW1hZ2VTZXJ2aWNlLFxuICAgIFNhdmluZ1NlcnZpY2UsXG4gICAgQ2hlY2tib3hTZXJ2aWNlXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGVdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG5cbn1cbiJdfQ==