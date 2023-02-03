import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { VideosComponent } from './components/videos/videos.component';
import { ProvidersComponent } from './components/providers/providers.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  {
    path: 'comp',
    component: ProvidersComponent,
    children: [{ path: 'video', component: VideosComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
