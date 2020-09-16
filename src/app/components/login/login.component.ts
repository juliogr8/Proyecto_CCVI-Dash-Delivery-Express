import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formisvalid:boolean;
  login={
    user:null,
    password:null
  }

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.formisvalid = false;
  }

  log() {
    console.log(this.login);
    this.auth.login(this.login).subscribe(datos => {
      console.log(datos['resultado'])
      if (datos['resultado']=='') {
        alert("Bienvenido!");
        this.auth.storelogin();
        this.formisvalid = true;
      }
      else  alert("Username and Password don't match.");
    });
  }

}
