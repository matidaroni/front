import { Component, OnInit } from '@angular/core';

// Servicios
import { VentasService } from '../../../services/ventas/ventas.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-mostrar-ventas',
  templateUrl: './mostrar-ventas.component.html',
  styles: []
})
export class MostrarVentasComponent implements OnInit {
  flag = false;
  Orders: any;
  token: string;
  identidad: Usuario;
  displayedColumns: string[] = ['idOrder', 'cliente', 'fecha', 'total'];
  constructor( _userService: UsuarioService, _ventasService: VentasService) {
      this.token = _userService.getToken();
      this.identidad = _userService.getIdentidad();
      this. Orders = _ventasService.getOrders(this.token).subscribe(
        Response => {
          this.Orders = Response.orders;
          this.flag = true;
          console.log(this.Orders);
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit() {
  }

}
