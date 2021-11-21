import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  
  public arrayDatosOfertas: Array<any> | undefined;

  constructor(private homeService: HomeService,
    private router: Router) { }

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

}