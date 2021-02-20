import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient:HttpClient) {
    console.log("ctor")
  }

  private baseURL:string = "http://localhost:3000/users";

  //get all users
  getUsers(){
    return this.myClient.get(this.baseURL)
  }
  //get user id
  getUserById(id){
    return this.myClient.get(`${this.baseURL}/${id}`);
  }
  //patch edit profile
  // editUser(id){
  //   return this.myClient.patch(`${this.baseURL}/${id}`);
  // }
  //delete user id
  deleteUser(id){
    return this.myClient.delete(`${this.baseURL}/${id}`);
  }
}
