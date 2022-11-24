import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  //for rxjs we have to run the command [npm i rxjs] after it will work

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http : HttpClient) { }
 
//  postData():Observable<any>{
//   return this.http.post('Url');
//  }
}
