import { DataService } from './../data.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

constructor(private _DataService:DataService,private _Router:Router){
   
}


 registerData=new FormGroup({
  firstName:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.pattern(/^[A-Z]/)]),
  lastName:new FormControl(),
  age:new FormControl(),
  email:new FormControl(),
  password:new FormControl()
 })


 regsiter(x:any):any{
    console.log(x.value);
  //   this._DataService.register(x.value).subscribe((x)=>{
  //  console.log(x)
  // //  if(x.massage=="success"){

  // //  }
  // this._Router.navigate(['/login']);
  //   })
    this._Router.navigate(['/login']);
 }

}
