import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() porcent: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('leyenda', this.leyenda);
    // console.log('porcent', this.porcent);
  }

  ngOnInit() {
  }

  onChange( nuevoValor: number ) {
    // let elementHTML: any = document.getElementsByName('progreso')[0];

    if ( this.porcent >= 100 ) {
      this.porcent = 100;
    } else if ( this.porcent <= 0 ) {
      this.porcent = 0;
    } else {
      this.porcent = nuevoValor;
    }

    // elementHTML.value = this.porcent;
    this.txtProgress.nativeElement.value = this.porcent;
    this.cambioValor.emit( this.porcent );
  }

  cambiarValor ( valor: number ) {
    if ( this.porcent >= 100 ) {
      return 'caca';
    } else if ( this.porcent <= 0 ) {
      return 'caca 2';
    }
      this.porcent = this.porcent + valor;

      this.cambioValor.emit( this.porcent );
      this.txtProgress.nativeElement.focus();
  }
}
