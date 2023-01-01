import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ModalBannerComponent } from './modals/modal-banner/modal-banner.component';
import { ModalProfileComponent } from './modals/modal-profile/modal-profile.component';
import { ModalAboutComponent } from './modals/modal-about/modal-about.component';
import { ModalSocialComponent } from './modals/modal-social/modal-social.component';
import { ModalAddSkillComponent } from './modals/modal-add-skill/modal-add-skill.component';
import { ModalEditSkillComponent } from './modals/modal-edit-skill/modal-edit-skill.component';
import { ModalEditEducationComponent } from './modals/modal-edit-education/modal-edit-education.component';
import { ModalAddEducationComponent } from './modals/modal-add-education/modal-add-education.component';
import { ModalAddExperienceComponent } from './modals/modal-add-experience/modal-add-experience.component';
import { ModalEditExperienceComponent } from './modals/modal-edit-experience/modal-edit-experience.component';
import { ModalAddProjectComponent } from './modals/modal-add-project/modal-add-project.component';
import { ModalEditProjectComponent } from './modals/modal-edit-project/modal-edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    ProjectsComponent,
    DashboardComponent,
    BannerComponent,
    NavbarComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ErrorComponent,
    FooterComponent,
    AboutmeComponent,
    ModalBannerComponent,
    ModalProfileComponent,
    ModalAboutComponent,
    ModalSocialComponent,
    ModalAddSkillComponent,
    ModalEditSkillComponent,
    ModalEditEducationComponent,
    ModalAddEducationComponent,
    ModalAddExperienceComponent,
    ModalEditExperienceComponent,
    ModalAddProjectComponent,
    ModalEditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
