import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EducationComponent } from './pages/education/education.component';
import { SkillComponent } from './pages/skill/skill.component';
import { ProjectComponent } from './pages/project/project.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' }, // default
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
