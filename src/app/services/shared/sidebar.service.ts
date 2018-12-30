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
        icono: 'mdi mdi-book-open-variant',
        submenu: [
          { titulo: 'Cargar Articulos', url: '/pages/carga-articulos' },
          { titulo: 'Articulos', url: '/pages/mostrar-articulos' }
          // { titulo: 'Stock General', url: '/pages/inventario' },
          // { titulo: 'Pedidos', url: '/pages/pedidos' }
      ]
    },
    {
      titulo: 'Proveedores',
      icono: 'mdi mdi-truck',
      submenu: [
        { titulo: 'Nuevo Proveedor', url: '/pages/nuevo-proveedor' },
        { titulo: 'Proveedores', url: '/pages/mostrar-providers' }
      ]
    },
    {
      titulo: 'Clientes',
      icono: 'mdi mdi-account-multiple',
      submenu: [
        { titulo: 'Nuevo Cliente', url: '/pages/cargar-cliente' },
        { titulo: 'Clientes', url: '/pages/mostrar-clientes' },
      ]
    },
    {
      titulo: 'Ventas',
      icono: 'mdi mdi-cart',
      submenu: [
        { titulo: 'Cargar Venta', url: '/pages/cargar-venta' },
        { titulo: 'Ventas', url: '/pages/mostrar-ventas' }
      ]
    }
  ];

  constructor() { }
}
