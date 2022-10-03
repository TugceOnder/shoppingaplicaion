import { Injectable } from '@angular/core';
import {enableProdMode} from '@angular/core';
declare let alertify: any;


@Injectable()
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }

  error(message:string){
    alertify.console.error(message)
    
  }
  
  warning(message:string){
    alertify.console.warning(message)
    
  }
}
