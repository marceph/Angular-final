import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../models/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  url = 'https://marceph.onrender.com/estudio/'; //https://marceph.onrender.com  //http://localhost:8080
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.url + 'lista');
  }

  public ver(id:number):Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.url + `ver/${id}`);
  }

  public save(estudio:Estudio):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', estudio);
  }

  public update(estudio:Estudio):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', estudio);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
