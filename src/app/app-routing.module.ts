import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LogInComponent} from "./log-in/log-in.component";
import {LectureNotesComponent} from "./lecture-notes/lecture-notes.component";

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path:'log-In',component:LogInComponent},
  {path:'lectureNotes',component:LectureNotesComponent},
  {path:'Home', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
