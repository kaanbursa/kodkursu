import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  id: number;
  private sub: any;
  course: Object;
  syllabus: Object;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private courseService: CourseService
              ) { }

  ngOnInit() {


  this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       console.log(this.id)

       // In a real app: dispatch action to load the details here.
       this.courseService.getSyllabus(this.id)
       .subscribe((syllabus) => {

         this.course = syllabus
         this.syllabus = syllabus.syllabus
         console.log(syllabus.syllabus)
     });
    });

  }
  onSubmit(course: any){
    if (this.authService.loggedIn() === false){
      this.router.navigate(['/login']);
    } else {
      this.authService.startCourse(course).subscribe(data => {
        console.log(course + "ola mamasita")
        if(data.success){
          this.router.navigate(['/course', course._id]);
        } else {
          this.router.navigate(['/syllabus']);
        }
      })
    }
  }

  ngOnDestroy() {
       this.sub.unsubscribe();
   }

}
