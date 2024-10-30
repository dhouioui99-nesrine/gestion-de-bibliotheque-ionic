import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprunterService {
  private collectionName = 'Emprunter';

  constructor(private firestore: AngularFirestore) {}


  createEmprunter(Emprunter: any): Promise<any> {

    return this.firestore.collection(this.collectionName).add(Emprunter);
  }


  getEmprunter(): Observable<any[]> {
    return this.firestore.collection(this.collectionName).valueChanges({ idField: 'id' });
  }


  getEmprunterById(id: string): Observable<any> {
    return this.firestore.collection(this.collectionName).doc(id).valueChanges();
  }


  updateEmprunter(id: string, Emprunter: any): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(Emprunter);
  }


  deleteEmprunter(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
