import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../apiUrl';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenService {
  url: string;
  constructor(private _httpClient: HttpClient) {
    this.url = APIURL.url;
   }

  subirImagen(imagen: File): Observable<any> {
    const formData = new FormData();

    formData.append('imagenPropia', imagen, imagen.name);

    return this._httpClient.post(this.url + 'imagenArticulo', formData);
  }
}
