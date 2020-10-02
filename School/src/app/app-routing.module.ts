import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { DummyComponent } from './dummy/dummy.component'
import { FormComponent } from './form/form.component'
import { HomeComponent } from './home/home.component'

import { SignupComponent } from './signup/signup.component'

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'Sign Up', component: SignupComponent },

import { BooksComponent } from './students/books/books.component'
import { NotesComponent } from './students/notes/notes.component'
import { StudentsComponent } from './students/students.component'
import { ProgramsComponent } from './programs/programs.component'

const routes: Routes = [
  {path: 'form', component: FormComponent},
  { path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'students', component: StudentsComponent},
  {path:'books', component:BooksComponent},
  {path:'notes', component:NotesComponent},
  {path:'programs', component: ProgramsComponent},
  {path:"dummy", component:DummyComponent},
  {path:"", component:HomeComponent}



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
