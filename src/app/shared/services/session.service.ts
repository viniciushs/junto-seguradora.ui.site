import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { AuthToken } from 'src/app/models/auth-token.model';

@Injectable()
export class SessionService {

    constructor(public tokenService: TokenService) {
    }

    public saveAuthToken(authToken: AuthToken) {
        this.tokenService.setLoggedToken(authToken.token);

        const user = this.tokenService.decodeLoggedToken();
        this.tokenService.setLoggedUser(user);
    }

    public deleteAuthToken() {
        this.tokenService.removeLoggedToken();
        this.tokenService.removeLoggedUser();
    }

    public isAuthenticated(): boolean {
        const token = this.tokenService.getLoggedUser();
        return (token != null);
    }

    public logout(): void {
        this.tokenService.logout();
    }

}
