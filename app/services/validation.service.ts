import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BudgetService } from './budget.service';
import { DialogService } from './dialog.service';
import { HabbajetService } from './habbajet.service';

interface HabbajetSubmission {
    name: string;
    value: number;
    slack: number;
    factor: number;
    color: string;
}

const NAME_ERROR: string = 'Habbajet name must be between 1 and 20 characters long.';
const VALUE_ERROR: string = 'Habbajet value must be a number between 1 and 10,000.';
const SLACK_ERROR: string = 'Habbajet slack must be a number between 0 and 6.';
const FACTOR_ERROR: string = 'Habbajet factor must be a number between 1 and 10.';
const COLOR_ERROR: string = 'Habbajet color is invalid';
const VALID_SUBMISSION: string = 'Habbajet properties are valid';

const PURCHASE_NAME_ERROR: string = 'Purchase name is invalid';
const PURCHASE_COST_ERROR: string = 'Purchase cost is invalid';

@Injectable()
export class ValidationService {
    public submitButtonColor: { color: string };
    private currentSubmission: HabbajetSubmission;

    constructor(private habbajetService: HabbajetService, private budgetService: BudgetService,
                private dialogService: DialogService) {
        this.resetCurrentSubmission();
    }

    public validateInput(field: string, value: string): boolean {
        switch (field) {
            case 'Name': return this.validateName(value);
            case 'Value': return this.validateValue(value);
            case 'Slack': return this.validateSlack(value);
            case 'Factor': return this.validateFactor(value);
            default: return false;
        }
    }

    public validateName(name: string): boolean {
        if (name === undefined || name.length === 0 || name.length > 20) {
            this.currentSubmission.name = undefined;
            return false;
        } else {
            this.currentSubmission.name = name;
            return true;
        }
    }

    public validateValue(valueString: string): boolean {
        const value = _.toNumber(valueString);
        if (!_.isFinite(value) || value <= 0 || value > 10000) {
            this.currentSubmission.value = undefined;
            return false;
        } else {
            this.currentSubmission.value = value;
            return true;
        }
    }

    public validateFactor(factorString: string): boolean {
        const factor = _.toNumber(factorString);
        if (!_.isFinite(factor) || factor <= 1 || factor > 10) {
            this.currentSubmission.factor = undefined;
            return false;
        } else {
            this.currentSubmission.factor = factor;
            return true;
        }
    }

    public validateSlack(slackString: string): boolean {
        const slack = _.toNumber(slackString);
        if (!_.isFinite(slack) || slack < 0 || slack > 6) {
            this.currentSubmission.slack = undefined;
            return false;
        } else {
            this.currentSubmission.slack = slack;
            return true;
        }
    }

    public validateColor(color: string): boolean {
        this.currentSubmission.color = color;
        this.submitButtonColor.color = color;
        return true;
    }

    public submit() {
        const result = this.validateSubmission();
        if (result === VALID_SUBMISSION) {
            this.habbajetService.newHabbajet(
                this.currentSubmission.name,
                this.currentSubmission.value,
                this.currentSubmission.factor,
                this.currentSubmission.slack,
                this.currentSubmission.color,
            );
            this.resetCurrentSubmission();
        } else {
            this.dialogService.alertDialog(
                'Invalid Submission',
                result,
                'OK');
        }
    }

    public resetCurrentSubmission() {
        this.submitButtonColor = { color: 'red' };
        this.currentSubmission = {
            name: undefined,
            value: undefined,
            slack: undefined,
            factor: undefined,
            color: undefined,
        };
    }

    public validatePurchaseName(name: string): string {
        if (!name.length || name.length > 20) {
            return PURCHASE_NAME_ERROR;
        }
    }

    public validatePurchaseCost(costString: string, canBeZero: boolean): string {
        const cost = _.toNumber(costString);
        if (!isFinite(cost) || cost < 0 || cost > 9999) {
            return PURCHASE_COST_ERROR;
        } else if (cost === 0 && !canBeZero) {
            return PURCHASE_COST_ERROR;
        }
    }

    public submitPurchase(name: string, cost: string) {
        if (this.validatePurchaseName(name) || this.validatePurchaseCost(cost, false)) {
            throw new Error('Tried to submit an invalid purchase');
        }

        this.budgetService.makePurchase(name, _.toNumber(cost));
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
