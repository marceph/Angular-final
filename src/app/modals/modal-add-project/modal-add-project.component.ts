import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-modal-add-project',
  templateUrl: './modal-add-project.component.html',
  styleUrls: ['./modal-add-project.component.css']
})
export class ModalAddProjectComponent implements OnInit {
  form:FormGroup;

  constructor(private sProyecto:ProyectoService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      proyecto:['',[Validators.required]],
      fin:[''],
      description:['',[Validators.required]],
      link:[''],
      logo:['']
    })
  }

  ngOnInit(): void {
  }

  onCrear():void{
    this.sProyecto.save(this.form.value).subscribe(data => {
      window.location.reload();
    });
  }

  get Proyecto(){
    return this.form.get("proyecto");
  }

  get Description(){
    return this.form.get("description");
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCrear();
      alert("Proyecto añadido");
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
