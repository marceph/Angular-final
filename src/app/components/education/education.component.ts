import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/estudio';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Estudio[]=[];
  modoEdit: any;

  constructor(private sEstudio:EstudioService) { }

  ngOnInit(): void {
    this.cargarEstudio();
    if(sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    } else if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  cargarEstudio():void{
    this.sEstudio.lista().subscribe(data => {
      this.education=data
    })
  }

  delete(id:number){
    if(id != undefined){
      this.sEstudio.delete(id).subscribe(data => {
        this.cargarEstudio();
      }, err => {
        window.location.reload();
      })
    }
  }

}
