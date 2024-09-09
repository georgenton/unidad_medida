import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproveedor } from '../Interfaces/iproveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  apiurl = 'http://localhost/SextoVirtual/Tareas/CRUD_tienda/controllers/proveedores.controller.php?op=';
  prove:Iproveedor[] = [];
  constructor(private lector: HttpClient) { }

  todos():Observable<Iproveedor[]>{
    return this.lector.get<Iproveedor[]>(this.apiurl + 'todos');
  }

  uno(idProveedores:number):Observable<Iproveedor>{
    const formulario = new FormData();
    formulario.append('idProveedores', idProveedores.toString());
    return this.lector.post<Iproveedor>(this.apiurl + 'uno',formulario)

  }

  eliminar(idProveedores:number):Observable<number>{
    const formulario = new FormData();
    formulario.append('idProveedores', idProveedores.toString());
    return this.lector.post<number>(this.apiurl + 'eliminar',formulario)

  }

  insertar(proveedor: Iproveedor):Observable<string>{

    const formulario = new FormData();

    formulario.append('Nombre_Empresa', proveedor.Nombre_Empresa);
    formulario.append('Direccion', proveedor.Direccion);
    formulario.append('Telefono', proveedor.Telefono);
    formulario.append('Contacto_Empresa', proveedor.Contacto_Empresa);
    formulario.append('Teleofno_Contacto', proveedor.Teleofno_Contacto);

    return this.lector.post<string>(this.apiurl + 'insertar', formulario);
  }

  actualizar(proveedor: Iproveedor):Observable<string>{

    const formulario = new FormData();
    formulario.append('idProveedores', proveedor.idProveedores.toString());
    formulario.append('Nombre_Empresa', proveedor.Nombre_Empresa);
    formulario.append('Direccion', proveedor.Direccion);
    formulario.append('Telefono', proveedor.Telefono);
    formulario.append('Contacto_Empresa', proveedor.Contacto_Empresa);
    formulario.append('Teleofno_Contacto', proveedor.Teleofno_Contacto);

    return this.lector.post<string>(this.apiurl + 'actualizar', formulario);
  }

}