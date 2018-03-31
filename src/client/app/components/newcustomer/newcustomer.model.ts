import { FormGroup, FormControl, Validators } from "@angular/forms";

const DEFAULT_MIN_CREDIT = 10000;
const DEFAULT_MAX_CREDIT = 50000;
const INVALID_FORM_CONTROL = 'Invalid Form Control Specified for Custom Validations!';

const creditLimitValidation = (minCredit: number = DEFAULT_MIN_CREDIT, maxCredit: number = DEFAULT_MAX_CREDIT) => {
    return function (formControl: FormControl) {
        if (!formControl) {
            throw new Error(INVALID_FORM_CONTROL);
        }

        let currentValue = formControl.value;
        let validation = currentValue >= minCredit && currentValue <= maxCredit;

        if (validation) {
            return null;
        }

        return {
            creditLimitValidation: true
        };
    };
};

const generateCustomerId = () =>
    Math.floor(Math.random() * (1000000 - 1) + 1);

const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const PHONE_PATTERN = /^\d{5}-\d{5}$/i;

let customerModel: FormGroup = new FormGroup({
    customerId: new FormControl(generateCustomerId()),
    name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    address: new FormControl(''),
    credit: new FormControl(0, [Validators.required, creditLimitValidation()]),
    status: new FormControl(true),
    email: new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(PHONE_PATTERN)]),
    remarks: new FormControl('')
});

export default customerModel;
