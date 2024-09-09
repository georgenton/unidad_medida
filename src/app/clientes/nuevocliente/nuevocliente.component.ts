import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { ICliente } from 'src/app/Interfaces/icliente';
import { ClienteService } from 'src/app/Services/clientes.service';

@Component({
  selector: 'app-nuevocliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevocliente.component.html',
  styleUrl: './nuevocliente.component.scss'
})
export class NuevoclienteComponent implements OnInit {
  titulo = 'Insertar Cliente';
  tituloBoton = 'Grabar Cliente';
  idClientes = 0;
  Nombres: string;
  Direccion:string;
  Telefono:string;
  Cedula:string;
  Correo:string;
  
  constructor(
    private clienteServicio: ClienteService, 
    private navegacion:Router,
    private ruta:ActivatedRoute
  ){ }

  ngOnInit(): void {
    // this.idProveedores = this.ruta.snapshot.params['id'];
    this.idClientes = parseInt(this.ruta.snapshot.paramMap.get('id'));

    if(this.idClientes > 0){
      this.clienteServicio.uno(this.idClientes).subscribe(
        (cliente) => {
          this.Nombres = cliente.Nombres;
          this.Direccion = cliente.Direccion;
          this.Telefono = cliente.Telefono;
          this.Cedula = cliente.Cedula;
          this.Correo = cliente.Correo;
          this.titulo = "Actualizar Clientes";
          this.tituloBoton = "Actualizar Cliente";
        }
      );
    }
  }
  grabar(){
    let ICliente:ICliente= {
      idClientes:0,
      Nombres:this.Nombres,
      Direccion:this.Direccion,
      Telefono:this.Telefono,
      Cedula:this.Cedula,
      Correo:this.Correo
    };

    if(this.idClientes == 0 || isNaN(this.idClientes)){

    this.clienteServicio.insertar(ICliente).subscribe(
      (respuesta)=>{
          // parseInt(respuesta) > 1 ? alert("Grabado con éxito"): alert("Error al grabar");

          if(parseInt(respuesta)> 1){
            alert("Grabado con éxito");
            this.navegacion.navigate(['/clientes']);
          }else{
            alert("Error al grabar");
          }
      }
    );
  }else{
    ICliente.idClientes = this.idClientes;
    this.clienteServicio.actualizar(ICliente).subscribe(
      (respuesta)=>{
        if(parseInt(respuesta)> 0){
          this.idClientes = 0;
          alert("Actualizado con éxito");
          this.navegacion.navigate(['/clientes']);
        }else{
          alert("Error al actualizar");
        }
      }
    );
  }
  }

}
