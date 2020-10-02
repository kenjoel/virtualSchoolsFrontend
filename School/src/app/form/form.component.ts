import { Component, OnInit } from '@angular/core';
import { ComsumptionService } from "../comsumption.service";
import { School } from "../school";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  // submittedForm(){
  //   this.service.postSchool()
  // }

  constructor(private service: ComsumptionService) { }

  ngOnInit(): void {
  }

}
