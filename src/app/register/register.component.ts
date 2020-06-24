import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { account } from '../models/account';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { RegisterService } from '../services/register.service';
import { MustMatch } from '../models/CustomValidator';
import { UsercreateService } from '../services/usercreate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private createAcc:RegisterService, private signup:UsercreateService) { }
  registerForm: FormGroup;
  ngOnInit(): void {
this.registerForm=this.fb.group({
  firstName:['',Validators.required],
  lastName:['',Validators.required,Validators.email],
  email:['',Validators.required],
  password:['',Validators.required],
  confirmPassword:['',Validators.required]
},
{
  validators:MustMatch('password','confirmPassword')
}
);
  }
  onsubmit(){
    let acc = new account();
    acc.email=this.registerForm.controls["email"].value;
    acc.firstName=this.registerForm.controls["firstName"].value;
    acc.lastName=this.registerForm.controls["lastName"].value;
    acc.password=this.registerForm.controls["password"].value;
    console.log(acc);
    this.createAcc.insertaccount(acc).subscribe(data=>console.log(data));
  }
  creataccountonfb(){
    let acc = new account();
    acc.email=this.registerForm.controls["email"].value;
    acc.firstName=this.registerForm.controls["firstName"].value;
    acc.lastName=this.registerForm.controls["lastName"].value;
    acc.password=this.registerForm.controls["password"].value;
    this.signup.signup(acc.email,acc.password).then(res=>{
      console.log(res);
      alert("DANG KY THANH CONG ROI NHAAA <3")
      location.href="/admin/product";
      });
    //location.href="/login";
  }

}
