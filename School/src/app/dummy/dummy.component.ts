import { Component, OnInit } from '@angular/core';
import { ComsumptionService } from "../comsumption.service";

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  array:any[]

  getAllSchools(){
    this.service.getSchools().subscribe( obj => {
      this.array = obj[0]
      console.log(this.array)
    })
  }

  constructor(private service:ComsumptionService) { }

  ngOnInit(): void {
  }

}
