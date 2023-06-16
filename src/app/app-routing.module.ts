import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DermatologiaComponent } from './dermatologia/dermatologia.component';
import { AseoComponent } from './aseo/aseo.component';
import { LocalesComponent } from './locales/locales.component';
import { ContactoComponent } from './contacto/contacto.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
