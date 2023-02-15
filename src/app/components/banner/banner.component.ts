import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //variable temporal
  personas: Persona[]=[];
  persona?: Persona;

  constructor(private sPersona:PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
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

}
