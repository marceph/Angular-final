import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../models/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  url = 'http://localhost:8080/red/';
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Red[]>{
    return this.httpClient.get<Red[]>(this.url + 'lista');
  }

  public ver(id:number):Observable<Red>{
    return this.httpClient.get<Red>(this.url + `ver/${id}`);
  }

  public save(red:Red):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', red);
  }

  public update(red:Red):Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', red);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
