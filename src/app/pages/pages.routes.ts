import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { CargaArticulosComponent } from './Inventario/carga-articulos/carga-articulos.component';
import { NuevoProveedorComponent } from './proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { MostrarArticulosComponent } from './Inventario/mostrar-articulos/mostrar-articulos.component';
import { EditarArticuloComponent } from './Inventario/editar-articulo/editar-articulo.component';
import { CargarClienteComponent } from './clientes/cargar-cliente/cargar-cliente.component';
import { MostrarClientesComponent } from './clientes/mostrar-clientes/mostrar-clientes.component';
import { MostrarProveedoresComponent } from './proveedores/mostrar-proveedores/mostrar-proveedores.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EditarProveedorComponent } from './proveedores/editar-proveedor/editar-proveedor.component';



const pagesRoutes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
           { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
           { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
           { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
           // ARTICULOS
           { path: 'carga-articulos', component: CargaArticulosComponent, data: { titulo: 'Carga de Articulos' } },
           { path: 'mostrar-articulos', component: MostrarArticulosComponent, data: { titulo: 'Articulos Cargados' } },
           { path: 'editar-articulo/:codArticulo/:cod_proveedor', component: EditarArticuloComponent, data: { titulo: 'Editar articulo' } },
           // PROVEEDORES
           { path: 'nuevo-proveedor', component: NuevoProveedorComponent, data: { titulo: 'Nuevo proveedor' } },
           { path: 'mostrar-providers', component: MostrarProveedoresComponent, data: { titulo: 'Proveedores' } },
           { path: 'editar-provider/:codProveedor', component: EditarProveedorComponent, data: { titulo: 'Editar proveedor' } },
           // CLIENTES
           { path: 'cargar-cliente', component: CargarClienteComponent, data: { titulo: 'Nuevo cliente' } },
           { path: 'mostrar-clientes', component: MostrarClientesComponent, data: { titulo: 'Clientes' } },
           { path: 'editar-cliente/:codCliente', component: EditarClienteComponent, data: { titulo: 'Editar cliente' } },
           { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
   }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
