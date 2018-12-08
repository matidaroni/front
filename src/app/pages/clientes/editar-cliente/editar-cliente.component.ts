import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styles: []
})
export class EditarClienteComponent implements OnInit {
  codCliente;
  constructor( private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params.subscribe(
      params => {
        this.codCliente = params['codCliente'];
      });
  }

  ngOnInit() {
  }

}
