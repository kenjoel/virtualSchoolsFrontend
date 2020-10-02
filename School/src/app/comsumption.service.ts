import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ComsumptionService {

  constructor(private http:HttpClient) { }

  getSchools(){
    return this.http.get("https://finaldeployment.herokuapp.com/" + "schools",  ({
      headers: new HttpHeaders({Authorization:"Access-Control-Allow-Headers, Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS, Access-Control-Allow-Origin"})
  }))
}

  getStudents(){
    return this.http.get("https://finaldeployment.herokuapp.com/students");
  }

}
