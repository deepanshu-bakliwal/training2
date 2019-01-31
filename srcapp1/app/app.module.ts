import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { EmployeeListComponent } from './employee.list.components';
//import {ProductListComponent} from './product/product-list.component'
//import { Product } from './product/product';
import {AddProductComponent} from './product/add-product.component';
import{FormsModule} from '@angular/forms';
import { Product } from './product/product';
import { ProductService } from './product/product-Service';
import { ProductListComponent } from './product/product-list.component';
import{RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
     AddProductComponent,

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
{path:'add-product',component: AddProductComponent},
{path:'list-product',component:ProductListComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
