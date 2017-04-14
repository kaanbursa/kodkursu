import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from "../components/course/course.component";

export const COURSE_ROUTES: Routes = [
  {  path: '', redirectTo: 'course/:id', pathMatch: "full" }
  // {  path: 'lesson/:id', component: SignupComponent }

]
