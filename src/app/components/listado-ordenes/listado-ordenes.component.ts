import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrdenesService } from 'src/app/services/ordenes.service';


@Component({
  selector: 'app-listado-ordenes',
  templateUrl: './listado-ordenes.component.html',
  styleUrls: ['./listado-ordenes.component.sass']
})
export class ListadoOrdenesComponent implements OnInit {

  ordenes = null;
  ord={
    no_orden:null,
    destinatario:null,
    cod_postal:null,
    direccion:null,
    tienda:null,
    id_status:null,
    fecha_pedido:null,
    costo:null
  }
  constructor(private ordenServicio:OrdenesService, private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
    if(!this.auth.isloggedin()) this.router.navigateByUrl('/home');
    this.recuperarOrdenes()
  }
  recuperarOrdenes() {
    this.ordenServicio.RecuperarOrdenes().subscribe(result => this.ordenes = result);
  }

}
