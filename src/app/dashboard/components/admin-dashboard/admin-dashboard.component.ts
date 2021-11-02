import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  productArr=[];
  loggedInUser;
  searchTextChanged="";
  filteredArr=[];
  searchTxt="";
 
  constructor(private productService:ProductService, private storageService:StorageService, private router:Router) { }

  ngOnInit(): void {
      this.loggedInUser = this.storageService.getUser();
      this.getProductList();
    
  }
  

  getProductList(){

    this.productService.getProducts().subscribe(
      (res:any)=>{
          console.log(res);
          this.productArr=res.Data;
          this.filteredArr=res.data;
          this.productService.setProducts(res.Data);
      },

      (err)=>{

          console.log('Error');
      }
    )
  }

  searchProduct()
  {
    /*this.searchTextChanged.pipe(debounceTime(10000)).subscribe(() => 
    {
      this.filteredArr=this.productArr.filter(
        (prod)=>prod.Product_Name.indexOf(this.searchTxt) > -1
      );

    });
    
    console.log(this.productArr);*/
    this.productArr= this.productArr.filter(
      (prod) => prod.Product_Name.indexOf( this.searchTxt) > -1
      );
       console.log(this.productArr);
  }

  // logout(){

  //     this.storageService.removeUser();
  //     this.router.navigate(['/']);

  // }

}
