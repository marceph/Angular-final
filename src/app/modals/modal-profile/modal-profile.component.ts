import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {
  form: FormGroup;
  persona?: Persona;
  perso: Persona= new Persona("","","","","","","","","","");

  constructor(private formBuilder: FormBuilder, private sPersona:PersonaService, private activatedRoute:ActivatedRoute, private router:Router) {
    this.form=this.formBuilder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      titulo:['',[Validators.required]],
      aboutme:['',[Validators.required]],
      banner:['',[Validators.required]],
      img:['',[Validators.required]],
      username:['',[Validators.required]],
      cv:['',[Validators.required]]
   })
   }

   ngOnInit(): void {
    const id = this.activatedRoute.params.subscribe(p => {
      let id = p['id'];
      if(id){
        this.sPersona.ver(id).subscribe(per => {
          this.perso = per
        });
      }
    }
    );
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Apellido(){
    return this.form.get("apellido");
  }

  get Titulo(){
    return this.form.get("titulo");
  }
  
  get Aboutme(){
    return this.form.get("aboutme");
  }

  get Banner(){
    return this.form.get("banner");
  }

  get Img(){
    return this.form.get("img");
  }

  get Username(){
    return this.form.get("username");
  }

  get Cv(){
    return this.form.get("cv");
  }

  onEdit():void{
    this.sPersona.update(this.perso).subscribe(data => {
    });
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onEdit();
      alert("Persona editada.");
      this.router.navigate(['']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

  limpiar():void{
    this.form.reset();
  }

}
