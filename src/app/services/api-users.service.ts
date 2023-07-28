import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  private url = 'https://rickandmortyapi.com/api/character';

  constructor(private _http: HttpClient) {}

  getPersonajes() {
    return this._http.get(this.url);
  }

  getPersonaje(idPersonaje: any){
    return this._http.get(this.url + `/${idPersonaje}`);
  }
}
