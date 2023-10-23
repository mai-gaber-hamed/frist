import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class JsonservicesService {
baseurl:string='http://localhost:3005/Products'
  constructor(public http:HttpClient) { }
  getall(){
    return this.http.get(this.baseurl)
  }
  getbyid(id:number){
    return this.http.get(`${this.baseurl}/${id}`)

  }
  addnew(product:any){
    return this.http.post(this.baseurl,product)
  }
  remove(id:number){
    return this.http.delete(`${this.baseurl}/${id}`)
  }
  edit(id:number,product:any){
    return this.http.put(`${this.baseurl}/${id}`,product)
  }

}
