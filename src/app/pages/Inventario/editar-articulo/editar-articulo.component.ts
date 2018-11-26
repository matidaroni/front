import { Component, OnInit } from '@angular/core';

// Rutas
import { ActivatedRoute } from '@angular/router';


// Servicios
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { ArticulosService } from '../../../services/articulos/articulos.service';
import { Articulo } from '../../../models/articulo';
import { APIURL } from '../../../services/apiUrl';
import { ProveedoresService } from '../../../services/proveedores/proveedores.service';
import { CargaImagenService } from 'src/app/services/services.index';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  providers: [UsuarioService, ArticulosService, ProveedoresService],
  styles: []
})
export class EditarArticuloComponent implements OnInit {

  codArti: number;
  statusCodProv: string;
  proveedores: any;
  selectedOpcionCodProv: any = null;

  imgFile = null;
  imagenCargada = false;

  urlPublica;
  // Datos usuario
  token: string;
  identity: any;

  // Articulo obtenido api
  articulo: Articulo;
  status: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService,
              private articuloService: ArticulosService, private proveedoresService: ProveedoresService,
              private cargaImagenService: CargaImagenService) {

    this.urlPublica = APIURL.urlPublic;
    this.token = usuarioService.getToken();
    this.identity = usuarioService.getIdentidad();

    this.proveedoresService.obtenerCodProv(this.token).subscribe(
      Response => {
        this.statusCodProv = Response.status;
        if (this.statusCodProv === 'success') {
          this.proveedores = Response.Proveedores;
        } else {
          // Controlar error si no llegan los codigos de los proveedores
        }
      },
      error => {
      });

    this.activatedRoute.params.subscribe(
      params => {
        this.codArti = params['codArticulo'];
          this.getArticulo(params['codArticulo']);
          this.selectedOpcionCodProv = params['cod_proveedor'];
      });
  }

  ngOnInit() {
  }

  getArticulo(codArticulo: number) {
      this.articuloService.getArticulo(this.token, codArticulo).subscribe(
        Response => {
          if (Response.status === 'success') {
            // Asigno Articulo obtenido
            this.articulo = Response.articulo;
            this.status = true;
          } else {
            swal('Error', Response.message, 'error');
          }

        },
        error => {
            swal('Error', '!Oops Algo salio mal', 'error');
        });
  }

  OnSubmit() {
    if ( this.selectedOpcionCodProv !== null ) {

      // Fijarse si viene imagen cargada
      console.log(this.imgFile);
      if (this.imgFile !== null) {

        this.cargaImagenService.subirImagen(this.imgFile).subscribe(
          Response => {
            if ( Response.status === 'success') {

              // Obtengo directorio donde se guardo la imagen en la api y se lo cargo al objeto imagen para almacenarlo en la bd
              this.articulo.imagen = Response.directorio;
              console.log(this.articulo.imagen);
              this.editaArti();
            } else {
              swal('Error', Response.message, 'error');
            }
          },
          error => {
            swal('Error', 'Error al cargar la imagen: ' + error.statusText , 'error');
          });
      } else {
        this.editaArti();
      }

    } else {
      swal('Error', 'Debe seleccionar un código de proveedor', 'error');
    }
  }

   // obtengo los datos de la imagen subida y hago una pre-visualizacion
   cargandoImagen(files: FileList) {

    this.imgFile = files[0];
    let reader = new FileReader();
    reader.onload =  (e) => {
       // this.preImg = reader.result;
        this.imagenCargada = true;
    };
    reader.readAsDataURL(files[0]);
    // this._cargaImagenService.subirImagen(files[0]).subscribe(
    //   Response => {
    //     console.log(Response);
    //   },
    //   error => {
    //   console.log(error);
    //   });
  }

  editaArti() {

     if (this.selectedOpcionCodProv.codProveedor !== undefined) {
      this.articulo.cod_proveedor = this.selectedOpcionCodProv.codProveedor;
    } else {
      this.articulo.cod_proveedor = this.selectedOpcionCodProv;
     }
    console.log(this.articulo);
    // Update del articulo
        this.articuloService.updateArticulo(this.token, this.codArti, this.articulo).subscribe(
          Response => {
             if (Response.status === 'success') {
               swal('Exito', 'El articulo ha sido editado de forma correcta', 'success');
              }
            },
            error => {
              swal('Error', '!Oops Algo salio mal', 'error');

          });
  }

}
