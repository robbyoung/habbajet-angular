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
import { TabService } from "./services/tab.service";
import { BudgetService } from "./services/budget.service";
import { MoneyDisplayComponent } from "./views/habbajet-tab-view/budget-tab/money-display/money-display.component";
import { NewPurchaseComponent } from "./views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.component";
import { OldPurchaseComponent } from "./views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.component";
import { DialogService } from "./services/dialog.service";
import { NewPurchaseModalComponent } from "./views/modals/new-purchase-modal/new-purchase-modal.component";
import { EmptyTabComponent } from "./views/habbajet-tab-view/empty-tab/empty-tab.component";

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
    MoneyDisplayComponent,
    NewPurchaseComponent,
    OldPurchaseComponent,
    NewPurchaseModalComponent,
    EmptyTabComponent,
  ],
  providers: [
    HabbajetService,
    BudgetService,
    ImageService,
    SavingService,
    CheckboxService,
    ValidationService,
    TabService,
    DialogService,
  ],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {

}
