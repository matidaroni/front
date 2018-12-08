import { Component, OnInit } from '@angular/core';

// Servicios
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { ProveedoresService } from '../../../services/proveedores/proveedores.service';

// Model
import { Proveedor } from '../../../models/proveedor';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-mostrar-proveedores',
  templateUrl: './mostrar-proveedores.component.html',
  styles: []
})
export class MostrarProveedoresComponent implements OnInit {
  token: string;
  identidad: Usuario;
  providers: Proveedor[];
  statusRespone: string;
  constructor( private _usuariosService: UsuarioService, private _proveedoresService: ProveedoresService) {

      this.token = _usuariosService.getToken();
      this.identidad = _usuariosService.getIdentidad();
      this._proveedoresService.getProviders(this.token).subscribe(
        Response => {
          this.statusRespone = Response.status;
          if (this.statusRespone === 'success') {
            this.providers = Response.data;
            console.log(Response.data);
          } else {
            console.log(Response);
          }
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit() {
  }

}
