import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICliente } from '../Interfaces/icliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiurl = 'http://localhost/SextoVirtual/Tareas/CRUD_tienda/controllers/clientes.controller.php?op=';
  prove:ICliente[] = [];
  constructor(private lector: HttpClient) { }

  todos():Observable<ICliente[]>{
    return this.lector.get<ICliente[]>(this.apiurl + 'todos');
  }

  uno(idClientes:number):Observable<ICliente>{
    const formulario = new FormData();
    formulario.append('idClientes', idClientes.toString());
    return this.lector.post<ICliente>(this.apiurl + 'uno',formulario)

  }

  eliminar(idClientes:number):Observable<number>{
    const formulario = new FormData();
    formulario.append('idClientes', idClientes.toString());
    return this.lector.post<number>(this.apiurl + 'eliminar',formulario)

  }

  insertar(cliente: ICliente):Observable<string>{

    const formulario = new FormData();

    formulario.append('Nombres', cliente.Nombres);
    formulario.append('Direccion', cliente.Direccion);
    formulario.append('Telefono', cliente.Telefono);
    formulario.append('Cedula', cliente.Cedula);
    formulario.append('Correo', cliente.Correo);

    return this.lector.post<string>(this.apiurl + 'insertar', formulario);
  }

  actualizar(cliente: ICliente):Observable<string>{

    const formulario = new FormData();
    formulario.append('idClientes', cliente.idClientes.toString());
    formulario.append('Nombres', cliente.Nombres);
    formulario.append('Direccion', cliente.Direccion);
    formulario.append('Telefono', cliente.Telefono);
    formulario.append('Cedula', cliente.Cedula);
    formulario.append('Correo', cliente.Correo);

    return this.lector.post<string>(this.apiurl + 'actualizar', formulario);
  }

}