import { Component, OnInit, Input } from '@angular/core';

// Modelo
import { Proveedor } from '../../../models/proveedor';

// Servicios
import { ProveedoresService } from '../../../services/proveedores/proveedores.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';

// Modulo
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styles: []
})
export class NuevoProveedorComponent implements OnInit {
  @Input() opcion: string;
  @Input() editarCodPro: number;
  responsableOptions = [
    {opcion: 'RI'},
    {opcion: 'RM'},
    {opcion: 'EX'},
  ];

  selectedOpcionResponsable: any = 'RI';
  proveedor: Proveedor;

  // Datos del usuario
  identidad: any;
  token: string;

  // Datos devueltos del backend
  statusSubmit: string;

  constructor( private _proveedoresServices: ProveedoresService, _usuarioServices: UsuarioService) {
    this.proveedor = new Proveedor(null, null, null, null, null, null, null, null, null);
    this.identidad = _usuarioServices.getIdentidad();
    this.token = _usuarioServices.getToken();
  }

  ngOnInit() {

    if (this.opcion) {
        // TRAER PROVEEDOR
        this._proveedoresServices.getProvider(this.token, this.editarCodPro).subscribe(
          Response => {
              if (Response.status === 'success') {
                this.proveedor = Response.data;
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
    if ( this.selectedOpcionResponsable !== null) {
      this.proveedor.responsable = this.selectedOpcionResponsable.opcion;
      this._proveedoresServices.crearProveedor(this.token, this.proveedor).subscribe(
        Response => {
          this.statusSubmit = Response.status;
          if (this.statusSubmit === 'success') {
              swal('Proveedor Creado', 'Se creó el nuevo proveedor de forma exitosa', 'success');
          } else {
            swal('Error', Response.message, 'error');
          }
        },
        error => {
          swal('Error', error.statusText, 'error');
        });
    } else {
      swal('No se ha seleccionado ninguna opción de condición', 'Por favor seleccione una', 'warning');
    }

  } else {
    // EDITAR PROVEEDOR

    if ( this.selectedOpcionResponsable !== null) {
      this.proveedor.responsable = this.selectedOpcionResponsable.opcion;
      this._proveedoresServices.updateProvider(this.token, this.editarCodPro, this.proveedor).subscribe(
        Response => {
          if (Response.status === 'success') {
            console.log(Response);
            swal('Proveedor Editado', 'Se edito el proveedor de forma exitosa', 'success');
          } else {
            swal('Error', Response.message, 'error');
          }
        },
        error => {
          swal('Error', error.statusText, 'error');
        });
    } else {
      swal('No se ha seleccionado ninguna opción de condición', 'Por favor seleccione una', 'warning');
    }
  }

  }

  getTitle() {
    if (this.opcion) {
      return 'Editar Proveedor';
    } else {
      return 'Nuevo Proveedor';
    }
  }

}
