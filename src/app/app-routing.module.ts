import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DermatologiaComponent } from './dermatologia/dermatologia.component';
import { AseoComponent } from './aseo/aseo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dermatologia',
    component: DermatologiaComponent,
  },
  {
    path: 'aseo',
    component: AseoComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'informacion',
    component: LandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
