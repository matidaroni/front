import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcent1: number = 20;
  porcent2: number = 50;
  constructor() { }

  ngOnInit() {
  }

//  actualizar( event: number) {
//     console.log('porcent1', event);
//  }

}
