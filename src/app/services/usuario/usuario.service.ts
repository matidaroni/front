import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../apiUrl';
import { Usuario } from '../../models/usuario';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl: string;
  identidad: any;
  token: string;

  constructor(
    public _http: HttpClient
  ) {
   this.apiUrl = APIURL.url;
  }

  login( usuario: Usuario, gettoken = null): Observable<any> {

    if ( gettoken === true) {
      usuario.gettoken = 'true';
    }

    let json = JSON.stringify(usuario);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.apiUrl + 'login', params , {headers: headers});
  }

  getIdentidad() {
    let identidad = JSON.parse(localStorage.getItem('identidad'));

    if (identidad !== 'undefined') {
      this.identidad = identidad;
    } else {
      this.identidad = null;
    }

    return this.identidad;
  }

  getToken() {
    let token = localStorage.getItem('token');

    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

}
