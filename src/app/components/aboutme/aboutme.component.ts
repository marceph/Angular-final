import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  persona: Persona = new Persona("","","","","","","","","","");
  modoEdit: any;

  constructor(private sPersona:PersonaService, private authService:AutenticacionService) { }

  ngOnInit(): void {
    this.sPersona.ver(1).subscribe(data => {this.persona=data});
    if(sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    } else if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

}
