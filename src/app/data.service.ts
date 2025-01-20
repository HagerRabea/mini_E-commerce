import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//DI 
  constructor( private _HttpClient:HttpClient) {
    if(this.getfromlocal()!=null){
      this.cartCountPrivte.next(this.getfromlocal());
    }
   }
   
  //cart code 

  private  cartCountPrivte=new BehaviorSubject<number>(this.getfromlocal())
   cartCountPublic$=this.cartCountPrivte.asObservable();
  addToCart(product:any,amount:number){
    let currentCount=this.cartCountPrivte.value;
    this.cartCountPrivte.next(currentCount+amount)
    this.settoloca(currentCount+amount);
  }
  removeFromCart(product:any,amount:number){
    let currentCount=this.cartCountPrivte.value;
    this.cartCountPrivte.next(currentCount-amount);
    this.settoloca(currentCount-amount);
  }
  private settoloca(count:number){
    localStorage.setItem('count',JSON.stringify(count))
  }
  private getfromlocal():number{
let savedCount=localStorage.getItem("count");
    return savedCount?JSON.parse(savedCount):0;
  }





  ///#############end of cart code 
  /*
http client 
get 
post
delete
put
patch
  */
isLogined=new BehaviorSubject(false)
  getCategory():Observable<any> {
   let res=this._HttpClient.get('https://dummyjson.com/products/category-list')
   return res;
 }
 getAllProducts(klma:any):Observable<any>{
  let res=this._HttpClient.get(`https://dummyjson.com/products/category/${klma}`);
  return res;
 }
 getSingleProduct(id:any):Observable<any>{
  let res=this._HttpClient.get(`https://dummyjson.com/products/${id}`);
  return res;
 }
 register(data:any):Observable<any>{
  let res=this._HttpClient.post('https://dummyjson.com/user/login',data);
  return res;
 }
 login(data:any):Observable<any>{
  let res=this._HttpClient.post('https://dummyjson.com/user/login',data);
  return res;
 }
}
