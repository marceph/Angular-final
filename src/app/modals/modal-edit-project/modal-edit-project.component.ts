import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-modal-edit-project',
  templateUrl: './modal-edit-project.component.html',
  styleUrls: ['./modal-edit-project.component.css']
})
export class ModalEditProjectComponent implements OnInit {
  form:FormGroup;
  proye: Proyecto= new Proyecto("","","","","");

  constructor(private sProyecto:ProyectoService, private formBuilder:FormBuilder, private router:Router, private activatedRoute:ActivatedRoute) {
    this.form = this.formBuilder.group({
      proyecto:['',[Validators.required]],
      fin:['',[Validators.required]],
      description:['',[Validators.required]],
      link:['',[Validators.required]],
      logo:['',[Validators.required]]
    })
  }

  ngOnInit():void{
    const id = this.activatedRoute.params.subscribe(p => {
      let id = p['id'];
      if(id){
        this.sProyecto.ver(id).subscribe(pro => {
          this.proye = pro
        });
      }
    }
    );
  }

  onEdit():void{
    this.sProyecto.update(this.proye).subscribe(data => {
    });
  }

  get Proyecto(){
    return this.form.get("proyecto");
  }

  get Fin(){
    return this.form.get("fin");
  }

  get Description(){
    return this.form.get("description");
  }

  get Link(){
    return this.form.get("link");
  }

  get Logo(){
    return this.form.get("logo");
  }

  onSend(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onEdit();
      alert("Proyecto editado");
      this.router.navigate(['/projects']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

  clean():void{
    this.form.reset();
  }

}
