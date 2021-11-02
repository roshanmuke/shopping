import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input("role") role = 1;
  title="";
  userArr=[];
  searchTxt="";
  orderSize=true;
  
  constructor(private userService:UserService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.userService.getUser().subscribe( 
      (res:any)=>
      {
        this.userArr=res.Data;
        console.log(this.userArr);
      },

      (err)=>{

          console.log('Error');
      });
  
  }

  searchUser()
  {
     this.userArr = this.userArr.filter(
       (prod) => prod.UserName.indexOf( this.searchTxt) > -1 );

     console.log(this.userArr);
  }

  deleteUser(id,name) {
    let bool = window.confirm(`Are you sure you want to delete ${name}`);
    if (bool) {
      this.userService.deleteUser(id).subscribe(
        (res :any) => {
            this.userService.getUser().subscribe( 
              (res:any)=>
              {
                this.userArr=res.Data;
                console.log(this.userArr);
              },
        
              (err)=>{
        
                  console.log('Error');
              });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  sortUserID()
    {
      if(this.orderSize)
      {
         let sizeSort = this.userArr.sort((a,b) =>b.User_ID - a.User_ID); // {6,5,3,2}= 5-3=2 2-3=-1 
         this.userArr = sizeSort;
      }
      else
      {
        let sizeSort = this.userArr.sort((a,b) =>a.User_ID - b.User_ID);
        this.userArr = sizeSort;
      }
      this.orderSize = !this.orderSize;
    }

  sortUserName()
    {
      this.orderSize= !this.orderSize;
      let direction= this.orderSize? 1 : -1;

     this.userArr.sort(function(a,b){
        if(a.UserName < b.UserName)
        {
            return -1 * direction;
        }
        else if(a.UserName > b.UserName)
        {
          return 1 * direction;
        }
        else
        {
            return 0;
        }
      });
    }
    sortUserEmail()
    {
      this.orderSize= !this.orderSize;
      let direction= this.orderSize? 1 : -1;

     this.userArr.sort(function(a,b){
        if(a.UserEmail < b.UserEmail)
        {
            return -1 * direction;
        }
        else if(a.UserEmail > b.UserEmail)
        {
          return 1 * direction;
        }
        else
        {
            return 0;
        }
      });
    }
    sortUserRole()
    {
      if(this.orderSize)
      {
         let sizeSort = this.userArr.sort((a,b) =>b.UserRole - a.UserRole);
         this.userArr = sizeSort;
      }
      else
      {
        let sizeSort = this.userArr.sort((a,b) =>a.UserRole - b.UserRole);
        this.userArr = sizeSort;
      }
      this.orderSize = !this.orderSize;
    }

    sortUserMobile()
    {
      if(this.orderSize)
      {
         let sizeSort = this.userArr.sort((a,b) =>b.UserMobile - a.UserMobile);
         this.userArr = sizeSort;
      }
      else
      {
        let sizeSort = this.userArr.sort((a,b) =>a.UserMobile - b.UserMobile);
        this.userArr = sizeSort;
      }
      this.orderSize = !this.orderSize;
    
    }

    sortUserDOB()
    {
      if(this.orderSize)
      {
         let sizeSort = this.userArr.sort((a,b) =>new Date(b.userDOB).getTime() - new Date(a.userDOB).getTime());
         this.userArr = sizeSort;
      }
      else
      {
        let sizeSort = this.userArr.sort((a,b) =>new Date(a.userDOB).getTime() - new Date(b.userDOB).getTime());
        this.userArr = sizeSort;
      }
      this.orderSize = !this.orderSize;
     
    }

}
