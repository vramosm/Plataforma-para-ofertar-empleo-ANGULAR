import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OfertaComponent } from './home/oferta/oferta.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { NuevaofertaComponent } from './nuevaoferta/nuevaoferta.component';



@NgModule({
  declarations: [
    HomeComponent,
    OfertaComponent,
    LoginComponent,
    OfertasComponent,
    NuevaofertaComponent,

  ],
  imports: [
    CommonModule,
    ComponentModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    { provide: "windowObject", useValue: window}
  ],
})
export class PagesModule { }
