import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorageModule } from '@angular/fire/storage';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private fireStorage: AngularFireStorageModule) { }
  public email: string = '';
  public password: string = '';
  ngOnInit() {
  }
addUser(){
  this.authService.registrar(this.email, this.password).then ((ans) => {
    this.router.navigate(['/login']);
    alert('La cuenta ha sido creada');
  }).catch(err => alert(err.message)); 
}
}
