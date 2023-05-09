import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  baseUrl=`http://127.0.0.1:8000/api`

  constructor(private http:HttpClient) { }
  signUp(data:any){
    return this.http.post(`${this.baseUrl}/register/`,data)
  }

  getToken(data:any){
    return this.http.post(`${this.baseUrl}/token/`,data)
  }
}

