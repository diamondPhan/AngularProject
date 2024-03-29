import { Injectable } from '@angular/core';

import { Item } from '../model/item';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection:AngularFirestoreCollection<Item>;
  items:Observable<Item[]>;
  itemDoc:AngularFirestoreDocument<Item>;
  constructor(public afs: AngularFirestore,public router: Router,private http:HttpClient) { 
    this.itemsCollection=afs.collection<Item>('computer', ref=>ref.orderBy('id', 'asc'));
    this.items=this.itemsCollection.valueChanges({idField: 'id1'});
    this.items.subscribe(data=>{console.log(data)});
  }
  getItem(){
    return this.items;
  }
  addItem(item: Item){
    this.itemsCollection.add(item); //id dc tao tu dong
    //const docId=this.afs.createId();
    //this.itemsCollection.doc(docId).set(Object.assign{}, item);
   }
   deleteItem(item: Item){
    console.log(item.id1);
    this.itemDoc=this.afs.collection('computer').doc(item.id1);
    this.itemDoc.delete().then(id => console.log(this.itemDoc));
   }
   updateItem(item: Item){
    console.log(item.id1);
    this.itemDoc=this.afs.collection('computer').doc(item.id1);
    this.itemDoc.update(item);
   }
}
