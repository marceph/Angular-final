import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'https://marceph.onrender.com/persona/'; //https://marceph.onrender.com  //http://localhost:8080
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public ver(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + `ver/${id}`);
  }

  public save(persona:Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona);
  }

  public update(persona:Persona):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', persona);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
