import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  username:string|undefined;
  constructor(){}
  setUsername(data: string | undefined){
      this.username = data;
      
  }
  getUsername(){
      return this.username;
  }
}