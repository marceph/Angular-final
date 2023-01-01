import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  name: string="";
  surname: string="";
  titulo: string="";
  img: string="";
  description: string="";
  personas: Persona[]=[];

  constructor(private porfolioService: PorfolioService, private sPersona:PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.porfolioService.getDatos().subscribe(data => {
      //asignacion de variables
      this.name = data.name;
      this.surname = data.surname;
      this.titulo = data.titulo;
      this.img = data.img;
      this.description = data.description;
    });
  }

  cargarPersona(): void{
    this.sPersona.lista().subscribe(data => {
      this.personas=data
    });
  }

}
