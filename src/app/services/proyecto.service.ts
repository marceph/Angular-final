import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = 'https://marceph.onrender.com/proyecto/'; //https://marceph.onrender.com  //http://localhost:8080
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

  public ver(id:number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
  }

  public save(proyecto:Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', proyecto);
  }

  public update(proyecto:Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', proyecto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
