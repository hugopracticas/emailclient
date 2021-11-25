import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupCredentials, SignupResponse, UsernameAvailableResponse } from './signup/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient ) {

  }

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(`${this.rootUrl}/auth/username`, {
      //username: username
      username
    });
  }

  signup(credentials: SignupCredentials ){
    return this.http.post<SignupResponse>(
      `${this.rootUrl}/auth/signup`,
      credentials
    );
  }
}
