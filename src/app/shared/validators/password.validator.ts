import { FormGroup } from '@angular/forms';

export function ValidatePassword(passwordControlName: string) {
    return (formGroup: FormGroup) => {
        const passwordControl = formGroup.controls[passwordControlName];
        const passwordValue = passwordControl.value as string;

        if (passwordValue === null) {
            return;
        }

        // Password necessita conter mais de 8 caracteres
        if (passwordValue.length < 8) {
            passwordControl.setErrors({ minLength: true });
        }

        // Password necessita conter pelo menos 1 numeral
        if (!/\d/.test(passwordValue)) {
            passwordControl.setErrors({ minNumber: true });
        }

        // Password não pode conter caracteres repetidos
        for (let i = 0; i < passwordValue.length; i++) {
            for (let j = i + 1; j < passwordValue.length; j++) {
                if (passwordValue[i] === passwordValue[j]) {
                    passwordControl.setErrors({ distinct: true });
                }
            }
        }
    };
}
