import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { CourseComponent } from './components/course/course.component';
import { LessonComponent } from './components/lesson/lesson.component';

import { AceEditorComponent } from 'ng2-ace-editor';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { CourseService } from './services/course.service';
import { ContentService } from './services/content.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { ValuesPipe } from './tools/pipe.module';
import { COURSE_ROUTES } from './tools/course.routes';



const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path: 'syllabus/:id', component: SyllabusComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'course/:id', component: CourseComponent, canActivate:[AuthGuard], children: [
    {path:'lesson/:id', component: LessonComponent}
  ]}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    SyllabusComponent,
    ValuesPipe,
    CourseComponent,
    AceEditorComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, CourseService, ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
