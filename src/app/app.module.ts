import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ScoreComponent } from './components/score/score.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { MatchComponent } from './components/match/match.component';
import { VideoComponent } from './components/video/video.component';
import { BlogComponent } from './components/blog/blog.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PartieComponent } from './components/partie/partie.component';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    ScoreComponent,
    LatestNewsComponent,
    MatchComponent,
    VideoComponent,
    BlogComponent,
    AddMatchComponent,
    AddPlayerComponent,
    DashboardComponent,
    PartieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
