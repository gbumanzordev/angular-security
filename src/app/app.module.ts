import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';
import { PreventXssComponent } from './components/prevent-xss/prevent-xss.component';

@NgModule({
  declarations: [AppComponent, TestComponent, PreventXssComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
