import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private _DataService:DataService , private _Router:Router){

}
  loginForm=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })
  login(x:any){
    // console.log(x)
    this._DataService.login(x.value).subscribe((x)=>{
      console.log(x);
      if(x.error==undefined){
        console.log("logined")
this._DataService.isLogined.next(true);
        this._Router.navigate(['/category'])
      }
    })

  }



}
