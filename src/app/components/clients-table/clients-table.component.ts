import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styles: []
})
export class ClientsTableComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() opcion: string;
  KeysClients: string[] = [
    'Codigo', 'Nombre', 'Cuit', 'Domicilio', 'Telefono 1', 'Telefono 2', 'Vendedor',
                             'Mail', 'Categoria', 'Factura', 'Cuenta Corriente'];
  KeysProviders: string[] = ['Codigo', 'Cuit', 'Responsable', 'Descripcion', 'Domicilio', 'Provincia', 'Mail',
                             'Telefono 1', 'Telefono 2'];
  constructor() { }

  // Este metodo devuelve las keys de los datos que obtengo del archivo excel
  keys(): Array<string> {
    return Object.keys(this.items[0]);
  }

  opciones() {
    if (this.opcion === 'clients') {
      return this.KeysClients;
    } else if (this.opcion === 'providers') {
      return this.KeysProviders;
    }
  }

  ngOnInit() {
  }

}
