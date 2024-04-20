import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MuseoResponse {
  tareas: any[];
}

@Injectable({
  providedIn: 'root',
})
export class MuseoService {
  private baseUrl = environment.baseUrl;

  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }
  constructor(private httpClient: HttpClient) {}

  getAllCines(): Observable<MuseoResponse> {
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.httpClient.get<MuseoResponse>(
      `${this.baseUrl}/museos/getAllMuseos`,
      {
        headers,
      }
    );
  }
}
