import { Product } from './product';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {ProviderDef} from '@angular/core/src/view';
@Injectable()
export class ProductService {
     products: Product[];
//injecting angulars HttpClient API
    constructor(private http: HttpClient){

}
    sendToServer(product : Product)
    {
        //our code to communicate with server will be here
    }

    
        
retrieveFromServer(): Product[] {
   let url= 'http://localhost:8181/pagination-web-app-using-ajax-and-jquery/ProductControllerServlet';


   this.http.get<Product[]>(url).subscribe(
        data =>
        {
            this.products= data;

        });
return this.products;
//code to communicate with server
/*
        let p = new Product(1,"dee",23783,10);
        let p1 = new Product(2,"vid",23546,50);
        let products=[p,p1];
        return products;
*/}
    

}