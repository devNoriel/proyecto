import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './usuarios/error/error.component';
import { IndexComponent } from './index/index.component';
import { AlquilerComponent } from './usuarios/alquiler/alquiler.component';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { PerfilComponent } from './usuarios/perfil/perfil.component';
import { LoginComponent } from './usuarios/login/login.component';
import { AutosComponent } from './componentes/autos/autos.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'alquiler', component: AlquilerComponent},
  {path: 'autos', component: AutosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'login', component: LoginComponent},
  {path: '**',  component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
