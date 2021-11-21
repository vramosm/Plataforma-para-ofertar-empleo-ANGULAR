import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
  providers: [HomeService]
})
export class OfertasComponent implements OnInit {

  arrayDatosOfertas: Array<any> | undefined;
  mensaje: string = "";

  constructor(private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute) { 
      if(localStorage.getItem("token") == null){
        this.router.navigateByUrl("/home");
      }
    }

  ngOnInit(): void {
    this.homeService.getDataOfertas().subscribe(
      response => {
          this.arrayDatosOfertas = response;       
      },
      error => {
          console.log("Error" + JSON.stringify(error));
          
      }
    );
  }

  eliminarOferta(id: string): void {
    this.homeService.deleteOferta(id).subscribe(
      response => {   
          this.homeService.getDataOfertas().subscribe(
            response => {
                this.arrayDatosOfertas = response;  
                this.mensaje = "Oferta borrada correctamente";  
                setTimeout(()=>{ this.mensaje = "" }, 1500);  
            },
            error => {
                console.log("Error" + JSON.stringify(error));
                
            }
          );   
      },
      error => {
          console.log("Error" + JSON.stringify(error));
          
      }
    );
  }


}