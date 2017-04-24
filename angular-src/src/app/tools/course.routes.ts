import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from "../components/course/course.component";
import { LessonComponent } from "../components/lesson/lesson.component";

export const COURSE_ROUTES: Routes = [
// {  path: '', redirectTo: '/course/:id', pathMatch: "full" }
 {  path: '', component: LessonComponent }


]
