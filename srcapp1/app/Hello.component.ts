import { Component } from '@angular/core' 

@Component( {
    selector: 'hello',
    template: `
 <h3>{{message}}</h3>    
    
    `
})
export class HelloComponent {
    
message : string = " hello world";

}