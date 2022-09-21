import { loadRemoteModule } from "@angular-architects/module-federation";
import {
  ComponentFactoryResolver,
  Directive,
  OnInit,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[mfComponentLoader]",
})
export class ComponentLoaderDirective implements OnInit {
  constructor(
    private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) {}

  async ngOnInit() {
    const { TestMfeComponent } = await loadRemoteModule({
      remoteEntry: "http://localhost:4201/remoteEntry.js",
      type: "module",
      exposedModule: "./TestMfe",
    });
    console.log(TestMfeComponent);

    this.vcref.createComponent(
      this.cfr.resolveComponentFactory(TestMfeComponent)
    );
  }
}
