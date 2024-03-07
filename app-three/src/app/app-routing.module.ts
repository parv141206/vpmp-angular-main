import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer-orders',
    loadChildren: () =>
      import('./prac-19/customer-orders/customer-orders.component').then(
        (m) => m.CustomerOrdersComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
