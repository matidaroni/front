import { Component, OnInit } from '@angular/core';

// Modelo
import { Cliente } from '../../../models/clientes';

// Servicios
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { ClientesService } from '../../../services/clientes/clientes.service';
import { Usuario } from '../../../models/usuario';
import { log } from 'util';


@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styles: []
})
export class MostrarClientesComponent implements OnInit {

  clientes: Cliente[];

  token: string;
  identidad: Usuario;

  statusRespone: string;
  constructor( private _usuariosService: UsuarioService, private _clientesService: ClientesService) {
      this.token = _usuariosService.getToken();
      this.identidad = _usuariosService.getIdentidad();

      this._clientesService.getClients(this.token).subscribe(
        Response => {
            this.statusRespone = Response.status;
            if (this.statusRespone === 'success') {
                console.log(Response);
                this.clientes = Response.data;
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
