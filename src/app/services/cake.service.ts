import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

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
  getAllCakes(){
    let token=localStorage.getItem("token")??""
    let header=new HttpHeaders({
      "content-type":"application/json",
      "Authorization":token
    })
    return this.http.get(`${this.baseUrl}/cakes/`,{"headers":header})
  }
  getCakeDetail(id:any){
    let token=localStorage.getItem("token")??""
    let header=new HttpHeaders({
      "content-type":"application/json",
      "Authorization":token
    })
    return this.http.get(`${this.baseUrl}/cakes/${id}/`,{"headers":header})
  }
}


