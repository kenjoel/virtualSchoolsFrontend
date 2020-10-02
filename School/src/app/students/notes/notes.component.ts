import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Notes} from '../../notes';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes = [
    new Notes('Ian Wilbert','Form Three','any')
  ]

  @Output () emitNotes = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

}
