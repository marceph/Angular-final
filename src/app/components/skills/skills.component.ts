import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Habilidad[]=[];

  constructor(private sHabilidad:HabilidadService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
  }

  cargarHabilidad():void{
    this.sHabilidad.lista().subscribe(data => {
      this.skills=data
    });
  }

  delete(id:number){
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(data => {
        this.cargarHabilidad();
      }, err => {
        window.location.reload();
      })
    }
  }

}
