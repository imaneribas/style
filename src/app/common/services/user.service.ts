import { Injectable } from '@angular/core';

import {  Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from 'src/app/Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
public usermodel:UserModel[]=[
  {
     id: 0,
     userName: 'imane',
     firstName: "sabir",
     lastName: "sabir",
    email: "sab1@gmail.com",
    phoneNumber: "0612345678",
    DateOfRegistration:'def',
   
   
  },
  {
    id: 1,
    userName: 'imane',
    firstName: "sabir",
    lastName: "sabir",
   email: "sab2@gmail.com",
   phoneNumber: "0612345678",
   DateOfRegistration:'def',

 },
 {
  id: 2,
     userName: 'imane',
     firstName: "sabir",
     lastName: "sabir",
    email: "sab3@gmail.com",
    phoneNumber: "0612345678",
    DateOfRegistration:'def',
  

},
{
  id: 3,
  userName: 'imane',
  firstName: "sabir",
  lastName: "sabir",
 email: "sab4@gmail.com",
 phoneNumber: "0612345678",
 DateOfRegistration:'def',


},
{
 id: 4,
 userName: 'imane',
 firstName: "sabir",
 lastName: "sabir",
email: "sab5@gmail.com",
phoneNumber: "0612345678",
DateOfRegistration:'def',

},
{
id: 5,
  userName: 'imane',
  firstName: "sabir",
  lastName: "sabir",
 email: "sab6@gmail.com",
 phoneNumber: "0612345678",
 DateOfRegistration:'def',
 

},
{
  id: 6,
  userName: 'imane',
  firstName: "sabir",
  lastName: "sabir",
 email: "sab7@gmail.com",
 phoneNumber: "0612345678",
 DateOfRegistration:"2017-06-01T05:00:00.000Z",


},
{
 id: 7,
 userName: 'imane',
 firstName: "sabir",
 lastName: "sabir",
email: "sab8@gmail.com",
phoneNumber: "0612345678",
DateOfRegistration:"2010-09-10"

},
{
id: 8,
  userName: 'imane',
  firstName: "sabir",
  lastName: "sabir",
 email: "sab9@gmail.com",
 phoneNumber: "0612345678",
 DateOfRegistration:'def',
 

}
];
userSubject = new Subject<UserModel[]>();
  constructor(private http:HttpClient) { }
  emitUsers() {
    this.userSubject.next(this.usermodel.slice());
  }

  addUser(user: UserModel) {
    this.usermodel.push(user);
    this.emitUsers();
  }
//   deleteuser(id){
//     console.log(this.usermodel[id]);
//   for(var i=0;i<this.usermodel.length;i++){
//     if(this.usermodel[i]["id"]==id){
// this.usermodel.splice(i,1);
//     }
//   }
  
//   this.emitUsers();
//   }


//   getDimensions(id) {
//     var obj = this.usermodel.filter(function(node) {
//         return node.id==id;
//     });

//     return console.log(obj);   
// }
// onUpdateUser(id){

// }
private users_URL=environment.API_URL+'/User';

 GetAllUsers():Observable<UserModel[]>{
  return this.http.get<UserModel[]>(this.users_URL+'/GetAllUsers');
}
// addUser(commande: UserModel): Observable<UserModel> {
//   return this.http.post<UserModel>(this.users_URL, commande);
// }

getUserById(id: number): Observable<UserModel> {
  const url = `${this.users_URL}/${id}`;
  return this.http.get<UserModel>(url);
}

deleteUser (id: number): Observable<UserModel> {
  const url = `${this.users_URL}/${id}`;
  return this.http.delete<UserModel>(url);
  }


  updateUser (user: UserModel): Observable<any> {
    const url = `${this.users_URL}/${user.id}`;
    return this.http.put(url, user);
    }
//     update(user:UserModel){
//       var userr=this.usermodel[user.id];
// userr.userName=user.userName;
//     }
}