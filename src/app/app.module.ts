import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: '/location' }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SampleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
