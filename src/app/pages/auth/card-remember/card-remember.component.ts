import { Component, OnInit } from '@angular/core';
import { BaseCardAuthComponent } from '../shared/components/base-card-auth.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-remember',
  templateUrl: './card-remember.component.html',
  styleUrls: ['./card-remember.component.scss']
})
export class CardRememberComponent extends BaseCardAuthComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) {
    super();
  }

  protected createFormGroup(): void {
    this.form = this.formBuilder.group({
      user: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public submit() {

  }
}
