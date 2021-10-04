import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from '../Project';
import { Users } from '../user';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) {

   }
   getprojects():Observable<Projects[]> {
      return this.http.get<Projects[]>('./assets/data/data.json')
  }

  getUsers():Observable<Users[]>{
    let dta =  this.http.get<Users[]>('./assets/data/user.json');
     console.log(dta);
     return dta
  }
}
