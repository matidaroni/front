import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../../models/order';
import { APIURL } from '../apiUrl';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VentasService {

  url: string;

  constructor( private _httpClient: HttpClient) {
      this.url = APIURL.url;
   }

   saveOrder(token: string, order: Order): Observable<any> {

    let json = JSON.stringify(order);
    let params = 'json=' + json;

      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                      .set('Authorization', token);

    return this._httpClient.post(this.url + 'orders', params , {headers: headers});
   }

   getOrders( token: string): Observable<any> {

    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization', token);

    return this._httpClient.get(this.url + 'orders' , {headers: headers});
   }
}
