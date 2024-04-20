import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

interface CineResponse {
  cines: any[];
}

@Injectable({
  providedIn: 'root',
})
export class CineService {
  private baseUrl = environment.baseUrl;

  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }
  constructor(private httpClient: HttpClient) {}

  getAllCines(): Observable<CineResponse> {
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.httpClient.get<CineResponse>(
      `${this.baseUrl}/cines/getAllCines`,
      {
        headers,
      }
    );
  }
}
