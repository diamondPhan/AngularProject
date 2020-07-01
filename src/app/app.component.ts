import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface account { id?: string; useraccount?: string; password?:string;age?:string;}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Fe1933';
//   private itemsCollection: AngularFirestoreCollection<account>;
// 		  accountList: Observable<account[]>;
// 		  constructor(private readonly afs: AngularFirestore) {
// 			this.itemsCollection = afs.collection<account>('accounts');
// 			//this.items = this.itemsCollection.valueChanges();
			
// 			// .valueChanges() is simple. It just returns the 
// 			// JSON data without meta data. If you need the 
// 			// doc.id() in the value you must persist it your self
// 			// or use .snapshotChanges() instead. Only using for versions 7 and earlier
// 			this.accountList = this.itemsCollection.valueChanges( { }); //chỉ sử dụng cho Angular 8,9
// 			//id1: ten field đại diện cho documnent id, lưu ý không 
// 			//được đặt trùng với tên field khai báo trong dữ liệu
		
}
// Add(id:string="2", useraccount:string="abc",password: string="1234657",age:string="21"){
// 	//alert("hihihi!");
// let it: account= {};
// it.id=id
// it.useraccount=useraccount
// it.password=password
// it.age=age

// this.itemsCollection.add(it);
// }
// Update(id:string="2", useraccount:string="hahaha",password: string="1234657",age:string="21"){
// 	//alert("hihihi!");
// 	let docId = "z4DvCYQ9sKchSgOwWWFt"	
// let it: account= {};
// it.id=id
// it.useraccount=useraccount
// it.password=password
// it.age=age

// this.itemsCollection.doc(docId).update(it);
// }
// Delete(docId = "z4DvCYQ9sKchSgOwWWFt"){
// 	this.itemsCollection.doc(docId).delete();
// }
// }
