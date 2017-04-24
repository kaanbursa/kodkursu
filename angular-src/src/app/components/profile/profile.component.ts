import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  course: Object;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {

      this.user = profile.user;
      var courses = []
      for(let i = 0; i < profile.course.length; i++){
        courses.push(profile.course[i])
    }
    this.course = courses;


    },
    err => {
      console.log(err);
      return false;
    })

  }

  onSubmit(course){
    this.router.navigate(['/course', course._id]);
  }

}
