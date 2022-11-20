import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css']
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  productAddForm:FormGroup;  //formu yöneteceğimiz kısım 
  product :Product =  new Product();

createProductAddForm(){ // bütün valitasyon kuralarını obje ratasyonu ile geçiyoruz
  this.productAddForm = this.formBuilder.group({
name: ["",Validators.required],
description: ["",Validators.required],
imageUrl: ["",Validators.required],
price: ["",Validators.required],
categoryId: ["",Validators.required],

  })
}
  ngOnInit() {
  }

  add(){
    if(this.productAddForm.valid){
this.product =  Object.assign({},this.productAddForm.value)
    }
  }
}
