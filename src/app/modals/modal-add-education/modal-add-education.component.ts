import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-modal-add-education',
  templateUrl: './modal-add-education.component.html',
  styleUrls: ['./modal-add-education.component.css']
})
export class ModalAddEducationComponent implements OnInit {
  form:FormGroup;

  constructor(private sEstudio:EstudioService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      estudio:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      description:['',[Validators.required]],
      logo:['']
    })
  }

  ngOnInit(): void {
  }

  onCrear():void{
    this.sEstudio.save(this.form.value).subscribe(data => {
      window.location.reload();
    });
  }

  get Estudio(){
    return this.form.get("estudio");
  }

  get Description(){
    return this.form.get("description");
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCrear();
      alert("Estudio añadido");
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
