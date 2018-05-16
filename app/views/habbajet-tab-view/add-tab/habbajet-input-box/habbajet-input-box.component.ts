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
    
    constructor(private validationService: ValidationService) {}

    ngOnInit(){}
}