import { Component, OnInit, Input } from '@angular/core';
import { User } from '../users/user';
import { DbUser } from '../users/user';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  @Input() dbUser: DbUser;
  constructor() { }

  ngOnInit() {
  }
}
