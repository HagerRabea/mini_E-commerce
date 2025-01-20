import { ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit{
constructor(private _DataService:DataService, private _ActivatedRoute:ActivatedRoute){

}
singleProduct:any;
id:any;
amount:number=2;
ngOnInit(): void {
 this.id= this._ActivatedRoute.snapshot.params['id']
  this._DataService.getSingleProduct(this.id).subscribe((x)=>{
    console.log(x);
    this.singleProduct=x;
  })
}

addProduct(product:any,amount:number){
  this._DataService.addToCart(product,amount)
}
removeProduct(product:any,amount:number){
  this._DataService.removeFromCart(product,amount);
}

}
