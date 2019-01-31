import { Product } from './product';
import { Component } from '@angular/core';
import { ProductService } from './product-Service';
@Component({
    selector :"add-prod", 
    templateUrl :'./add-product.component.html'})
export class AddProductComponent{
    product: Product = new Product();
    //this is where injection happens
    constructor(private ps: ProductService)
    {

    }
add(pform){
  //  console.log("add called..");
  //  console.log(pform.value);
  //  console.log(JSON.stringify(this.product));
//let ps = new ProductService();
this.ps.sendToServer(this.product);
}
/*add(){
    console.log("add called..");
    console.log(JSON.stringify(this.product));
}*/

}