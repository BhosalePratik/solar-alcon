import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanylogoComponent } from './components/companylogo/companylogo.component';
import { ProductsComponent } from './components/products/products.component';



@NgModule({
  declarations: [
    CompanylogoComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompanylogoComponent
  ]
})
export class SharedModule { }
