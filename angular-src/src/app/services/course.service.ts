import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';



@Injectable()
export class CourseService {
  course: Object;

  constructor(private http: Http) { }


  getCourses(){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json')
		return this.http.get('http://localhost:3000/courses/catalog', {headers: headers})
			.map(res => res.json());
	}

  findCourse(course: any){
    let headers = new Headers();
		headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/courses/syllabus/' + course._id, {headers: headers})
      .map(res => res.json());
  }

  getSyllabus(id){
    let headers = new Headers();
		headers.append('Content-Type', 'application/json')
    return this.http.get('http://localhost:3000/courses/syllabus/' + id, {headers: headers})
      .map(res => res.json());
  }


}