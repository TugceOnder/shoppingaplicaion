import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {enableProdMode} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService : AlertifyService) { }
title="ÜRÜN LİSTESİ"
filterText=""
products: Product[]=[
{id:1, name:"Laptop",price:2500,categoryId:1,description:"Asus",imageUrl:"https://www.notebookcheck-tr.com/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG"},
{id:2, name:"Mause",price:2000,categoryId:1,description:"logitech",imageUrl:"https://www.notebookcheck-tr.com/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG"}
  
]
  ngOnInit() {
  }
  addToCart(product){
this.alertifyService.success(product.name+" added ")
  }

}
