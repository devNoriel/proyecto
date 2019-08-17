import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth, private router: Router) { }

  public isLogged: boolean = false;

  ngOnInit() {
    this.getUser();
  }

getUser(){
this.authService.isAuth().subscribe( auth => {
  if(auth) {
    this.isLogged = true;
  }else{
    this.isLogged = false;
  }
})
}
logOut(){
  this.afsAuth.auth.signOut();
  this.router.navigate(['']);
  alert('Sesión cerrada');
}
}
