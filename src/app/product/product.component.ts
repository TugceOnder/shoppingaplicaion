import { ProductService } from './../services/product.service';
import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {enableProdMode} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService : AlertifyService,
    private productSerivce:ProductService) { }
title="ÜRÜN LİSTESİ"
filterText="" 
products: Product[];

  ngOnInit() {
this.productSerivce.getProducts().subscribe(data =>{
this.products=data 
});
  }

  addToCart(product){
this.alertifyService.success(product.name+" added ")
  }

}
