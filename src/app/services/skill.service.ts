import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url = 'http://localhost:8080/skill/';

  constructor(private httpClient:HttpClient) { }

  public list():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.url + 'list');
  }

  public view(id:number):Observable<Skill>{
    return this.httpClient.get<Skill>(this.url + `view/${id}`);
  }

  public save(skill:Skill):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', skill);
  }

  public update(skill:Skill):Observable<any>{
    return this.httpClient.put<any>(this.url + 'edit', skill);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
