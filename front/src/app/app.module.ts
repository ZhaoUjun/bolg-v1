import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';
import { MainModule } from './main/main.module'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';

import { HeaderInterceptor } from './HeaderInterceptor'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
