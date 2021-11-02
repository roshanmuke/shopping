import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopingApp';

  opened=true;
  loggedInUser;
  widthchange;
  constructor(private storageService:StorageService, private router:Router) { }

  ngOnInit(): void {
    this.loggedInUser = this.storageService.getUser();
  }

  toggleSidebar()
  {
      this.opened = !this.opened;
      this.widthchange=100;
  }
  logout(){

    this.storageService.removeUser();
    this.router.navigate(['/']);

  }
  
}
