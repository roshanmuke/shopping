import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  opened=true;
  loggedInUser;
  widthchange;
  changeWidth=true;
  constructor(private storageService:StorageService, private router:Router) { }

  ngOnInit(): void {
    this.loggedInUser = this.storageService.getUser();
  }

  toggleSidebar()
  {
      this.opened = !this.opened;
      if(this.changeWidth)
      {
      this.widthchange=100;
      this.changeWidth=false;
      }
      else
      {
        this.widthchange=80;
        this.changeWidth=true;
      }
  }
  logout(){

    this.storageService.removeUser();
    this.router.navigate(['/']);

}

 }
