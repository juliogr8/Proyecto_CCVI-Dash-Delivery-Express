import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { PasarOrdenService } from 'src/app/services/pasar-orden.service';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  no_orden:string;
  curr_orden:string;




  constructor(private router: Router, private ordenservicio:OrdenesService,
    private pasar_orden:PasarOrdenService, public auth:AuthService, public dialog:MatDialog) { }
  ngOnInit(): void {
    this.pasar_orden.currOrden.subscribe(orden => this.curr_orden = orden)
  }

  newOrden() {
    this.pasar_orden.changeOrden(this.no_orden);
  }

  goto(r:string){
    this.router.navigateByUrl(r);
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent,
      {
       width: '400px',
       height:'240px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    logout() {
      this.router.navigateByUrl('/home');
      this.auth.logout();

    }
}
