import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ContentService {
  course: Object;

  constructor(private http: Http) { }


  getContent(id){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json')
		return this.http.get('contents/content/' + id, {headers: headers})
			.map(res => res.json());
	}

  getLesson(id, contentId){
    let headers = new Headers();
		headers.append('Content-Type', 'application/json')
		return this.http.get('contents/content/' + id + '/' + contentId, {headers: headers})
			.map(res => res.json());
  }



}
