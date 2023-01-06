import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experiencia[]=[];

  constructor(private sExperiencia:ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {
      this.experience=data;
    })
  }

  delete(id:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data => {
        this.cargarExperiencia();
      }, err => {
        window.location.reload();
      })
    }
  }

}
