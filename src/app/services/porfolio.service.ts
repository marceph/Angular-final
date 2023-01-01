import { Injectable } from '@angular/core';
//Esto es para suscribirse y que se reciba respuesta de forma asincrona
import { Observable } from 'rxjs';
//Esto es para-poder hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  // el primer http se llama alias
  constructor(private http: HttpClient) { }
  //Método observable que devuelve los datos
  getDatos(): Observable<any> {
    //Se llama al JSON con su path -ruta-, o bien, en su lugar se puede poner una URL para traer dato
    return this.http.get('./assets/json/porfolio.json');
  }
}