import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
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
  }
}
