import { Injectable } from '@angular/core';

// Otros
import { Observable } from 'rxjs';
import { APIURL } from '../apiUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Modelo
import { Cliente } from '../../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url: string;
  identity;
  token;

  constructor( public _http: HttpClient) {
    this.url = APIURL.url;
  }


  cargarCliente(token: string, cliente: Cliente): Observable<any> {

    let json = JSON.stringify(cliente);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token);

  return this._http.post(this.url + 'clientes', params , {headers: headers});
  }

  getClients(token: string): Observable<any> {

    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
                                    .set('Access-Control-Allow-Origin', '*')
                                    .set('Authorization', token);

    return this._http.get(this.url + 'getClients' , {headers: headers});
  }

  getClient(token: string, codClient): Observable<any> {
      let json = JSON.stringify(codClient);
      let params = 'json=' + json;

      let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
      .set('Authorization', token);

      return this._http.post(this.url + 'getClient' , params , {headers: headers});
  }

  updateClient(token, codClient: number, cliente: Cliente): Observable<any> {
    let json = JSON.stringify(cliente);

    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

    return this._http.post(this.url + 'updateClient' , {params: json, cod: codClient} , {headers: headers});
  }
}

