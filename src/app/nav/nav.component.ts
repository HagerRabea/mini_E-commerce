import { CommonModule } from '@angular/common';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  logined:any;
  myCarCount:number=0;
constructor( private _DataService:DataService,private _Router:Router){
}
logOut(){
  this._DataService.isLogined.next(false);
   this._Router.navigate(['/login'])
}
ngOnInit(): void {
  this._DataService.isLogined.subscribe((x)=>{
    console.log(x)
    this.logined=x;
  })
this._DataService.cartCountPublic$.subscribe((x)=>{
  this.myCarCount=x;
})
  
}
}
