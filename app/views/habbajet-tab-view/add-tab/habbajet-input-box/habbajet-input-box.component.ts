import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { ValidationService } from "../../../../services/validation.service";

@Component({
    selector: "habbajet-input-box",
    templateUrl: "views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.html",
    styleUrls: ["views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.css"]
})

export class HabbajetInputBoxComponent {
    @Input() field: string;
    public inputClass: string;
    public keyboardType: string;
    
    constructor(private validationService: ValidationService) {}

    ngOnInit() {
        this.inputClass = 'invalid';
        this.keyboardType = this.field === 'Name' ? 'email' : 'number';
    }

    public onTextChange(args) {
        const textField = args.object;
        if(textField !== undefined) {
            const isValid = this.validationService.validateInput(this.field, textField.text);
            this.inputClass = isValid ? 'valid' : 'invalid';
        }
    }
}