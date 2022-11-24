import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BindingsComponent } from './bindings/bindings.component';
import { StyleComponent } from './style/style.component';
import { EventComponent } from './event/event.component';
import { TemplaterefComponent } from './templateref/templateref.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { PipesComponent } from './pipes/pipes.component';
import { SampleComponent } from './sample/sample.component';
import { ReactiveFormsModule } from '@angular/forms';
import { myRoutings } from './app-routing.module';
import { SampleService } from './sample.service';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BindingsComponent,
    StyleComponent,
    EventComponent,
    TemplaterefComponent,
    TwowayComponent,
    TestComponent,
    PipesComponent,
    SampleComponent,
    myRoutings
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
