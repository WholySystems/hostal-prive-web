import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './hotel-prive/pages/inicio/inicio.component';
import { HabitacionesComponent } from './hotel-prive/pages/habitaciones/habitaciones.component';
import { NosotrosComponent } from './hotel-prive/pages/nosotros/nosotros.component';
import { ContactoComponent } from './hotel-prive/pages/contacto/contacto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, pathMatch: 'full' },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //, { useHash: true}
  exports: [RouterModule],
})
export class AppRoutingModule {}
