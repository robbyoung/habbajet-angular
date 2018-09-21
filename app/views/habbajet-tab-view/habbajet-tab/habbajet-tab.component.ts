import { Component, Input } from "@angular/core";
import * as _ from 'lodash';
import { HabbajetService } from "../../../services/habbajet.service";

@Component({
    selector: "habbajet-tab",
    templateUrl: "views/habbajet-tab-view/habbajet-tab/habbajet-tab.html",
    styleUrls: ["views/habbajet-tab-view/habbajet-tab/habbajet-tab.css"]
})

export class HabbajetTabComponent {
    @Input() habbajetId: string;
    public name: string;
    
    constructor(private habbajetService: HabbajetService) {}

    ngOnInit() {
        this.name = this.habbajetService.getHabbajetName(this.habbajetId);
    }
}