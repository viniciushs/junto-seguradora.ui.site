export abstract class BaseModel {

    public id: number;
    public ativo: boolean;

    constructor(id?: number, ativo?: boolean) {
        this.id = id;
        this.ativo = ativo;
    }
}
