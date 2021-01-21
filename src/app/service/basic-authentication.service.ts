import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  // authenticate(username, password) {
  //   // console.log('before ' + this.isUserLoggedIn());
  //   if (username === 'amandaw' && password === 'noodles') {
  //     sessionStorage.setItem('authenticatedUser', username);
  //     // console.log('after ' + this.isUserLoggedIn());
  //     return true;
  //   }
  //   return false;
  // }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>
      (`http://localhost:8080/basicauth`,
        { headers }).pipe(
          map(
            data => {
              sessionStorage.setItem('authenticatedUser', username)
              sessionStorage.setItem('token', basicAuthHeaderString)
              return data;
            }
          )
        );

    //console.log("Execute Hello World Bean Service")
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
}