import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  users : User[] = [];
  user : User = null;

  constructor(private postService:PostService) { 
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.users.push({
      name : 'Thiago Valverde de Souza',
      age : 34,
      address : {
        street : 'Rua Tal',
        _number : 666
      },
      posts : null
    });
    this.users.push({
      name : 'Fulano de Tal',
      age: 55,
      address : {
        street : 'Rua Tal',
        _number : 666
      },
      posts : null
    })
  }

  delete(user:User) {
    console.log('Deletando: '+user.name);
    for(let i=0 ; i < this.users.length; i++) {
      if(this.users[i] == user) {
        this.users.splice(i, 1);
      }
    }
  }

  createNew() {
    this.user = {
      name : '',
      age: null,
      address : {
        street : '',
        _number : null
      },
      posts : null
    }
  }

  edit(user:User) {
    this.user = user;
    this.postService.fetchPosts().subscribe((posts) => {
      console.log(posts);
      this.user.posts = posts;
    });
  }

  cancelInsert() {
    this.user = null;
  }

  insert() {
    this.users.push(this.user);
    this.user = null;
  }

}

interface User {
  name : String,
  age : number,
  address : Address,
  posts : Post[]
}

interface Address {
  street : String;
  _number : number;
}

interface Post {
  id : number,
  title : String,
  body : String,
  userId : number
}
