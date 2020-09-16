import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { PasarOrdenService } from 'src/app/services/pasar-orden.service';

@Component({
  selector: 'app-order-progress',
  templateUrl: './order-progress.component.html',
  styleUrls: ['./order-progress.component.sass']
})
export class OrderProgressComponent implements OnInit {

  no_orden:string;
  val="";
  ord={
    no_orden:null,
    destinatario:null,
    ciudad:null,
    direccion:null,
    costo:null,
    idstatus:null,
    stat:null
  }

  constructor(private ordenservicio:OrdenesService, private pasar_orden:PasarOrdenService) { }

  ngOnInit(): void {
    this.pasar_orden.currOrden.subscribe(orden =>{
      this.no_orden = orden

      this.ordenservicio.BuscarOrden(this.no_orden).subscribe(result => {
        this.ord = result[0]
        switch(this.ord.idstatus){
          case "1": {
            this.val="20"
            break
          }
          case "2": {
            this.val="40"
            break
          }
          case "3": {
            this.val="60"
            break
          }
          case "4": {
            this.val="80"
            break
          }
          case "5": {
            this.val="100"
            break
          }
          default: {
            this.val="0"
            break
          }
        }
        console.log(this.ord)
      })

    })


  }

  changestatus(){
    switch(this.ord.idstatus){
      case "1": {
        this.ord.idstatus = "2";
        this.ord.stat = "Surtiéndose."
        this.val="40"
        break
      }
      case "2": {
        this.ord.idstatus = "3";
        this.ord.stat = "Empacándose."
        this.val="60"
        break
      }
      case "3": {
        this.ord.idstatus = "4";
        this.ord.stat = "En ruta."
        this.val="80"
        break
      }
      case "4": {
        this.ord.idstatus = "5";
        this.ord.stat = "Entregándose."
        this.val="100"
        break
      }
      case "5": {
        this.val="100"
        break
      }
      default: {
        break
      }
    }
  }
}
