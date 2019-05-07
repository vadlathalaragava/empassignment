import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees =[
    {id:1,name:'Micky',phone:'4837429 23423',email:'micky@gmail.com',location:'US'},
    {id:2,name:'Robert',phone:'9237423 2342',email:'robert@mail.com',location:'UK'},
    {id:3,name:'Donald',phone:'7264723642342',email:'donald@emalp.com',location:'IND'},
  ]
  empoyee =[];
  constructor() { }
  
}
