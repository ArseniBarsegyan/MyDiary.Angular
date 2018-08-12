import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateNoteComponent} from './create-note/create-note.component';
import {NoteDetailComponent} from './note-detail/note-detail.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {NotesComponent} from './notes/notes.component';
import {AuthGuardService} from './auth/auth.guard.service';
import {NoteStartComponent} from './note-start/note-start.component';
import {NoteEditComponent} from './note-edit/note-edit.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'notes', component: NotesComponent, children: [
      {path: '', component: NoteStartComponent},
      {path: 'new', component: CreateNoteComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: NoteDetailComponent},
      {path: ':id/edit', component: NoteEditComponent, canActivate: [AuthGuardService]},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [
    RouterModule]
})
export class AppRoutingModule {
}