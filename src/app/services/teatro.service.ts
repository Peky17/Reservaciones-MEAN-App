import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface TeatroResponse {
  tareas: any[];
}

@Injectable({
  providedIn: 'root',
})
export class TeatroService {
  private baseUrl = environment.baseUrl;

  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }
  constructor(private httpClient: HttpClient) {}

  getAllTeatros(): Observable<TeatroResponse> {
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.httpClient.get<TeatroResponse>(
      `${this.baseUrl}/museos/getAllMuseos`,
      {
        headers,
      }
    );
  }
}
