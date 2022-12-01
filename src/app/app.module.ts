import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    NavbarComponent,
    CardlistComponent,
    ErrorComponent,
    AboutComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
