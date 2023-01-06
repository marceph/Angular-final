import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RedService } from 'src/app/services/red.service';

@Component({
  selector: 'app-modal-social',
  templateUrl: './modal-social.component.html',
  styleUrls: ['./modal-social.component.css']
})
export class ModalSocialComponent implements OnInit {
  form:FormGroup;

  constructor(private sRed:RedService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      red:['',[Validators.required]],
      link:['',[Validators.required]],
      icono:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onCrear():void{
    this.sRed.save(this.form.value).subscribe(data => {
      alert("Red añadida");
      window.location.reload();
    });
  }

  get Red(){
    return this.form.get("red");
  }

  get Link(){
    return this.form.get("link");
  }

  get Icono(){
    return this.form.get("icono");
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCrear();
      alert("Red añadida");
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
