import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/services.index';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

declare function init_plugins();  // llamar funcion de javascript fuera de angular 1

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(public router: Router, private _usuarioService: UsuarioService) {
    let usuario: Usuario = _usuarioService.getIdentidad();

    if (usuario == null) {
      this.router.navigate(['']);
    }

   }

  ngOnInit() {

    init_plugins(); // 2
  }

}
