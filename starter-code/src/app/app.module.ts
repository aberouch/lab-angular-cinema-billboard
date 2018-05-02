import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent }
];


import { AppComponent } from './app.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMovieComponentComponent,
    MyHomeComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
