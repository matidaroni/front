import { Component, OnInit } from '@angular/core';
// MODELOS
import { Usuario } from '../../models/usuario';

// SERVICIOS
import { UsuarioService } from '../../services/usuario/usuario.service';

// ROUTER
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  usuario: Usuario;
  constructor( private _usuariosServices: UsuarioService, private _router: Router) {
    this.usuario = _usuariosServices.getIdentidad();
    console.log(this.usuario);
  }

    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('identidad');
      this._router.navigate(['/login']);
    }
  ngOnInit() {
  }

}
