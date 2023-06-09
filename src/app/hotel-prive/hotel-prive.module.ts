import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { IconsServiciosComponent } from './components/icons-servicios/icons-servicios.component';



@NgModule({
  declarations: [
    InicioComponent,
    HabitacionesComponent,
    NosotrosComponent,
    ContactoComponent,
    IconsServiciosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InicioComponent,
    HabitacionesComponent,
    NosotrosComponent,
    ContactoComponent
  ]
})
export class HotelPriveModule { }
