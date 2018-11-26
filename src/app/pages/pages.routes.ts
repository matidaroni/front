import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { CargaArticulosComponent } from './Inventario/carga-articulos/carga-articulos.component';
import { NuevoProveedorComponent } from './proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { MostrarArticulosComponent } from './inventario/mostrar-articulos/mostrar-articulos.component';
import { EditarArticuloComponent } from './inventario/editar-articulo/editar-articulo.component';



const pagesRoutes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
           { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
           { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
           { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
           { path: 'carga-articulos', component: CargaArticulosComponent, data: { titulo: 'Carga de Articulos' } },
           { path: 'mostrar-articulos', component: MostrarArticulosComponent, data: { titulo: 'Articulos Cargados' } },
           { path: 'nuevo-proveedor', component: NuevoProveedorComponent, data: { titulo: 'Nuevo proveedor' } },
           { path: 'editar-articulo/:codArticulo/:cod_proveedor', component: EditarArticuloComponent, data: { titulo: 'Editar articulo' } },
           { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
   }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
