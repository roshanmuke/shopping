import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
@Injectable({
  providedIn: "root",
})
export class ProductService {

  productArr=[];
  constructor(private httpClient: HttpClient) {}
 
  getProducts() {
    return this.httpClient.get(
      "http://angular.pureecosoft.com/api/product/list"
    );
  }
  setProducts(arr){
    this.productArr = arr;
  }
  addProduct(form:FormGroup){
    let data = {
      Product_Name: form.get("productName").value,
      Product_Size: form.get("productSize").value,
      Product_Color: form.get("productColor").value,
      Product_Price: form.get("productPrice").value,
      Product_URl: form.get("productUrl").value
     
    };
    return this.httpClient.post(
      "http://angular.pureecosoft.com/api/product/Add",data
    ); 
  }

  editProduct(id,form:FormGroup){
    let data ={
    Product_ID: id,
    Product_Name: form.get("productName").value,
    Product_Size: form.get("productSize").value,
    Product_Color: form.get("productColor").value,
    Product_Price: form.get("productPrice").value,
    Product_URL: form.get("productUrl").value
    }
    return this.httpClient.post(
      "http://angular.pureecosoft.com/api/product/Update",
      data
    );
  }

  getProductById(id){
    
    return this.httpClient.get(
      `http://angular.pureecosoft.com/api/product/GetbyId?id=${id}`,
      
    );
   
  }
  deleteProduct(id){

    return this.httpClient.post(`http://angular.pureecosoft.com/api/product/Delete?id=${id}`,"");
  }
  

  
 }