import { BaseModel } from './base.model';

export class Seguradora extends BaseModel {

    public cnpj: string;
    public nome: string;

    constructor(id?: number, ativo?: boolean, cnpj?: string, nome?: string) {
        super(id, ativo);

        this.cnpj = cnpj;
        this.nome = nome;
    }
}
