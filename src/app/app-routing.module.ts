import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { BranchComponent } from './branch/branch.component';
import { ProductComponent } from './product/product.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: 'product-table', component: ProductComponent },
  { path: 'branch-table', component: BranchComponent },
  { path: 'stock-table', component: StockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
