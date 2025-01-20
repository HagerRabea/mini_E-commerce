import { CommonModule } from '@angular/common';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  klma:any;
constructor(private _ActivatedRoute:ActivatedRoute,private _DataService:DataService){
  this.klma=this._ActivatedRoute.snapshot.params['category'];
}
products:any;
ngOnInit(): void {
  this._DataService.getAllProducts(this.klma).subscribe((x)=>{
    console.log(x.products
    )
    this.products=x.products;
  })
}
}
