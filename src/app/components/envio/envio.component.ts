import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.sass']
})
export class EnvioComponent implements OnInit {
  tipo:string
  no_orden
  ciudadselect:string
  costo:string
  ord={
    destinatario:null,
    cod_postal:null,
    direccion:null
  }

  ciudad = {
    "01001": "Guatemala",
    "02001": "Guastatoya",
    "03001": "Antigua Guatemala",
    "04001": "Chimaltenango",
    "05001": "Escuintla",
    "06001": "Cuilapa",
    "07001": "Sololá",
    "08001": "Totonicapán",
    "09001": "Quetzaltenango",
    "10001": "Mazatenango",
    "11001": "Retalhuleu",
    "12001": "San Marcos",
    "13001": "Huehuetenango",
    "14001": "Santa Cruz Quiché",
    "15001": "Salamá",
    "16001": "Cobán",
    "17001": "Petén",
    "18001": "Izabal",
    "19001": "Zacapa",
    "20001": "Chiquimula",
    "21001": "Jalapa",
    "22001": "Jutiapa"
  }

  val = Object.values(this.ciudad)



  constructor(private ordenesServicio:OrdenesService) { }

  ngOnInit(): void {
    console.log(this.val)
  }

  getKeyByValue(object, value:string) {
    return Object.keys(object).find(key => object[key] === value);
  }


  envio() {
    this.ord.cod_postal = this.getKeyByValue(this.ciudad, this.ciudadselect)
    this.ordenesServicio.HacerPedido(this.ord).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);

      }
    });
      this.ordenesServicio.getNo_Orden().subscribe(result => {
        this.no_orden = "Su número de orden es: " + result[0].last_value
        this.costo = "Costo: " + result[0].costo
        console.log(result)
        console.log(this.no_orden)
      }
        );
  }
}
