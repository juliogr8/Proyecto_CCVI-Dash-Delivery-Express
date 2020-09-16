import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasarOrdenService {



  private ordensource = new BehaviorSubject('00000000000');
  currOrden = this.ordensource.asObservable();
  constructor() { }

  changeOrden(orden: string) {
    this.ordensource.next(orden)
  }

}
