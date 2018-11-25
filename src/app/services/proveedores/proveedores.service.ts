import { Injectable } from '@angular/core';

// Otros
import { Observable } from 'rxjs';
import { APIURL } from '../apiUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Modelo
import { Proveedor } from '../../models/proveedor';

@Injectable({
  providedIn: 'root'
})

export class ProveedoresService {

  url: string;
  identity;
  token;

  constructor( public _http: HttpClient) {
    this.url = APIURL.url;
  }

  crearProveedor( token, proveedor: Proveedor): Observable<any> {

    let json = JSON.stringify(proveedor);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token);

  return this._http.post(this.url + 'proveedores', params , {headers: headers});
}

// Obtengo los códigos de los proveedores para el select dinámico
obtenerCodProv( token): Observable<any> {

  // let json = JSON.stringify(car);
  //    let params = "json=" + json;

     let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', token);

    return this._http.get(this.url + 'codProveedores' , {headers: headers});

}

}
