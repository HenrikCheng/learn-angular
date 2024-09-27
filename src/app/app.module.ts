import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DateSelectComponent } from './dateSelect/DateSelect.component';
import { TitleInputComponent } from './titleInput/TitleInput.component';

@NgModule({
  declarations: [AppComponent, DateSelectComponent, TitleInputComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
