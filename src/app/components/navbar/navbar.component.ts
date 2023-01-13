import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Red } from 'src/app/models/red';
import { PersonaService } from 'src/app/services/persona.service';
import { RedService } from 'src/app/services/red.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //variable temporal
  personas: Persona[]=[];

  persona?: Persona;
  redes: Red[]=[];

  constructor(private sPersona:PersonaService, private sRed:RedService) { }

  ngOnInit(): void {
    this.cargarPersona();
    this.cargarRedes();
  }

  // cargarPersona():void{
  //   this.sPersona.ver(5).subscribe(data => {
  //     this.persona=data
  //   })
  // }

  //Carga temporal de persona
  cargarPersona():void{
    this.sPersona.lista().subscribe(data => {
      this.personas=data
      let id = this.personas.length;
      this.sPersona.ver(id).subscribe(data=>{this.persona=data})
    })
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

}
