import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/services.index';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

   usuario: Usuario;
  constructor( public _sidebar: SidebarService, private _usuarioService: UsuarioService) {

    this.usuario = _usuarioService.getIdentidad();

  }

  ngOnInit() {
  }

}
