import { Component, OnInit } from '@angular/core';
import {ProductDTO} from "../../interfaces/app.interface";
import {Observable, map, pipe, Subscription} from "rxjs";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService) { }
  productList : Array<ProductDTO> = [
    {productName:"test1",description:"Description of the product test1", show:true },
    {productName:"test2",description:"Description of the product test2" , show:true},
    {productName:"test3",description:"Description of the product test3", show:true },
    {productName:"test4",description:"Description of the product test4" , show:true},
    {productName:"test5",description:"Description of the product test5" , show:true},
    {productName:"test1",description:"Description of the product test1" , show:true},
    {productName:"test2",description:"Description of the product test2", show:true },
    {productName:"test3",description:"Description of the product test3" , show:true},
    {productName:"test4",description:"Description of the product test4", show:true },
    {productName:"test5",description:"Description of the product test5" , show:true},
    {productName:"test1",description:"Description of the product test1", show:true },
    {productName:"test2",description:"Description of the product test2", show:true },
    {productName:"test3",description:"Description of the product test3" , show:true},
    {productName:"test4",description:"Description of the product test4" , show:true},
    {productName:"test5",description:"Description of the product test5", show:true },
    {productName:"test1",description:"Description of the product test1" , show:true},
    {productName:"test2",description:"Description of the product test2" , show:true},
    {productName:"test3",description:"Description of the product test3" , show:true},
    {productName:"test4",description:"Description of the product test4" , show:true},
    {productName:"test5",description:"Description of the product test5" , show:true}
  ]

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList(){
    const productDetails = this.productService.getProductList().pipe(
      map(item=> `item ${item}`)
    ).subscribe(console.log)
  }

}
