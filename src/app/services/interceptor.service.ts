import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
 
  constructor(private autenticacionServicio:AutenticacionService) { }


  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    var currentUser = this.autenticacionServicio.usuarioAutenticado;
    if(currentUser && currentUser.id) {
      req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.id}`
        }
      })
    }

    return next.handle(req);
  }
  
}
