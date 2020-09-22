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
    "02001": "El Progreso",
    "03001": "Sacatepequez",
    "04001": "Chimaltenango",
    "05001": "Escuintla",
    "06001": "Santa Rosa",
    "07001": "Sololá",
    "08001": "Totonicapán",
    "09001": "Quetzaltenango",
    "10001": "Suchitepequez",
    "11001": "Retalhuleu",
    "12001": "San Marcos",
    "13001": "Huehuetenango",
    "14001": "Quiché",
    "15001": "Baja Verapaz",
    "16001": "Alta Verapaz",
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
        console.log(result)
        console.log(this.no_orden)
      }
        );
        if(this.tipo == "Sobres") { this.costo = "Costo de envío: Q30.00" }
        else { this.costo="Costo de envío: Q30.00" }
  }
}
