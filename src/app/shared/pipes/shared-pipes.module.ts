import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcerptPipe } from './excerpt.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { CpfPipe } from './cpf.pipe';
import { CnpjPipe } from './cnpj.pipe';

const pipes = [
    CpfPipe,
    CnpjPipe,
    CapitalizePipe,
    ExcerptPipe
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: pipes,
    exports: pipes
})
export class SharedPipesModule { }
