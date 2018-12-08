import { Injectable } from '@angular/core';

// Otros
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIURL } from '../apiUrl';

// Modelos
import { Articulo } from '../../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url: string;
  identity;
  token;

  constructor( public _http: HttpClient) {
    this.url = APIURL.url;
  }

  crearArticulo( token, articulo: Articulo): Observable<any> {

    let json = JSON.stringify(articulo);
    let params = 'json=' + json;

      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                      .set('Authorization', token);

    return this._http.post(this.url + 'articulos', params , {headers: headers});

  }

  obtenerArticulos( token): Observable<any> {

    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
                                    .set('Access-Control-Allow-Origin', '*')
                                    .set('Authorization', token);

    return this._http.get(this.url + 'obtenerArticulos' , {headers: headers});
  }

  guardarArticulos( token, articulos): Observable<any> {

    let json = JSON.stringify(articulos);
    let params = 'json=' + json;

      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                      .set('Authorization', token);

    return this._http.post(this.url + 'guardarArticulos', params , {headers: headers});
  }

  getArticulo(token, codArticulo): Observable<any> {

    let json = JSON.stringify(codArticulo);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

    return this._http.post(this.url + 'getArticulo' , params , {headers: headers});
  }

  updateArticulo(token, codArticulo: number, articulo: Articulo): Observable<any> {
    let json = JSON.stringify(articulo);

    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

    return this._http.post(this.url + 'updateArticulo' , {params: json, cod: codArticulo} , {headers: headers});
  }

}

