import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { AuthUser } from 'src/app/models/auth-user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    public router: Router,
    public authService: AuthService,
    public sessionService: SessionService) {
  }

  ngOnInit() {
  }

  public logout() {
    this.authService.logout()
      .subscribe(() => {
        this.sessionService.logout();
        this.router.navigateByUrl('/auth');
      });
  }
}
