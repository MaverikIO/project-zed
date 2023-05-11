import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialFormsDemoComponent } from './material-forms-demo/material-forms-demo.component';
import { AgapeFormsDemoComponent } from './agape-forms-demo/agape-forms-demo.component';


@NgModule({
  declarations: [AppComponent, MaterialFormsDemoComponent, AgapeFormsDemoComponent ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
