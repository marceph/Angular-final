import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proyectos: Proyecto[]=[];

  constructor(private sProyecto:ProyectoService) { }

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto():void{
    this.sProyecto.lista().subscribe(data => {
      this.proyectos=data;
    })
  }

  delete(id:number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(data => {
        this.cargarProyecto();
      }, err => {
        window.location.reload();
      })
    }
  }

}
