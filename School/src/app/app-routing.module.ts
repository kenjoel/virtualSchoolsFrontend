import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { DummyComponent } from './dummy/dummy.component'
import { FormComponent } from './form/form.component'
import { HomeComponent } from './home/home.component'
<<<<<<< HEAD
import { LoginComponent } from './login/login.component'
=======
import { BooksComponent } from './students/books/books.component'
import { NotesComponent } from './students/notes/notes.component'
import { StudentsComponent } from './students/students.component'
>>>>>>> 768f319386800033b29c782c1182b8770e613ded
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
<<<<<<< HEAD
  {path: 'login', component: LoginComponent},
=======
  {path:"dummy", component:DummyComponent},
  {path:"", component:HomeComponent}
>>>>>>> 768f319386800033b29c782c1182b8770e613ded

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
