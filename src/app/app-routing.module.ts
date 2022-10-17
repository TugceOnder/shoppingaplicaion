import { ProductComponent } from './product/product.component';
import { NgModule } from "@angular/core";
import { Routes,RouterModule, Route } from "@angular/router";
const routers : Routes = [
    {path:'products',component: ProductComponent},//yukarıya  http://localhost:4200/products yazınca ürünlerin gelmesi için 
    {path:'',redirectTo:'products',pathMatch:'full'},// eger yukarıya bir sey yazılmamıssa products componentine gönterilecektiir
    {path:'products/category/.çcategoryId',component:ProductComponent} //yukarıda ki url yazdığımızda açılması gereken sayfa

];  
@NgModule({

    imports: [RouterModule.forRoot(routers)],
    exports :[RouterModule]
})
export class AppRoutingModule{

}