import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component'
import { FormComponent } from './form/form.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'

import { NavbarComponent } from './navbar/navbar.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudentsComponent } from './students/students.component';
import { BooksComponent } from './students/books/books.component';
import { BookdetailsComponent } from './students/bookdetails/bookdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AboutusComponent,
    StudentsComponent,
    BooksComponent,
    BookdetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
