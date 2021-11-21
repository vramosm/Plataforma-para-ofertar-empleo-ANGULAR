import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OfertaComponent } from './pages/home/oferta/oferta.component';
import { LoginComponent } from './pages/login/login.component';
import { NuevaofertaComponent } from './pages/nuevaoferta/nuevaoferta.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "oferta/:id",
    component: OfertaComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "ofertas",
    component: OfertasComponent
  },
  {
    path: "nuevaOferta",
    component: NuevaofertaComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
