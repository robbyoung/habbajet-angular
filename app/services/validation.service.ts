import { Injectable } from "@angular/core";
import * as _ from 'lodash';

@Injectable()
export class ValidationService {

    constructor() {}

    public validateInput(field: string, value: string): boolean {
        return true;
    }
}