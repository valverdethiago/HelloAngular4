import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http:Http) { }

  fetchPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map( res => res.json() ) ;
  }

}
