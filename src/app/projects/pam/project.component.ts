import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/Project';
import { HttpClientService } from 'src/app/services/http-client.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
projects: Projects[] | any;

  constructor(private httpService:HttpClientService) { }

  ngOnInit(): void {
    this.httpService.getprojects().subscribe((data: Projects[]) => {
      this.projects = data;
    });
  }
}
