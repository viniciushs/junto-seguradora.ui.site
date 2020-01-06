import { AbstractControl, ValidationErrors } from '@angular/forms';

export function ValidateEmail(control: AbstractControl): ValidationErrors | null {
    debugger;
    const email = control.value;
    if (!email) {
        return null;
    }

    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/gi;
    const regexp = new RegExp(pattern);
    const match = regexp.test(email);
    if (!match) {
        return { invalid: true };
    }

    return null;
}
