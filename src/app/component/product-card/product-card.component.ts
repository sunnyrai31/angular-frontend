import {Component, OnInit, Input} from '@angular/core';
import {ProductDTO} from "../../interfaces/app.interface";
import {Observable} from "rxjs";

// import {ProductDTO} from "../interfaces/app.interface";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product:  ProductDTO = {};
  //  @Input() product: Observable<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
