import { Component, OnInit } from '@angular/core';
import { BaseCardAuthComponent } from '../shared/components/base-card-auth.component';
import { FormBuilder, Validators } from '@angular/forms';
import { SessionService } from 'src/app/shared/services/session.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthToken } from 'src/app/models/auth-token.model';
import { TokenService } from 'src/app/shared/services/token.service';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/auth-user.model';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss']
})
export class CardLoginComponent extends BaseCardAuthComponent implements OnInit {

  public showPassword = false;

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
      email: [null, [Validators.required, Validators.maxLength(128)]],
      password: [null, [Validators.required, Validators.maxLength(32)]]
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      this.alertService.error('Formulário inválido.');
      return;
    }

    const data: AuthUser = new AuthUser(
      this.email.value,
      this.password.value
    );

    this.authService
      .login(data)
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
