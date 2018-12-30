import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styles: []
})
export class EditarProveedorComponent implements OnInit {
  codProveedor: number;
  constructor( private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(
      params => {
        this.codProveedor = params['codProveedor'];
      });
  }

  ngOnInit() {
  }

}
