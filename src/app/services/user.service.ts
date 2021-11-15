import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL:string="http://localhost:3000/users";
  constructor(private httpClient:HttpClient) { }


  signup(user:any, img:File){
    let formData = new FormData();
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('pwd', user.pwd);
    formData.append('img', img);
    return this.httpClient.post<{message:string}>(`${this.userURL}/signup`, formData);
  }
  login(user:any){
    return this.httpClient.post<{msg:string,userToSend:any}>(`${this.userURL}/login`, user);
  }

  getUserById(id:number){
    return this.httpClient.get<{findedUser:any}>(`${this.userURL}/find/${id}`);
  }
}
