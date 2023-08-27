import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private _user: any = {};

  get user() {
    return this._user;
  }

  login(data: any) {
    return this.httpClient
      .post<any>('http://localhost:2450/auth/login', data)
      .pipe(
        tap((res) => {
          if (res.ok) {
            this._user = {
              id: res.id,
              username: res.username,
              token: res.token
            };
          } else {
            this._user = {};
          }
        })
      );
  }
}
