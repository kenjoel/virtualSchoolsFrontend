import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormComponent } from './form/form.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'

import { NavbarComponent } from './navbar/navbar.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { SignupComponent } from './signup/signup.component'
import { StudentsComponent } from './students/students.component'
import { BooksComponent } from './students/books/books.component'
import { BookdetailsComponent } from './students/bookdetails/bookdetails.component'
import { NotesComponent } from './students/notes/notes.component'
import { NotesdetailsComponent } from './students/notesdetails/notesdetails.component'
import { ProgramsComponent } from './programs/programs.component'
import { DummyComponent } from './dummy/dummy.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AboutusComponent,
    SignupComponent,
    ProgramsComponent,
    DummyComponent,
    StudentsComponent,
    BooksComponent,
    BookdetailsComponent,
    NotesComponent,
    NotesdetailsComponent,
    ProgramsComponent,
    ProgramsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
