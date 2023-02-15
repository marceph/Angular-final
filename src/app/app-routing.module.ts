import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ModalEditEducationComponent } from './modals/modal-edit-education/modal-edit-education.component';
import { ModalEditExperienceComponent } from './modals/modal-edit-experience/modal-edit-experience.component';
import { ModalEditProjectComponent } from './modals/modal-edit-project/modal-edit-project.component';
import { ModalEditSkillComponent } from './modals/modal-edit-skill/modal-edit-skill.component';
import { ModalProfileComponent } from './modals/modal-profile/modal-profile.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'login', component:LoginComponent, canActivate: [GuardGuard]},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'editProfile/:id', component:ModalProfileComponent},
  {path: 'editSkill/:id', component:ModalEditSkillComponent},
  {path: 'editEducation/:id', component:ModalEditEducationComponent},
  {path: 'editExperience/:id', component:ModalEditExperienceComponent},
  {path: 'editProject/:id', component:ModalEditProjectComponent},
  {path: '', redirectTo: 'index', pathMatch:'full'},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
