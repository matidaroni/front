import { Component, OnInit } from '@angular/core';
// SERVICIOS
import { SidebarService, UsuarioService } from '../../services/services.index';
// MODELOS
import { Usuario } from '../../models/usuario';

// ROUTER
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

   usuario: Usuario;
  constructor( public _sidebar: SidebarService, private _usuarioService: UsuarioService,
                public _router: Router) {

    this.usuario = _usuarioService.getIdentidad();

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('identidad');
    this._router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
