import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  persona: Persona = new Persona("","","","","","","","","","");
  form:FormGroup;

  constructor(private sPersona:PersonaService, private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private router:Router) {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(4)]]
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

  cargarPersona():void{
    this.sPersona.ver(1).subscribe(data => {
      this.persona=data
    })
  }

  onEnviar(event: Event){
    event.preventDefault;
    if (this.form.valid){
    this.autenticacionService.loginPersona(JSON.stringify(this.form.value)).subscribe(data => {
        console.log("DATA: " + JSON.stringify(data));
        window.location.reload();
        this.router.navigate([''])
      }, error =>{
        alert("Error al iniciar sesión")
      })
       this.router.navigate([''])
    }  else {
      alert("Hay un error en el formulario")
    }
   
  }
  

}
