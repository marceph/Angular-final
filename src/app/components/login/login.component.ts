import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //variable temporal
  personas: Persona[]=[];
  
  persona?: Persona;
  form:FormGroup;

  constructor(private sPersona:PersonaService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.cargarPersona();
  }

  get Password(){
    return this.form.get("password");
  }
 
  get Email(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get EmailValid(){
    return this.Email?.touched && !this.Email?.valid;
  }

  // cargarPersona():void{
  //   this.sPersona.ver(5).subscribe(data => {
  //     this.persona=data
  //   })
  // }

  //Carga temporal de persona
  cargarPersona():void{
    this.sPersona.lista().subscribe(data => {
      this.personas=data
      let id = this.personas.length;
      this.sPersona.ver(id).subscribe(data=>{this.persona=data})
    })
  }

  onEnviar(event: Event){
    event.preventDefault;
    if (this.form.valid){
      alert("Todo salio bien ¡Enviar formuario!");
    }else{   
      this.form.markAllAsTouched();
    }
  }

}
