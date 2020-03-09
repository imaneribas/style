import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from 'src/app/Model/user.model';
import { UserService } from 'src/app/common/services/user.service';
import { ConfirmDialogModel, DeleteuserpopupComponent } from '../deleteuserpopup/deleteuserpopup.component';


import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-usersmanage',
  templateUrl: './usersmanage.component.html',
  styleUrls: ['./usersmanage.component.css']
})

export class UsersmanageComponent implements OnInit {
  result: string = '';
  users: UserModel[];
  dataSource:MatTableDataSource<UserModel>;
  isPopupOpen=true;
  usersadd: UserModel[];
  userSubscription: Subscription;
  searchText;
  displayedColumns: string[] = ['userName', 'firstName', 'lastName', 'email', 'phoneNumber', 'DateOfRegistration','Action'];

 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserService,public matdialog:MatDialog,private route :Router,private activateroute: ActivatedRoute,) { }

ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: UserModel[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
    
  //this.users=await this.userService.GetAllUsers().toPromise();
  //sara
    // this.users=this.userService.usermodel;
    // console.log(this.users);
     this.dataSource = new MatTableDataSource<UserModel>(this.users);
     this.dataSource.paginator = this.paginator;
    //fin sara
  }


  



 ngOnDestroy() {
   this.userSubscription.unsubscribe();
   }
//   delete(id){
//     const message="voulez vous supprimer ce user";
//     const DialogBoite=new ConfirmDialogModel("Confirmation", message);
//     const dialogRef = this.matdialog.open(DeleteuserpopupComponent
//       , {
//       maxWidth: "400px",
//       data: DialogBoite
//     });
//     dialogRef.afterClosed().subscribe(dialogResult => {
//       this.result = dialogResult;
//       if(this.result){
//     this.userService.deleteuser(id);
  
//   }
//  });


deleteUser(id){
      const message="voulez vous supprimer ce user";
      const DialogBoite=new ConfirmDialogModel("Confirmation", message);
      const dialogRef = this.matdialog.open(DeleteuserpopupComponent
        , {
        maxWidth: "400px",
        data: DialogBoite
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        this.result = dialogResult;
    if(this.result){
      //alert("delete");
    this.users = this.users.filter(h => h !== id);
    this.userService.deleteUser(id).subscribe(()=>{
      this.userService.GetAllUsers();   
    
    });
    }
                                         });
                                         
           }
// updateUser(id:number){
//   this.route.navigate[('update/:id')]
//   this.isPopupOpen=true;
//   const idUserToUpdate = +this.activateroute.snapshot.paramMap.get('id');
//   //const contact=this.userService.getUserById(id);
// const dialogRef=this.matdialog.open(UpdateuserComponent,{
//   data:{}
// });

//   dialogRef.afterClosed().subscribe(x => {
//     this.isPopupOpen = false;
//   });
// }


          
        
           


          


          
        }
