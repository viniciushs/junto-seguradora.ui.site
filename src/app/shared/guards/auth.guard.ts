import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private sessionService: SessionService) {
  }

  canActivate() {
    if (this.sessionService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }
}
