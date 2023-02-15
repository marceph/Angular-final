import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[]=[];
  modoEdit: any;

  constructor(private sSkill:SkillService) { }

  ngOnInit(): void {
    this.loadSkill();
    if(sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    } else if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    } else {
      this.modoEdit = true;
    }
  }

  loadSkill():void{
    this.sSkill.list().subscribe(data => {
      this.skills=data
    });
  }

  delete(id:number){
    if(id != undefined){
      this.sSkill.delete(id).subscribe(data => {
        this.loadSkill();
      }, err => {
        window.location.reload();
      })
    }
  }

}
