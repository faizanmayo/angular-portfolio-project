import { Component, OnInit } from '@angular/core';
import { Users } from '../user';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
users: Users[] | any;
  constructor( private httpService: HttpClientService){ }

  ngOnInit(): void {

    this.httpService.getUsers().subscribe((data: Users[])=>{
      this.users = data;
    })
  }

}
