import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-first',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.css'
})
export class MyFirstComponent {
    OrgName = "CMS"
    imageurl:string="assets/Sample.jpg"
    count:number=0;
    value:string=" ";
    fname:string="CMS"
    lname:string="Organization"
    butval:boolean=false;
    Counter()
    {
       this.count++;
    }
    display()
    {
       this.butval=true;
       this.fname="Sujeetha";
       this.lname="Mohan"
    }
}
