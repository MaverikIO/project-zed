import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialFormsDemoComponent } from './material-forms-demo/material-forms-demo.component';
import { AgapeFormsDemoComponent } from './agape-forms-demo/agape-forms-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TemplateBasedFormExampleComponent } from './template-based-form-example/template-based-form-example.component';


@NgModule({
  declarations: [
    AppComponent, 
    MaterialFormsDemoComponent, 
    AgapeFormsDemoComponent,
    TemplateBasedFormExampleComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
