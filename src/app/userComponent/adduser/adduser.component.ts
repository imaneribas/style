import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from 'src/app/common/services/user.service';
import { UserModel } from 'src/app/Model/user.model';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userForm: FormGroup;


  //users:UserModel[]=[];
  constructor(private formBuilder: FormBuilder,private router: Router,private userservice:UserService) { 
    //this.users=userservice.usermodel;
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      //firstName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      //mail_Confirmation: ['', Validators.required],
    });
}
onSubmitForm() {
  const formValue = this.userForm.value;
  const newUser = new UserModel(
   //this.userservice.usermodel.length.toString(),
    //formValue['firstName'],
    formValue['userName'],
    formValue['email']
    //formValue['mail_Confirmation'],
   
    
  );
 this.userservice.addUser(newUser);
  this.router.navigate(['/users']);
  console.log(newUser);
}

}