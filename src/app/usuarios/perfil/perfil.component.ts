import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { userInterface } from '../../models/user';
import { DataApiService } from '../../servicios/data-api.service';
import { NgForm } from '@angular/forms';
import { historialInterface } from 'src/app/models/alquiler';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private datos: historialInterface[];

  constructor(private AuthService: AuthService, private dataApiService: DataApiService) { }

  public datosAlquiler = [];
  
 user: userInterface = {
   email: ''
 }
 public providerId: string = 'null';
  ngOnInit() {
    this.getRegistros();
    
      this.dataApiService.getAlquilados().subscribe(historial => {
        console.log('Alquiler', historial);
        this.datosAlquiler = historial;
      });
    this.AuthService.isAuth().subscribe(user => {
      if(user){
        this.user.email = user.email;
        this.providerId = user.providerData[0].providerId
      }
    });
  }
getRegistros(){
  this.dataApiService.getAlquilados().subscribe(datos => {
    this.datos = datos;
  });
}
}
