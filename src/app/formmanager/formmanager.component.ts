import { Component, OnInit } from '@angular/core';

import { ItemService } from '../services/item.service'
import { Item } from '../model/item';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formmanager',
  templateUrl: './formmanager.component.html',
  styleUrls: ['./formmanager.component.css']
})
export class FormmanagerComponent implements OnInit {
  item: Item={
    id:'',
    name:'',
    price: '',
    type: '',
    brand:'',
    status:''
  }
  
  constructor(private itemService: ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.item.name!=''&&this.item.price!=''&&this.item.type!=''&&this.item.id!=''&&this.item.brand!=''){
      this.itemService.addItem(this.item);
      this.item.name='';
      this.item.price='';
      this.item.type='';
      this.item.brand='';
      this.item.status='';
      this.item.id='';
      this.router.navigate(['/admin/product']);
    }
  }
}
