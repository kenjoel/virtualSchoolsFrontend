import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ComsumptionService {

  constructor(private http:HttpClient) { }

  getSchools(){
    return this.http.get("https://finaldeployment.herokuapp.com/schools");
}

  getStudents(){
    return this.http.get("https://finaldeployment.herokuapp.com/students");
  }

}
