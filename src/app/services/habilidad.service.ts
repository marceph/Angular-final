import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../models/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url = 'http://localhost:8080/habilidad/';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + 'lista');
  }

  public ver(id:number):Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.url + `ver/${id}`);
  }

  public save(habilidad:Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', habilidad);
  }

  public update(habilidad:Habilidad):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', habilidad);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
