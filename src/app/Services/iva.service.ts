import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIva } from '../Interfaces/iiva';

@Injectable({
  providedIn: 'root'
})
export class IvaService {
  apiurl = 'http://localhost/SextoVirtual/Tareas/CRUD_tienda/controllers/iva.controller.php?op=';


  constructor(private lector: HttpClient) {}

  todos(): Observable<IIva[]> {
    return this.lector.get<IIva[]>(this.apiurl + 'todos');
  }
}
