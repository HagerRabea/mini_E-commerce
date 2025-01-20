import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataService } from './data.service';

export const myguardGuard: CanActivateFn = (route, state) => {
  let dataService=inject(DataService);
  let router=inject(Router);

  if(dataService.isLogined.getValue()==true){
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
};
