import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOperationsComponent } from './product-operations/product-operations.component';



@NgModule({
  declarations: [
    ProductOperationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductOperationsComponent
  ]
})
export class ProductModule { }
