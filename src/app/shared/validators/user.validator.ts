import { FormGroup } from '@angular/forms';

export function ValidateUser(userControlName: string) {
    return (formGroup: FormGroup) => {
        const userControl = formGroup.controls[userControlName];
        const userValue = userControl.value as string;

        if (userValue === null) {
            return;
        }

        // User necessita conter mais de 8 caracteres
        if (userValue.length < 8) {
            userControl.setErrors({ minLength: true });
        }

        // User pode conter apenas caracteres alfanumericos
        if (!/^[a-z0-9]+$/i.test(userValue)) {
            userControl.setErrors({ alphanumeric: true });
        }
    };
}
