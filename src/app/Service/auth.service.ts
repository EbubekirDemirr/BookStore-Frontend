import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../Models/LoginModel';
import { ResponseModel } from '../Models/responseModel';
import { TokenModel } from '../Models/TokenModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { RegisterModel } from '../Models/RegisterModel';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserModel } from '../Models/UserModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
user:UserModel;


  apiUrl = 'https://localhost:44319/api/Users/login';
  apiUrl1="https://localhost:44319/api/";

  constructor(private httpClient: HttpClient, private localStorageService:LocalstorageService, private jwtHelper:JwtHelperService) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl,
      loginModel
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  register(
    registerModel: RegisterModel
  ): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl1 + 'Users/register',
      registerModel
    );
  }

  decodedToken(token:any){
    return this.jwtHelper.decodeToken(token)
  }


  loggedIn(){
    if(this.localStorageService.getToken()){
      return this.jwtHelper.isTokenExpired()// true/false 
    }
    else{
      return false;
    }
  }


  getUserInfo(){
    let decodedToken = this.decodedToken(this.localStorageService.getToken())
    if (decodedToken) {
      if (this.loggedIn()) {
        let tokenInfoName= Object.keys(decodedToken).filter(u=> u.endsWith('/name'))[0]
        var splitted=String(decodedToken[tokenInfoName]).split(" ")
        let userName=splitted[0];
        let tokenInfoId= Object.keys(decodedToken).filter(x=> x.endsWith('/nameidentifier'))[0]
        let emailInfo= decodedToken.email; 
        
        this.user={
          userName : userName,
          email:emailInfo,

        }      
      }
    }
    return this.user;
  }


}
