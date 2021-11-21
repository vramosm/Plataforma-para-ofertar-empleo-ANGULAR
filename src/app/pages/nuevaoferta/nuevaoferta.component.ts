import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfertaForm } from 'src/app/model/oferta-form';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-nuevaoferta',
  templateUrl: './nuevaoferta.component.html',
  styleUrls: ['./nuevaoferta.component.css'],
  providers: [HomeService]
})
export class NuevaofertaComponent implements OnInit {


  constructor(private fb: FormBuilder,
    private homeService: HomeService,
    private router: Router,
    public http: HttpClient) {
}

  // Datos del servicio
  public arrayDatosOfertas: Array<any> = [];

  // Declaro el formulario y sus validaciones
  formularioOferta = this.fb.group(
  { // Configuración de los controles
    titulo: ['', [Validators.required, Validators.maxLength(100)]],
    descripcion: ['', [Validators.required, Validators.maxLength(300)]],
    empresa: ['', [Validators.required, Validators.maxLength(50)]],
    salario: ['',  [Validators.required]],
    ciudad: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
  });


  ngOnInit(): void {

  }
  crearOferta(): void {
  let value: OfertaForm = new OfertaForm(
  this.formularioOferta.value.id,
  this.formularioOferta.value.titulo,
  this.formularioOferta.value.descripcion,
  this.formularioOferta.value.salario,
  this.formularioOferta.value.ciudad,
  this.formularioOferta.value.empresa,
  this.formularioOferta.value.email);

  this.homeService.crearNuevaOferta({
    titulo: this.formularioOferta.value.titulo,
    descripcion: this.formularioOferta.value.descripcion,
    empresa: this.formularioOferta.value.empresa,
    salario: this.formularioOferta.value.salario,
    ciudad: this.formularioOferta.value.ciudad,
    email: this.formularioOferta.value.email

  }).subscribe(
    response => {
        this.arrayDatosOfertas = response;   
        this.router.navigate(['/ofertas']);    
    },
    error => {
        console.log("Error" + JSON.stringify(error));
        
    }
  );

  
  }
}
