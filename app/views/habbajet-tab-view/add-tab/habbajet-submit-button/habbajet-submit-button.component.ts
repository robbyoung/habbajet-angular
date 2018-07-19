import { Component } from "@angular/core";
import * as _ from 'lodash';
import { ValidationService } from "../../../../services/validation.service";

@Component({
    selector: "habbajet-submit-button",
    templateUrl: "views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.html",
    styleUrls: ["views/habbajet-tab-view/add-tab/habbajet-submit-button/habbajet-submit-button.css",
                "app.css"],
})

export class HabbajetSubmitButtonComponent {
    public buttonColor: { color: string };

    constructor(private validationService: ValidationService) {}

    ngOnInit(){
        this.buttonColor = this.validationService.submitButtonColor;
    }

    public onSubmitTap() {
        this.validationService.submit();
    }
}