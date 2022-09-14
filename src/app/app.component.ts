import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35-AltaUsuario';

  clientes:Array<any>=[];

  addCliente(nombre:any,cif:any,direccion:any,group:any){

    this.clientes.push({nombre: nombre, cif:cif, direccion: direccion,grupo: group});

  }
}
