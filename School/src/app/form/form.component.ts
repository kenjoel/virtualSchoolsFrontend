import { Component, OnInit } from '@angular/core';
import { ComsumptionService } from "../comsumption.service";
import { Router } from "@angular/router";
// import { School } from "../school";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  // submittedForm(){
  //   this.service.postSchool()
  // }

  submitData(data){
    this.service.postSchool(data).subscribe((data) => {console.log(data)})
  }

  navigate(){
    this.router.navigate(["/schools"])
  }

  constructor(private service: ComsumptionService, private router:Router) { }

  ngOnInit(): void {
  }

}
