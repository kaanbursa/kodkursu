import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private flashMessage:FlashMessagesService,
    private authService: AuthService,
    private courseService: CourseService,
    private router: Router) { }

  ngOnInit() {
  }
  onLogoutClick(){
    this.authService.logout();
    this.router.navigate(['/'])
    return false;
  }
}
