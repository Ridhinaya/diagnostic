import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL="http://localhost:8080/api/hc/user";

  constructor(private httpClient:HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  //Create/add User
  createUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }
  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`)
  }
  updateUser(id:number):Observable<User>{
    return this.httpClient.put<User>(`${this.baseURL}/${id}`, User);
  }

}
