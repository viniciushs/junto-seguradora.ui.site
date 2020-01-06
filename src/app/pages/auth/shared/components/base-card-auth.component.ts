import { OnInit, Output, EventEmitter } from '@angular/core';
import { CardAuthEnum } from '../enums/card-auth.enum';
import { FormGroup } from '@angular/forms';

export abstract class BaseCardAuthComponent implements OnInit {

    @Output() goTo: EventEmitter<number> = new EventEmitter();

    public form: FormGroup;

    public rememberEnum = CardAuthEnum.Remember;
    public loginEnum = CardAuthEnum.Login;
    public registerEnum = CardAuthEnum.Register;

    constructor() { }

    protected abstract createFormGroup(): void;

    protected resetFormGroup(): void {
        this.createFormGroup();
    }

    protected abstract submit(): void;

    public ngOnInit() {
        this.createFormGroup();
    }

    public goToCard(card: number): void {
        this.goTo.emit(card);
    }
}
