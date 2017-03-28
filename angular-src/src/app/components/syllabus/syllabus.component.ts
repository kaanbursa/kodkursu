import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CourseService } from '../../services/course.service';


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

  ngOnDestroy() {
       this.sub.unsubscribe();
   }

}
