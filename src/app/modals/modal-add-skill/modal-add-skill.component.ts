import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-modal-add-skill',
  templateUrl: './modal-add-skill.component.html',
  styleUrls: ['./modal-add-skill.component.css']
})
export class ModalAddSkillComponent implements OnInit {
  form:FormGroup;

  constructor(private sSkill:SkillService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      skill:['',[Validators.required]],  
      percentage:['', [Validators.required, Validators.min(0), Validators.max(100)]]
    })
  }

  ngOnInit(): void {
  }

  onCreate():void{
    this.sSkill.save(this.form.value).subscribe(data => {
      window.location.reload();
    });
  }

  get Skill(){
    return this.form.get("skill");
  }

  get Percentage(){
    return this.form.get("percentage");
  }

  onSend(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onCreate();
      alert("Habilidad añadida");
      window.location.reload();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

  clean():void{
    this.form.reset();
  }

}
