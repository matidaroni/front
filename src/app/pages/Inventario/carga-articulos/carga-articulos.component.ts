import { Component, OnInit } from '@angular/core';

// Modelos
import { Articulo } from 'src/app/models/articulo';

// Librerias
import * as XLSX from 'ts-xlsx';
import swal from 'sweetalert';

// Servicios
import { ArticulosService } from 'src/app/services/services.index';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { ProveedoresService } from '../../../services/proveedores/proveedores.service';
import { CargaImagenService } from '../../../services/cargaImagen/carga-imagen.service';
import { Global } from '../../GlobalPages';

@Component({
  selector: 'app-carga-articulos',
  templateUrl: './carga-articulos.component.html',
  providers: [UsuarioService, ArticulosService]
})

export class CargaArticulosComponent implements OnInit {


  articulo: Articulo;
  imagen = false;
  cargarArticulo: boolean = false;
  cargaArchivo: boolean = false;
  cargado: boolean = false;
  arrayBuffer: any;
  file: File;
  aux: any;

  // Select dinamico
  selectedOpcionCodProv: any = null;

  // Datos de login
  identidad: any;
  token: string;

  // Datos devuelto del backend
  status: string; // obtengo el estado de la operacion de carga de articulo
  statusCodProv: string;
  proveedores: any;

  // Guardar imagen del articulo
  imgFile: File = null;
  preImg: any;

  constructor( private _articulosService: ArticulosService, private _usuarioService: UsuarioService,
               private _proveedoresServices: ProveedoresService, private _cargaImagenService: CargaImagenService) {

    this.identidad = _usuarioService.getIdentidad();
    this.token = _usuarioService.getToken();
    this.articulo = new Articulo (null, null, null, null, null, null, null, null, null);

    this._proveedoresServices.obtenerCodProv(this.token).subscribe(
      Response => {
        this.statusCodProv = Response.status;
        if (this.statusCodProv === 'success') {
          this.proveedores = Response.Proveedores;
        } else {
          // Controlar error si no llegan los codigos de los proveedores
        }
      },
      error => {
        console.log(error);
      });

  }

  ngOnInit() {
  }

    // Este metodo obtiene el archivo excel, lo lee y extrae los datos, los cuales se colacan en la variable aux
    recibeArchivo(archivoCargado) {

    this.file = archivoCargado.target.files[0];

    let fileReader = new FileReader();
        fileReader.onload =  (e) => {

            this.arrayBuffer = fileReader.result;
            let data = new Uint8Array(this.arrayBuffer);
            let arr = new Array();

            for (let i = 0; i !== data.length; ++i) {

              arr[i] = String.fromCharCode(data[i]);
            }

            let bstr = arr.join('');
            let workbook = XLSX.read(bstr, {type: 'binary'});
            let first_sheet_name = workbook.SheetNames[0];
            let worksheet = workbook.Sheets[first_sheet_name];

           this.aux = XLSX.utils.sheet_to_json(worksheet, {raw: true});
           this.cargado = true;
          // console.log(this.aux[0]);
          // console.log(Object.keys(this.aux));

          };

         fileReader.readAsArrayBuffer(this.file);

    }

    // Este metodo devuelve las keys de los datos que obtengo del archivo excel
    keys(): Array<string> {
      return Object.keys(this.aux[0]);
    }


    // Estos dos metodos cambian el valor de las variables boleanas para controlar lo que se muestra
    cargaArchivo_true() {
        if (this.cargaArchivo === false) {
          this.cargaArchivo = true;
          this.cargarArticulo = false;
        } else {
          this.cargaArchivo = false;
        }
    }

    carga_articulo_true() {
      if (this.cargarArticulo === false) {
         this.cargarArticulo = true;
         this.cargaArchivo = false;
      } else {
        this.cargarArticulo = false;
      }
    }

    // Carga un articulo en la base de datos
    OnSubmit() {
      if ( this.selectedOpcionCodProv !== null ) {

      // Fijarse si viene imagen cargada
      if (this.imgFile !== null) {

        // Cargo imagen en el servidor
        this._cargaImagenService.subirImagen(this.imgFile).subscribe(
                  Response => {
                    // console.log(Response);
                    if ( Response.status === 'success') {

                      // Obtengo directorio donde se guardo la imagen en la api y se lo cargo al objeto imagen para almacenarlo en la bd
                      this.articulo.imagen = Response.directorio;
                      this.cargaArti();
                    } else {
                      swal('Error', Response.message, 'error');
                    }
                  },
                  error => {
                    swal('Error', 'Error al cargar la imagen: ' + error.statusText , 'error');
                  });
                } else {
                  this.articulo.imagen = null;
                  this.cargaArti();
                }

    } else {
         swal('Código de proveedor no seleccionado', 'Por favor seleccione un código de proveedor', 'warning');
      }
    }

    // obtengo los datos de la imagen subida y hago una pre-visualizacion
    cargandoImagen(files: FileList) {

      this.imgFile = files[0];
      let reader = new FileReader();
      reader.onload =  (e) => {
          this.preImg = reader.result;
          this.imagen = true;
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

    cargarExcel() {
      console.log(this.aux);
      this._articulosService.guardarArticulos(this.token, this.aux).subscribe(
        Response => {
          if (Response.status === 'success') {
              swal('Exito', 'Los articulos del archivo excel fueron cargados de forma exitosa', 'success');
          } else {
            swal('Error', Response.message, 'error');
          }
        },
        error => {
          swal('Error', error.message, 'error');
        });
    }

    cargaArti() {

      this.articulo.cod_proveedor = this.selectedOpcionCodProv.codProveedor;

      this._articulosService.crearArticulo(this.token, this.articulo).subscribe(
        Response => {
          this.status = Response.status;
          if (this.status === 'success') {
              console.log(Response);
              Global.flagArticles = true;
              swal('Articulo cargado', 'El articulo fue cargado de forma exitosa', 'success');
          }
      },
        error => {
          swal('Error', error.statusText, 'error');
        });
    }

  }


