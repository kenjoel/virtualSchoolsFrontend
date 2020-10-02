import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { FormComponent } from './form/form.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { ProgramsComponent } from './programs/programs.component'

const routes: Routes = [
  {path: 'form', component: FormComponent},
  { path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'programs', component: ProgramsComponent},
  {path: 'login', component: LoginComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
