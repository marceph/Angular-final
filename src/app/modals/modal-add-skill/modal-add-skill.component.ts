import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-modal-add-skill',
  templateUrl: './modal-add-skill.component.html',
  styleUrls: ['./modal-add-skill.component.css']
})
export class ModalAddSkillComponent implements OnInit {
  form:FormGroup;

  habilidad: string='';
  porcentaje: number=0;

  constructor(private sHabilidad:HabilidadService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      habilidad:['',[Validators.required]],  
      porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]]
    })
  }

  ngOnInit(): void {
  }

  onCrear():void{
    const habi = new Habilidad(this.habilidad, this.porcentaje);
    this.sHabilidad.save(habi).subscribe(data => {
      alert("Habilidad añadida");
      window.location.reload();
    });
  }

  get Habilidad(){
    return this.form.get("habilidad");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  get HabilidadValid(){
    return this.Habilidad?.touched && !this.Habilidad?.valid;
  }

  get PorcentajeValid(){
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCrear();
      alert("Habilidad añadida");
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
