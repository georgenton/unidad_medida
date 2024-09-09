import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { Iproveedor } from 'src/app/Interfaces/iproveedor';
import { ProveedorService } from 'src/app/Services/proveedores.service';

@Component({
  selector: 'app-nuevoproveedor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevoproveedor.component.html',
  styleUrl: './nuevoproveedor.component.scss'
})
export class NuevoproveedorComponent implements OnInit {
  titulo = 'Insertar Proveedor';
  tituloBoton = 'Grabar Empresa';
  idProveedores = 0;
  Nombre_Empresa: string;
  Direccion:string;
  Telefono:string;
  Contacto_Empresa:string;
  Teleofno_Contacto:string;

  constructor(
    private proveedorServicio: ProveedorService, 
    private navegacion:Router,
    private ruta:ActivatedRoute
  ){ }

  ngOnInit(): void {
    // this.idProveedores = this.ruta.snapshot.params['id'];
    this.idProveedores = parseInt(this.ruta.snapshot.paramMap.get('id'));

    if(this.idProveedores > 0){
      this.proveedorServicio.uno(this.idProveedores).subscribe(
        (proveedor) => {
          this.Nombre_Empresa = proveedor.Nombre_Empresa;
          this.Direccion = proveedor.Direccion;
          this.Telefono = proveedor.Telefono;
          this.Contacto_Empresa = proveedor.Contacto_Empresa;
          this.Teleofno_Contacto = proveedor.Teleofno_Contacto;
          this.titulo = "Actualizar Proveedores";
          this.tituloBoton = "Actualizar Empresa";
        }
      );
    }


  }

  grabar(){
    let iproveedor:Iproveedor= {
      idProveedores:0,
      Nombre_Empresa:this.Nombre_Empresa,
      Direccion:this.Direccion,
      Telefono:this.Telefono,
      Contacto_Empresa:this.Contacto_Empresa,
      Teleofno_Contacto:this.Teleofno_Contacto
    };

    if(this.idProveedores == 0 || isNaN(this.idProveedores)){

    this.proveedorServicio.insertar(iproveedor).subscribe(
      (respuesta)=>{
          // parseInt(respuesta) > 1 ? alert("Grabado con éxito"): alert("Error al grabar");

          if(parseInt(respuesta)> 1){
            alert("Grabado con éxito");
            this.navegacion.navigate(['/proveedores']);
          }else{
            alert("Error al grabar");
          }
      }
    );
  }else{
    iproveedor.idProveedores = this.idProveedores;
    this.proveedorServicio.actualizar(iproveedor).subscribe(
      (respuesta)=>{
        if(parseInt(respuesta)> 0){
          this.idProveedores = 0;
          alert("Actualizado con éxito");
          this.navegacion.navigate(['/proveedores']);
        }else{
          alert("Error al actualizar");
        }
      }
    );
  }
  }
}
