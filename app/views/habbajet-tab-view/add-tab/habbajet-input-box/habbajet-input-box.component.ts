import { Component, Input } from "@angular/core";
import { ValidationService } from "../../../../services/validation.service";
import * as dialogs from 'tns-core-modules/ui/dialogs/dialogs';

@Component({
    selector: "habbajet-input-box",
    templateUrl: "views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.html",
    styleUrls: ["views/habbajet-tab-view/add-tab/habbajet-input-box/habbajet-input-box.css",
                "app.css"]
})

export class HabbajetInputBoxComponent {
    @Input() field: string;
    public inputClass: string;
    public keyboardType: string;
    public buttonColor: {color: string};
    
    constructor(private validationService: ValidationService) {
        this.buttonColor = this.validationService.submitButtonColor;
    }

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

    public displayInfoDialog() {
        const infoText = this.getInfoText();
        dialogs.alert({
            title: this.field,
            message: infoText,
            okButtonText: 'OK',
        });
    }

    private getInfoText() {
        switch(this.field) {
            case 'Name': return 'This is the title to be displayed alongside the Habbajet';
            case 'Value': return 'This is the maximum payout amount for your Habbajet';
            case 'Factor': return 'This determines how the value is decreased on failure';
            case 'Slack': return 'This determines how many "free" days you get for the Habbajet';
            default: return 'Unknown';
        }
    }
}