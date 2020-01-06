import { Component, OnInit } from '@angular/core';
import { BaseCardAuthComponent } from '../shared/components/base-card-auth.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatePassword } from 'src/app/shared/validators/password.validator';
import { ValidateEqual } from 'src/app/shared/validators/equal.validator';
import { ValidateUser } from 'src/app/shared/validators/user.validator';
import { AuthUser } from 'src/app/models/auth-user.model';
import { AuthToken } from 'src/app/models/auth-token.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { ValidateEmail } from 'src/app/shared/validators/email.validator';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.scss']
})
export class CardRegisterComponent extends BaseCardAuthComponent implements OnInit {

  public get name() { return this.form.get('name'); }

  public get email() { return this.form.get('email'); }

  public get password() { return this.form.get('password'); }

  constructor(
    private router: Router,
    public authService: AuthService,
    public alertService: AlertService,
    public sessionService: SessionService,
    public tokenService: TokenService,
    public formBuilder: FormBuilder) {
    super();
  }

  protected createFormGroup(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirmation: [null],
    }, {
        validators: [
          ValidatePassword('password'),
          ValidateEqual('password', 'confirmation')
        ]
      });
  }

  public submit() {
    if (this.form.invalid) {
      this.alertService.error('Formulário inválido.');
      return;
    }

    const data: AuthUser = new AuthUser(
      this.email.value,
      this.password.value,
      this.name.value
    );

    this.authService
      .register(data)
      .subscribe((resp: AuthToken) => {

        const hasToken = resp && resp.token;
        if (hasToken) {
          this.sessionService.saveAuthToken(resp);
          this.router.navigateByUrl('home');
        } else {
          this.router.navigateByUrl('auth/login');
        }

      });
  }
}
