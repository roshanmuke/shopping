import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { ProductService } from '../../services/product.service';
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit,OnChanges {
  @Input("productArr") productArr = [];
  showCaseArr:any = [];
  @Input("role") role = 1;
  @Output() deleteEvent = new EventEmitter();

  
  paginationRange=10;
  paginationStartIndex= 0;
  paginationEndIndex= this.paginationStartIndex + this.paginationRange;
  indexButtonArr:any = [];
  prevButtonDisabled=true;
  nextButtonDisabled=true;

  orderSize=true;


 
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.showCaseArr = this.showCaseArr.concat(this.productArr);
    
    this.indexButtonArr.length =Math.ceil(this.showCaseArr.length/this.paginationRange); 
    
    this.applyPagination();

  }

  paginationFun($event, key){
    $event.preventDefault();
    if(key == "prev"){
      this.paginationStartIndex = this.paginationStartIndex - this.paginationRange;
      this.paginationEndIndex = this.paginationStartIndex + this.paginationRange;
    }
    else if(key == "next")
    {
      this.paginationStartIndex = this.paginationStartIndex + this.paginationRange;
      this.paginationRange = this.paginationStartIndex + this.paginationRange;
    }
    this.applyPagination();
  }
  applyPagination(){
      this.showCaseArr = this.productArr.slice(
        this.paginationStartIndex,
        this.paginationEndIndex
      );
  
      this.prevButtonDisabled = this.paginationStartIndex == 0;
      this.nextButtonDisabled = Math.ceil(this.productArr.length / this.paginationRange) ==
      Math.ceil(this.paginationEndIndex / this.paginationRange);
  }
  
  
    deleteProduct(id,name) {
      let bool = window.confirm(`Are you sure you want to delete ${name}`);
      if (bool) {
        this.productService.deleteProduct(id).subscribe(
          (res) => {
            this.deleteEvent.emit();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }

    sortName()
    {
      this.orderSize= !this.orderSize;
      let direction= this.orderSize? 1 : -1;

     this.productArr.sort(function(a,b){
        if(a.Product_Name < b.Product_Name)
        {
            return -1 * direction;
        }
        else if(a.Product_Name > b.Product_Name)
        {
          return 1 * direction;
        }
        else
        {
            return 0;
        }
      });
    }
    sortSize()
    {
      if(this.orderSize)
      {
         let sizeSort = this.productArr.sort((a,b) =>b.Product_Size - a.Product_Size);
         this.productArr = sizeSort;
      }
      else
      {
        let sizeSort = this.productArr.sort((a,b) =>a.Product_Size - b.Product_Size);
        this.productArr = sizeSort;
      }
      this.orderSize = !this.orderSize;
    }

    sortPrice()
    {
      if(this.orderSize)
      {
         let sizeSort = this.productArr.sort((a,b) =>b.Product_Price - a.Product_Price);
         this.productArr = sizeSort;
      }
      else
      {
        let sizeSort = this.productArr.sort((a,b) =>a.Product_Price - b.Product_Price);
        this.productArr = sizeSort;
      }
      this.orderSize = !this.orderSize;
    }

    
}


