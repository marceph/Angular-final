import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-add-experience',
  templateUrl: './modal-add-experience.component.html',
  styleUrls: ['./modal-add-experience.component.css']
})
export class ModalAddExperienceComponent implements OnInit {
  form:FormGroup;

  constructor(private sExperiencia:ExperienciaService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      experiencia:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      description:['',[Validators.required]],
      logo:['']
    })
  }

  ngOnInit(): void {
  }

  onCrear():void{
    this.sExperiencia.save(this.form.value).subscribe(data => {
      window.location.reload();
    });
  }

  get Experiencia(){
    return this.form.get("experiencia");
  }

  get Description(){
    return this.form.get("description");
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCrear();
      alert("Experiencia añadida");
      window.location.reload();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

  limpiar():void{
    this.form.reset();
  }
  
}
