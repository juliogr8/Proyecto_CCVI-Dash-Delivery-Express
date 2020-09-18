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
    "01000": "Guatemala",
    "02000": "El Progreso",
    "03000": "Sacatepequez",
    "04000": "Chimaltenango",
    "05000": "Escuintla",
    "06000": "Santa Rosa",
    "07000": "Sololá",
    "08000": "Totonicapán",
    "09000": "Quetzaltenango",
    "10000": "Suchitepequez",
    "11000": "Retalhuleu",
    "12000": "San Marcos",
    "13000": "Huehuetenango",
    "14000": "Quiché",
    "15000": "Baja Verapaz",
    "16000": "Alta Verapaz",
    "17000": "Petén",
    "18000": "Izabal",
    "19000": "Zacapa",
    "20000": "Chiquimula",
    "21000": "Jalapa",
    "22000": "Jutiapa"
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
        this.no_orden = result
        console.log(result)
      }
        );
        if(this.tipo == "Sobres") { this.costo = "Costo de envío: Q30.00" }
        else { this.costo="Costo de envío: Q30.00" }
  }
}
