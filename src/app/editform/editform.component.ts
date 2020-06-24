import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service'
import { Item } from '../model/item';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
  
})
export class EditformComponent implements OnInit {
  editState: boolean=false;
  itemToEdit:Item;
  getid: string;
  item: Item[];
  
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItem().subscribe(items =>{
      
      console.log(items);
      // this.items=items;
    });
  }
  getItem(item)
  {
    this.getid=item.id;
    this.itemService.getItem();
    console.log(item.id);
    
  }
  editItem(item){
    this.editState = true;
    this.itemToEdit=item;
    this.getid=item.id;
    
  }
  updateItem(item){
    
      console.log("id:" +this.getid)
      if(item.id==this.getid)
      {
        this.itemService.updateItem(item)
      }
      
    }
    // onSubmit(){
    //   console.log("id:" +this.getid)
       
    //   if(this.item.name!=''&&this.item.price!=''&&this.item.type!=''&&this.item.id!=this.getid&&this.item.brand!=''){
    //     this.itemService.updateItem(this.item);
    //     this.item.name='';
    //     this.item.price='';
    //     this.item.type='';
    //     this.item.brand='';
    //     this.item.id=this.getid;
    //     location.href="product";
    //   }
    }
    //this.itemService.updateItem(item);
  //   this.clearState();

  
   
