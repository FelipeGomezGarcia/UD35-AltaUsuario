import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35-AltaUsuario';

  message:any;
  operacion:any = "2+3";

  addMessage(autor:any,email:any,mensaje:any,antiSpam:any){
    if (eval(this.operacion) == antiSpam) {
      this.message = {autor:autor,email:email,contenido:mensaje};
    }
  }
}
