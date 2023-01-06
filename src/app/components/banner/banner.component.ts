import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona?: Persona;

  constructor(private sPersona:PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona():void{
    this.sPersona.ver(5).subscribe(data => {
      this.persona=data
    })
  }

}
