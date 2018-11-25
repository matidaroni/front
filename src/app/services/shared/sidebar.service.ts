import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    // {
    //   titulo: 'Principal',
    //   icono: 'mdi mdi-gauge',
    //   submenu: [
    //      { titulo: 'Dashboard', url: '/pages/dashboard' },
    //      { titulo: 'ProgressBAr', url: '/pages/progress' },
    //      { titulo: 'Gráficas1', url: '/pages/graficas1' }
    //     ]
    //   },
      {
        titulo: 'Inventario',
        icono: 'mdi mdi-gauge',
        submenu: [
          { titulo: 'Cargar Articulos', url: '/pages/carga-articulos' },
          { titulo: 'Articulos', url: '/pages/mostrar-articulos' }
          // { titulo: 'Stock General', url: '/pages/inventario' },
          // { titulo: 'Pedidos', url: '/pages/pedidos' }
      ]
    },
    {
      titulo: 'Proveedores',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Nuevo Proveedor', url: '/pages/nuevo-proveedor' }
      ]
    }
  ];

  constructor() { }
}
