import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { AppEndPoints } from 'src/endpoints.component';



@Injectable()
export class HomeService {

    public arrayDatos: Array<any>;
    private listadoDatos$ = new Subject<Array<any>>();

    constructor(private http: HttpClient, private roter: Router) {
        this.arrayDatos = [];
    }


    public getDataOfertas(): Observable<any>{
        let url = AppEndPoints.ENDPOINT;
        return this.http.get(url);
    }
    public getDataOfertasID(id: string): Observable<any>{
        let url = AppEndPoints.ENDPOINT + "/" +  id;
        return this.http.get(url);
    }

    public postLogin(username: string, password: string): Observable<any>{
        let url = AppEndPoints.POSTLOGIN;
        let rememberMe= false;
        return this.http.post(url, {username, password, rememberMe});
    }

    public deleteOferta(id: string): Observable<any>{
        let url = AppEndPoints.ENDPOINT + "/" + id;
        return this.http.delete(url);
    }

    public crearNuevaOferta(oferta:any): Observable<any> {
        let url = AppEndPoints.ENDPOINT;
        return this.http.post<any>(url, oferta);
      }

    }


