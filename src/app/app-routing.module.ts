import { ProductComponent } from './product/product.component';
import { NgModule } from "@angular/core";
import { Routes,RouterModule, Route } from "@angular/router";
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
const routers : Routes = [
    {path:'products',component: ProductComponent},//yukarıya  http://localhost:4200/products yazınca ürünlerin gelmesi için 
    {path:'product-add-1',component: ProductAddForms1Component}, // yandaki menü deki alanlara gitek için
    {path:'product-add-2',component: ProductAddForms2Component},
    {path:'',redirectTo:'products',pathMatch:'full'},// eger yukarıya bir sey yazılmamıssa products componentine gönterilecektiir
    {path:'products/category/:categoryId',component:ProductComponent} //yukarıda ki url yazdığımızda açılması gereken

];  
@NgModule({

    imports: [RouterModule.forRoot(routers)],
    exports :[RouterModule]
})
export class AppRoutingModule{

}