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
  image: any;
  constructor(private router: Router,
              private authService: AuthService,
              private courseService: CourseService
              ) {

  }

  ngOnInit() {
    this.courseService.getCourses().subscribe(catalog => {
      console.log(catalog[0].image.data)
      var courses = []
      var images = []
      for(let i = 0; i < 4; i++){
        var buf = Buffer.from(catalog[i].image.data.data, 'base64');
        images.push(buf)
        courses.push(catalog[i])
    }
    this.course = courses
     console.log(courses)
     console.log(images)
    },
    err => {
      console.log(err);
      return false;
    })
  }

  onSubmit(course: any){
      this.router.navigate(['/syllabus', course._id]);
  }

}
