import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { StoreService } from '@mf/store';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef,
    private storeService: StoreService
  ) {
    fetch('');
  }

  async ngOnInit() {
    // const { TestMfeComponent } = await loadRemoteModule({
    //   remoteEntry: 'http://localhost:4201/remoteEntry.js',
    //   type: 'module',
    //   exposedModule: './TestMfe'
    // })
    // console.log(TestMfeComponent)

    // this.vcref.createComponent(
    //   this.cfr.resolveComponentFactory(TestMfeComponent)
    // );

    this.storeService.setUserName('Sathish')
    console.log(this.storeService.getUserName())
  }

  getStore() {
    console.log('shell')
    console.log(this.storeService)
  }

  setStore() {
    this.storeService.setUserName(<any>Date.now())
  }
}
