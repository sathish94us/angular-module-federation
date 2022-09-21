import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc.component';

const routes: Routes = [
  {
    path: '',
    component: AbcComponent,
  },
];

@NgModule({
  declarations: [AbcComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbcRoutingModule {}
