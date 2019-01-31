import {Product} from './product'
import { OnInit, Component } from '@angular/core';
import { ProductService } from './product-Service';
@Component({
    selector: 'prd-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit{
  

    products: Product[];
   constructor(private ps: ProductService){

   }

ngOnInit(){}
showProduct(){

this.products =this.ps.retrieveFromServer();

}
}

