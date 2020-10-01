import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
