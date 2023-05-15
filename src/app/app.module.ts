import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatsComponent } from './pages/stats/stats.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';
import { AvgMonthsChartComponent } from './cmps/avg-months-chart/avg-months-chart.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactIndexComponent,
    HomeComponent,
    StatsComponent,
    SignupComponent,
    AppHeaderComponent,
    TransferFundComponent,
    MoveListComponent,
    MovePreviewComponent,
    AvgMonthsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  export class AppModule { }
