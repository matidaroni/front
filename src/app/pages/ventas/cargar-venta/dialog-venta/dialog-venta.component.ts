import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { CargarVentaComponent } from '../cargar-venta.component';
import { VentasService } from '../../../../services/ventas/ventas.service';
import { UsuarioService } from '../../../../services/usuario/usuario.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { APIURL } from '../../../../services/apiUrl';
import { Router } from '@angular/router';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dialog-venta',
  templateUrl: './dialog-venta.component.html',
  styleUrls: ['./dialog-venta.component.css']
})
export class DialogVentaComponent implements OnInit {
  // Validaciones
  btnDisable = false;
  formaPagoControl = new FormControl ('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();
// Fin validaciones
  token: string;
  flag;
  pdf: any = null;
  opcionesPago = [
    {opcion: 'Cuenta corriente'},
    {opcion: 'Efectivo'},
  ];

  selectedOpcion: any = null;

  constructor( private _ventasService: VentasService, private _usuerService: UsuarioService,
     public dialogRef: MatDialogRef<DialogVentaComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
     public router: Router ) {
    this.token = _usuerService.getToken();

  }

  change() {

  }

  ngOnInit() {
  }

  cargarVenta() {
    // GUARDO LA VENTA. SI TODO SALE BIEN GENERO LA FACTURA
    this.data.order.id_cliente = this.data.selectedClient.codCliente;
    this.data.order.opcionPago = this.selectedOpcion;
    this.data.order.importeTotal = this.data.total;
     console.log(this.selectedOpcion);

     this._ventasService.saveOrder(this.token, this.data.order).subscribe(
       Response => {
         if (Response.status === 'success') {
           swal('Exito', 'La venta se cargo con exito', 'success');
             console.log(Response);
             this.data.order = Response.Order;
             console.log(this.data.order);
             this.pdf = APIURL.urlPublic + 'pdfFacturas/pdf' + this.data.order.idOrder + '.pdf';
             this.btnDisable = true;
         } else {
           swal('Error', Response.message, 'warning');
         }
       },
       error => {
         console.log(error);
       });
  }

  salir() {
    console.log('salir');
    this.dialogRef.close();
    this.router.navigate(['/pages/mostrar-ventas']);
  }

}
