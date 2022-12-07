import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TeenusedComponent } from './teenused/teenused.component';
import { TootajadComponent } from './tootajad/tootajad.component';
import { SalongistComponent } from './salongist/salongist.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MeesteTeenusedComponent } from './teenused/meeste-teenused/meeste-teenused.component';
import { NaisteTeenusedComponent } from './teenused/naiste-teenused/naiste-teenused.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TeenusedComponent,
    TootajadComponent,
    SalongistComponent,
    HeaderComponent,
    FooterComponent,
    MeesteTeenusedComponent,
    NaisteTeenusedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
