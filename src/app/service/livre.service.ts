import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private collectionName = 'livres';

  constructor(private firestore: AngularFirestore) {}


  createlivres(livres: any): Promise<any> {

    return this.firestore.collection(this.collectionName).add(livres);
  }


  getlivres(): Observable<any[]> {
    return this.firestore.collection(this.collectionName).valueChanges({ idField: 'id' });
  }


  getlivresById(id: string): Observable<any> {
    return this.firestore.collection(this.collectionName).doc(id).valueChanges();
  }


  updatelivres(id: string, livres: any): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(livres);
  }


  deletelivres(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
