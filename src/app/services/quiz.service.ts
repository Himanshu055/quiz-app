import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuizService {

  private pathUrl ='http://localhost:1337/question';
  constructor(private http: HttpClient) { }

  // getQ(url: string) {
  //   return this.http.get(url);
  // }

  getQ(url: string) {
    return this.http.get(this.pathUrl);
  }


  getAll() {
    return [
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

}
