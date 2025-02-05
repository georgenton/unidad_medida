// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoproveedorComponent } from './proveedores/nuevoproveedor/nuevoproveedor.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    AppRoutingModule, 
    SharedModule, 
    BrowserAnimationsModule, 
    ProveedoresComponent, 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NuevoproveedorComponent,
    ClientesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
