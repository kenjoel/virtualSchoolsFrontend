import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { FormComponent } from './form/form.component'
import { HomeComponent } from './home/home.component'
import { BooksComponent } from './students/books/books.component'
import { NotesComponent } from './students/notes/notes.component'
import { StudentsComponent } from './students/students.component'
import { ProgramsComponent } from './programs/programs.component'
import { SchoolsComponent } from "./schools/schools.component";

const routes: Routes = [
  {path: 'form', component: FormComponent},
  { path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'students', component: StudentsComponent},
  {path:'books', component:BooksComponent},
  {path:'notes', component:NotesComponent},
  {path:'programs', component: ProgramsComponent},
  {path: "schools", component:SchoolsComponent},
  {path:"", component:HomeComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
