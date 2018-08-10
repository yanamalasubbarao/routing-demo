import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../shared_service/user.service';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
private user:User;

  constructor(private _userService:UserService) { }

  ngOnInit() {
   //this.user=this._userService.getter()
  }

}
