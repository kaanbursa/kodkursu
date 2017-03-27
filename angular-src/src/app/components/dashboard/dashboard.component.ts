import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  course: Object;

  constructor(private router: Router,
              private authService: AuthService,
              private courseService: CourseService
  ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(catalog => {
      console.log( 'Catalog 0 is ',catalog[0].title);
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

    }
