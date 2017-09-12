import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  users : User[] = [];
  newUser : User = null;

  constructor() { 
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
      }
    });
    this.users.push({
      name : 'Fulano de Tal',
      age: 55,
      address : {
        street : 'Rua Tal',
        _number : 666
      }
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
    this.newUser = {
      name : '',
      age: null,
      address : {
        street : '',
        _number : null
      }
    }
  }

  cancelInsert() {
    this.newUser = null;
  }

  insert() {
    this.users.push(this.newUser);
    this.newUser = null;
  }

}

interface User {
  name : String,
  age : number,
  address : Address
}

interface Address {
  street : String;
  _number : number;
}
