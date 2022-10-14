import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Category } from '../category/category';
import { from, Observable, throwError } from 'rxjs';
import{tap,catchError} from 'rxjs/operators';

@Injectable()
export class CategoryService {
  constructor(
  private http:HttpClient) { }
  path="http://localhost:3000/categories";

  getCategories (): Observable<Category[]>{ // 
   return this.http.get<Category[]>(this.path).pipe(
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

