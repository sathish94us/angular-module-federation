import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ComponentLoaderDirective } from './component-loader.directive';

const routes: Routes = [
  {
    path: 'microfrontend',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        type: 'module',
        exposedModule: './Module',
      }).then((m) => m.AbcModule);
    },
  },
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ComponentLoaderDirective],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// loadChildren: async () => {
//   const response = await axios.get(
//     'https://run.mocky.io/v3/5bc98453-6475-4a7b-af6c-6ec1df5e9ef8'
//   );
//   return loadRemoteModule({
//     remoteEntry: response.data.remote,
//     type: 'module',
//     exposedModule: './Module',
//   }).then((m) => m.AbcModule);
// },
