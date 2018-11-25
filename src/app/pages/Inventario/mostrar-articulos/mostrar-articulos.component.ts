import { Component, OnInit } from '@angular/core';

// Servicios
import { ArticulosService } from '../../../services/articulos/articulos.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';

// Modelos
import { Articulo } from 'src/app/models/articulo';

// Otros
import { APIURL } from '../../../services/apiUrl';

@Component({
  selector: 'app-mostrar-articulos',
  templateUrl: './mostrar-articulos.component.html',
  providers: [UsuarioService, ArticulosService]
})
export class MostrarArticulosComponent implements OnInit {

  // url publica para acceder imagenes
  urlPublica: string;
  // datos usuario
  token: string;
  identidad: any;

  // articulos obtenidos
  articulos: Articulo;
  constructor( private _articulosService: ArticulosService, private _usuarioService: UsuarioService) {
      this.urlPublica = APIURL.urlPublic;
      this.token = _usuarioService.getToken();

      this._articulosService.obtenerArticulos(this.token).subscribe(
        Response => {
           this.articulos = Response.articulos;
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit() {
  }

}
