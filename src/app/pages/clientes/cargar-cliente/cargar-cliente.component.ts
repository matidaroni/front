import { Component, OnInit, Input} from '@angular/core';


// Modelo
import { Cliente } from '../../../models/clientes';

// Servicios
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { ClientesService } from '../../../services/clientes/clientes.service';


@Component({
  selector: 'app-cargar-cliente',
  templateUrl: './cargar-cliente.component.html',
  styles: []
})
export class CargarClienteComponent implements OnInit {
  @Input() opcion: string;
  @Input() editarCodCli: number;

  // Select tipo de factura
  facturaOptions = [
    {opcion: 'A'},
    {opcion: 'B'},
    {opcion: 'R'},
  ];

  selectedOpcionFactura: any = {opcion: 'A'};

  cliente: Cliente;

  // Datos del usuario
  identidad: any;
  token: string;

   // Datos devueltos del backend
   statusSubmit: string;

  constructor( private _clientesServices: ClientesService , _usuarioServices: UsuarioService) {
    this.cliente = new Cliente(null, null, null, null, null, null, null, null, null, null, null);
    this.identidad = _usuarioServices.getIdentidad();
    this.token = _usuarioServices.getToken();
  }

  ngOnInit() {
    if (this.opcion) {
      console.log(this.opcion);
        // TRAER CLIENTE Y SETEAR LOS INPUTS
        this._clientesServices.getClient(this.token, this.editarCodCli).subscribe(
          Response => {
              if (Response.status === 'success') {
                this.cliente = Response.data;
                console.log(Response);
              } else {
                console.log(Response);
              }
          },
          error => {
              console.log(error);
          });
    }

  }

  OnSubmit() {
    if ( !this.opcion ) {
    if ( this.selectedOpcionFactura !== null) {
      console.log(this.selectedOpcionFactura);
      this.cliente.factura = this.selectedOpcionFactura.opcion;
      this._clientesServices.cargarCliente(this.token, this.cliente).subscribe(
        Response => {
          this.statusSubmit = Response.status;
          if (this.statusSubmit === 'success') {
              swal('Cliente Creado', 'Se creó el nuevo cliente de forma exitosa', 'success');
          } else {
            swal('Error', Response.message, 'error');
          }
        },
        error => {
          swal('Error', error.statusText, 'error');
        });
    } else {
      swal('No se ha seleccionado ninguna opción de factura', 'Por favor seleccione una', 'warning');
    }
  } else {
    if ( this.selectedOpcionFactura !== null) {
      this.cliente.factura = this.selectedOpcionFactura.opcion;
      this._clientesServices.updateClient(this.token, this.editarCodCli, this.cliente).subscribe(
        Response => {
            if (Response.status === 'success') {
              swal('Cliente Editado', 'El cliente se edito de forma exitosa', 'success');
              console.log(Response);
            } else {
              console.log(Response);
              swal('Error', Response.message, 'error');
            }
        },
        error => {
            console.log(error);
            swal('Error', error.statusText, 'error');
        });
    } else {
      swal('No se ha seleccionado ninguna opción de factura', 'Por favor seleccione una', 'warning');
    }

  }

  }

  getTitle() {
    if (this.opcion) {
      return 'Editar Cliente';
    } else {
      return 'Nuevo Cliente';
    }
  }
}
