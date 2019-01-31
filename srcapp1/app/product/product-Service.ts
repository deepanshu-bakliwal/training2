import { Product } from './product';
import { Injectable } from '@angular/core';
@Injectable()
export class ProductService {

    sendToServer(product : Product)
    {
        //our code to communicate with server will be here
    }

    
        
retrieveFromServer(): Product[] {


        let p = new Product(1,"dee",23783,10);
        let p1 = new Product(2,"vid",23546,50);
        let products=[p,p1];
        return products;
}
    

}