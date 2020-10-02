import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Books} from '../../books';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
   books = [
    new Books('The river and the Source','An english book','https://www.goodreads.com/book/show/2599364-the-river-and-the-source')
   ]

   @Output() emitBook = new EventEmitter()
   words:string
   bookname:string
   description:string
   url:string
  theWords: Books;


   submitBook(){
     this.theWords = new Books(this.bookname, this.description,this.url)
     this.bookname=''
     this.description=''
     this.url=''
     this.emitBook.emit(this.theWords)
   }

  constructor() { }

  ngOnInit(): void {
  }

}
