import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostic } from './diagnostic';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  private baseURL="http://localhost:8080/api/h1/diagnostic"

  constructor(private httpClient:HttpClient) { }
  getDiagnosticsList(): Observable<Diagnostic[]>{
    return this.httpClient.get<Diagnostic[]>(`${this.baseURL}`);
  }
  //Create/add diagnostic
  createDiagnostic(diagnostic:Diagnostic):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, diagnostic);
  }
  getDiagnosticById(id:number):Observable<Diagnostic>{
    return this.httpClient.get<Diagnostic>(`${this.baseURL}/${id}`)
  }
  updateDiagnostic(id:number):Observable<Diagnostic>{
    return this.httpClient.put<Diagnostic>(`${this.baseURL}/${id}`, Diagnostic);
  }

}
