import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './components/videos/videos.component';
import { ProvidersComponent } from './components/providers/providers.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CoursesComponent,
    VideosComponent,
    ProvidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
    ,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
