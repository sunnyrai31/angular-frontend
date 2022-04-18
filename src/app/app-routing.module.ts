import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./component/product-list/product-list.component";
import {FeatureComponent} from "./component/feature/feature.component";
import {AboutComponent} from "./component/about/about.component";
import {ProductDetailComponent} from "./component/product-detail/product-detail.component";

const routes: Routes = [
  {path: 'home', component: ProductListComponent},
  {path: 'feature', component: FeatureComponent},
  {path: 'about', component: AboutComponent},
  {path:'product-detail', component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
