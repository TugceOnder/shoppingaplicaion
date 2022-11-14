import { ProductService } from './../services/product.service';
import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {enableProdMode} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService : AlertifyService,
    private productSerivce:ProductService,
    private activatedRoutes:ActivatedRoute
  
    ) { }
title="ÜRÜN LİSTESİ"
filterText="" 
products: Product[];

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params=>{
      this.productSerivce.getProducts(params ["categoryId"]).subscribe(data =>{
        this.products=data 
        });

    })

  }

  addToCart(product){
this.alertifyService.success(product.name+" added ")
  }

}
