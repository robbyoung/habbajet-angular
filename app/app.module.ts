import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { HabbajetTabViewComponent } from "./views/habbajet-tab-view/habbajet-tab-view.component";
import { HabbajetTabComponent } from "./views/habbajet-tab-view/habbajet-tab/habbajet-tab.component";
import { BudgetTabComponent } from "./views/habbajet-tab-view/budget-tab/budget-tab.component";
import { AddTabComponent } from "./views/habbajet-tab-view/add-tab/add-tab.component";
import { HabbajetImageComponent } from "./views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.component";
import { HabbajetInfoComponent } from "./views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.component";
import { HabbajetButtonsComponent } from "./views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.component";
import { HabbajetCheckboxComponent } from "./views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.component";
import { ImageService } from "./services/images.service";
import { HabbajetService } from "./services/habbajet.service";
import { SavingService } from "./services/saving.service";
import { CheckboxService } from "./services/checkbox.service";
import { ValidationService } from "./services/validation.service";
import { HabbajetColorPickerComponent } from "./views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.component";
import { HabbajetInputBoxComponent } from "./views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.component";
import { HabbajetSubmitButtonComponent } from "./views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.component";

@NgModule({
  declarations: [
    AppComponent,
    HabbajetTabViewComponent,
    HabbajetTabComponent,
    BudgetTabComponent,
    AddTabComponent,
    HabbajetImageComponent,
    HabbajetInfoComponent,
    HabbajetButtonsComponent,
    HabbajetCheckboxComponent,
    HabbajetColorPickerComponent,
    HabbajetInputBoxComponent,
    HabbajetSubmitButtonComponent,
  ],
  providers: [
    HabbajetService,
    ImageService,
    SavingService,
    CheckboxService,
    ValidationService,
  ],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {

}
