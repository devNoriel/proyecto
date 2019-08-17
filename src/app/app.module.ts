import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MenuComponent } from './componentes/menu/menu.component';
import { AutosComponent } from './componentes/autos/autos.component';
import { AlquilerComponent } from './usuarios/alquiler/alquiler.component';
import { PerfilComponent } from './usuarios/perfil/perfil.component';
import { RegistroComponent} from './usuarios/registro/registro.component';
import { ErrorComponent } from './usuarios/error/error.component';
import { LoginComponent } from './usuarios/login/login.component';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { ImagenComponent } from './componentes/imagen/imagen.component';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AutosComponent,
    AlquilerComponent,
    PerfilComponent,
    RegistroComponent,
    ErrorComponent,
    LoginComponent,
    IndexComponent,
    ImagenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
