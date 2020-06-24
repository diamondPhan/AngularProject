import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
// import {account} from '../models/account';
// export default interface product { id?: string; name?: string;type?:string;brand?:string;price?:string; }
import {ItemService} from '../services/item.service'
import { Item } from '../model/item';
import { getLocaleTimeFormat } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items: Item[];
  editState: boolean=false;
  itemToEdit:Item;
  getid: string;
  private itemsCollection: AngularFirestoreCollection<Item>;
		  productList: Observable<Item[]>;
		  constructor(private itemService: ItemService, private router:Router) {}
			// this.itemsCollection = afs.collection<Item>('computer');
			// //this.items = this.itemsCollection.valueChanges();
			
			// // .valueChanges() is simple. It just returns the 
			// // JSON data without meta data. If you need the 
			// // doc.id() in the value you must persist it your self
			// // or use .snapshotChanges() instead. Only using for versions 7 and earlier
			// this.productList = this.itemsCollection.valueChanges( { }); //chỉ sử dụng cho Angular 8,9
			// //id1: ten field đại diện cho documnent id, lưu ý không 
		// //được đặt trùng với tên field khai báo trong dữ liệu
    
      
  // constructor() { }
  searchText;
  ngOnInit(): void {
    this.itemService.getItem().subscribe(items =>{
      
      console.log(items);
      this.items=items;
    });
  }
  getItem(item)
  {
    this.getid=item.id;
    this.itemService.getItem();
    console.log(item.id);
  }
  deleteItem(ok){
    if(ok==true){
      console.log("id: " + this.getid)
      for(var temp in this.items)
    {
      if (this.items[temp].id == this.getid)
      {
        this.itemService.deleteItem(this.items[temp]);
        //location.href="/admin/product";
        this.router.navigate(['/admin/product']);
      }
    }

  }
  }
  editItem(item){
    this.editState = true;
    this.itemToEdit=item;
    this.getid=item.id;
    
  }
  // clearState(){
  //   this.editState=false;
  //   this.itemToEdit=null;
  // }
  updateItem(item){
    // document.getElementById("id")=document.getElementById("idsp").value;
    
      console.log("id:" +this.getid)
      for(var temp in this.items)
      {
        if(this.items[temp].id==this.getid)
        {
          this.itemService.updateItem(this.items[temp]);
          
        }
      }
      this.router.navigate(['/admin/product']);
  }
    //this.itemService.updateItem(item);
  //   this.clearState();
}
  //  confirm(ok){
  //     if(ok==true){
  //       console.log("id: " + this.getid)

//   //     }

//    }
// }
  


