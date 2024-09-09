import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Iproveedor } from '../Interfaces/iproveedor';
import { ProveedorService } from '../Services/proveedores.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [SharedModule, FormsModule, RouterLink],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.scss'
})
export class ProveedoresComponent {
  title = 'Lista de Proveedores';
  listaProveedores:Iproveedor[] = [];

  constructor(private ServicioProveedor:ProveedorService){}
  ngOnInit(){
    this.cargaTabla();

  }

  cargaTabla(){
    this.ServicioProveedor.todos().subscribe(
      (data) => {
        
        this.listaProveedores = data;
        console.log(this.listaProveedores);
      }
    );
  }

  eliminar(idProveedores:number){
    this.ServicioProveedor.eliminar(idProveedores).subscribe(
      (data) => {
        console.log(data);
        this.cargaTabla();
      }
    );
  }
}
