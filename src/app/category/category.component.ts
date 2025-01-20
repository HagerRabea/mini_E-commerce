import { CommonModule } from '@angular/common';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
   constructor(private _DataService:DataService){
    
   }
   imgSrc:string='https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png';
categories:any;
   ngOnInit(): void {
    this._DataService.getCategory().subscribe((x)=>{
      console.log(x)
      this.categories=x;
     })
   }
}
