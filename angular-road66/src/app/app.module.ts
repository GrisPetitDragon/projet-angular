import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { ChapterListComponent } from './chapter/chapter-list/chapter-list.component';
import { ChapterItemComponent } from './chapter/chapter-item/chapter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    ChapterListComponent,
    ChapterItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
