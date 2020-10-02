import { Component, Input, OnInit } from '@angular/core';
import {Books} from '../../books';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  @Input() book:Books;



  constructor() { }

  ngOnInit(): void {
  }

}
