import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css'],
    providers: [HomeService]
})

export class LoginComponent implements OnInit{

    public title: string;

    username: string;
    contrasena: string;
    loginCorrecto: any;
    mensaje: string;


    constructor(private homeService: HomeService,
        private router: Router
    ){
        this.title ="Este es nuestro login";
        this.username = "";
        this.contrasena = "";
        this.mensaje = "";

    }
    ngOnInit(): void {
             
    }
    
    loginAdmin(){
        this.homeService.postLogin(this.username, this.contrasena).subscribe(
            response => {
                    this.loginCorrecto = true;
                    localStorage.setItem("token", response.id_token);
                    this.router.navigate(['/ofertas']);

            },
            error => {
                this.loginCorrecto = false;
                this.mensaje = "Usuario o Contraseña no válido";
            }
          );
    }

}