// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {
   SharedService,
   SidebarService,
   UsuarioService,
   ArticulosService,
   CargaImagenService
} from './services.index';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
   SharedService,
   SidebarService,
   UsuarioService,
   ArticulosService,
   CargaImagenService
  ],
  declarations: []
})
export class ServiceModule { }
