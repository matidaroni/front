import { Component, OnInit, Renderer2, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
// Servicios
import { ClientesService } from '../../../services/clientes/clientes.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { ArticulosService } from '../../../services/articulos/articulos.service';
import { VentasService } from '../../../services/ventas/ventas.service';
// Modelos
import { Order } from '../../../models/order';
import { Cliente } from '../../../models/clientes';
import { Usuario } from '../../../models/usuario';
import { Articulo } from '../../../models/articulo';
import { DatePipe } from '@angular/common';
// Angular material
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogVentaComponent } from './dialog-venta/dialog-venta.component';

// LOADASH
import * as _ from 'lodash';

@Component({
  selector: 'app-cargar-venta',
  templateUrl: './cargar-venta.component.html',
  providers: [DatePipe, MatDialog],
  styles: []
})
export class CargarVentaComponent implements OnInit {

  @ViewChild('inputCantidad') inputCantidad: ElementRef;

  total: number = 0;
  order: Order;
  aux: any = null;

  clients: Cliente[];
  selectedClient: any = null;
  cantArticle: number;
  flag: boolean = false;

  articles: Articulo;
  articlesSelected: any[] = [];
  // artiAux: any = {};
  selectedArticulo: any = null;

  token: string;
  identidad: Usuario;

  constructor( private _clientsService: ClientesService, private _userService: UsuarioService,
               private _articlesService: ArticulosService, private renderer: Renderer2,
               private _ventasService: VentasService, private datepipe: DatePipe, public dialog: MatDialog ) {
    this.order = new Order(null, null, null, [], null);
    this.order.fecha = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.token = _userService.getToken();

    _clientsService.getClients(this.token).subscribe (
      Response => {
          if (Response.status === 'success') {
                this.clients = Response.data;
                console.log(Response.data);
          } else {
            console.log(Response);
          }
      },
      error => {
            console.log(error);
      });

      _articlesService.obtenerArticulos(this.token).subscribe(
        Response => {
          if (Response.status === 'success') {
            this.articles = Response.articulos;
            console.log(Response);
          } else {
          console.log(Response);
        }
        },
        error => {
          console.log(error);
        });


   }

   addArticle(): void {
      if ( (this.selectedArticulo.stock - this.cantArticle) < 0 || this.cantArticle === null || this.cantArticle === 0) {
          swal({
            title: 'Falta Stock',
            // tslint:disable-next-line:max-line-length
            text: 'El articulo no dispone la cantidad de unidades necesarias o no ha especificado una cantidad. El stock del arituclo es de: ' + this.selectedArticulo.stock,
            icon: 'warning',
          });
      } else {


         let article: any = _.clone(this.selectedArticulo);
         this.total += ( ((article.ganancia * article.costo) / 100) + article.costo ) * this.cantArticle;
         console.log(this.total);
         let artiAux: any = {};
         artiAux.cantidad = this.cantArticle;
         artiAux.id_articulo = this.selectedArticulo.codArticulo;
         article.cantidad = this.cantArticle;
         article.precioXuni = ((article.ganancia * article.costo) / 100) + article.costo;
         article.total = article.precioXuni * this.cantArticle;
         artiAux.unitPrice = article.precioXuni;
         artiAux.total = article.total;
         console.log(article);
         this.articlesSelected.push(article);
         this.order.orderLine.push(artiAux);
         this.cantArticle = null;
         this.flag = true;
    }
   }

  ngOnInit() {

  }

   focusCantidad() {
           this.cantArticle = null;
           this.inputCantidad.nativeElement.focus();
   }

   cargarVenta() {
     if (this.order.orderLine.length > 0) {
     this.openDialog();
    } else {
      swal('Cuidado', 'No se han cargado articulos en la venta', 'warning');
    }
    }

    deleteOrderLine(i: number) {
        // tslint:disable-next-line:max-line-length
        this.total -= (((this.articlesSelected[i].ganancia * this.articlesSelected[i].costo) / 100) + this.articlesSelected[i].costo) * parseFloat(this.articlesSelected[i].cantidad);
        this.articlesSelected.splice(i, 1);
        this.order.orderLine.splice(i, 1);
        console.log(this.articlesSelected);

        if (this.articlesSelected.length === 0) {
          this.flag = false;
        }
    }

    openDialog(): void {
      const dialog = this.dialog.open(DialogVentaComponent, {
        disableClose: true,
        width: '75%',
        height: '80%',
        data: {order: this.order,
               selectedClient: this.selectedClient,
               total: this.total}
      });

      dialog.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });

}

}
