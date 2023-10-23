import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { CardItemComponent } from './components/card/card-item/card-item.component';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { CardFormComponent } from './components/card/card-form/card-form.component';

@NgModule({
  declarations: [
    AppComponent,NavbarComponent,FooterComponent,SliderComponent,CardComponent,CardItemComponent, CardFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
