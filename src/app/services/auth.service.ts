import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const dominio = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(datos): Observable<any>{
    let url = dominio + 'login.php';
    return this.http.post(url, JSON.stringify(datos));
  }
  isloggedin(){
    let islog = localStorage.getItem("login") === "valid";
    return islog;
  }

  storelogin() {
    localStorage.setItem("login", "valid");
  }

  logout() {
    localStorage.removeItem("login");
    this.router.navigateByUrl("/home");
  }

}
