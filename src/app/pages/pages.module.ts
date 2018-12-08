import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import {NgSelectModule} from '@ng-select/ng-select';



// Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { CargaArticulosComponent } from './Inventario/carga-articulos/carga-articulos.component';
import { NuevoProveedorComponent } from './proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { MostrarArticulosComponent } from './Inventario/mostrar-articulos/mostrar-articulos.component';
import { EditarArticuloComponent } from './Inventario/editar-articulo/editar-articulo.component';
import { NoimagePipe } from '../pipes/noimage.pipe';
import { CargarClienteComponent } from './clientes/cargar-cliente/cargar-cliente.component';
import { MostrarClientesComponent } from './clientes/mostrar-clientes/mostrar-clientes.component';
import { ClientsTableComponent } from '../components/clients-table/clients-table.component';
import { MostrarProveedoresComponent } from './proveedores/mostrar-proveedores/mostrar-proveedores.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EditarProveedorComponent } from './proveedores/editar-proveedor/editar-proveedor.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        CargaArticulosComponent,
        NuevoProveedorComponent,
        MostrarArticulosComponent,
        EditarArticuloComponent,
        NoimagePipe,
        CargarClienteComponent,
        MostrarClientesComponent,
        ClientsTableComponent,
        MostrarProveedoresComponent,
        EditarClienteComponent,
        EditarProveedorComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        CommonModule,
        NgSelectModule
    ]
})

export class PagesModule { }
