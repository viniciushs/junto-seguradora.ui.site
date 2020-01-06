import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
    transform(text: string) {
        text = text + '';
        let cpf = text.replace(/[^\d]+/g, '');
        if (!cpf) {
            return '';
        }

        while (cpf.length < 11) {
            cpf = '0' + cpf;
        }

        return cpf.substring(0, 3) + '.' +
            cpf.substring(3, 6) + '.' +
            cpf.substring(6, 9) + '-' +
            cpf.substring(9, 11);
    }
}
