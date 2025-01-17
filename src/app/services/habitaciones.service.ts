import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
 
  constructor(public peticion:HttpClient) { }


  consultarHabitaciones():Observable<any>{
    let uri="http://serve20222.herokuapp.com/hotelesnick/habitaciones"
    return this.peticion.get(uri)
  }

  consultarHabitacionPorId():Observable<any>{
    let uri = "http://apibri.herokuapp.com/hotelesnick/habitacion";
    let id = "id";
    return this.peticion.get(uri+id)
  }

}
