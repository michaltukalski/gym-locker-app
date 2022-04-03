
import { CoreModule } from './core/core.module';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store } from '@ngrx/store';
import { AppFlowActions } from './core/store/actions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    BrowserAnimationsModule,

  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: appInit,
    multi: true,
    deps: [Store]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function appInit(store: Store) {
  return () => {
    store.dispatch(AppFlowActions.StartApp());
  };
}
