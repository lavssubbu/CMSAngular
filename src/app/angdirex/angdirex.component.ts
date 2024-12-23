import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angdirex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angdirex.component.html',
  styleUrl: './angdirex.component.css'
})
export class AngdirexComponent {
   lstproduts: Product[]=[
    {id:111,proname:'Mac',isAvailable:false},
    {id:112,proname:'Laptop',isAvailable:true},
    {id:113,proname:'iPhone',isAvailable:true}
   ]

   userRole:string='Manager';
}
class Product
{
  id?:number;
  proname?:string;
  isAvailable?:boolean
  
}