import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TestMfeComponent } from './test-mfe/test-mfe.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./abc/abc.module').then((m) => m.AbcModule),
  },
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, TestMfeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
