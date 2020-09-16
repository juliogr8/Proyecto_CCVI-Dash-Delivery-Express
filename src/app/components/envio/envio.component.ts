import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.sass']
})
export class EnvioComponent implements OnInit {

  ord={
    no_orden: null,
    destinatario:null,
    cod_postal:null,
    direccion:null
  }



  constructor(private ordenesServicio:OrdenesService) { }

  ngOnInit(): void {
  }
  envio() {
    this.ordenesServicio.HacerPedido(this.ord).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
      }
    });
  }
}
