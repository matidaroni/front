import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatAutocompleteModule, MatDialogModule, MatChipsModule, MatTableModule } from '@angular/material';


// Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StickyModule } from 'ng2-sticky-kit';
import { PdfViewerModule } from 'ng2-pdf-viewer';


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
// tslint:disable-next-line:quotemark
import { DataTableModule } from "angular-6-datatable";
import { CargarVentaComponent } from './ventas/cargar-venta/cargar-venta.component';
import { ObservablesComponent } from './observables/observables/observables.component';
import { DialogVentaComponent } from './ventas/cargar-venta/dialog-venta/dialog-venta.component';
import { DomseguroPipe } from '../pipes/domseguro.pipe';
import { MostrarVentasComponent } from './ventas/mostrar-ventas/mostrar-ventas.component';




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
        EditarProveedorComponent,
        CargarVentaComponent,
        ObservablesComponent,
        DialogVentaComponent,
        DomseguroPipe,
        MostrarVentasComponent,
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
        ReactiveFormsModule,
        CommonModule,
        NgSelectModule,
        DataTableModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        StickyModule,
        MatDialogModule,
        PdfViewerModule,
        MatInputModule,
        MatSelectModule,
        MatChipsModule,
        MatTableModule
    ],
    entryComponents: [
        DialogVentaComponent
    ]
})

export class PagesModule { }
