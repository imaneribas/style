import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/common/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/Model/user.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public _contactForm: FormGroup;
  user:UserModel;


  constructor(private userService: UserService,private route:ActivatedRoute,private location:Location) { }

  async ngOnInit(): Promise<void> {
   const id = +this.route.snapshot.paramMap.get('id');
    this.user=await this.userService.getUserById(id).toPromise();
  
   
  }
  async save() {
    this.userService.updateUser(this.user).subscribe(()=>this.goBack());
    //console.log("update success");
  }
  goBack(){
    this.location.back();
  }
  onNoClick(): void {
    console.log("test succes on no click");
   }
}
