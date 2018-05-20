import { Injectable } from "@angular/core";
import * as _ from 'lodash';
import { HabbajetService } from "./habbajet.service";

interface HabbajetSubmission {
    name: string;
    value: number;
    slack: number;
    factor: number;
    color: string;
}

const NAME_ERROR: string = 'Habbajet name is invalid';
const VALUE_ERROR: string = 'Habbajet value is invalid';
const SLACK_ERROR: string = 'Habbajet slack is invalid';
const FACTOR_ERROR: string = 'Habbajet factor is invalid';
const COLOR_ERROR: string = 'Habbajet color is invalid';
const VALID_SUBMISSION: string = 'Habbajet properties are valid';

@Injectable()
export class ValidationService {
    private currentSubmission: HabbajetSubmission;

    constructor(private habbajetService: HabbajetService) {
        this.resetCurrentSubmission();
    }

    public validateInput(field: string, value: string): boolean {
        switch(field) {
            case 'Name': return this.validateName(value);
            case 'Value': return this.validateValue(value);
            case 'Slack': return this.validateSlack(value);
            case 'Factor': return this.validateFactor(value);
            default: return false;
        }
    }

    public validateName(name: string): boolean {
        if(name === undefined || name.length === 0 || name.length > 10) {
            this.currentSubmission.name = undefined;
            return false;
        } else {
            this.currentSubmission.name = name;
            return true;
        }
    }

    public validateValue(valueString: string): boolean {
        const value = _.toNumber(valueString);
        if(!_.isFinite(value) || value <= 0 || value > 10000) {
            this.currentSubmission.value = undefined;
            return false;
        } else {
            this.currentSubmission.value = value;
            return true;
        }
    }

    public validateFactor(factorString: string): boolean {
        const factor = _.toNumber(factorString);
        if(!_.isFinite(factor) || factor <= 1 || factor > 10) {
            this.currentSubmission.factor = undefined;
            return false;
        } else {
            this.currentSubmission.factor = factor;
            return true;
        }
    }

    public validateSlack(slackString: string): boolean {
        const slack = _.toNumber(slackString);
        if(!_.isFinite(slack) || slack < 0 || slack > 6) {
            this.currentSubmission.slack = undefined;
            return false;
        } else {
            this.currentSubmission.slack = slack;
            return true;
        }
    }

    public validateColor(color: string): boolean {
        this.currentSubmission.color = color;
        return true;
    }

    public submit() {
        const result = this.validateSubmission();
        if(result === VALID_SUBMISSION) {
            this.habbajetService.newHabbajet();
            this.resetCurrentSubmission();
        } else {
            alert(result);
        }
    }

    public resetCurrentSubmission() {
        this.currentSubmission = {
            name: undefined,
            value: undefined,
            slack: undefined,
            factor: undefined,
            color: undefined,
        };
    }

    private validateSubmission(): string {
        if (!this.validateName(this.currentSubmission.name)) {
            return NAME_ERROR;
        } else if (!this.validateValue(this.currentSubmission.value + '')) {
            return VALUE_ERROR;
        } else if (!this.validateFactor(this.currentSubmission.factor + '')) {
            return FACTOR_ERROR;
        } else if (!this.validateSlack(this.currentSubmission.slack + '')) {
            return SLACK_ERROR;
        } else if (!this.validateColor(this.currentSubmission.color)) {
            return COLOR_ERROR;
        } else {
            return VALID_SUBMISSION;
        }
            
    }
}