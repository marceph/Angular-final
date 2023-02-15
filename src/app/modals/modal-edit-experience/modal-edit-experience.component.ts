import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-edit-experience',
  templateUrl: './modal-edit-experience.component.html',
  styleUrls: ['./modal-edit-experience.component.css']
})
export class ModalEditExperienceComponent implements OnInit {
  form:FormGroup;
  expe: Experiencia= new Experiencia("","","","","");

  constructor(private sExperiencia:ExperienciaService, private formBuilder:FormBuilder, private router:Router, private activatedRoute:ActivatedRoute) {
    this.form = this.formBuilder.group({
      experiencia:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]],
      description:['',[Validators.required]],
      logo:['',[Validators.required]]
    })
  }

  ngOnInit():void{
    const id = this.activatedRoute.params.subscribe(e => {
      let id = e['id'];
      if(id){
        this.sExperiencia.ver(id).subscribe(ex => {
          this.expe = ex
        });
      }
    }
    );
  }

  onEdit():void{
    this.sExperiencia.update(this.expe).subscribe(data => {
    });
  }

  get Experiencia(){
    return this.form.get("experiencia");
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
      alert("Experiencia editada");
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
