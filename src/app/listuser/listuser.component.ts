import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared_service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  private users:User[];

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe(data => this.users = data);
console.log(this.users);
  }

  deleteUser(user){
    this._userService.deleteUser(user.id).subscribe((data)=>{
      this.users.splice(this.users.indexOf(user),1);
    },(error) =>{
      console.log(error)
    }
  )
  }
 // updateUser(user){
   // this._userService.setter(user);
   // this._router.navigate(['op']);

  //}
  //newUser(){
  // let user = new User();
  // this._userService.setter(user);
   //this._router.navigate(['op']);
 // }
}
 