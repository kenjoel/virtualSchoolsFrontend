import { Component, Input, OnInit } from '@angular/core';
import {Notes} from '../../notes';
@Component({
  selector: 'app-notesdetails',
  templateUrl: './notesdetails.component.html',
  styleUrls: ['./notesdetails.component.css']
})
export class NotesdetailsComponent implements OnInit {

  @Input() notes:Notes;

  constructor() { }

  ngOnInit(): void {
  }

}
