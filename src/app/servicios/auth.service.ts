import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  datosAlquiler: AngularFireList<any>;

  constructor(private afsAuth: AngularFireAuth, private fireBase: AngularFireDatabase) { }

  registrar(email: string, password: string){  
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, password).then(datos => resolve(datos),
      err => reject(err));
    })
  }
  logInEmail(email: string, password: string ){
return new Promise((resolve, reject) => {
this.afsAuth.auth.signInWithEmailAndPassword(email, password).then(datos => resolve(datos), err => reject(err));
});
}
  logOut(){
    return this.afsAuth.auth.signOut();
  }
  isAuth(){
return this.afsAuth.authState.pipe(map(auth => auth));
  }
}
