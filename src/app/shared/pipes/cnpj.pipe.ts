import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cnpj' })
export class CnpjPipe implements PipeTransform {
    transform(text: string) {
        text = text + '';
        let cnpj = text.replace(/[^\d]+/g, '');
        if (!cnpj) {
            return '';
        }

        while (cnpj.length < 14) {
            cnpj = '0' + cnpj;
        }

        return cnpj.substring(0, 2) + '.' +
            cnpj.substring(2, 5) + '.' +
            cnpj.substring(5, 8) + '/' +
            cnpj.substring(8, 12) + '-' +
            cnpj.substring(12, 14);
    }
}
