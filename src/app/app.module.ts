import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { WhoComponent } from './component/infos/who/who.component';
import { AbillitiesComponent } from './component/infos/abillities/abillities.component';
import { PersonalComponent } from './component/infos/personal/personal.component';
import { ContactComponent } from './component/infos/contact/contact.component';
import { RodapeComponent } from './component/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    WhoComponent,
    AbillitiesComponent,
    PersonalComponent,
    ContactComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
