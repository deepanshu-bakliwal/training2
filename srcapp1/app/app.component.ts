import { Component } from '@angular/core';
//import { EmployeeListComponent } from './employee.list.components';
import {ProductListComponent} from './product/product-list.component'
import {AddProductComponent} from './product/add-product.component';
@Component({
  selector: 'app-root',
  template:`
 <!-- <prd-list></prd-list>-->

 <hello></hello>
 <ul class ="nav navbar-nav">
 <li><a [routerLink]="['/add-product']">Add</a></li>
 <li><a [routerLink]="['/list-product']">List</a></li>
 </ul>
<div class ='container'>
<router-outlet></router-outlet>
</div>
`

})
export class AppComponent {
  title = 'angular-app1';
}
