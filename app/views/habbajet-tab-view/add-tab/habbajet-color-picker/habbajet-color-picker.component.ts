import { Component } from '@angular/core';
import * as _ from 'lodash';
import { ValidationService } from '../../../../services/validation.service';

interface ColorBinding {
    name: string;
    class: string;
}

@Component({
    selector: 'habbajet-color-picker',
    templateUrl: 'views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.html',
    styleUrls: ['views/habbajet-tab-view/add-tab/habbajet-color-picker/habbajet-color-picker.css'],
})

export class HabbajetColorPickerComponent {
    public colors: ColorBinding[];

    constructor(private validationService: ValidationService) {}

    public ngOnInit() {
        this.colors = [
            { name: 'red', class: '' },
            { name: 'blue', class: '' },
            { name: 'green', class: '' },
            { name: 'yellow', class: '' },
            { name: 'pink', class: '' },
            { name: 'grey', class: '' },
            { name: 'teal', class: '' },
            { name: 'purple', class: '' },
            { name: 'orange', class: '' },
            { name: 'brown', class: '' },
        ];
        this.onColorTap(0);
    }

    public onColorTap(index: number) {
        if (index < 0 || index >= this.colors.length) {
            return;
        }

        const selectedColor: ColorBinding = this.colors[index];
        this.validationService.validateColor(selectedColor.name);
        _.each(this.colors, (c) => {
            c.class = 'colorChoice ' + c.name +
                (c.name === selectedColor.name ? ' selected' : '');
        });
    }
}
