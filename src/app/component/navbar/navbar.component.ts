import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    logeado: boolean = false;
    constructor(private router: Router, @Inject("windowObject") window: Window) { 
        if(localStorage.getItem('token') != null){
            this.logeado = true;
        };
    }


    ngOnInit(): void { }

    logout() {
        localStorage.clear();
       window.location.reload();
       
    }
}
