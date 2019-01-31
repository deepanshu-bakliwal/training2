import{Component} from '@angular/core';

@Component({
    selector: 'emp-list',
    templateUrl: './employee.list.components.html'
})

export class EmployeeListComponent{
    title: string ="List of Employees";
    employees: any[] = [
        {
            "empno":1,
            "name": "Deepanshu",
            "salary": 500000,
            "dateOfJoining": "30-may-2018"
        },
        {
            "empno":2,
            "name": "Vidya",
            "salary": 400000,
            "dateOfJoining": "30-may-2019"
        },
        {
            "empno":3,
            "name": "idya",
            "salary": 400000,
            "dateOfJoining": "30-may-2019"  
        }
    ] 
}