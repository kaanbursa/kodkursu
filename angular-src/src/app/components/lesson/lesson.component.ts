import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { ContentService } from '../../services/content.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'brace/theme/github';
import 'brace/mode/javascript';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  course: any = true;
  id: any;
  private parentRouteId: number;
  private sub: any;
  description: string = "";
  assignment: string = "";
  syllabus: Object;
  userFunc: void;
  buttonState: boolean = true;

  @ViewChild('editor') editor;
  @ViewChild('editorInfinity') editorInfinity;
  text: string = "";

    ngAfterViewInit() {
        this.editor.setTheme("github")
        this.editor.setMode("javascript")
        this.editor.blockScrolling = Infinity
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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private contentService: ContentService,
              private courseService: CourseService,
              private flashMessage:FlashMessagesService) {}


  ngOnInit() {
    // Get parent ActivatedRoute of this route.

    this.sub = this.route.parent
      .params.subscribe(params => {
        this.parentRouteId = params["id"];
        this.sub = this.route.params.subscribe(params => {
                 this.id = params['id'];

                      this.contentService.getLesson(this.parentRouteId, this.id)
                           .subscribe((lesson) => {
                             this.course = lesson['Lesson ' + (+this.id + 1)]
                             this.description = lesson['Lesson ' + (+this.id + 1)]['description']
                             this.assignment = lesson['Lesson ' + (+this.id + 1)]['assignment']
                             this.text = lesson['Lesson ' + (+this.id + 1)]['code']

                           })

            });
      });


  }

  submit(){
    if(this.text === this.assignment){
        this.flashMessage.show('Correct', {cssClass: 'successMessage', timeout: 3000});
        return false
      } else {
        this.flashMessage.show('The answer is wrong think again', {cssClass: 'errorMessage', timeout: 3000});;

      }
  }

  next(){
    this.router.navigate(['../', (+this.id + 1)], {relativeTo: this.route})
  }

  userFunc(){
    
  }

  ngOnDestroy() {
    this.sub.unsubs


}
}
