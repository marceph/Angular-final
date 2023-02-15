import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-modal-edit-skill',
  templateUrl: './modal-edit-skill.component.html',
  styleUrls: ['./modal-edit-skill.component.css']
})
export class ModalEditSkillComponent implements OnInit {
  form:FormGroup;
  skil: Skill= new Skill("",0);

  constructor(private sSkill:SkillService, private formBuilder:FormBuilder, private router:Router, private activatedRoute:ActivatedRoute) {
    this.form = this.formBuilder.group({
      skill:['',[Validators.required]],  
      percentage:['', [Validators.required, Validators.min(0), Validators.max(100)]]
    })
  }

  ngOnInit():void{
    const id = this.activatedRoute.params.subscribe(s => {
      let id = s['id'];
      if(id){
        this.sSkill.view(id).subscribe(ski => {
          this.skil = ski
        });
      }
    }
    );
  }

  onEdit():void{
    this.sSkill.update(this.skil).subscribe(data => {
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
      this.onEdit();
      alert("Habilidad editada");
      this.router.navigate(['']);
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

  clean():void{
    this.form.reset();
  }

}
