import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class LoginApiService {
  userDetails: any = {}
  constructor(private httpClient: HttpClient) {
    this.userDetails = JSON.parse(localStorage.getItem("LoginDetails"));
  }

  get() {
    return this.httpClient.get(environment.baseUrl + '/');
  }
  post(data: any) {
    return this.httpClient.post(environment.baseUrl + '/', data)
  }

}
