import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../../services/course.service';
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
  course: Object;
  syllabus: Object;
  @ViewChild('editor') editor;
    text: string = "";

    ngAfterViewInit() {
        this.editor.setTheme("github");
        this.editor.setMode("javascript")
        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true

        });

        this.editor.getEditor().commands.addCommand({
            name: "showOtherCompletions",
            bindKey: "Ctrl-.",
            exec: function (editor) {

            }
        })
    }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService) {}

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

}
