import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseService {
  public endpoint: string;
  public modelName: string;
  public model: any;

  constructor(protected http: HttpClient) {
    this.endpoint = environment.apiEndpoint;
  }

  protected createHeader(): HttpHeaders {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers;
  }

  get(queryString?: string, includes?: string) {
    let fullQueryString = '';
    if (includes && includes.length > 0) {
      fullQueryString = includes;
    }

    if (queryString && queryString.length > 0) {
      if (fullQueryString && fullQueryString.length > 0) {
        fullQueryString += '&';
      }

      fullQueryString += queryString;
    }

    let url = this.endpoint + '/' + this.modelName;
    if (fullQueryString && fullQueryString.length > 0) {
      url = url + '?' + fullQueryString;
    }

    return this.http.get(url, { headers: this.createHeader() });
  }

  getById(id: number) {
    const url = this.endpoint + '/' + this.modelName + '/' + id;
    return this.http.get(url, { headers: this.createHeader() });
  }

  save(model: any) {
    const isEditMode = model && model.id > 0;
    return isEditMode ? this.edit(model) : this.add(model);
  }

  add(model: any) {
    const url = this.endpoint + '/' + this.modelName;
    return this.http.post(url, model, { headers: this.createHeader() });
  }

  edit(model: any) {
    const url = this.endpoint + '/' + this.modelName + '/' + model.id;
    return this.http.put(url, model, { headers: this.createHeader() });
  }

  delete(id: number) {
    const url = this.endpoint + '/' + this.modelName + '/' + id;
    return this.http.delete(url, { headers: this.createHeader() });
  }
}
