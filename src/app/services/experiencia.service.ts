import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = 'https://marceph.onrender.com/experiencia/'; //https://marceph.onrender.com  //http://localhost:8080
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public ver(id:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
  }

  public save(experiencia:Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
  }

  public update(experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
