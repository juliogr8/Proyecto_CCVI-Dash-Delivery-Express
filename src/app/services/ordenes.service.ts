import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const dominio = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class OrdenesService {


  constructor(private http: HttpClient) { }

  BuscarOrden(no_orden:string){
    let url = dominio + `BuscarOrden.php?no_orden=${no_orden}`
    return this.http.get(url)
  }

  HacerPedido(data) {
    let url = dominio + "Ordenar.php"
    return this.http.post(url, JSON.stringify(data));
  }

  RecuperarOrdenes(){
    let url = dominio + "listado_orden.php"
    return this.http.get(url)
  }

  CambiarEstado(data){
    let url = dominio + "Cambiar_Estado.php"
    return this.http.post(url, JSON.stringify(data));
  }
  getNo_Orden(){
    let url = dominio + "Retornar_No_Orden.php"
    return this.http.get(url)
  }

}
