import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppStateService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private appStateService: AppStateService) {
  }

  hmrOnDestroy(store) {
    store.appState = this.appStateService.getState();
  }

  hmrOnInit(store) {
    if (store && store.appState) {
      this.appStateService.setState(store.appState);
    }
  }
}
