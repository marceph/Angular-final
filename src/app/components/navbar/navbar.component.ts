import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { Red } from 'src/app/models/red';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { PersonaService } from 'src/app/services/persona.service';
import { RedService } from 'src/app/services/red.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  persona: Persona = new Persona("","","","","","","","","","");
  modoEdit: any;
  redes: Red[]=[];

  constructor(private sPersona:PersonaService, private sRed:RedService, private autentService:AutenticacionService, private router:Router) { }

  ngOnInit(): void {
    this.cargarRedes();
    this.sPersona.ver(1).subscribe(data => {this.persona=data});
    if(sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    } else if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  cargarRedes():void{
    this.sRed.lista().subscribe(data => {
      this.redes=data
    })
  }

  delete(id:number){
    if(id != undefined){
      this.sRed.delete(id).subscribe(data => {
        this.cargarRedes();
      }, err => {
        window.location.reload();
      })
    }
  }

  cerrarSesion(){
    sessionStorage.setItem('currentUser', "null");
    this.modoEdit = false;
    alert("Sesión Cerrada");
    this.router.navigate([''])
    return this.modoEdit;
  }

}
