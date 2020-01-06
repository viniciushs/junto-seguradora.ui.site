import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthUser } from '../models/auth-user.model';

@Injectable()
export class AuthService {

    constructor(protected http: HttpClient) {
    }

    public get url() {
        return environment.authEndpoint;
    }

    public login(data: AuthUser) {
        return this.http.post(`${this.url}/login/`, data);
    }

    public logout() {
        debugger;
        return this.http.get(`${this.url}/logout/`);
    }

    public register(data: AuthUser) {
        return this.http.post(`${this.url}/register/`, data);
    }
}
