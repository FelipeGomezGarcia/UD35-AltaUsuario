import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35-AltaUsuario';

  clientes:any;
  nombre = document.getElementById("nombre")?.innerHTML;
  cif = document.getElementById("cif")?.innerHTML;
  direccion = document.getElementById("direccion")?.innerHTML;
  grupo = document.getElementById("groups")?.innerHTML;

  addCliente(){
    this.clientes.add({nombre:this.nombre, cif:this.cif, direccion: this.direccion,grupo: this.grupo});
    console.log("Hola");

  }
}
