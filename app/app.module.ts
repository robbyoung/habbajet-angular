/* tslint:disable max-line-length*/

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppComponent } from './app.component';
import { BudgetService } from './services/budget.service';
import { CheckboxService } from './services/checkbox.service';
import { DialogService } from './services/dialog.service';
import { HabbajetService } from './services/habbajet.service';
import { ImageService } from './services/images.service';
import { SavingService } from './services/saving.service';
import { TabService } from './services/tab.service';
import { ValidationService } from './services/validation.service';
import { AddTabComponent } from './views/habbajet-tab-view/add-tab/add-tab.component';
import { HabbajetColorPickerComponent } from './views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.component';
import { HabbajetInputBoxComponent } from './views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.component';
import { HabbajetSubmitButtonComponent } from './views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.component';
import { BudgetTabComponent } from './views/habbajet-tab-view/budget-tab/budget-tab.component';
import { MoneyDisplayComponent } from './views/habbajet-tab-view/budget-tab/money-display/money-display.component';
import { NewPurchaseComponent } from './views/habbajet-tab-view/budget-tab/new-purchase/new-purchase.component';
import { OldPurchaseComponent } from './views/habbajet-tab-view/budget-tab/old-purchase/old-purchase.component';
import { EmptyTabComponent } from './views/habbajet-tab-view/empty-tab/empty-tab.component';
import { HabbajetTabViewComponent } from './views/habbajet-tab-view/habbajet-tab-view.component';
import { HabbajetButtonsComponent } from './views/habbajet-tab-view/habbajet-tab/habbajet-buttons/habbajet-buttons.component';
import { HabbajetCheckboxComponent } from './views/habbajet-tab-view/habbajet-tab/habbajet-checkbox/habbajet-checkbox.component';
import { HabbajetImageComponent } from './views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.component';
import { HabbajetInfoComponent } from './views/habbajet-tab-view/habbajet-tab/habbajet-info/habbajet-info.component';
import { HabbajetTabComponent } from './views/habbajet-tab-view/habbajet-tab/habbajet-tab.component';
import { AboutPurchaseModalComponent } from './views/modal/about-purchase-modal/about-purchase-modal.component';
import { AlertModalComponent } from './views/modal/alert-modal/alert-modal.component';
import { DeletePurchaseModalComponent } from './views/modal/delete-purchase-modal/delete-purchase-modal.component';
import { EditPurchaseModalComponent } from './views/modal/edit-purchase-modal/edit-purchase-modal.component';
import { HabbajetInfoModalComponent } from './views/modal/habbajet-info-modal/habbajet-info-modal.component';
import { ModalComponent } from './views/modal/modal.component';
import { NewPurchaseModalComponent } from './views/modal/new-purchase-modal/new-purchase-modal.component';

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
    EmptyTabComponent,
    ModalComponent,
    NewPurchaseModalComponent,
    AboutPurchaseModalComponent,
    DeletePurchaseModalComponent,
    EditPurchaseModalComponent,
    AlertModalComponent,
    HabbajetInfoModalComponent,
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
