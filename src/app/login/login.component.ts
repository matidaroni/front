import { Component, OnInit } from '@angular/core';
// Otros
import swal from 'sweetalert';
import { Router } from '@angular/router';

// Modelos
import { Usuario } from '../models/usuario';

// Servicios
import { UsuarioService } from '../services/usuario/usuario.service';


declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  status: string;
  usuario: Usuario;
  token: string;
  identidad: any;

  constructor(
    public router:  Router,
    private _usuarioService: UsuarioService
    ) {
    this.usuario = new Usuario(1, '', '', '', '');
  }

  ngOnInit() {
    init_plugins();
  }

  ingresar() {
      this._usuarioService.login(this.usuario).subscribe(
       response => {

          // Obtengo token

          if (response.status === 'ok') {
            this.token = response.token;
            localStorage.setItem('token', this.token);
            this.status = response.status;

            // Obtengo Usuario

            this._usuarioService.login(this.usuario, true).subscribe(
              response => {

                // Obtengo Usuario
                this.identidad = response.usuario;
                localStorage.setItem('identidad', JSON.stringify(this.identidad));

                // ingreso al sistema
                this.router.navigate(['pages/dashboard']);
              },
              error => {
                this.status = error;
                console.log(error);

              }
            );
            } else {
              this.status = response.status;
            }

        },
        error => {
          this.status = error;
          console.log(error);

        }
      );
    //
  }
}
