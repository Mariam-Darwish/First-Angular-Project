import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ServiceAreaComponent } from './service-area/service-area.component';
import { LatestWorkComponent } from './latest-work/latest-work.component';
import { MainComponent } from './main/main.component';
import { FooterComponent} from './footer/footer.component';
import { RightColumnComponent } from './right-column/right-column.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ServiceAreaComponent,
    LatestWorkComponent,
    MainComponent,
    FooterComponent,
    RightColumnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
