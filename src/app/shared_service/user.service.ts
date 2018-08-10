import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
import {User} from '../user';
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl:string='http://localhost:8080/api';
//private headers = new Headers({'Content-Type':'application/json'});
//private options = new RequestOptions({headers:this.headers});
private user:User;


  constructor(private _http: HttpClient) { }

  getUsers():Observable<User[]>{

    return this._http.get<User[]>(this.baseUrl+'/users');

    //return this._http.get(this.baseUrl+'/users',this.options).map((response:Response)=>response.json())
    //.catch(this.errorHandler);
  }
  getUser(id:Number){

    return this._http.get<User[]>(this.baseUrl+'/users/'+id);
  }

 
  deleteUser(id:Number){

    return this._http.delete<User[]>(this.baseUrl+'/users/'+id);
  }

  createUser(user:User):Observable<User[]>{

    return this._http.post<User[]>(this.baseUrl+'/users',JSON.stringify(user));
  } 
  updateUser(user:User):Observable<User[]>{

    return this._http.put<User[]>(this.baseUrl+'/users',JSON.stringify(user));
    
  } 
 // errorHandler(error:Response){
    // return Observable.throw(error||"SERVER ERROR");
  // }
  //setter(user:User){
   // this.user=user;
  //}
  //getter(){
   // return this.user;
 // }
}
