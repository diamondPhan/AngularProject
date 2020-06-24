import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  afAuthService: any;
  displayName:string="";

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser()
					.then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);
		
				console.log(this.displayName);
			
  }
  Logout(){
    this.userService.logout();
    location.href="/login";
  }

}
