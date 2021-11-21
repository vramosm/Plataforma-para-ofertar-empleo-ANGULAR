import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [HomeService]
})
export class OfertaComponent implements OnInit {


  public datosOferta: any;
  public sub:any;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.url[1].path;
    this.homeService.getDataOfertasID(id).subscribe(
      response => {
          this.datosOferta = response;
          
      },
      error => {
          console.log("Error" + JSON.stringify(error));
          
      }
    );
  }

}
