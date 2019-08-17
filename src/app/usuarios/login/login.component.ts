import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor ( public afAuth: AngularFireAuth, private router: Router, private authService: AuthService ) { }
  public email: string;
  public password: string;

  ngOnInit() {
  }
logIn(){
  this.authService.logInEmail(this.email, this.password).then((ans) => {
    this.router.navigate(['']);
    alert('Sesión iniciada');
  }).catch(err => alert(err.message));
}
  logOut(){
    this.authService.logOut();
  }

}
