import { Component, Input } from '@angular/core';
import * as _ from 'lodash';
import { HabbajetService } from '../../../../services/habbajet.service';
import { ImageService, ImageState } from '../../../../services/images.service';

@Component({
    selector: 'habbajet-image',
    templateUrl: 'views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.html',
    styleUrls: ['views/habbajet-tab-view/habbajet-tab/habbajet-image/habbajet-image.css'],
})

export class HabbajetImageComponent {
    @Input() public habbajetId: string;
    public image: ImageState;

    constructor(private habbajetService: HabbajetService, private imageService: ImageService) {}

    public ngOnInit() {
        this.image = this.habbajetService.getHabbajetImage(this.habbajetId);
        setInterval(() => {
            this.imageService.nextState(this.image);
        }, 200);
    }

    public onImageTap() {
        this.habbajetService.action(this.habbajetId);
    }
}
