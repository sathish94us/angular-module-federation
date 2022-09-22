import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../test/test.component';
import { AbcComponent } from './abc.component';

const routes: Routes = [
  {
    path: '',
    component: AbcComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
];

@NgModule({
  declarations: [AbcComponent, TestComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbcRoutingModule {}
