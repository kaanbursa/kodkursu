import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CourseService } from '../../services/course.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  course: Object;
  constructor(private router: Router,
              private authService: AuthService,
              private courseService: CourseService
              ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(catalog => {
      var courses = []
      for(let i = 0; i < 3; i++){
        courses.push(catalog[i])
    }
    this.course = courses
     console.log(courses)
    },
    err => {
      console.log(err);
      return false;
    })
  }

  onSubmit(course: any){
    this.courseService.findCourse(course).subscribe(course => {
      console.log(course)
      this.router.navigate(['/syllabus', course._id]);
    })


  }

}
