import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styles: []
})
export class ObservablesComponent implements OnInit {

  constructor() {

      let obs = new Observable ( observer => {

          let intervalo = setInterval ( () => {

          }, 1000);

      });

  }

  ngOnInit() {
  }

  observableCliente() {
      console.log('holis');
  }

}
