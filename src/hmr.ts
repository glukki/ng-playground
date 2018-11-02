import {NgModuleRef, ApplicationRef} from '@angular/core';
import {createNewHosts} from '@angularclass/hmr';

export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
  module.hot.accept();
  bootstrap().then(mod => {
    module.hot.dispose(data => {
      if (mod.instance.hmrOnDestroy) {
        mod.instance.hmrOnDestroy(data);
      }

      const appRef: ApplicationRef = mod.injector.get(ApplicationRef);
      const elements = appRef.components.map(c => c.location.nativeElement);
      const makeVisible = createNewHosts(elements);
      mod.destroy();
      makeVisible();
    });

    const prevData = module.hot.data;
    if (mod.instance.hmrOnInit && prevData) {
      mod.instance.hmrOnInit(prevData);
    }
  });
};
