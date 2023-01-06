import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-modal-banner',
  templateUrl: './modal-banner.component.html',
  styleUrls: ['./modal-banner.component.css']
})
export class ModalBannerComponent implements OnInit {
  form:FormGroup;
  // perso:Persona;

  banner: string='';
  cv: string='';

  constructor(private formBuilder:FormBuilder, private sPersona:PersonaService) {
    this.form = this.formBuilder.group({
      banner:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get Banner(){
    return this.form.get("banner");
  }

}
