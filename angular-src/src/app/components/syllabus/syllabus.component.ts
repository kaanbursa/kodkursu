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
  status: string;
  state: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private courseService: CourseService
              ) { }

  ngOnInit() {

  this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];


       // In a real app: dispatch action to load the details here.
       this.courseService.getSyllabus(this.id)
       .subscribe((syllabus) => {

         this.course = syllabus
         this.syllabus = syllabus.syllabus

         this.authService.getProfile().subscribe(data => {

             for(let i = 0; i < data.course.length; i++){
               console.log(data.course[i]['_id'])
               if(data.course[i]['_id'].toString() === syllabus['_id'].toString()){
                 this.status = "Continue Course"
                 this.state = true
                 return this.status
               } else {
                 this.state = false
                 this.status = "Get Started"
               }
             }
         })

     });
    });





  }
  onSubmit(course: any){
    if (this.authService.loggedIn() === false){
      this.router.navigate(['/login']);
    } else {
      if(!this.state){
        this.authService.startCourse(course).subscribe(data => {
          if(data.success){
            this.router.navigate(['/course', course._id]);
          } else {
            this.router.navigate(['/syllabus']);
          }
        })
      } else {
        this.router.navigate(['/course', course._id]);
      }
    }
  }





  ngOnDestroy() {
       this.sub.unsubscribe();
   }

}
