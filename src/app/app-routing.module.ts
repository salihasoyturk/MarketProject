import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { BranchAddComponent } from './branch/branch-add/branch-add.component';
import { BranchEditComponent } from './branch/branch-edit/branch-edit.component';
import { BranchComponent } from './branch/branch.component';
import { ProductComponent } from './product/product.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {
    path: 'branch-table',
    component: BranchComponent,
    children: [
      { path: 'edit', component: BranchEditComponent },
      { path: 'add', component: BranchAddComponent },
    ],
  },
  { path: 'product-table', component: ProductComponent },
  {
    path: '',
    component: StockComponent,
    data: { breadcrumb: 'stock-table' },
    children: [
      {
        path: ':branch_id',
        component: StockDetailsComponent,
        data: { breadcrumb: '' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
