import { FormGroup } from '@angular/forms';

export function ValidateEqual(controlName1: string, controlName2: string) {
    return (formGroup: FormGroup) => {
        const control1 = formGroup.controls[controlName1];
        const control2 = formGroup.controls[controlName2];

        const value1 = control1.value as string;
        const value2 = control2.value as string;

        const err1 = control1.errors;
        if (err1) {
            delete err1['notEqual'];
            if (!Object.keys(err1).length) {
                control1.setErrors(null);
            } else {
                control1.setErrors(err1);
            }
        }

        const err2 = control1.errors;
        if (err2) {
            delete err2['notEqual'];
            if (!Object.keys(err2).length) {
                control2.setErrors(null);
            } else {
                control2.setErrors(err2);
            }
        }

        if (value1 && value1.length > 0 &&
            value2 && value2.length > 0) {
            if (value1 !== value2) {
                control1.setErrors({ notEqual: true });
                control2.setErrors({ notEqual: true });
            }
        }
    };
}
