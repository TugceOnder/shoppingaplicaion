import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
title="Kategori Listesi"
categories: Category[]=[
{id:1,name:"Elektronik"},
{id:1,name:"Bilgisayar"},
{id:1,name:"İletisim"},
{id:1,name:"Müzik"},


]
  ngOnInit(): void {
  }

}
