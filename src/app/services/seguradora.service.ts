
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { SessionService } from '../shared/services/session.service';

@Injectable()
export class SeguradoraService extends BaseService {

    serviceName = 'seguradora';

    constructor(
        protected http: HttpClient,
        protected sessionService: SessionService) {
        super(http, sessionService);
    }
}
