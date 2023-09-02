import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private baseUrl = environment.baseUrl;

  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user(){
    return this._user;
  }

  readTareas (){
    const headers = {
      "x-auth-token": this.user.token
    }

    return this.httpClient.get<any>(`${this.baseUrl}/task/read`, {headers})
  }

  constructor(private httpClient: HttpClient) {}
}
