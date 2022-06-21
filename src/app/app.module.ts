import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryIngComponent } from './entry-ing/entry-ing.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { FeaturesComponent } from './features/features.component';
import { FopComponent } from './fop/fop.component';
import { TariffsComponent } from './tariffs/tariffs.component';
import { GetCardComponent } from './get-card/get-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryIngComponent,
    CabinetComponent,
    FeaturesComponent,
    FopComponent,
    TariffsComponent,
    GetCardComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
