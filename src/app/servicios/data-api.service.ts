import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { historialInterface } from '../models/alquiler';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(public afs: AngularFirestore) {}

  autosHistorial: Observable<historialInterface[]>;
  private historial: AngularFirestoreCollection<historialInterface>;
  private enviar: historialInterface = {};

//OBTENER DATOS DE ALQUILER DE LA COLECCION DE FIREBASE 
  getAlquilados(){
    this.historial = this.afs.collection<historialInterface>('alquileres');
    return this.autosHistorial = this.historial.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const datos = action.payload.doc.data() as historialInterface;
        datos.id = action.payload.doc.id;
        return datos; 
      });
    } ));
  }
  addAlquilados(nuevoAlquiler: historialInterface): void {
    this.historial.add(nuevoAlquiler);
  }
}

