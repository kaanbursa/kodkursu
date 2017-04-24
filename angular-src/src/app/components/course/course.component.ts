import { Component, OnInit, OnDestroy, OnChanges, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { ContentService } from '../../services/content.service';
import { LessonComponent } from '../lesson/lesson.component'
import 'brace/theme/github';
import 'brace/mode/javascript';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  id: number;
  private sub: any;
  lessonId: number = 0

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private contentService: ContentService) {}

    ngOnChanges(){

      }

    ngOnInit() {
      this.courseService.setCourse(false)
    this.sub = this.route.params.subscribe(params => {
         this.id = params['id'];
       });
       this.router.navigate(['lesson', this.lessonId], {relativeTo: this.route})

    }

    ngOnDestroy() {
      this.sub.unsubs
      this.courseService.setCourse(true)
    }



}
