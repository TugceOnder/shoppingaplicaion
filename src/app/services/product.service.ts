import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Product } from '../product/product';
import { from, Observable, throwError } from 'rxjs';
import{tap,catchError} from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(
  private http:HttpClient) { }
  path="http://localhost:3000/products";

  getProducts (categoryId): Observable<Product[]>{ // 
    let newPath =this.path;
    if(categoryId){
      newPath += "?categoryId="+categoryId
    }
 
   return this.http.get<Product[]>(newPath).pipe(
    tap(data =>console.log(JSON.stringify(data))),  // hata yakalayabileceğiz ya da loglama yapabileceğiz
    catchError(this.handleError)
   );// loglarma sistemi ,hata yakalama sistemi örnek gösterilebilir.
    }

    handleError(err:HttpErrorResponse) {
    let errorMessage=''
    if(err.error instanceof ErrorEvent ){
      errorMessage='Bir Hata oluştu'+ err.error.message
      
    }
      else{
        errorMessage ='Sistemsel bir hata '
      }
   return throwError(errorMessage);
    }
  }

