import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupCredentials, SignupResponse, UsernameAvailableResponse } from './signup/interfaces';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject( false );

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
      credentials ).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }

  checkAuth(){
    return this.http.get(`${this.rootUrl}/auth/signedin`).pipe(
      tap(response => {
        console.log( response );
      })
    )
  }
}
