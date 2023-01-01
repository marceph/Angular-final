import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/persona/'
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public save(Persona:Persona): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', Persona);
  }

  public update(id:number, Persona:Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `editar/${id}`, Persona);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
