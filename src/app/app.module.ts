import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"
import { RouterModule, Route } from "@angular/router"

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { DataService } from "./data.service"
import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';

const routes: Route[] = [
  {path: "", component: HelloComponent},
  {path: "about", component: AboutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HelloComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
