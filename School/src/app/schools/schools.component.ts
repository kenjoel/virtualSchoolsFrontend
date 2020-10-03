import { Component, OnInit, Inject } from '@angular/core';
import { ComsumptionService } from "../comsumption.service";
import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  array:object;
  name:string;
  website:string;
  phone:string;
  address:string;
  email:string;

  getData(index){
    var obj = this.array[index];
    index = obj.id
    this.name = obj.schoolname;
    this.email = obj.schoolemail;
    this.website = obj.schoolwebsite;
    this.address = obj.schooladdress;
    this.phone = obj.schoolphone;
  }

  deleteSchool(index){
    var obj = this.array[index];
    index = obj.id
    this.service.deleteSchool(index).subscribe((data) => {
      console.log(data);
    })
    this._document.defaultView.location.reload();
  }

  constructor(private service:ComsumptionService, @Inject(DOCUMENT) private _document: Document) { 

  }

  ngOnInit(){
    this.service.getSchools().subscribe((data) => {
      data = data
      this.array = data
      console.log(this.array)
    })
  }

}
