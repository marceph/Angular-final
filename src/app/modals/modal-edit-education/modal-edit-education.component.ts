import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/models/estudio';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-modal-edit-education',
  templateUrl: './modal-edit-education.component.html',
  styleUrls: ['./modal-edit-education.component.css']
})
export class ModalEditEducationComponent implements OnInit {
  form:FormGroup;
  estu: Estudio= new Estudio("","","","","");

  constructor(private sEstudio:EstudioService, private formBuilder:FormBuilder, private router:Router, private activatedRoute:ActivatedRoute) {
    this.form = this.formBuilder.group({
      estudio:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]],
      description:['',[Validators.required]],
      logo:['',[Validators.required]]
    })
  }

  ngOnInit():void{
    const id = this.activatedRoute.params.subscribe(s => {
      let id = s['id'];
      if(id){
        this.sEstudio.ver(id).subscribe(es => {
          this.estu = es
        });
      }
    }
    );
  }

  onEdit():void{
    this.sEstudio.update(this.estu).subscribe(data => {
    });
  }

  get Estudio(){
    return this.form.get("estudio");
  }

  get Inicio(){
    return this.form.get("inicio");
  }

  get Fin(){
    return this.form.get("fin");
  }

  get Description(){
    return this.form.get("description");
  }

  get Logo(){
    return this.form.get("logo");
  }

  onSend(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onEdit();
      alert("Estudio editado");
      this.router.navigate(['']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

  clean():void{
    this.form.reset();
  }

}
