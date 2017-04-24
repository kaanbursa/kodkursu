import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';



@Injectable()
export class CourseService {
  course: Object;
  navbar: boolean = true ;

  constructor(private http: Http) { }


  getCourses(){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json')
		return this.http.get('http://localhost:3000/courses/catalog', {headers: headers})
			.map(res => res.json());
	}



  getSyllabus(id){
    let headers = new Headers();
		headers.append('Content-Type', 'application/json')
    return this.http.get('http://localhost:3000/courses/syllabus/' + id, {headers: headers})
      .map(res => res.json());
  }

  setCourse(status: boolean){
    this.navbar = status
  }

  onCourse(){
    return this.navbar
  }



}
