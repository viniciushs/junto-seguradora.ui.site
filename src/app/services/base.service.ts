import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionService } from '../shared/services/session.service';

@Injectable()
export abstract class BaseService {

    protected serviceName: string;

    constructor(
        protected http: HttpClient,
        protected sessionService: SessionService) {
    }

    protected get url() {
        return environment.apiEndpoint + '/' + this.serviceName;
    }

    get() {
        return this.filter();
    }

    getById(id: number) {
        return this.http.get(`${this.url}/${id}`);
    }

    filter(params?: string) {
        if (params) {
            return this.http.get(`${this.url}?${params}`);
        }

        return this.http.get(`${this.url}`);
    }

    save(model: any, id?: number) {
        const url = `${this.url}`;

        if (model.id) {
            return this.http.put(`${this.url}/${model.id}`, model);
        } else {
            return this.http.post(`${this.url}`, model);
        }
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
