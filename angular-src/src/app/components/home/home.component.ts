import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  course: Object;
  constructor(private router: Router,
              private authService: AuthService
              ) { }

  ngOnInit() {
    this.authService.getCourses().subscribe(catalog => {
      console.log( 'Catalog 0 is ',catalog[0].title);
      var courses = []
      for(let i = 0; i < 2; i++){
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
