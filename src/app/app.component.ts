import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35-AltaUsuario';

  message:any;

  addMessage(autor:any,email:any,mensaje:any){

    this.message = {autor:autor,email:email,contenido:mensaje};
  }
}
