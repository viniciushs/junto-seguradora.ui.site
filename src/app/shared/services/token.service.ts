import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { AuthToken } from 'src/app/models/auth-token.model';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { AuthUser } from 'src/app/models/auth-user.model';

@Injectable()
export class TokenService {

    public authTokenKey: string;
    public userTokenKey: string;

    constructor(private storageService: StorageService) {
        this.authTokenKey = environment.authTokenStorage;
        this.userTokenKey = environment.userTokenStorage;
    }

    public getLoggedToken(): string {
        return this.storageService.getItem(this.authTokenKey);
    }

    public setLoggedToken(token: string) {
        this.storageService.setItem(this.authTokenKey, token);
    }

    public removeLoggedToken(): void {
        this.storageService.removeItem(this.authTokenKey);
    }

    public getLoggedUser(): AuthUser {
        return this.storageService.getItem(this.userTokenKey);
    }

    public setLoggedUser(user: AuthUser) {
        this.storageService.setItem(this.userTokenKey, user);
    }

    public removeLoggedUser(): void {
        this.storageService.removeItem(this.userTokenKey);
    }

    public decodeLoggedToken(): AuthUser {
        const token = this.getLoggedToken();
        if (tokenNotExpired('', token)) {
            const jwtHelper: JwtHelper = new JwtHelper();
            const user = jwtHelper.decodeToken(token);

            return user;
        } else {
            this.logout();
            return null;
        }
    }

    public logout(): void {
        this.removeLoggedToken();
        this.removeLoggedUser();

        this.storageService.clear();
    }
}
